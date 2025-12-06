/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#0B215E', // Deep Royal Blue (Inferred from FG logo style)
                    secondary: '#333333', // Dark Text
                    accent: '#D4AF37', // Metallic Gold (Classic construction accent)
                    light: '#F5F7FA', // Light Gray/Blueish background
                    medium: '#E2E8F0', // Borders
                    dark: '#020C27', // Very dark blue for footer/headings
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Times New Roman', 'Times', 'serif'],
            }
        },
    },
    plugins: [],
}
