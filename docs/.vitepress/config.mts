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
      { text: 'Sumber Rujukan', link: '/sumber' }
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
        text: 'Makhraj',
        collapsed: true, // Boleh tutup/buka menu
        items: [
          { text: 'item 1', link: '#' },
          { text: 'item 2', link: '#' },
        ]
      },
      {
        text: 'Alif Lam',
        collapsed: true, // Boleh tutup/buka menu
        items: [
          { text: 'item 1', link: '#' },
          { text: 'item 2', link: '#' },
        ]
      },
      {
        text: 'Hukum Nun Mati & Tanwin',
        collapsed: true, // Boleh tutup/buka menu
        items: [
          { text: 'Izhar Halqi', link: '#' },
          { text: 'Idgham', link: '/hukum/nun-mati/idgham' },
          { text: 'Ikhfa Hakiki', link: '#' },
          { text: 'Iqlab', link: '#' }
        ]
      },
      {
        text: 'Mim Mati',
        collapsed: true, // Boleh tutup/buka menu
        items: [
          { text: 'item 1', link: '#' },
          { text: 'item 2', link: '#' },
        ]
      },
      {
        text: 'Syaddah',
        collapsed: true, // Boleh tutup/buka menu
        items: [
          { text: 'item 1', link: '#' },
          { text: 'item 2', link: '#' },
        ]
      },
      {
        text: 'Idgham',
        collapsed: true, // Boleh tutup/buka menu
        items: [
          { text: 'item 1', link: '#' },
          { text: 'item 2', link: '#' },
        ]
      },
      {
        text: 'Hukum Mad',
        collapsed: true, // Boleh tutup/buka menu
        items: [
          { text: 'item 1', link: '#' },
          { text: 'item 2', link: '#' },
        ]
      },
      {
        text: 'Hukum Ra',
        collapsed: true, // Boleh tutup/buka menu
        items: [
          { text: 'item 1', link: '#' },
          { text: 'item 2', link: '#' },
        ]
      },
      {
        text: 'Lam Jalalah',
        collapsed: true, // Boleh tutup/buka menu
        items: [
          { text: 'item 1', link: '#' },
          { text: 'item 2', link: '#' },
        ]
      },
      {
        text: 'Qalqalah',
        collapsed: true, // Boleh tutup/buka menu
        items: [
          { text: 'item 1', link: '#' },
          { text: 'item 2', link: '#' },
        ]
      },
      {
        text: 'Tanda Waqaf',
        collapsed: true, // Boleh tutup/buka menu
        items: [
          { text: 'item 1', link: '#' },
          { text: 'item 2', link: '#' },
        ]
      },
      {
        text: 'Hamzah Wasal',
        collapsed: true, // Boleh tutup/buka menu
        items: [
          { text: 'item 1', link: '#' },
          { text: 'item 2', link: '#' },
        ]
      },
      {
        text: "Iltiqa' Sakinain",
        collapsed: true, // Boleh tutup/buka menu
        items: [
          { text: 'item 1', link: '#' },
          { text: 'item 2', link: '#' },
        ]
      },
      {
        text: 'Gharib',
        collapsed: true, // Boleh tutup/buka menu
        items: [
          { text: 'item 1', link: '#' },
          { text: 'item 2', link: '#' },
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