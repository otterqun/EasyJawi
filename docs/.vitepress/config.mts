import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "TajwidMudah",
  description: "Nota ringkas hukum tajwid",
  ignoreDeadLinks: true,
  
  // Kalau kau nak host kat Github Pages (username.github.io/tajwid-docs), 
  // kau kena bukak comment base ni. Kalau tak, biarkan je.
  base: '/EasyJawi/', 

  themeConfig: {

    logo: '/jawi.png',

    // Menu kat bahagian atas (Navbar)
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Mula Belajar', link: '/hukum/pengenalan' },
      { text: 'Sumber Rujukan', link: '/random/sumber' }
    ],

    // Menu kat bahagian tepi (Sidebar) - Konsep W3Schools
    sidebar: [
      {
        text: 'Asas Tajwid',
        items: [
          { text: 'Pengenalan', link: '/hukum/pengenalan' },
        ]
      },
      {
        text: 'Hukum Nun Mati & Tanwin',
        collapsed: false, // Boleh tutup/buka menu
        items: [
          { text: 'Izhar Halqi', link: '/hukum/izhar' },
          { text: 'Idgham', link: '/hukum/idgham' },
          { text: 'Ikhfa Hakiki', link: '/hukum/ikhfa' },
          { text: 'Iqlab', link: '/hukum/iqlab' }
        ]
      }
    ],

    // Link sosial / footer
    socialLinks: [
      { icon: 'github', link: 'https://github.com/username-kau' }
    ]
  }
})