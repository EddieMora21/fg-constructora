module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    primary: '#0B215E',
                    secondary: '#333333',
                    accent: '#D4AF37',
                    light: '#F5F7FA',
                    medium: '#E2E8F0',
                    dark: '#020C27',
                },
                'bg-dark': '#000A1A',
                'text-dark': '#F5F7FA',
                'card-dark': '#001533',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Times New Roman', 'Times', 'serif'],
            }
        },
    },
    plugins: [],
}
