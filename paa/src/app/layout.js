import Link from 'next/link'
import './globals.css'
import Navbar from './Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
    
        {children}  <Navbar/></body>
    </html>
  )
}
