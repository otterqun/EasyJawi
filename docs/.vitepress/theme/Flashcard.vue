<script setup>
import { ref } from 'vue'
import flashcardData from './data/flashcard.json'

const topics = ref(flashcardData)
const selectedTopic = ref(null)
const currentCards = ref([])

const currentIndex = ref(0)
const isFlipped = ref(false)

// Fungsi mula latih tubi mengikut topik
const startFlashcard = (topic) => {
  selectedTopic.value = topic
  currentCards.value = topic.cards
  currentIndex.value = 0
  isFlipped.value = false
}

// Fungsi kembali ke menu utama
const backToMenu = () => {
  selectedTopic.value = null
}

const flipCard = () => {
  isFlipped.value = !isFlipped.value
}

const nextCard = () => {
  if (currentIndex.value < currentCards.value.length - 1) {
    isFlipped.value = false
    setTimeout(() => {
      currentIndex.value++
    }, 200)
  }
}

const prevCard = () => {
  if (currentIndex.value > 0) {
    isFlipped.value = false
    setTimeout(() => {
      currentIndex.value--
    }, 200)
  }
}
</script>

<template>
  <div class="flashcard-container">
    
    <div v-if="!selectedTopic" class="topic-selection">
      <div class="card-header">
        <h3>Ulangkaji Flashcard ⚡</h3>
      </div>
      <p class="instruction">Pilih topik kad di bawah untuk mula menghafal:</p>
      
      <div class="topic-grid">
        <button 
          v-for="topic in topics" 
          :key="topic.id" 
          @click="startFlashcard(topic)" 
          class="topic-card"
        >
          <span class="topic-title">{{ topic.title }}</span>
          <span class="topic-count">{{ topic.cards.length }} Kad Imbasan</span>
        </button>
      </div>
    </div>

    <div v-else>
      <div class="card-header">
        <div>
          <button @click="backToMenu" class="back-btn">⬅ Kembali</button>
          <h3 style="display:inline-block; margin-left:10px; margin-top:0;">{{ selectedTopic.title }}</h3>
        </div>
        <span class="counter">Kad {{ currentIndex + 1 }} / {{ currentCards.length }}</span>
      </div>

      <div class="scene" @click="flipCard">
        <div class="card" :class="{ 'is-flipped': isFlipped }">
          
          <div class="card-face card-front">
            <span class="hint">Tekan kad untuk lihat jawapan</span>
            <h2 class="card-text">{{ currentCards[currentIndex].front }}</h2>
          </div>

          <div class="card-face card-back">
            <h2 class="card-text answer-text">{{ currentCards[currentIndex].back }}</h2>
          </div>

        </div>
      </div>

      <div class="controls">
        <button @click="prevCard" :disabled="currentIndex === 0" class="nav-btn">
          ⬅ Sebelum
        </button>
        <button 
          v-if="currentIndex < currentCards.length - 1" 
          @click="nextCard" 
          class="nav-btn"
        >
          Seterusnya ➔
        </button>
        <button 
          v-else 
          @click="backToMenu" 
          class="nav-btn finish-btn"
        >
          Pilih Topik Lain 📚
        </button>
      </div>
    </div>

  </div>
</template>

<style scoped>
/* Disamakan 100% dengan .quiz-container */
.flashcard-container {
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Disamakan dengan .quiz-header */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid var(--vp-c-divider);
  padding-bottom: 0.5rem;
}
.card-header h3 { margin: 0; color: var(--vp-c-brand); }
.counter { font-weight: bold; font-size: 0.9rem; color: var(--vp-c-text-2); }

/* Disamakan dengan .topic-grid & .topic-card dari Quiz */
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
.topic-title { font-weight: bold; font-size: 1.1rem; color: var(--vp-c-text-1); margin-bottom: 5px; text-align: center; }
.topic-count { font-size: 0.85rem; color: var(--vp-c-text-2); background: var(--vp-c-divider); padding: 2px 8px; border-radius: 12px; }
.back-btn { background: none; border: none; color: var(--vp-c-text-2); cursor: pointer; font-weight: bold; }
.back-btn:hover { color: var(--vp-c-brand); }

/* Animasi 3D Flip */
.scene { width: 100%; height: 250px; perspective: 1000px; cursor: pointer; margin-top: 1rem; }
.card { width: 100%; height: 100%; position: relative; transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1); transform-style: preserve-3d; }
.card.is-flipped { transform: rotateY(180deg); }
.card-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  /* Tambah shadow sikit bagi nampak macam kad fizikal yang timbul */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}
.card-front { background-color: var(--vp-c-bg); border: 2px solid var(--vp-c-divider); }

/* Disamakan dengan warna 'feedback-correct' dari Quiz */
.card-back { background-color: rgba(16, 185, 129, 0.1); border: 2px solid #10b981; transform: rotateY(180deg); }

/* Disamakan dengan .question-text dari Quiz */
.card-text { margin: 0; font-size: 1.2rem; font-weight: 600; line-height: 1.4; color: var(--vp-c-text-1); }
.answer-text { color: #10b981; }
.hint { position: absolute; top: 15px; font-size: 0.85rem; color: var(--vp-c-text-3); letter-spacing: 0.5px; }

/* Butang Kawalan (Disamakan dengan .next-btn dari Quiz) */
.controls { display: flex; justify-content: space-between; margin-top: 1.5rem; }
.nav-btn {
  background-color: var(--vp-c-brand);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}
.nav-btn:hover:not(:disabled) { opacity: 0.8; }
.nav-btn:disabled { background-color: var(--vp-c-divider); color: var(--vp-c-text-3); cursor: not-allowed; }

/* Butang Selesai (Disamakan dengan .back-home-btn dari Quiz) */
.finish-btn { 
  background-color: var(--vp-c-bg-mute); 
  color: var(--vp-c-text-1); 
  border: 1px solid var(--vp-c-divider); 
}
</style>