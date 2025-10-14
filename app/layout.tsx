import React from 'react'

export const metadata = {
  title: 'Mindcraft'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
