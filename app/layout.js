import Header from '@/components/Header'
import './globals.css'
import { Kanit } from 'next/font/google'
import Footer from '@/components/Footer'
import { AOSInit } from '@/components/aos'
 
const roboto = Kanit({
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
    <AOSInit/>
      <body className={roboto.className}>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body> 
    </html>
  )
}


 