<script setup>
import { ref, onMounted } from 'vue'
import quizData from './data/soalan-tajwid.json'

const topics = ref(quizData)
const selectedTopic = ref(null)
const currentQuestions = ref([])

const currentQuestion = ref(0)
const selectedOption = ref(null)
const isAnswered = ref(false)
const score = ref(0)
const quizCompleted = ref(false)

// STATE BARU UNTUK SIMPAN PROGRESS
const savedProgress = ref({})

// 1. Tarik data dari localStorage bila komponen dimuatkan
onMounted(() => {
  const data = localStorage.getItem('tajwid_quiz_progress')
  if (data) {
    savedProgress.value = JSON.parse(data)
  }
})

// 2. Fungsi simpan markah ke localStorage
const saveProgress = () => {
  const topicId = selectedTopic.value.id
  const currentBest = savedProgress.value[topicId] || 0
  
  // Hanya simpan kalau markah baru lebih tinggi atau belum pernah buat
  if (score.value > currentBest || !savedProgress.value[topicId]) {
    savedProgress.value[topicId] = score.value
    localStorage.setItem('tajwid_quiz_progress', JSON.stringify(savedProgress.value))
  }
}

const startQuiz = (topic) => {
  selectedTopic.value = topic
  currentQuestions.value = topic.questions
  currentQuestion.value = 0
  score.value = 0
  selectedOption.value = null
  isAnswered.value = false
  quizCompleted.value = false
}

const backToMenu = () => {
  selectedTopic.value = null
}

const checkAnswer = (index) => {
  if (isAnswered.value) return
  selectedOption.value = index
  isAnswered.value = true
  if (index === currentQuestions.value[currentQuestion.value].answerIndex) {
    score.value++
  }
}

const nextQuestion = () => {
  if (currentQuestion.value < currentQuestions.value.length - 1) {
    currentQuestion.value++
    selectedOption.value = null
    isAnswered.value = false
  } else {
    quizCompleted.value = true
    saveProgress() // <--- Panggil fungsi simpan bila kuiz habis
  }
}

const restartQuiz = () => {
  startQuiz(selectedTopic.value)
}

// Fungsi untuk reset semua rekod localStorage
const resetAllProgress = () => {
  const confirmReset = confirm("Adakah anda pasti mahu memadam semua rekod markah kuiz?")
  if (confirmReset) {
    localStorage.removeItem('tajwid_quiz_progress') // Padam dari browser
    savedProgress.value = {} // Kosongkan paparan di skrin serta-merta
  }
}

</script>

<template>
  <div class="quiz-container">
    
    <div v-if="!selectedTopic" class="topic-selection">
      <div class="quiz-header">
        <h3>Uji Minda Tajwid 🧠</h3>
      </div>
      <p class="instruction">Pilih topik di bawah untuk mula menguji kefahaman anda: <div class="reset-section" v-if="Object.keys(savedProgress).length > 0">
        <button @click="resetAllProgress" class="reset-data-btn">
          🗑️ Padam Semua Rekod
        </button>
      </div></p>
      
      <div class="topic-grid">
        <button 
          v-for="topic in topics" 
          :key="topic.id" 
          @click="startQuiz(topic)" 
          class="topic-card"
        >
          <span class="topic-title">{{ topic.title }}</span>
          <span class="topic-count">{{ topic.questions.length }} Soalan</span>
          
          <div 
            v-if="savedProgress[topic.id] !== undefined" 
            class="progress-badge"
            :class="{ 'perfect-score': savedProgress[topic.id] === topic.questions.length }"
          >
            Markah Tertinggi: {{ savedProgress[topic.id] }} / {{ topic.questions.length }}
          </div>
        </button>
      </div>
    </div>

    <div v-else>
      <div v-if="!quizCompleted">
        <div class="quiz-header">
          <div>
            <button @click="backToMenu" class="back-btn">⬅ Kembali</button>
            <h3 style="display:inline-block; margin-left:10px;">{{ selectedTopic.title }}</h3>
          </div>
          <span class="progress">Soalan {{ currentQuestion + 1 }} / {{ currentQuestions.length }}</span>
        </div>

        <div class="question-box">
          <p class="question-text">{{ currentQuestions[currentQuestion].question }}</p>
          
          <div class="options-group">
            <button 
              v-for="(option, index) in currentQuestions[currentQuestion].options" 
              :key="index"
              @click="checkAnswer(index)"
              :class="[
                'option-btn', 
                isAnswered && index === currentQuestions[currentQuestion].answerIndex ? 'correct' : '',
                isAnswered && selectedOption === index && index !== currentQuestions[currentQuestion].answerIndex ? 'wrong' : ''
              ]"
              :disabled="isAnswered"
            >
              {{ option }}
            </button>
          </div>

          <div v-if="isAnswered" class="feedback-box" :class="selectedOption === currentQuestions[currentQuestion].answerIndex ? 'feedback-correct' : 'feedback-wrong'">
            <p><strong>Penerangan:</strong> {{ currentQuestions[currentQuestion].explanation }}</p>
            <button class="next-btn" @click="nextQuestion">
              {{ currentQuestion === currentQuestions.length - 1 ? 'Lihat Keputusan' : 'Soalan Seterusnya ➔' }}
            </button>
          </div>
        </div>
      </div>

      <div v-else class="result-box">
        <h3>🎉 Kuiz Selesai!</h3>
        <p class="score-text">Markah anda: <strong>{{ score }} / {{ currentQuestions.length }}</strong></p>
        <div class="action-buttons">
          <button class="restart-btn" @click="restartQuiz">Cuba Lagi Topik Ini ↻</button>
          <button class="back-home-btn" @click="backToMenu">Pilih Topik Lain 📚</button>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.quiz-container {
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--vp-c-divider);
  padding-bottom: 0.5rem;
}
.quiz-header h3 { margin: 0; color: var(--vp-c-brand); }

/* Gaya untuk skrin pilih topik */
.instruction { margin-bottom: 1.5rem; font-size: 1.1rem; }
.topic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}
.topic-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-bg);
  border: 2px solid var(--vp-c-divider);
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
}
.topic-card:hover {
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-brand-soft);
  transform: translateY(-2px);
}
.topic-title { font-weight: bold; font-size: 1.1rem; color: var(--vp-c-text-1); margin-bottom: 5px; }
.topic-count { font-size: 0.85rem; color: var(--vp-c-text-2); background: var(--vp-c-divider); padding: 2px 8px; border-radius: 12px; }
.back-btn { background: none; border: none; color: var(--vp-c-text-2); cursor: pointer; font-weight: bold; }
.back-btn:hover { color: var(--vp-c-brand); }

/* Gaya dalaman kuiz */
.progress { font-weight: bold; font-size: 0.9rem; color: var(--vp-c-text-2); }
.question-text { font-size: 1.2rem; font-weight: 600; margin-bottom: 1.5rem; }
.options-group { display: flex; flex-direction: column; gap: 10px; }
.option-btn {
  background-color: var(--vp-c-bg);
  border: 2px solid var(--vp-c-divider);
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  color: var(--vp-c-text-1);
}
.option-btn:hover:not(:disabled) { border-color: var(--vp-c-brand); background-color: var(--vp-c-brand-soft); }
.option-btn.correct { background-color: #10b981; color: white; border-color: #10b981; }
.option-btn.wrong { background-color: #ef4444; color: white; border-color: #ef4444; }
.option-btn:disabled { cursor: not-allowed; }

.feedback-box { margin-top: 1.5rem; padding: 1rem; border-radius: 8px; animation: fadeIn 0.3s ease; }
.feedback-correct { background-color: rgba(16, 185, 129, 0.1); border-left: 4px solid #10b981; }
.feedback-wrong { background-color: rgba(239, 68, 68, 0.1); border-left: 4px solid #ef4444; }

.next-btn, .restart-btn, .back-home-btn {
  margin-top: 1rem;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  border: none;
}
.next-btn { background-color: var(--vp-c-brand); color: white; }
.restart-btn { background-color: var(--vp-c-brand); color: white; margin-right: 10px; }
.back-home-btn { background-color: var(--vp-c-bg-mute); color: var(--vp-c-text-1); border: 1px solid var(--vp-c-divider); }
.next-btn:hover, .restart-btn:hover, .back-home-btn:hover { opacity: 0.8; }
.action-buttons { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }

.result-box { text-align: center; padding: 2rem 0; }
.score-text { font-size: 1.5rem; margin: 1.5rem 0; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

/* --- GAYA LENCANA PROGRESS --- */
.progress-badge {
  margin-top: 12px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #f59e0b; /* Warna oren/emas */
  background-color: rgba(245, 158, 11, 0.15);
  padding: 4px 10px;
  border-radius: 6px;
  border: 1px solid #f59e0b;
}

.perfect-score {
  color: #10b981; /* Warna hijau kalau full mark */
  background-color: rgba(16, 185, 129, 0.15);
  border-color: #10b981;
}

/* --- GAYA BUTANG RESET --- */
.reset-section {
  margin-top: 2rem;
  text-align: center;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1.5rem;
}

.reset-data-btn {
  background-color: transparent;
  color: #ef4444; /* Merah amaran */
  border: 1px solid #ef4444;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.reset-data-btn:hover {
  background-color: #ef4444;
  color: white;
}

</style>