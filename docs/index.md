---
layout: home

hero:
  name: "TajwidMudah"
  text: "Belajar Tajwid Cara Santai!"
  tagline: Kuasai hukum bacaan Al-Quran selangkah demi selangkah.
  image:
    src: /jawi.png
    alt: Maskot Tajwid
  actions:
    - theme: brand
      text: MULA SEKARANG
      link: /random/pengenalan
    - theme: alt
      text: LIHAT SILIBUS
      link: /hukum/idgham

features:
  - title: 📝 Belajar Ala W3Schools
    details: Topik tersusun kemas kat tepi. Baca je terus faham!
  - title: 🎮 Santai Macam Main Game
    details: Nota pendek, padat, dan tak memboringkan.
  - title: 📱 Mesra Mobile
    details: Buka kat phone lancar je. Belajar kat mana-mana pun boleh.
---

<!-- POP-UP SELAMAT DATANG -->
<div id="welcome-modal" class="modal-overlay">
  <div class="modal-content">
    <h2 class="modal-title">✨ Selamat Datang!</h2>
    <!-- <p class="modal-text">Sedia untuk kuasai ilmu tajwid dengan lebih mudah dan interaktif? Jom kita mulakan perjalanan ini bersama-sama.</p> -->
    <p class="modal-text">Projek ini masih di fasa pembangunan dan maklumat yang terkandung mungkin kurang tepat. Sila rujuk <a href="random/sumber" style="color: #10b981; font-weight: bold; ">"Sumber Rujukan"</a>.</p>
    <button id="close-modal-btn" class="card-btn" style="width: 100%;">Bismillah, Jom Mula!</button>
  </div>
</div>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  /* --- 1. LOGIK SEARCH BAR --- */
  const searchInput = document.getElementById('cari-topik');
  const cards = document.querySelectorAll('.topic-card');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      cards.forEach(card => {
        const title = card.querySelector('.card-title').innerText.toLowerCase();
        const desc = card.querySelector('.card-desc').innerText.toLowerCase();
        if (title.includes(term) || desc.includes(term)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }

  /* --- 2. LOGIK POP-UP SELAMAT DATANG --- */
  const modal = document.getElementById('welcome-modal');
  const closeBtn = document.getElementById('close-modal-btn');

  if (modal && closeBtn) {
    // Fungsi untuk tutup pop-up
    const tutupModal = () => {
      modal.classList.remove('show');
      setTimeout(() => { modal.style.display = 'none'; }, 300); // Tunggu animasi habis
    };

    // Tunjuk pop-up selepas 0.5 saat user masuk supaya nampak smooth
    setTimeout(() => {
      modal.style.display = 'flex';
      setTimeout(() => { modal.classList.add('show'); }, 10);
    }, 500);

    // Tutup bila butang 'Bismillah' ditekan
    closeBtn.addEventListener('click', tutupModal);

    // Boleh tutup juga kalau user klik kat kawasan luar kotak pop-up
    window.addEventListener('click', (e) => {
      if (e.target === modal) { tutupModal(); }
    });
  }
});
</script>