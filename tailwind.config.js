/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		colors: {
  			'bg-primary': '#FFFFFF',
  			'text-primary': '#0B0B0B',
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			'accent-1': '#bc1dc4',
  			'accent-2': '#A13EA8',
  			'accent-3': '#C6A3E0',
  			'ui-muted-bg': '#F5F5F7',
  			'brand-purple': '#8A3FFC',
  			'brand-pink': '#FF5CA3',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			'heading-1': 'clamp(2.5rem, 5vw + 1rem, 4.5rem)',
  			'heading-2': 'clamp(2rem, 4vw + 0.5rem, 3.5rem)',
  			'heading-3': 'clamp(1.75rem, 3vw + 0.5rem, 2.5rem)',
  			'heading-4': 'clamp(1.5rem, 2.5vw + 0.5rem, 2rem)',
  			'body-lg': 'clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)',
  			'body-md': 'clamp(1rem, 1vw + 0.5rem, 1.25rem)',
  			'body-sm': 'clamp(0.875rem, 0.75vw + 0.5rem, 1rem)',
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'system-ui',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		minHeight: {
  			'tap': '44px',
  		},
  		spacing: {
  			'container': 'clamp(1rem, 3vw, 2rem)',
  		},
  		screens: {
  			'xs': '320px',
  			'sm': '640px',
  			'md': '768px',
  			'lg': '1024px',
  			'xl': '1280px',
  			'2xl': '1536px',
  		},
  		padding: {
  			'safe-xs': 'clamp(0.75rem, 2vw, 1rem)',
  			'safe-sm': 'clamp(1rem, 2.5vw, 1.5rem)',
  			'safe-md': 'clamp(1.5rem, 3vw, 2rem)',
  			'safe-lg': 'clamp(2rem, 4vw, 3rem)',
  		},
  		gap: {
  			'safe-xs': 'clamp(0.75rem, 2vw, 1rem)',
  			'safe-sm': 'clamp(1rem, 2.5vw, 1.5rem)',
  			'safe-md': 'clamp(1.5rem, 3vw, 2rem)',
  			'safe-lg': 'clamp(2rem, 4vw, 3rem)',
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
