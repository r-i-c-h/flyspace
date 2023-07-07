import NavMenu from '@/components/nav/NavMenu'
import './globals.css'
import { Inter } from 'next/font/google'
import AuthProvider from './AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flyspace',
  description: 'A Social Space that is Hip and Fly',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="container"> */}
        <AuthProvider>
          <NavMenu />
          <main>{children}</main>
        </AuthProvider>
        {/* </div> */}
      </body>
    </html>
  )
}
