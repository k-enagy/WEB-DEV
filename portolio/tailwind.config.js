/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],


  theme: {
    extend: {
            
      screens: {
        sm: '380px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          'from': {opacity: 0},
          'to': {opacity: 1},
        },
        fadeInLeft: {
          '0%': { opacity: 0,
          transform: 'translateX(-20px)'},
          '100%': {
            opacity: 1,
            transform: 'translateX(0)'
          }
        },
        fadeInRight: {
          '0%': { opacity: 0,
          transform: 'translateX(20px)'},
          '100%': {
            opacity: 1,
            transform: 'translateX(0)'
          }
        }, fadeDown: {
          '0%': { opacity: 0,
          transform: 'translateY(-60px)'},
          '100%': {
            opacity: 2,
            transform: 'translateY(0)'
          }
        }, fadeUp: {
          '0%': { opacity: 0,
          transform: 'translateY(60px)'},
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        },
        jumpLeft: {
          "0%": {
            transform: "translateX(0);"
          },
          "50%" :{
            transform: "translateX(-20px)"
          },
          "100%": {
            transform: "translateX(0)"
          }
        }
        
      },
      animation: {
        shake:'shake 2s ease-in-out 1',
        jump:'jump 2s ease-in-out 2',
        wiggle:'wiggle 1s ease-in-out infinite',
        ping:'ping 2s ease-in-out 2',
        fadeIn:"fadeIn 2s ease-in 1",
        fadeInLeft:'fadeInLeft 2s ease-out 1',
        fadeInRight:'fadeInRight 2s ease-out 1',
        fadeDown:'fadeDown 1s ease-out 1',
        fadeUp:'fadeUp 1s ease-out 1',
        jumpLeft: 'jumpLeft 3s ease-out infinite'
      },
    },
  },
  plugins: [],
}
