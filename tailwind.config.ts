import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'about1': '../public/photos/about1.jpeg',
      },
      colors:{
        'brown1': '#f6ede8',
        'brown2': '#ecddd5',
        'brown3': '#e2c9bf', 
        'brown4': '#c79884',
        'brown5': '#a24d2a',
        'gray-purple': '#453a49',
        'light-gray': '#f5f5f5'     
      },
      fontFamily:{
        'julius': ['julius', 'sans-serif'],
        'lato': ['Lato', 'sans-serif']
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black:': '900',
      }

    },
  },
  plugins: [],
}
export default config
