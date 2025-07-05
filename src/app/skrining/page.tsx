'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Skrining() {
  const [age, setAge] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const ageNum = parseInt(age);
    
    if (isNaN(ageNum) || ageNum <= 0) {
      setError('Silakan masukkan umur yang valid');
      return;
    }

    if (ageNum < 2) {
      setError('Skrining ini ditujukan untuk usia 2 tahun ke atas');
      return;
    }
    
    // Arahkan ke halaman kuesioner yang sesuai berdasarkan umur
    if (ageNum <= 17) {
      router.push('/skrining/under-17');
    } else if (ageNum < 55) {
      router.push('/skrining/under-55');
    } else {
      router.push('/skrining/55-plus');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-teal-700">Skrining Mandiri</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Skrining ini membantu Anda mengenali potensi masalah kesehatan mental.
          Hasil skrining bukan diagnosis medis dan hanya bersifat indikatif.
        </p>
      </div>

      {/* Form umur */}
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6 text-teal-700">Masukkan Umur Anda</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="age" className="block text-gray-700 mb-2">
              Umur (tahun)
            </label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-teal-700 placeholder-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-700"
              placeholder="Masukkan umur"
              min="1"
              required
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-colors"
          >
            Lanjutkan
          </button>
        </form>

        <div className="mt-8 p-4 bg-teal-50 rounded-lg border border-teal-100">
          <h3 className="text-lg font-medium mb-2 text-teal-700">Catatan Penting</h3>
          <ul className="text-gray-700 list-disc pl-5 space-y-1">
            <li>Skrining ini bukan pengganti konsultasi dengan profesional kesehatan mental.</li>
            <li>Hasil skrining bersifat indikatif dan sebaiknya didiskusikan dengan profesional.</li>
            <li>Semua data yang dimasukkan hanya disimpan sementara dan tidak dikirim ke server.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
