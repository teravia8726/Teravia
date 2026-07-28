import type { Metadata } from 'next'
 import './globals.css'
 export const metadata: Metadata = {
   title: 'Property Ecosystem - Tempat Cari & Jual Properti Terpercaya',
   description: 'Dapatkan properti impianmu dan dapatkan bantuan promosi, jasa konstruksi, hingga layanan notaris.',
 }
 export default function RootLayout({
   children,
 }: {
   children: React.ReactNode
 }) {
   return (
     <html lang="id">
       <body className="bg-gray-50 text-gray-800 min-h-screen flex flex-col">
         {/* Navbar bakal ada di sini nanti */}
         {children}
         {/* Footer bakal ada di sini nanti */}
       </body>
     </html>
   )
 }
