import { Topbar } from '@/components/Topbar';
import { Player } from '@/components/Player';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        {children}
        <Player />
      </body>
    </html>
  )
}
