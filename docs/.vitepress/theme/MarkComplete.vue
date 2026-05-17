<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const isDone = ref(false)

onMounted(() => {
  // Simpan 'Last Visited Page' setiap kali page ni dibuka
  localStorage.setItem('tajwid_last_visited_path', route.path)
  
  // Semak sama ada page ni dah ditanda selesai
  const savedProgress = JSON.parse(localStorage.getItem('tajwid_completed_topics')) || []
  if (savedProgress.includes(route.path)) {
    isDone.value = true
  }
})

const markAsDone = () => {
  let savedProgress = JSON.parse(localStorage.getItem('tajwid_completed_topics')) || []
  
  if (!savedProgress.includes(route.path)) {
    savedProgress.push(route.path)
    localStorage.setItem('tajwid_completed_topics', JSON.stringify(savedProgress))
    isDone.value = true
  } else {
    // Kalau user nak un-tick (batal selesai)
    savedProgress = savedProgress.filter(path => path !== route.path)
    localStorage.setItem('tajwid_completed_topics', JSON.stringify(savedProgress))
    isDone.value = false
  }
}
</script>

<template>
  <div class="mark-done-container">
    <button 
      @click="markAsDone" 
      :class="['done-btn', isDone ? 'completed' : '']"
    >
      {{ isDone ? '✓ Topik Ini Selesai' : 'Tandakan Selesai' }}
    </button>
  </div>
</template>

<style scoped>
.mark-done-container { margin-top: 3rem; text-align: center; padding-top: 2rem; border-top: 1px solid var(--vp-c-divider); }
.done-btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1.1rem;
  border: 2px solid var(--vp-c-brand);
  background-color: transparent;
  color: var(--vp-c-brand);
  cursor: pointer;
  transition: all 0.3s ease;
}
.done-btn:hover { background-color: var(--vp-c-brand-soft); }
.done-btn.completed { background-color: #10b981; border-color: #10b981; color: white; }
</style>