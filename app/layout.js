// import '@bootstrap/dist/css/bootstrap.min.css';
import Navbar from './(components)/navbar/navbar'
import { Inter } from 'next/font/google'
import Footer from './(components)/footer/footer';
export default function RootLayout({ children }) {
  return (
    
      <body >
        
        <Navbar/>
        {children}
        <Footer/>
        </body>
    
  )
}
