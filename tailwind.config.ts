import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '1.5rem',
				lg: '2rem',
				xl: '2.5rem',
				'2xl': '3rem',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1400px'
			}
		},
		screens: {
			'xs': '475px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1400px',
			'3xl': '1600px'
		},
		extend: {
			fontFamily: {
				'display': ['Playfair Display', 'serif'],
				'body': ['Lato', 'Helvetica Neue', 'sans-serif'],
				'mono': ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: {
					DEFAULT: 'hsl(var(--background))',
					subtle: 'hsl(var(--background-subtle))',
				},
				foreground: 'hsl(var(--foreground))',
				// Nouveau système de couleurs Luxe 2025
				'brand': {
					500: '#CFA67C', // Doré champagne - luxe raffiné
					600: '#B88A5A', // Doré profond - hover states
				},
				'accent': {
					500: '#FAF8F5', // Beige clair - fonds et aplats
					600: '#E8D5C4', // Beige plus soutenu - hover, dégradés subtils
				},
				'neutral': {
					50: '#FFFFFF',  // Blanc pur - espaces, luxe minimaliste
					900: '#000000', // Noir profond - texte, contrastes forts
				},
				// Maintien de l'ancien système pour la compatibilité
				'silver': {
					metallic: 'hsl(var(--silver-metallic))',
					light: 'hsl(var(--silver-light))',
					dark: 'hsl(var(--silver-dark))',
					chrome: 'hsl(var(--silver-chrome))',
				},
				'gold': {
					accent: 'hsl(var(--gold-accent))',
					warm: 'hsl(var(--gold-warm))',
					subtle: 'hsl(var(--gold-subtle))',
				},
				'black': {
					deep: 'hsl(var(--black-deep))',
					soft: 'hsl(var(--black-soft))',
					matte: 'hsl(var(--black-matte))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			backgroundImage: {
				// Nouveaux gradients Luxe 2025
				'gradient-brand': 'linear-gradient(90deg, #CFA67C 0%, #B88A5A 100%)',
				'gradient-neutral': 'linear-gradient(90deg, #000000 0%, #CFA67C 100%)',
				'gradient-champagne': 'linear-gradient(135deg, #CFA67C, #B88A5A)',
				'gradient-luxury': 'linear-gradient(135deg, #FAF8F5, #E8D5C4)',
				// Anciens gradients pour compatibilité
				'gradient-metallic': 'var(--gradient-metallic)',
				'gradient-chrome': 'var(--gradient-chrome)',
				'gradient-gold': 'var(--gradient-gold)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-glass': 'var(--gradient-glass)',
			},
			boxShadow: {
				// Nouvelles ombres Luxe 2025
				'champagne': '0 4px 20px rgba(207, 166, 124, 0.15)',
				'luxury-soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
				'luxury-medium': '0 8px 25px rgba(0, 0, 0, 0.08)',
				'luxury-strong': '0 15px 35px rgba(0, 0, 0, 0.12)',
				'glow-gold': '0 0 30px rgba(207, 166, 124, 0.3)',
				// Anciennes ombres pour compatibilité
				'glass': 'var(--shadow-glass)',
				'metallic': 'var(--shadow-metallic)',
				'premium': 'var(--shadow-premium)',
				'gold': 'var(--shadow-gold)',
				'inset': 'var(--shadow-inset)',
				'depth': 'var(--shadow-depth)',
			},
			backdropBlur: {
				'xs': '2px',
				'sm': '4px',
				'md': '8px',
				'lg': '16px',
				'xl': '24px',
				'2xl': '40px',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				shimmer: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				'shimmer-text': {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' },
				},
				float: {
					'0%, 100%': { 
						transform: 'translateY(0) rotate(0deg)' 
					},
					'33%': { 
						transform: 'translateY(-10px) rotate(1deg)' 
					},
					'66%': { 
						transform: 'translateY(-5px) rotate(-1deg)' 
					},
				},
				'pulse-glow': {
					'0%, 100%': { 
						boxShadow: 'var(--shadow-gold)' 
					},
					'50%': { 
						boxShadow: 'var(--shadow-gold), 0 0 60px hsl(45 100% 65% / 0.4)' 
					},
				},
				shine: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'shimmer': 'shimmer 3s ease-in-out infinite',
				'shimmer-text': 'shimmer-text 3s ease-in-out infinite',
				'float': 'float 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'shine': 'shine 4s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
