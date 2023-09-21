import Header from '@/components/Header'
import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import { Roboto } from 'next/font/google'
import Footer from '@/components/Footer'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Portfollio',
  description: 'Web Developer',
}


export default function Layout({ children }) {
  return (
    <html lang="en"> 
      <body className={roboto.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body> 
    </html>
  )
}


 