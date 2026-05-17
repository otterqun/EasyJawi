<script setup>
import { ref, onMounted, computed } from 'vue'
import { withBase } from 'vitepress'

const allTopics = [
  { title: "Pengenalan Tajwid", path: "/pengenalan" },
  { title: "Makhraj Huruf", path: "/hukum/makhraj/makhraj-huruf" },
  { title: "Alif Lam Ma'rifah", path: "/hukum/alif-lam/alif-lam" },
  { title: "Nun Mati & Tanwin", path: "/hukum/nun-mati/nun-mati-&-tanwin" },
  { title: "Mim Mati & Nun Syaddah", path: "/hukum/mim-mati-&-nun-syaddah/mim-mati-&-nun-syaddah" },
  { title: "Idgham", path: "/hukum/idgham/idgham" },
  { title: "Hukum Mad", path: "/hukum/mad/mad" },
  { title: "Hukum Ra", path: "/hukum/ra/ra" },
  { title: "Lam Jalalah", path: "/hukum/lam/lam" },
  { title: "Qalqalah", path: "/hukum/qalqalah/qalqalah" },
  { title: "Tanda Waqaf", path: "/hukum/waqaf/waqaf" },
  { title: "Hamzah Wasal", path: "/hukum/hamzah-wasal/hamzah-wasal" },
  { title: "Iltiqa' Sakinain", path: "/hukum/Iltiqa-Sakinain/Iltiqa-Sakinain" },
  { title: "Bacaan Gharib", path: "/hukum/gharib/gharib" }
]

const TOTAL_TOPICS = allTopics.length
const completedPaths = ref([])
const lastVisitedPath = ref('')

onMounted(() => {
  completedPaths.value = JSON.parse(localStorage.getItem('tajwid_completed_topics')) || []
  lastVisitedPath.value = localStorage.getItem('tajwid_last_visited_path') || ''
})

const progressPercent = computed(() => {
  let percent = Math.round((completedPaths.value.length / TOTAL_TOPICS) * 100)
  return percent > 100 ? 100 : percent
})

// [FIX 1] Kita buang segala trailing slash dan .html supaya nama butang cantik
const formatPathName = (path) => {
  if (!path) return ''
  const cleanPath = path.replace(/\/$/, '').replace('.html', '')
  const parts = cleanPath.split('/')
  const lastPart = parts[parts.length - 1].replace(/-/g, ' ')
  return lastPart.toUpperCase()
}

// [FIX 2] Gunakan fungsi 'some' dan 'includes' supaya dia tak kisah ada /EasyTajwid/ kat depan
const isTopicRead = (targetPath) => {
  return completedPaths.value.some(savedPath => savedPath.includes(targetPath))
}
</script>

<template>
  <div class="dashboard-card">
    <div class="header-section">
      <h3 style="margin-top: 0; color: var(--vp-c-text-1);">📊 Prestasi Pembelajaran</h3>
    </div>
    
    <div class="progress-info">
      <span>Tahap Penguasaan:</span>
      <strong>{{ progressPercent }}% ({{ completedPaths.length }}/{{ TOTAL_TOPICS }} Topik)</strong>
    </div>
    <div class="progress-bar-bg">
      <div class="progress-bar-fill" :style="{ width: progressPercent + '%' }"></div>
    </div>

    

    <div class="topic-checklist-section">
      <h4 class="checklist-title">Status Topik Anda:</h4>
      <div class="checklist-grid">
        
        <div 
          v-for="(topic, index) in allTopics" 
          :key="index"
          :class="['checklist-item', isTopicRead(topic.path) ? 'item-read' : 'item-unread']"
        >
          <span class="status-icon">
            {{ isTopicRead(topic.path) ? '✅' : '⏳' }}
          </span>
          <span class="topic-name">{{ topic.title }}</span>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>
.dashboard-card {
  background-color: var(--vp-c-bg-soft);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
  margin-bottom: 2rem;
}

/* Progress Bar */
.progress-info { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.95rem; }
.progress-bar-bg { width: 100%; height: 12px; background-color: var(--vp-c-divider); border-radius: 10px; overflow: hidden; margin-bottom: 2rem; }
.progress-bar-fill { height: 100%; background: linear-gradient(90deg, #10b981, #34d399); border-radius: 10px; transition: width 0.5s ease; }

/* Resume Section */
.resume-section { text-align: center; padding-bottom: 2rem; border-bottom: 1px dashed var(--vp-c-divider); margin-bottom: 2rem; }
.resume-text { color: var(--vp-c-text-2); margin-bottom: 1rem; font-size: 0.9rem; }
.resume-btn {
  display: inline-block;
  background-color: var(--vp-c-brand);
  color: white;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none !important;
  font-weight: bold;
  transition: opacity 0.2s;
}
.resume-btn:hover { opacity: 0.85; }

/* --- GAYA SENARAI TOPIK BARU --- */
.checklist-title {
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
}

.checklist-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 12px;
}

.checklist-item {
  display: flex;
  align-items: center;
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

/* Gaya untuk topik yang dah BACA (Selesai) */
.item-read {
  background-color: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: var(--vp-c-text-1);
  text-decoration: line-through;
  text-decoration-color: rgba(16, 185, 129, 0.5);
  text-decoration-thickness: 2px;
  opacity: 0.85; /* Nampak macam dah 'settle' */
}

/* Gaya untuk topik yang BELUM baca */
.item-unread {
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
}

.status-icon {
  margin-right: 10px;
  font-size: 1.1rem;
}
.topic-name {
  font-weight: 500;
}
</style>