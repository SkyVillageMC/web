import * as daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
let config: import('tailwindcss').Config = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
    ],
    theme: {
        extend: {
            colors: {
                'epik-orange': '#f39c12'
            }
        },
    },
    plugins: [daisyui],
    daisyui: {
        themes: [
            {
                sv: {
                    "primary": "#ffdd19",
                    "secondary": "#2f80ed",
                    "accent": "#68ff54",
                    "neutral": "#1C222B",
                    "base-100": "#2f3640",
                    "info": "#38bdf8",
                    "success": "#4cd137",
                    "warning": "#e67e22",
                    "error": "#e84118",
                }
            }
        ]
    }
};

export default config
