    // =======================
        // === JAVASCRIPT LOGIC ===
        // =======================

        // --- 1. Data Structure (using localStorage for persistence) ---
        let vocabulary = JSON.parse(localStorage.getItem('languageBuddyVocab')) || [
                        {"word": "abandon", "translation": "त्याग देना"},
  {"word": "ability", "translation": "क्षमता", correctAnswers: 0},
  {"word": "able", "translation": "सक्षम",correctAnswers: 0},
  {"word": "about", "translation": "के बारे में",correctAnswers: 0},
  {"word": "above", "translation": "ऊपर",correctAnswers: 0},
  {"word": "absence", "translation": "अनुपस्थिति",correctAnswers: 0},
  {"word": "absolute", "translation": "पूर्ण",correctAnswers: 0},
  {"word": "absolutely", "translation": "बिल्कुल",correctAnswers: 0},
  {"word": "absorb", "translation": "सोखना",correctAnswers: 0},
  {"word": "abuse", "translation": "दुरुपयोग",correctAnswers: 0},
  {"word": "academic", "translation": "शैक्षणिक",correctAnswers: 0},
  {"word": "accept", "translation": "स्वीकार करना",correctAnswers: 0},
  {"word": "access", "translation": "पहुँच",correctAnswers: 0},
  {"word": "accident", "translation": "दुर्घटना",correctAnswers: 0},
  {"word": "accompany", "translation": "साथ जाना",correctAnswers: 0},
  {"word": "accomplish", "translation": "पूरा करना",correctAnswers: 0},
  {"word": "according", "translation": "के अनुसार",correctAnswers: 0},
  {"word": "account", "translation": "खाता",correctAnswers: 0},
  {"word": "accurate", "translation": "सटीक",correctAnswers: 0},
  {"word": "accuse", "translation": "आरोप लगाना",correctAnswers: 0},
  {"word": "achieve", "translation": "प्राप्त करना",correctAnswers: 0},
  {"word": "achievement", "translation": "उपलब्धि",correctAnswers: 0},
  {"word": "acid", "translation": "तेजाब",correctAnswers: 0},
  {"word": "acquire", "translation": "प्राप्त करना",correctAnswers: 0},
  {"word": "across", "translation": "के पार",correctAnswers: 0},
  {"word": "act", "translation": "कार्य करना",correctAnswers: 0},
  {"word": "action", "translation": "क्रिया",correctAnswers: 0},
  {"word": "active", "translation": "सक्रिय",correctAnswers: 0},
  {"word": "activity", "translation": "गतिविधि",correctAnswers: 0},
  {"word": "actor", "translation": "अभिनेता",correctAnswers: 0},
  {"word": "actress", "translation": "अभिनेत्री",correctAnswers: 0},
  {"word": "actual", "translation": "वास्तविक",correctAnswers: 0},
  {"word": "actually", "translation": "वास्तव में",correctAnswers: 0},
  {"word": "ad", "translation": "विज्ञापन",correctAnswers: 0},
  {"word": "adapt", "translation": "अनुकूलित करना",correctAnswers: 0},
  {"word": "add", "translation": "जोड़ना",correctAnswers: 0},
  {"word": "addition", "translation": "जोड़",correctAnswers: 0},
  {"word": "additional", "translation": "अतिरिक्त",correctAnswers: 0},
  {"word": "address", "translation": "पता",correctAnswers: 0},
  {"word": "adequate", "translation": "पर्याप्त",correctAnswers: 0},
  {"word": "adjust", "translation": "समायोजित करना",correctAnswers: 0},
  {"word": "adjustment", "translation": "समायोजन",correctAnswers: 0},
  {"word": "administration", "translation": "प्रशासन",correctAnswers: 0},
  {"word": "admire", "translation": "प्रशंसा करना",correctAnswers: 0},
  {"word": "admission", "translation": "प्रवेश",correctAnswers: 0},
  {"word": "admit", "translation": "स्वीकार करना",correctAnswers: 0},
  {"word": "adopt", "translation": "अपनाना",correctAnswers: 0},
  {"word": "adult", "translation": "वयस्क",correctAnswers: 0},
  {"word": "advance", "translation": "अग्रिम",correctAnswers: 0},
  {"word": "advanced", "translation": "उन्नत",correctAnswers: 0},
  {"word": "advantage", "translation": "लाभ",correctAnswers: 0},
  {"word": "adventure", "translation": "साहसिक कार्य",correctAnswers: 0},
  {"word": "advice", "translation": "सलाह",correctAnswers: 0},
  {"word": "advise", "translation": "सलाह देना",correctAnswers: 0},
  {"word": "adviser", "translation": "सलाहकार",correctAnswers: 0},
  {"word": "advocacy", "translation": "समर्थन",correctAnswers: 0},
  {"word": "advocate", "translation": "वकील",correctAnswers: 0},
  {"word": "aesthetic", "translation": "सौंदर्यशास्त्र",correctAnswers: 0},
  {"word": "affair", "translation": "मामला",correctAnswers: 0},
  {"word": "affect", "translation": "प्रभावित करना",correctAnswers: 0},
  {"word": "affection", "translation": "स्नेह",correctAnswers: 0},
  {"word": "afford", "translation": "सामर्थ्य होना",correctAnswers: 0},
  {"word": "afraid", "translation": "डरा हुआ",correctAnswers: 0},
  {"word": "after", "translation": "के बाद",correctAnswers: 0},
  {"word": "afternoon", "translation": "दोपहर",correctAnswers: 0},
  {"word": "again", "translation": "फिर से",correctAnswers: 0},
  {"word": "against", "translation": "के खिलाफ",correctAnswers: 0},
  {"word": "age", "translation": "उम्र",correctAnswers: 0},
  {"word": "agency", "translation": "एजेंसी",correctAnswers: 0},
  {"word": "agenda", "translation": "कार्यसूची",correctAnswers: 0},
  {"word": "agent", "translation": "एजेंट",correctAnswers: 0},
  {"word": "aggressive", "translation": "आक्रामक",correctAnswers: 0},
  {"word": "ago", "translation": "पहले",correctAnswers: 0},
  {"word": "agree", "translation": "सहमत होना",correctAnswers: 0},
  {"word": "agreement", "translation": "समझौता",correctAnswers: 0},
  {"word": "agriculture", "translation": "कृषि",correctAnswers: 0},
  {"word": "ahead", "translation": "आगे",correctAnswers: 0},
  {"word": "aid", "translation": "सहायता",correctAnswers: 0},
  {"word": "aim", "translation": "लक्ष्य",correctAnswers: 0},
  {"word": "air", "translation": "हवा",correctAnswers: 0},
  {"word": "airline", "translation": "एयरलाइन",correctAnswers: 0},
  {"word": "airport", "translation": "हवाई अड्डा",correctAnswers: 0},
  {"word": "aisle", "translation": "गलियारा",correctAnswers: 0},
  {"word": "alarm", "translation": "सतर्कता",correctAnswers: 0},
  {"word": "alcohol", "translation": "शराब",correctAnswers: 0},
  {"word": "alive", "translation": "जिंदा",correctAnswers: 0 },
  {"word": "all", "translation": "सभी",correctAnswers: 0},
  {"word": "alliance", "translation": "संधि",correctAnswers: 0},
  {"word": "allow", "translation": "अनुमति देना",correctAnswers: 0},
  {"word": "allowance", "translation": "भत्ता",correctAnswers: 0},
  {"word": "almost", "translation": "लगभग",correctAnswers: 0},
  {"word": "alone", "translation": "अकेला",correctAnswers: 0},
  {"word": "along", "translation": "साथ"},
  {"word": "already", "translation": "पहले ही",correctAnswers: 0},
  {"word": "also", "translation": "भी",correctAnswers: 0},
  {"word": "although", "translation": "हालाँकि",correctAnswers: 0},
  {"word": "always", "translation": "हमेशा",correctAnswers: 0},
  {"word": "amazing", "translation": "अद्भुत",correctAnswers: 0},
  {"word": "ambition", "translation": "महत्वाकांक्षा",correctAnswers: 0},
  {"word": "ambulance", "translation": "एंबुलेंस",correctAnswers: 0},
  {"word": "amend", "translation": "संशोधित करना",correctAnswers: 0},
  {"word": "amendment", "translation": "संशोधन",correctAnswers: 0},
  {"word": "ammunition", "translation": "गोला-बारूद",correctAnswers: 0},
  {"word": "among", "translation": "के बीच",correctAnswers: 0},
  {"word": "amount", "translation": "राशि",correctAnswers: 0},
  {"word": "analysis", "translation": "विश्लेषण",correctAnswers: 0},
  {"word": "analyst", "translation": "विश्लेषक",correctAnswers: 0},
  {"word": "analyze", "translation": "विश्लेषण करना",correctAnswers: 0},
  {"word": "ancient", "translation": "प्राचीन",correctAnswers: 0},
  {"word": "anger", "translation": "गुस्सा",correctAnswers: 0},
  {"word": "angle", "translation": "कोण",correctAnswers: 0},
  {"word": "angry", "translation": "गुस्से में",correctAnswers: 0},
  {"word": "animal", "translation": "पशु",correctAnswers: 0},
  {"word": "ankle", "translation": "टखना",correctAnswers: 0},
  {"word": "anniversary", "translation": "वर्षगांठ",correctAnswers: 0},
  {"word": "announce", "translation": "घोषणा करना",correctAnswers: 0},
  {"word": "announcement", "translation": "घोषणा",correctAnswers: 0},
  {"word": "annoy", "translation": "परेशान करना",correctAnswers: 0},
  {"word": "annual", "translation": "वार्षिक",correctAnswers: 0},
  {"word": "another", "translation": "दूसरा",correctAnswers: 0},
  {"word": "answer", "translation": "उत्तर",correctAnswers: 0},
  {"word": "anxiety", "translation": "चिंता",correctAnswers: 0},
  {"word": "anxious", "translation": "चिंतित",correctAnswers: 0},
  {"word": "any", "translation": "कोई भी",correctAnswers: 0},
  {"word": "anybody", "translation": "कोई भी व्यक्ति",correctAnswers: 0},
  {"word": "anymore", "translation": "अब नहीं",correctAnswers: 0},
  {"word": "anyone", "translation": "कोई भी",correctAnswers: 0},
  {"word": "anything", "translation": "कुछ भी",correctAnswers: 0},
  {"word": "anyway", "translation": "वैसे भी",correctAnswers: 0},
  {"word": "anywhere", "translation": "कहीं भी",correctAnswers: 0},
  {"word": "apart", "translation": "अलग",correctAnswers: 0},
  {"word": "apology", "translation": "माफी",correctAnswers: 0},
  {"word": "apologize", "translation": "माफी मांगना",correctAnswers: 0},
  {"word": "app", "translation": "एप्लिकेशन",correctAnswers: 0},
  {"word": "apparent", "translation": "स्पष्ट",correctAnswers: 0},
  {"word": "apparently", "translation": "स्पष्ट रूप से",correctAnswers: 0},
  {"word": "appeal", "translation": "अपील",correctAnswers: 0},
  {"word": "appear", "translation": "दिखाई देना",correctAnswers: 0},
  {"word": "appearance", "translation": "दिखावट",correctAnswers: 0},
  {"word": "appetite", "translation": "भूख",correctAnswers: 0},
  {"word": "applaud", "translation": "तालियाँ बजाना",correctAnswers: 0},
  {"word": "apple", "translation": "सेब",correctAnswers: 0},
  {"word": "application", "translation": "आवेदन",correctAnswers: 0},
  {"word": "apply", "translation": "लागू करना",correctAnswers: 0},
  {"word": "appoint", "translation": "नियुक्त करना",correctAnswers: 0},
        ];

        let quizHistory = JSON.parse(localStorage.getItem('languageBuddyQuizHistory')) || [];

        const VOCAB_GOAL = 1000;
        let currentQuizQuestions = [];
        let currentQuestionIndex = 0;
        let quizScore = 0;

        // --- 2. Utility Functions ---
        function saveToLocalStorage() {
            localStorage.setItem('languageBuddyVocab', JSON.stringify(vocabulary));
            localStorage.setItem('languageBuddyQuizHistory', JSON.stringify(quizHistory));
            updateProgress();
        }
            // --- 2. Utility Functions (Replaced local storage with server API calls) ---
        async function saveToServer() {
            // Save Vocabulary
            try {
                const vocabResponse = await fetch('/api/vocab', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ vocabulary: vocabulary })
                });
                if (!vocabResponse.ok) {
                    console.error("Failed to save vocabulary to server.");
                }
            } catch (error) {
                console.error("Error saving vocab:", error);
            }
            updateProgress();
        }
        
        async function saveQuizResult(result) {
            // Save a single quiz result
             try {
                const historyResponse = await fetch('/api/history', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(result)
                });
                if (historyResponse.ok) {
                    // Refetch history to update progress dashboard
                    await loadHistoryData();
                } else {
                    console.error("Failed to save quiz history to server.");
                }
            } catch (error) {
                console.error("Error saving history:", error);
            }
        }
        
        // ======================================
        // === PROFILE/LOGOUT FUNCTIONALITY ===
        // ======================================
        const profileBtn = document.getElementById('profile-btn');
        const profileDropdown = document.getElementById('profile-dropdown');
        const logoutBtn = document.getElementById('logout-btn');

        // Toggle dropdown visibility
        profileBtn.addEventListener('click', () => {
            profileDropdown.classList.toggle('hidden');
        });

        // Logout function
        logoutBtn.addEventListener('click', () => {
            // 1. Clear all user data
            localStorage.removeItem('languageBuddyVocab');
            localStorage.removeItem('languageBuddyQuizHistory');
            
            // 2. Redirect to the login page
            // In a real application, this would be the actual login page URL
            window.location.href = 'login.html'; 
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (event) => {
            if (!profileContainer.contains(event.target)) {
                profileDropdown.classList.add('hidden');
            }
        });
        
        // --- 3. View Switching Logic ---
        document.querySelectorAll('.nav-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const targetView = e.target.getAttribute('data-view');
                document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');

                document.querySelectorAll('section').forEach(section => section.classList.add('hidden'));
                document.getElementById(`${targetView}-view`).classList.remove('hidden');

                if (targetView === 'progress') {
                    updateProgress();
                }
            });
        });

        // ======================================
        // === VOCABULARY SECTION FUNCTIONALITY ===
        // ======================================

        const vocabListEl = document.getElementById('vocabulary-list');
        const wordInput = document.getElementById('new-word-input');
        const translationInput = document.getElementById('new-translation-input');
        const addWordBtn = document.getElementById('add-word-btn');

        function renderVocabulary() {
            vocabListEl.innerHTML = ''; // Clear existing list
            vocabulary.forEach((item, index) => {
                const li = document.createElement('li');
                li.className = 'vocab-item';
                li.innerHTML = `
                    <span>${item.word}</span>
                    <span class="translation">(${item.translation})</span>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                `;
                vocabListEl.appendChild(li);
            });
            saveToLocalStorage();
        }

        addWordBtn.addEventListener('click', () => {
            const word = wordInput.value.trim();
            const translation = translationInput.value.trim();

            if (word && translation) {
                vocabulary.push({ word, translation, correctAnswers: 0 });
                wordInput.value = '';
                translationInput.value = '';
                renderVocabulary();
            } else {
                alert("Please enter both the word and its translation.");
            }
        });

        vocabListEl.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                const index = parseInt(e.target.getAttribute('data-index'));
                vocabulary.splice(index, 1);
                renderVocabulary();
            }
        });

        // ================================
        // === QUIZ SECTION FUNCTIONALITY ===
        // ================================

        const quizQuestionEl = document.getElementById('quiz-question');
        const quizOptionsEl = document.getElementById('quiz-options');
        const nextQuestionBtn = document.getElementById('next-question-btn');
        const startQuizBtn = document.getElementById('start-quiz-btn');
        const quizFeedbackEl = document.getElementById('quiz-feedback');
        const quizResultCardEl = document.getElementById('quiz-result-card');
        const totalQuestionsEl = document.getElementById('total-questions');
        const finalScoreEl = document.getElementById('final-score');
        const profileContainer = document.querySelector('.profile-container');

        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function createQuizQuestions() {
            if (vocabulary.length < 4) {
                quizQuestionEl.textContent = "Add at least 4 words to start a quiz!";
                quizOptionsEl.innerHTML = "";
                nextQuestionBtn.classList.add('hidden');
                return;
            }

            // Select up to 10 random words to quiz
            const quizWords = [...vocabulary].sort(() => 0.5 - Math.random()).slice(0, 10);
            currentQuizQuestions = [];

            quizWords.forEach(correctItem => {
                // Get 3 random incorrect translations
                const incorrectOptions = [...vocabulary]
                    .filter(item => item.word !== correctItem.word)
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 3)
                    .map(item => item.translation);

                let options = [correctItem.translation, ...incorrectOptions];
                shuffleArray(options); // Shuffle the options

                currentQuizQuestions.push({
                    word: correctItem.word,
                    correctAnswer: correctItem.translation,
                    options: options
                });
            });

            currentQuestionIndex = 0;
            quizScore = 0;
            loadQuestion();
        }

        function loadQuestion() {
            quizResultCardEl.classList.add('hidden');
            quizFeedbackEl.textContent = '';
            nextQuestionBtn.disabled = true;

            if (currentQuestionIndex < currentQuizQuestions.length) {
                const q = currentQuizQuestions[currentQuestionIndex];
                quizQuestionEl.textContent = `What is the translation of "${q.word}"?`;
                quizOptionsEl.innerHTML = '';

                q.options.forEach(option => {
                    const button = document.createElement('button');
                    button.className = 'quiz-option';
                    button.textContent = option;
                    button.addEventListener('click', () => checkAnswer(button, option, q.correctAnswer));
                    quizOptionsEl.appendChild(button);
                });
            } else {
                finishQuiz();
            }
        }

        function checkAnswer(selectedButton, selectedAnswer, correctAnswer) {
            // Disable all options after selection
            document.querySelectorAll('.quiz-option').forEach(btn => {
                btn.disabled = true;
                if (btn.textContent === correctAnswer) {
                    btn.classList.add('correct');
                }
            });

            if (selectedAnswer === correctAnswer) {
                quizScore++;
                quizFeedbackEl.textContent = "Correct! Well done.";
                selectedButton.classList.add('correct');
            } else {
                quizFeedbackEl.textContent = `Incorrect. The correct answer was "${correctAnswer}".`;
                selectedButton.classList.add('incorrect');
            }

            nextQuestionBtn.disabled = false;
        }

        function finishQuiz() {
            const finalScore = quizScore;
            const total = currentQuizQuestions.length;
            const percentage = ((finalScore / total) * 100).toFixed(0);

            // Save result to history
            quizHistory.push({
                date: new Date().toLocaleDateString(),
                score: finalScore,
                total: total,
                percentage: percentage
            });
            saveToLocalStorage(); // Updates progress too

            // Display results
            quizQuestionEl.textContent = "Quiz Complete!";
            quizOptionsEl.innerHTML = '';
            nextQuestionBtn.classList.add('hidden');
            quizResultCardEl.classList.remove('hidden');
            finalScoreEl.textContent = finalScore;
            totalQuestionsEl.textContent = total;
            
        }

        function startQuiz() {
            startQuizBtn.classList.add('hidden');
            nextQuestionBtn.classList.remove('hidden');
            createQuizQuestions();
        }

        nextQuestionBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            loadQuestion();
        });

        startQuizBtn.addEventListener('click', startQuiz);

        // ===========================================
        // === PROGRESS TRACKING SECTION FUNCTIONALITY ===
        // ===========================================

        function updateProgress() {
            // 1. Total Words Learned
            const totalWords = vocabulary.length;
            document.getElementById('stat-words').textContent = totalWords;

            // 2. Vocabulary Progress Bar
            // const progress = (totalWords / VOCAB_GOAL) * 100;
            // const progressBar = document.getElementById('vocab-progress-bar');
            // progressBar.style.width = `${Math.min(progress, 100)}%`;
            // progressBar.textContent = `${Math.min(progress, 100).toFixed(0)}%`;

            // 3. Quizzes Completed
            document.getElementById('stat-quizzes').textContent = quizHistory.length;

            // 4. Average Quiz Score
            let totalPercentage = 0;
            if (quizHistory.length > 0) {
                totalPercentage = quizHistory.reduce((sum, item) => sum + parseFloat(item.percentage), 0);
                const avgPercentage = (totalPercentage / quizHistory.length).toFixed(0);
                document.getElementById('stat-avg-score').textContent = `${avgPercentage}%`;
            } else {
                document.getElementById('stat-avg-score').textContent = `0%`;
            }

            // 5. Score History List
            const scoreHistoryList = document.getElementById('score-history-list');
            scoreHistoryList.innerHTML = '';
            quizHistory.slice(-5).reverse().forEach(score => { // Show last 5 scores
                const li = document.createElement('li');
                li.textContent = `${score.date}: ${score.score}/${score.total} (${score.percentage}%)`;
                scoreHistoryList.appendChild(li);
            });
        }


        // --- INITIALIZATION ---
        document.addEventListener('DOMContentLoaded', () => {
            renderVocabulary();
            updateProgress();
            // Start the quiz view in a clean state
            quizResultCardEl.classList.add('hidden');
        });

            // --- INITIAL DATA LOAD FUNCTIONS ---
        async function loadVocabData() {
             try {
                const response = await fetch('/api/vocab');
                if (response.ok) {
                    let data = await response.json();
                    
                    if (data.length === 0) {
                        // If no user data, initialize with the default list
                        vocabulary = DEFAULT_VOCAB;
                        await saveToServer(); // Save default list to the database
                    } else {
                        // Map the data to match the expected structure
                        vocabulary = data.map(item => ({
                            word: item.word,
                            translation: item.translation,
                            correctAnswers: item.correct_answers // Note the snake_case from SQL
                        }));
                    }
                    renderVocabulary();
                }
            } catch (error) {
                console.error("Failed to load vocabulary data:", error);
                // Fallback to default, but the save will likely fail too
                vocabulary = DEFAULT_VOCAB; 
                renderVocabulary();
            }
        }
        
        async function loadHistoryData() {
            try {
                const response = await fetch('/api/history');
                if (response.ok) {
                    quizHistory = await response.json();
                }
            } catch (error) {
                console.error("Failed to load history data:", error);
            }
        }


        // --- INITIALIZATION ---
        document.addEventListener('DOMContentLoaded', async () => {
            // Load both datasets before rendering/updating the progress dashboard
            await loadVocabData();
            await loadHistoryData();
            
            updateProgress();
            
            // Start the quiz view in a clean state (handles case where user navigates directly to /dashboard)
            quizResultCardEl.classList.add('hidden');
            startQuizBtn.classList.remove('hidden');
            nextQuestionBtn.classList.add('hidden');
            if (vocabulary.length < 4) {
                 quizQuestionEl.textContent = "Add at least 4 words to start a quiz!";
            } else {
                 quizQuestionEl.textContent = "Ready to start a new quiz?";
            }
        });