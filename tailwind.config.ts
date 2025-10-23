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
				xl: '2rem',
				'2xl': '2rem',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1600px'
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
			fontSize: {
				// Échelle typographique RE·GEN - Standards Luxe (réduite de 15%)
				// Display sizes (Hero, grandes sections)
				'display-2xl': ['clamp(2.55rem, 5.1vw, 3.825rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
				'display-xl': ['clamp(2.125rem, 4.25vw, 2.975rem)', { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '600' }],
				'display-lg': ['clamp(1.7rem, 3.4vw, 2.55rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],

				// Heading sizes (Titres de sections)
				'heading-xl': ['clamp(1.4875rem, 2.975vw, 2.125rem)', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
				'heading-lg': ['clamp(1.275rem, 2.55vw, 1.7rem)', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '600' }],
				'heading-md': ['clamp(1.0625rem, 2.125vw, 1.4875rem)', { lineHeight: '1.35', letterSpacing: '0', fontWeight: '600' }],
				'heading-sm': ['clamp(0.95625rem, 1.7vw, 1.275rem)', { lineHeight: '1.4', letterSpacing: '0', fontWeight: '600' }],

				// Body sizes (Texte courant)
				'body-lg': ['clamp(0.95625rem, 1.7vw, 1.0625rem)', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
				'body-base': ['clamp(0.85rem, 1.275vw, 0.95625rem)', { lineHeight: '1.65', letterSpacing: '0', fontWeight: '400' }],
				'body-sm': ['clamp(0.74375rem, 1.0625vw, 0.85rem)', { lineHeight: '1.7', letterSpacing: '0', fontWeight: '400' }],

				// UI sizes (Labels, boutons, navigation)
				'ui-base': ['0.796875rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
				'ui-sm': ['0.74375rem', { lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: '400' }],
				'ui-xs': ['0.6375rem', { lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: '400' }],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: {
					DEFAULT: 'hsl(var(--background))',
					luxury: 'hsl(var(--background-luxury))',
				},
				foreground: 'hsl(var(--foreground))',
				// Laboratory Luxe Color System 2025 - Ultra Light Ice Blue Theme
				'gold': {
					primary: 'hsl(var(--gold-primary))', // Ultra soft ice blue primary
					light: 'hsl(var(--gold-light))', // Almost white ice blue
					subtle: 'hsl(var(--gold-subtle))', // Barely visible ice tint
				},
				'ice': {
					blue: 'hsl(var(--ice-blue-primary))', // Ultra soft pastel ice blue
					light: 'hsl(var(--ice-blue-light))', // Almost white ice blue
					subtle: 'hsl(var(--ice-blue-subtle))', // Barely visible ice tint
				},
				'slate': {
					molecular: 'hsl(var(--slate-molecular))', // Very light molecular structure blue
					chrome: 'hsl(var(--slate-chrome))', // Very light chrome-like blue-gray
					steel: 'hsl(var(--steel-blue))', // Very light steel laboratory blue
				},
				'laboratory': {
					50: 'hsl(200 30% 99%)', // Pure white with barely visible ice blue
					75: 'hsl(200 27% 98%)', // Between 50 and 100, ultra soft ice white
					100: 'hsl(200 25% 97%)', // Almost white ice gray
					200: 'hsl(200 20% 94%)', // Ultra light ice gray
					300: 'hsl(200 20% 85%)', // Very light cool ice gray
					400: 'hsl(200 15% 75%)', // Very light mid tone ice slate
					500: 'hsl(200 20% 70%)', // Very light chrome-like blue-gray
					600: 'hsl(200 20% 60%)', // Light molecular structure
					700: 'hsl(210 25% 30%)', // Light laboratory charcoal
					800: 'hsl(210 20% 25%)',  // Light deep lab
					900: 'hsl(210 25% 20%)',  // Light laboratory dark
				},
				// Compatibility aliases - Ultra Light Ice Blue
				'brand': {
					500: 'hsl(var(--gold-primary))', // Ultra soft ice blue
					600: 'hsl(var(--gold-light))', // Almost white ice blue
				},
				'neutral': {
					50: 'hsl(200 30% 99%)', // Ultra soft ice white
					900: 'hsl(210 20% 25%)', // Light blue charcoal
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
				// Laboratory Luxe Gradients 2025 - Ice Blue Theme
				'gradient-molecular': 'var(--gradient-molecular)',
				'gradient-chrome': 'var(--gradient-chrome)',
				'gradient-ice': 'var(--gradient-ice)',
				'gradient-glass': 'var(--gradient-glass)',
				'gradient-premium': 'var(--gradient-premium)',
				'gradient-sophisticated': 'var(--gradient-sophisticated)',
				// Ultra Light Ice Blue laboratory-specific gradients
				'gradient-lab-chrome': 'linear-gradient(135deg, hsl(200 40% 85%), hsl(200 35% 90%))',
				'gradient-lab-ice': 'linear-gradient(135deg, hsl(200 50% 75%), hsl(200 40% 88%))',
				'gradient-molecular-flow': 'linear-gradient(135deg, hsl(200 50% 75% / 0.08), hsl(200 30% 96% / 0.04))',
				'gradient-liquid-chrome': 'linear-gradient(45deg, hsl(200 40% 85%), hsl(200 35% 90%), hsl(200 40% 85%))',
				// Ice blue brand gradients
				'gradient-gold': 'linear-gradient(135deg, hsl(var(--gold-primary)), hsl(var(--gold-light)))',
				'gradient-brand': 'linear-gradient(90deg, hsl(var(--gold-primary)), hsl(var(--gold-light)))',
				'gradient-champagne': 'linear-gradient(135deg, hsl(var(--gold-primary)), hsl(var(--gold-light)))',
			},
			boxShadow: {
				// Laboratory Equipment Shadows 2025
				'molecular': 'var(--shadow-molecular)',
				'chrome': 'var(--shadow-chrome)',
				'glass': 'var(--shadow-glass)',
				'laboratory-soft': '0 2px 8px hsl(210 25% 8% / 0.04)',
				'laboratory-medium': '0 8px 25px hsl(210 25% 8% / 0.08)',
				'laboratory-strong': '0 15px 35px hsl(210 25% 8% / 0.12)',
				'laboratory-deep': '0 20px 50px hsl(210 25% 8% / 0.15)',
				// Glow effects
				'glow-ice': 'var(--glow-ice)',
				'glow-molecular': 'var(--glow-molecular)',
				'glow-gold': 'var(--glow-gold)',
				// Preserved luxury shadows
				'champagne': '0 4px 20px hsl(var(--gold-primary) / 0.15)',
				'premium': 'var(--shadow-premium)',
				'luxury': 'var(--shadow-luxury)',
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
				// Molecular Laboratory Animations
				'molecular-float': {
					'0%, 100%': {
						transform: 'translateY(0px) translateX(0px) rotate(0deg)',
						opacity: '0.8'
					},
					'25%': {
						transform: 'translateY(-8px) translateX(4px) rotate(90deg)',
						opacity: '1'
					},
					'50%': {
						transform: 'translateY(-12px) translateX(-2px) rotate(180deg)',
						opacity: '0.9'
					},
					'75%': {
						transform: 'translateY(-6px) translateX(-4px) rotate(270deg)',
						opacity: '1'
					},
				},
				'droplet-fall': {
					'0%': {
						transform: 'translateY(-20px) scale(0.8)',
						opacity: '0'
					},
					'50%': {
						transform: 'translateY(10px) scale(1)',
						opacity: '1'
					},
					'100%': {
						transform: 'translateY(40px) scale(1.1)',
						opacity: '0'
					},
				},
				'chrome-flow': {
					'0%, 100%': {
						backgroundPosition: '0% 50%',
						filter: 'hue-rotate(0deg)'
					},
					'50%': {
						backgroundPosition: '100% 50%',
						filter: 'hue-rotate(10deg)'
					},
				},
				'ice-pulse': {
					'0%, 100%': {
						boxShadow: 'var(--glow-ice)',
						filter: 'brightness(1)'
					},
					'50%': {
						boxShadow: 'var(--glow-ice), var(--glow-molecular)',
						filter: 'brightness(1.1)'
					},
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
				'slide-infinite': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Laboratory Molecular Animations
				'molecular-float': 'molecular-float 8s ease-in-out infinite',
				'droplet-fall': 'droplet-fall 3s ease-in-out infinite',
				'chrome-flow': 'chrome-flow 6s ease-in-out infinite',
				'ice-pulse': 'ice-pulse 4s ease-in-out infinite',
				// Enhanced existing animations
				'shimmer': 'shimmer 3s ease-in-out infinite',
				'shimmer-text': 'shimmer-text 3s ease-in-out infinite',
				'float': 'float 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'shine': 'shine 4s ease-in-out infinite',
				'slide-infinite': 'slide-infinite 30s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
