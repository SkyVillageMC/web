module.exports = {
  purge: {
    enabled: false,
    content: ['./public/index.html', './src/**/*.svelte'],
    options: {
      defaultExtractor: content => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
  },
  darkMode: 'media',
  theme: {
    extend: {
      dropShadow: {
        'yellow': '0 35px 35px rgba(241, 196, 15, 0.25)',
      },
      backgroundImage: {
        'landing': 'url("/bg.png")'
      }
    },
    fontFamily: {
      "main": [`Nunito`, `sans-serif`]
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}