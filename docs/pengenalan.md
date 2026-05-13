---
outline: false
pageClass: lebar-penuh
---

<div class="hero-section">
<div class="hero-content">
<h1 class="hero-brand">TajwidMudah</h1>
<h2 class="hero-title">Belajar Tajwid Cara Santai!</h2>
<p class="hero-subtitle">Kuasai hukum bacaan Al-Quran selangkah demi selangkah dengan nota yang ringkas dan padat.</p>

<div class="w3-search-bar">
<input type="text" id="cari-topik" placeholder="Cari topik, cth. Idgham..." autocomplete="off" />
<button class="w3-search-btn" aria-label="Cari">
<svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
</svg>
</button>
</div>
</div>

<div class="hero-image">
<img src="/jawi.png" alt="Logo Jawi" />
</div>
</div>

<div class="grid-container">
<a href="/hukum/makhraj" class="topic-card">
<h3 class="card-title">Makhraj</h3>
<p class="card-desc">Tempat keluar sebutan huruf Hijaiyah yang betul.</p>
<span class="card-btn">MULA BELAJAR</span>
</a>
<a href="/hukum/alif-lam" class="topic-card">
<h3 class="card-title">Alif Lam</h3>
<p class="card-desc">Hukum Alif Lam Qamariyah & Syamsiyah.</p>
<span class="card-btn">MULA BELAJAR</span>
</a>
<a href="hukum/nun-mati/idgham" class="topic-card">
<h3 class="card-title">Nun Mati</h3>
<p class="card-desc">Izhar, Idgham, Iqlab & Ikhfa' Haqiqi.</p>
<span class="card-btn">MULA BELAJAR</span>
</a>
<a href="/hukum/mim-mati/" class="topic-card">
<h3 class="card-title">Mim Mati</h3>
<p class="card-desc">Ikhfa' Syafawi, Idgham & Izhar Syafawi.</p>
<span class="card-btn">MULA BELAJAR</span>
</a>
<a href="/hukum/mim-nun-syaddah" class="topic-card">
<h3 class="card-title">Syaddah</h3>
<p class="card-desc">Hukum Wajibul Ghunnah (Dengung wajib).</p>
<span class="card-btn">MULA BELAJAR</span>
</a>
<a href="/hukum/idgham" class="topic-card">
<h3 class="card-title">Idgham</h3>
<p class="card-desc">Mutamathilain, Mutaqaribain & Mutajanisain.</p>
<span class="card-btn">MULA BELAJAR</span>
</a>
<a href="/hukum/mad" class="topic-card">
<h3 class="card-title">Hukum Mad</h3>
<p class="card-desc">Mengenali Mad Asli & pelbagai jenis Mad Far'i.</p>
<span class="card-btn">MULA BELAJAR</span>
</a>
<a href="/hukum/ra" class="topic-card">
<h3 class="card-title">Hukum Ra</h3>
<p class="card-desc">Teknik bacaan Ra Nipis & Ra Tebal.</p>
<span class="card-btn">MULA BELAJAR</span>
</a>
<a href="/hukum/lam-jalalah" class="topic-card">
<h3 class="card-title">Lam Jalalah</h3>
<p class="card-desc">Hukum sebutan pada Lafaz Allah (Tafkhim/Tarqiq).</p>
<span class="card-btn">MULA BELAJAR</span>
</a>
<a href="/hukum/qalqalah" class="topic-card">
<h3 class="card-title">Qalqalah</h3>
<p class="card-desc">Lantunan suara pada huruf Qalqalah yang mati.</p>
<span class="card-btn">MULA BELAJAR</span>
</a>
<a href="/hukum/waqaf" class="topic-card">
<h3 class="card-title">Tanda Waqaf</h3>
<p class="card-desc">Simbol berhenti dan menyambung bacaan.</p>
<span class="card-btn">MULA BELAJAR</span>
</a>
<a href="/hukum/hamzah-wasal" class="topic-card">
<h3 class="card-title">Hamzah Wasal</h3>
<p class="card-desc">Cara memulakan bacaan pada Hamzah Wasal.</p>
<span class="card-btn">MULA BELAJAR</span>
</a>
<a href="/hukum/sakinain" class="topic-card">
<h3 class="card-title">Iltiqa' Sakinain</h3>
<p class="card-desc">Pertemuan dua huruf mati & Nun Wiqayah.</p>
<span class="card-btn">MULA BELAJAR</span>
</a>
<a href="/hukum/gharib" class="topic-card">
<h3 class="card-title">Gharib</h3>
<p class="card-desc">Bacaan-bacaan unik dalam riwayat Hafs.</p>
<span class="card-btn">MULA BELAJAR</span>
</a>
</div>

<style>
.lebar-penuh .VPDoc .content-container { max-width: 1100px !important; }
.lebar-penuh .vp-doc { max-width: 100% !important; }

.hero-section {
display: flex;
align-items: center;
justify-content: space-between;
padding: 3rem 0;
margin-bottom: 3rem;
font-family: var(--vp-font-family-base);
border-bottom: 2px solid var(--vp-c-divider);
}

.hero-brand {
color: #10b981;
font-size: 2.5rem;
font-weight: 800;
margin: 0;
}

.hero-title {
font-size: 3rem;
font-weight: 800;
margin: 0.5rem 0;
color: var(--vp-c-text-1);
border: none !important;
}

.hero-subtitle {
font-size: 1.2rem;
color: var(--vp-c-text-2);
max-width: 500px;
line-height: 1.6;
}

.hero-image img { width: 200px; height: auto; }

.w3-search-bar {
display: flex;
align-items: center;
background: white;
border-radius: 30px;
margin-top: 2rem;
max-width: 450px;
overflow: hidden;
border: 1px solid var(--vp-c-divider);
box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.w3-search-bar input {
flex-grow: 1;
padding: 14px 20px;
border: none;
outline: none;
font-size: 1rem;
color: #000000;
background: transparent;
font-family: var(--vp-font-family-base);
}

.w3-search-btn {
background-color: #10b981;
color: white;
border: none;
padding: 14px 24px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
transition: background 0.2s;
height: 100%;
}

.w3-search-btn:hover { background-color: #059669; }

.grid-container {
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 20px;
}

@media (max-width: 1024px) { .grid-container { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 768px) {
.hero-section { flex-direction: column; text-align: center; }
.hero-subtitle { margin: 1rem auto; }
.grid-container { grid-template-columns: 1fr; }
}

.topic-card {
background-color: var(--vp-c-bg-soft);
border: 2px solid var(--vp-c-divider);
padding: 30px 20px;
border-radius: 16px;
text-align: center;
text-decoration: none !important;
display: flex;
flex-direction: column;
justify-content: space-between;
transition: all 0.2s ease;
height: 100%;
}

.topic-card:hover {
border-color: #10b981;
transform: translateY(-5px);
background-color: #ffffff;
box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.card-title {
color: var(--vp-c-text-1) !important;
font-size: 1.5rem !important;
font-weight: 700 !important;
margin: 0 0 10px 0 !important;
border: none !important;
}

.card-desc {
color: var(--vp-c-text-2);
font-size: 0.9rem;
line-height: 1.5;
margin-bottom: 20px;
flex-grow: 1;
}

.card-btn {
background-color: #10b981;
color: white !important;
padding: 10px 20px;
border-radius: 12px;
font-weight: 800;
font-size: 0.85rem;
letter-spacing: 0.5px;
border-bottom: 4px solid #46a302;
transition: all 0.1s;
}

.topic-card:hover .card-btn { background-color: #059669; }
.topic-card:active .card-btn {
border-bottom: 0px solid #46a302;
transform: translateY(4px);
}

</style>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
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
});
</script>