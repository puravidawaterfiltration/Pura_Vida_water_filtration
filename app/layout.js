import './globals.css'

export const metadata = {
  title: 'Pura Vida Water Filtration',
  description: 'Premium custom water filtration solutions.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}