/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                spora: {
                    DEFAULT: '#1ABC9C',
                    dark: '#16A085',
                    light: 'rgba(26, 188, 156, 0.2)',
                },
                dark: '#0A0A0A',
                darker: '#050505',
                card: '#111111',
                'card-hover': '#1a1a1a',
                border: '#222222',
                'text-primary': '#FFFFFF',
                'text-secondary': '#A0A0A0',
                'text-muted': '#666666',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
