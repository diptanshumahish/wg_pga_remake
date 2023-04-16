/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens:{
      sm: { min:'0px', max : '768px'},
      md:'768px',
      lg: '976px',
      xl:'11280px'
    },
    colors:{
      'primary':'#9333ea',
      'slate-950':'#020617',
      'slate-900':'#0f172a',
      'slate-800':'#1e293b',
      'formBack':'#2b2e3257',
      'violet':'#2e1065',
      'red':'#b91c1c',
      'white':"#ffffff"
      
    },
    fontFamily:{
      sans:['Helvetica','Arial','sans-serif'],
      serif: ['Merriweather', 'serif'],
    }
  },
  plugins: [],
}
