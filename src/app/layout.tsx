import type { Metadata } from 'next'
 import Link from 'next/link'
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
         {/* NAVBAR */}
         <header className="bg-white shadow-sm sticky top-0 z-50">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex justify-between items-center py-4">
               {/* Logo */}
               <Link href="/" className="flex items-center space-x-2">
                 <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                 </svg>
                 <span className="text-xl font-bold text-primary">PropertiKu</span>
               </Link>
               {/* Menu Desktop */}
               <nav className="hidden md:flex items-center space-x-8">
                 <Link href="/" className="text-gray-700 hover:text-primary font-medium transition-colors">Beranda</Link>
                 <Link href="/listings" className="text-gray-700 hover:text-primary font-medium transition-colors">Semua Properti</Link>
                 <Link href="/services" className="text-gray-700 hover:text-primary font-medium transition-colors">Layanan Kami</Link>
                 <Link href="/partners" className="text-gray-700 hover:text-primary font-medium transition-colors">Mitra Kami</Link>
                 <Link href="/about" className="text-gray-700 hover:text-primary font-medium transition-colors">Tentang Kami</Link>
               </nav>
               {/* Tombol Login & Pasang Iklan */}
               <div className="flex items-center space-x-4">
                 <Link href="/login" className="text-gray-700 hover:text-primary font-medium transition-colors hidden sm:block">Masuk</Link>
                 <Link href="/register" className="text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors hidden sm:block">Daftar</Link>
                 <Link href="/post-ad" className="btn-primary hidden sm:block">Pasang Iklan</Link>
                 {/* Menu Mobile */}
                 <button className="md:hidden text-gray-700">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                   </svg>
                 </button>
               </div>
             </div>
           </div>
         </header>
         {/* KONTEN UTAMA */}
         {children}
         {/* FOOTER */}
         <footer className="bg-gray-800 text-white py-12 mt-12">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div>
                 <div className="flex items-center space-x-2 mb-4">
                   <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                   <span className="text-xl font-bold">PropertiKu</span>
                 </div>
                 <p className="text-gray-300 mb-4">
                   Ekosistem properti terlengkap untuk kebutuhan rumah, tanah, dan konstruksi Anda.
                 </p>
                 <div className="flex space-x-4">
                   <a href="#" className="text-gray-300 hover:text-white transition-colors">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                     </svg>
                   </a>
                   <a href="#" className="text-gray-300 hover:text-white transition-colors">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.059 10.059 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                     </svg>
                   </a>
                   <a href="#" className="text-gray-300 hover:text-white transition-colors">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                     </svg>
                   </a>
                 </div>
               </div>
               <div>
                 <h3 className="text-lg font-semibold mb-4">Layanan</h3>
                 <ul className="space-y-2">
                   <li><Link href="/post-ad" className="text-gray-300 hover:text-white transition-colors">Pasang Iklan Properti</Link></li>
                   <li><Link href="/services/construction" className="text-gray-300 hover:text-white transition-colors">Jasa Konstruksi</Link></li>
                   <li><Link href="/services/ai" className="text-gray-300 hover:text-white transition-colors">AI Generator Konten</Link></li>
                   <li><Link href="/services/notaris" className="text-gray-300 hover:text-white transition-colors">Layanan Notaris</Link></li>
                   <li><Link href="/services/boost" className="text-gray-300 hover:text-white transition-colors">Boost Iklan Sosial</Link></li>
                 </ul>
               </div>
               <div>
                 <h3 className="text-lg font-semibold mb-4">Tautan Bermanfaat</h3>
                 <ul className="space-y-2">
                   <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">Tentang Kami</Link></li>
                   <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
                   <li><Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
                   <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Kebijakan Privasi</Link></li>
                   <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Hubungi Kami</Link></li>
                 </ul>
               </div>
               <div>
                 <h3 className="text-lg font-semibold mb-4">Hubungi Kami</h3>
                 <ul className="space-y-3">
                   <li className="flex items-start">
                     <svg className="w-5 h-5 text-gray-300 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                     </svg>
                     <span className="text-gray-300">info@propertiku.id</span>
                   </li>
                   <li className="flex items-start">
                     <svg className="w-5 h-5 text-gray-300 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                     </svg>
                     <span className="text-gray-300">+62 812 3456 7890</span>
                   </li>
                   <li className="flex items-start">
                     <svg className="w-5 h-5 text-gray-300 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                     <span className="text-gray-300">Jl. Properti No. 123, Jakarta Selatan 12345</span>
                   </li>
                 </ul>
               </div>
             </div>
             <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
               <p>&copy; {new Date().getFullYear()} PropertiKu. Semua Hak Dilindungi.</p>
             </div>
           </div>
         </footer>
       </body>
     </html>
   )
 }
