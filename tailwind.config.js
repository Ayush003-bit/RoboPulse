/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./pages/**/*.html"
];
export const theme = {
  extend: {
    colors: {
      'space-blue': '#0a0e27',
      'navy': '#0f1419',
      'cyan': {
        400: '#00d9ff',
        500: '#00d9ff',
        600: '#00a8cc',
      }
    },
    fontFamily: {
      sans: ['"DM Sans"', 'sans-serif'],
      orbitron: ['"Orbitron"', 'sans-serif'],
    },
    maxWidth: {
      '7xl': '80rem',
    },
    spacing: {
      '128': '32rem',
    },
    borderRadius: {
      '3xl': '1.5rem',
      '4xl': '2rem',
    },
    boxShadow: {
      'cyan': '0 0 30px rgba(0, 217, 255, 0.3)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    },
    animation: {
      'bounce': 'bounce 2s infinite',
    }
  },


  content: ["./src/**/*.{html,js}"], // include all your HTML files
  theme: {
    extend: {
      colors: {
        "space-blue": "#0b0f27",   // custom hero bg
        "cyan-400": "#22d3ee",
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  

};
export const plugins = [];
