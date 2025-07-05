import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-teal-500 text-white py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-6xl font-bold mb-6">Kesehatan Mental untuk Semua</h2>
              <p className="text-lg mb-8 max-w-xl mx-auto lg:mx-0">
                Dapatkan skrining mandiri, informasi tentang pusat layanan kesehatan mental, dan edukasi terpercaya dalam satu platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  href="/skrining" 
                  className="bg-white text-teal-600 font-bold py-3 px-8 rounded-lg inline-block hover:bg-teal-50 transition-colors"
                >
                  Mulai Skrining
                </Link>
                <Link 
                  href="/layanan" 
                  className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-lg inline-block hover:bg-white hover:text-teal-500 transition-colors"
                >
                  Pusat Layanan
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-md h-96">
                <div className="absolute top-0 right-0 w-72 h-72 bg-teal-400 rounded-full opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-300 rounded-full opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white text-teal-500 rounded-xl p-8 shadow-xl">
                    <h3 className="text-2xl font-bold mb-4">Kesehatan mental adalah investasi</h3>
                    <p className="text-gray-600">Jaga kesehatan mental Anda dan orang-orang terdekat dengan informasi yang tepat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fitur Utama */}
      <section className="py-16 px-4 bg-teal-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">Fitur Utama</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Fitur 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-teal-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
              </div>
              <h3 className="text-xl text-gray-500 font-semibold text-center mb-2">Skrining Mandiri</h3>
              <p className="text-gray-600 text-center">
                Lakukan skrining awal untuk mengenali potensi masalah kesehatan mental
              </p>
              <div className="text-center mt-4">
                <Link href="/skrining" className="text-teal-500 font-medium hover:text-teal-700">
                  Mulai Skrining →
                </Link>
              </div>
            </div>

            {/* Fitur 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-teal-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <h3 className="text-xl text-gray-500 font-semibold text-center mb-2">Pusat Layanan</h3>
              <p className="text-gray-600 text-center">
                Temukan puskesmas dan layanan kesehatan mental resmi terdekat
              </p>
              <div className="text-center mt-4">
                <Link href="/layanan" className="text-teal-500 font-medium hover:text-teal-700">
                  Cari Layanan →
                </Link>
              </div>
            </div>

            {/* Fitur 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-teal-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <h3 className="text-xl text-gray-500 font-semibold text-center mb-2">Edukasi</h3>
              <p className="text-gray-600 text-center">
                Pelajari tentang kesehatan mental melalui artikel dan panduan
              </p>
              <div className="text-center mt-4">
                <Link href="/edukasi" className="text-teal-500 font-medium hover:text-teal-700">
                  Baca Artikel →
                </Link>
              </div>
            </div>

            {/* Fitur 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-teal-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-teal-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
              </div>
              <h3 className="text-xl text-gray-500 font-semibold text-center mb-2">Kontak & Bantuan</h3>
              <p className="text-gray-600 text-center">
                Akses kontak penting dan jawaban atas pertanyaan umum
              </p>
              <div className="text-center mt-4">
                <Link href="/kontak" className="text-teal-500 font-medium hover:text-teal-700">
                  Lihat Kontak →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tentang Kami */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-teal-700">Tentang JagaJiwa</h2>
              <p className="text-gray-700 mb-4">
                JagaJiwa adalah platform informasi kesehatan mental yang bertujuan untuk membantu masyarakat Indonesia mendapatkan akses ke informasi, sumber daya, dan layanan kesehatan mental yang terpercaya.
              </p>
              <p className="text-gray-700 mb-4">
                Kami percaya bahwa kesehatan mental sama pentingnya dengan kesehatan fisik, dan setiap orang berhak mendapatkan dukungan yang mereka butuhkan.
              </p>
              <p className="text-gray-700 mb-6">
                Dengan JagaJiwa, kami berupaya mengurangi stigma seputar masalah kesehatan mental dan memudahkan akses ke sumber daya yang dapat membantu.
              </p>
              <div>
                <Link 
                  href="/edukasi" 
                  className="bg-teal-500 text-white font-medium py-2 px-6 rounded-lg hover:bg-teal-600 transition-colors inline-block"
                >
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 bg-teal-50 p-8 rounded-lg border border-teal-100">
              <h3 className="text-xl font-semibold mb-4 text-teal-700">Disclaimer</h3>
              <p className="text-gray-700 mb-4">
                JagaJiwa adalah platform informasi dan tidak menggantikan konsultasi langsung dengan profesional kesehatan mental.
              </p>
              <p className="text-gray-700 mb-4">
                Hasil skrining bukan diagnosis medis dan hanya bersifat indikatif. Jika Anda mengalami masalah kesehatan mental yang serius, segera hubungi profesional kesehatan mental atau layanan darurat.
              </p>
              <p className="text-gray-700 mb-4">
                Selalu konsultasikan dengan profesional kesehatan yang kompeten untuk diagnosis dan rencana perawatan yang sesuai dengan kebutuhan spesifik Anda.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
