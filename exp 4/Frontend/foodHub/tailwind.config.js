module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0ea5e9', // blue-500 equivalent
          50: '#f0f9ff',
          100: '#e0f2fe',
          600: '#0284c7',
          700: '#0369a1'
        },
        'background-light': '#f8fafc', // or use gray-50
        'background-dark': '#0f172a',  // slate-900
        'text-light': '#111827',       // slate-900
        'text-dark': '#f9fafb',        // near-white
        'subtle-light': '#6b7280',     // slate-500
        'subtle-dark': '#9ca3af'
      }
    }
  },
  plugins: [],
}