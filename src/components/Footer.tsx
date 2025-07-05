import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-teal-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3">JagaJiwa</h3>
            <p className="text-teal-100">
              Platform informasi kesehatan mental untuk membantu Anda dan orang terdekat.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Menu</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-teal-100 hover:text-white">Beranda</Link></li>
              <li><Link href="/skrining" className="text-teal-100 hover:text-white">Skrining Mandiri</Link></li>
              <li><Link href="/layanan" className="text-teal-100 hover:text-white">Pusat Layanan</Link></li>
              <li><Link href="/edukasi" className="text-teal-100 hover:text-white">Edukasi</Link></li>
              <li><Link href="/kontak" className="text-teal-100 hover:text-white">Kontak & Bantuan</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-3">Disclaimer</h3>
            <p className="text-teal-100">
              JagaJiwa adalah platform informasi dan tidak menggantikan konsultasi langsung dengan profesional kesehatan mental.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-teal-600 text-center text-teal-100">
          <p>&copy; {new Date().getFullYear()} JagaJiwa. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
