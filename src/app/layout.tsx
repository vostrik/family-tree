export const metadata = {
  title: 'Family Tree',
  description: 'Family knowledge base',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="tree"></div>
        {children}
      </body>
    </html>
  )
}
