/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      gridTemplateColumns: {
        "about-section": "1fr 3fr"
      },
      backgroundImage: {
        "about-section": "linear-gradient(#C2EEFF, #8BBBFF 50% 80%, #69A8FF)"
      },
      colors: {
        'old-copper': {
          '50': '#f7f5ef',
          '100': '#ebe6d6',
          '200': '#d9ccaf',
          '300': '#c3ad81',
          '400': '#b2925d',
          '500': '#a37f4f',
          '600': '#8b6743',
          '700': '#6f4e37',
          '800': '#5f4334',
          '900': '#533b30',
          '950': '#2f1f19',
        },
      'blaze-orange': {
        '50': '#fff8ec',
        '100': '#ffeed3',
        '200': '#ffdaa5',
        '300': '#ffbe6d',
        '400': '#ff9732',
        '500': '#ff780a',
        '600': '#ff5f00',
        '700': '#cc4302',
        '800': '#a1350b',
        '900': '#822e0c',
        '950': '#461404',
        },
        
        'shark': {
          '50': '#f2f4fc',
          '100': '#e1e6f8',
          '200': '#c9d2f4',
          '300': '#a5b6eb',
          '400': '#7a91e0',
          '500': '#5a6cd7',
          '600': '#4651ca',
          '700': '#3c40b9',
          '800': '#363797',
          '900': '#303278',
          '950': '#272757',
      },
      'jewel': {
        '50': '#f3faf4',
        '100': '#e3f5e7',
        '200': '#c8ead1',
        '300': '#9cd9ac',
        '400': '#69bf80',
        '500': '#45a25e',
        '600': '#34854a',
        '700': '#2e6f40',
        '800': '#275434',
        '900': '#21462c',
        '950': '#0e2515',
        },
        'amber': {
          '50': '#ffffea',
          '100': '#fffbc5',
          '200': '#fff885',
          '300': '#ffed46',
          '400': '#ffdf1b',
          '500': '#ffbf00',
          '600': '#e29300',
          '700': '#bb6802',
          '800': '#985008',
          '900': '#7c420b',
          '950': '#482200',
        },
        'east-bay': {
          '50': '#f4f7fa',
          '100': '#e6ecf3',
          '200': '#d2dceb',
          '300': '#b3c6dd',
          '400': '#8fa9cb',
          '500': '#748fbd',
          '600': '#6278af',
          '700': '#56689f',
          '800': '#4a5783',
          '900': '#455073',
          '950': '#2a2f41',
        },
        'forgot_color': {
          '50': '#f3f6f8',
          '100': '#e1e9ec',
          '200': '#c7d4da',
          '300': '#9fb6c1',
          '400': '#71909f',
          '500': '#557585',
          '600': '#4a6170',
          '700': '#40515e',
          '800': '#3a4750',
          '900': '#323b43',
          '950': '#1f262d',
        },
      
      
      

      


      
    
      

  
      
      
        'i': {
          '50': '#f0f6fe',
          '100': '#ddeafc',
          '200': '#c2dcfb',
          '300': '#98c6f8',
          '400': '#67a8f3',
          '500': '#4487ed',
          '600': '#2e69e2',
          '700': '#2655cf',
          '800': '#274ab3',
          '900': '#233e85',
          '950': '#1a2851',
        }, 
        'cobalt': {
          '50': '#eef5ff',
          '100': '#d8e7ff',
          '200': '#bad4ff',
          '300': '#8bbcff',
          '400': '#5496ff',
          '500': '#2d6eff',
          '600': '#1e51fa',
          '700': '#0f36e6',
          '800': '#132cba',
          '900': '#162c92',
          '950': '#121d59',
      },
      
     },
    keyframes: {
      "fadeInUp": {
        "0%": {
          opacity: 0,
          transform: "translateY(10px)",
          height: 0,
        },
        "50%": {
          opacity: 0,
          transform: "translateY(10px)",
          height: "var(--height)",
        },
        "100%": {
          opacity: 1,
          transform: "translateY(0)",
          height: "var(--height)"
        }
      },
      "fadeOut": {
        "0%": {
          opacity: "initial",
          height: "var(--height)"
        },
        "50%": {
          opacity: 0,
          height: "var(--height)"
        },
        "100%": {
          opacity: 0,
          height: 0,
        }
      }
    },
    animation: {
      "fadeInUp": "fadeInUp 500ms forwards",
      "fadeOut": "fadeOut 500ms forwards"
    }
  },
  },

  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
    darkTheme: false
  }
};
