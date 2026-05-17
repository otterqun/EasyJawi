import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "TajwidMudah",
  description: "Nota ringkas hukum tajwid",
  ignoreDeadLinks: true,
  
  // Kalau kau nak host kat Github Pages (username.github.io/tajwid-docs), 
  // kau kena bukak comment base ni. Kalau tak, biarkan je.
  base: '/EasyTajwid/', 

  // remove .html
  cleanUrls: true,

  themeConfig: {

    logo: '/jawi.png',

    // Menu kat bahagian atas (Navbar)
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Mula Belajar', link: '/pengenalan' },
      { text: 'Sumber Rujukan', link: '/sumber' },
    ],

    // Menu kat bahagian tepi (Sidebar) - Konsep W3Schools
    sidebar: [
    {
      text: 'Asas Tajwid',
      items: [
        { text: 'Pengenalan', link: '/pengenalan' },
      ]
    },
    {
      text: 'Senarai Hukum Tajwid', // <-- INI AKAN JADI BOLD & HITAM PEKAT
      collapsed: false, // Biar menu ni sentiasa terbuka
      items: [
        { text: 'Makhraj Huruf', link: '/hukum/makhraj/makhraj-huruf' },
        { text: 'Alif Lam Ma\'rifah', link: '/hukum/alif-lam/alif-lam' },
        { text: 'Nun Mati & Tanwin', link: '/hukum/nun-mati/nun-mati-&-tanwin' },
        { text: 'Mim Mati & Nun Syaddah', link: '/hukum/mim-mati-&-nun-syaddah/mim-mati-&-nun-syaddah' },
        { text: 'Idgham', link: '/hukum/idgham/idgham' },
        { text: 'Hukum Mad', link: '/hukum/mad/mad' },
        { text: 'Hukum Ra', link: '/hukum/ra/ra' },
        { text: 'Lam Jalalah', link: '/hukum/lam/lam' },
        { text: 'Qalqalah', link: '/hukum/qalqalah/qalqalah' },
        { text: 'Tanda Waqaf', link: '/hukum/waqaf/waqaf' },
        { text: 'Hamzah Wasal', link: '/hukum/hamzah-wasal/hamzah-wasal' },
        { text: "Iltiqa' Sakinain", link: '/hukum/Iltiqa-Sakinain/Iltiqa-Sakinain' },
        { text: 'Bacaan Gharib', link: '/hukum/gharib/gharib' }
      ]
    },
    {
      text: 'Lain-lain', // <-- INI PUN BOLD & HITAM
      items: [
        { text: 'Quiz', link: '/quiz' },
        { text: 'Flashcarad', link: '/flashcard'},
        { text: 'References', link: '/sumber' }
      ]
    }
  ],

    // Footer
    footer: {
      message: 'Dibangunkan khusus untuk memudahkan membaca nota tajwid',
      copyright: 'Open-Source @ 2026'
    },

    // Link sosial / footer
    socialLinks: [
      { icon: 'github', link: 'https://otterqun.github.io/EasyTajwid/' }
    ]
  }
})