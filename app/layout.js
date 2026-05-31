import './globals.css'

export const metadata = {
  title: 'Pura Vida Water Filtration | Custom Water Treatment in South Florida',
  description: 'Premium custom water filtration, water softening, reverse osmosis, well water, municipal water, commercial and residential treatment in Palm Beach County, Martin County, and Okeechobee County.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}