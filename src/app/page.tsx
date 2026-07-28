'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  // Contoh data listing untuk tampilan sementara
  const dummyListings = [
    {
      id: 1,
      title: 'Rumah Mewah di Kemang',
      price: '5.8 Miliar',
      location: 'Jakarta Selatan',
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 2,
      title: 'Apartemen Modern di Sudirman',
      price: '2.2 Miliar',
      location: 'Jakarta Pusat',
      image: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 3,
      title: 'Tanah Kavling di BSD City',
      price: '1.5 Miliar',
      location: 'Tangerang Selatan',
      image: 'https://images.unsplash.com/photo-1533108088831-1e0b2d839084?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    },
  ];

  return (
    <div className="flex-1">
      {/* Bagian Hero */}
      <section className="bg-primary text-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Temukan Properti Impianmu di Sini
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Dari mencari rumah hingga membangunnya, kami bantu seluruh prosesnya – lengkap dengan promosi listing dan jasa profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/listings" className="btn-primary text-center">
              Lihat Semua Properti
            </Link>
            <Link href="/post-ad" className="bg-white text-primary px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-center">
              Pasang Iklan Properti
            </Link>
          </div>
        </div>
      </section>

      {/* Bagian Pencarian Cepat */}
      <section className="py-8 px-4 md:px-8 -mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Cari Properti</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Tipe Properti</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option value="">Semua Tipe</option>
                  <option value="rumah">Rumah</option>
                  <option value="apartemen">Apartemen</option>
                  <option value="tanah">Tanah</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Lokasi</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option value="">Semua Lokasi</option>
                  <option value="jakarta">Jakarta</option>
                  <option value="bandung">Bandung</option>
                  <option value="surabaya">Surabaya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Harga Maksimal</label>
                <select className="w-full p-2 border border-gray-300 rounded-lg">
                  <option value="">Tanpa Batas</option>
                  <option value="500000000">500 Juta</option>
                  <option value="1000000000">1 Miliar</option>
                  <option value="2000000000">2 Miliar</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="btn-primary w-full">Cari Sekarang</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Listing Populer */}
      <section className="py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Properti Populer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyListings.map((listing) => (
              <div key={listing.id} className="card-listing">
                <div className="relative h-48 sm:h-60">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    className="object-cover"
                    priority={false}
                  />
                  <div className="absolute top-3 left-3 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {listing.price}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{listing.title}</h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {listing.location}
                  </p>
                  <Link href={`/listings/${listing.id}`} className="inline-block btn-primary">
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/listings" className="text-primary font-medium hover:underline flex items-center justify-center">
              Lihat Lebih Banyak Properti
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Bagian Layanan Kami */}
      <section className="py-12 px-4 md:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-2 text-center">Layanan Kami</h2>
          <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
            Seluruh kebutuhan dunia properti kamu ada di sini – dari A hingga Z
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pasang Iklan Properti</h3>
              <p className="text-gray-600">
                Dapatkan eksposur lebih banyak dengan fitur boost iklan ke berbagai platform sosial.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Jasa Konstruksi</h3>
              <p className="text-gray-600">
                Dapatkan jasa dari kontraktor, arsitek, hingga tenaga profesional lainnya.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Generator Konten</h3>
              <p className="text-gray-600">
                Buat deskripsi dan gambar properti lebih menarik dengan bantuan AI.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Layanan Notaris</h3>
              <p className="text-gray-600">
                Dapatkan rekomendasi notaris dan PPAT terpercaya untuk proses transaksi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
                  }
