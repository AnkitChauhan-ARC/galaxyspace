from flask import Flask, render_template, request, redirect, url_for, session, flash, jsonify
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer
from pymongo import MongoClient
from bson.objectid import ObjectId
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key'

client = MongoClient(
    "mongodb://localhost:27017/"
)

db = client["flask_login"]  
users_col = db["users"]
vocab_col = db["vocabulary"]
history_col = db["quiz_history"]

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'chauhanankit4591@gmail.com'
app.config['MAIL_PASSWORD'] = 'evep ygbs ilil zrnw'

mail = Mail(app)
s = URLSafeTimedSerializer(app.secret_key)

@app.route('/')
def home():
    return render_template('home.html')


@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        password = request.form['password']
        repassword = request.form['repassword']

        if password != repassword:
            flash("Passwords do not match!", "danger")
            return render_template('register.html')

        if users_col.find_one({'email': email}):
            flash('Email already exists!', 'danger')
        elif users_col.find_one({'username': username}):
            flash('Username already exists!', 'danger')
        else:
            users_col.insert_one({
                'username': username,
                'email': email,
                'password': password
            })
            flash('Registration successful!', 'success')
            return redirect(url_for('login'))
    
    return render_template('register.html')


@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        user = users_col.find_one({'email': email, 'password': password})

        if user:
            session['email'] = user['email']
            session['username'] = user['username']
            return redirect(url_for('dashboard'))
        else:
            flash('Invalid email or password!', 'danger')

    return render_template('login.html')


@app.route('/dashboard')
def dashboard():
    if 'email' in session:
        return render_template('dashboard.html', username=session['username'], email=session['email'])
    else:
        return redirect(url_for('login'))


# @app.route('/logout')
# def logout():
#     session.pop('username', None)
#     session.pop('email', None)
#     flash('You have been logged out.', 'info')
#     return redirect(url_for('login'))

@app.route('/logout', methods=['GET', 'POST'])
def logout():
    if 'email' in session:
        user_email = session['email']

        if 'vocabulary' in session:
            vocab_data = session.pop('vocabulary', [])
            if vocab_data:
                vocab_col.delete_many({'user_email': user_email})
                vocab_col.insert_many([
                    {
                        'user_email': user_email,
                        'word': item['word'],
                        'translation': item['translation'],
                        'correct_answers': item.get('correctAnswers', 0)
                    } for item in vocab_data
                ])

        if 'quiz_history' in session:
            history_data = session.pop('quiz_history', [])
            if history_data:
                for entry in history_data:
                    history_col.insert_one({
                        'user_email': user_email,
                        'date': entry['date'],
                        'score': entry['score'],
                        'total': entry['total'],
                        'percentage': entry['percentage']
                    })


        session.pop('username', None)
        session.pop('email', None)
        flash('You have been logged out.', 'info')
    return redirect(url_for('login'))

@app.route('/api/vocab', methods=['GET', 'POST'])
def handle_vocab():
    if 'email' not in session:
        return jsonify({'error': 'Unauthorized'}), 401

    user_email = session['email']

    if request.method == 'GET':
        vocab = list(vocab_col.find({'user_email': user_email}, {'_id': 0}))
        return jsonify(vocab)

    elif request.method == 'POST':
        data = request.get_json()
        if not data or 'vocabulary' not in data:
            return jsonify({'error': 'Invalid data format'}), 400

        vocab_col.delete_many({'user_email': user_email})
        new_vocab = [
            {
                'user_email': user_email,
                'word': item['word'],
                'translation': item['translation'],
                'correct_answers': item.get('correctAnswers', 0)
            } for item in data['vocabulary']
        ]
        if new_vocab:
            vocab_col.insert_many(new_vocab)

        return jsonify({'message': 'Vocabulary saved successfully'})
    
@app.route('/api/history', methods=['GET', 'POST'])
def handle_history():
    if 'email' not in session:
        return jsonify({'error': 'Unauthorized'}), 401

    user_email = session['email']

    if request.method == 'GET':
        history = list(history_col.find({'user_email': user_email}, {'_id': 0}).sort('_id', -1))
        return jsonify(history)

    elif request.method == 'POST':
        data = request.get_json()
        if not data or any(k not in data for k in ['date', 'score', 'total', 'percentage']):
            return jsonify({'error': 'Invalid data format'}), 400

        history_col.insert_one({
            'user_email': user_email,
            'date': data['date'],
            'score': data['score'],
            'total': data['total'],
            'percentage': data['percentage']
        })
        return jsonify({'message': 'Quiz history saved successfully'})

@app.route('/forgot', methods=['GET', 'POST'])
def forgot():
    if request.method == 'POST':
        email = request.form['email']
        user = users_col.find_one({'email': email})

        if user:
            token = s.dumps(email, salt='password-reset-salt')
            reset_url = url_for('reset_password', token=token, _external=True)

            msg = Message("Password Reset Request",
                          sender=app.config['MAIL_USERNAME'],
                          recipients=[email])
            msg.body = f"Hello,\n\nClick the link below to reset your password:\n{reset_url}\n\nThis link is valid for 30 minutes."
            mail.send(msg)

            flash("Password reset link sent to your email.", "success")
        else:
            flash("Email not found!", "danger")
    return render_template('forgot.html')


@app.route('/reset-password/<token>', methods=['GET', 'POST'])
def reset_password(token):
    try:
        email = s.loads(token, salt='password-reset-salt', max_age=1800)
    except:
        flash("The reset link is invalid or has expired.", "danger")
        return redirect(url_for('forgot'))

    if request.method == 'POST':
        new_password = request.form['password']
        repassword = request.form['repassword']

        if new_password != repassword:
            flash("Passwords do not match!", "danger")
            return render_template('reset_password.html', token=token)

        users_col.update_one({'email': email}, {'$set': {'password': new_password}})
        flash("Your password has been reset successfully!", "success")
        return redirect(url_for('login'))

    return render_template('reset_password.html', token=token)


if __name__ == '__main__':
    app.run(debug=True)
