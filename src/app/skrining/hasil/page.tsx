'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { interpretationUnder17 } from '@/data/questionnaires/under17';
import { interpretationUnder55 } from '@/data/questionnaires/under55';
import { interpretation55Plus } from '@/data/questionnaires/over55';

export default function Hasil() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState<boolean>(true);
  
  const score = parseInt(searchParams.get('score') || '0');
  const ageGroup = searchParams.get('ageGroup') || '';
  
  useEffect(() => {
    if (isNaN(score) || !ageGroup) {
      router.push('/skrining');
    } else {
      setLoading(false);
    }
  }, [score, ageGroup, router]);
  
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  let interpretation;
  let resultTitle = '';
  let resultDescription = '';
  let resultRecommendation = '';
  let severity = '';

  // Tentukan interpretasi berdasarkan kelompok umur
  switch (ageGroup) {
    case 'under-17':
      interpretation = interpretationUnder17;
      break;
    case 'under-55':
      interpretation = interpretationUnder55;
      break;
    case '55-plus':
      interpretation = interpretation55Plus;
      break;
    default:
      interpretation = interpretationUnder55; // Default fallback
  }

  // Tentukan tingkat keparahan berdasarkan skor
  if (score <= 4) {
    resultTitle = interpretation.normal.title;
    resultDescription = interpretation.normal.description;
    resultRecommendation = interpretation.normal.recommendation;
    severity = 'normal';
  } else if (score <= 8) {
    resultTitle = interpretation.mild.title;
    resultDescription = interpretation.mild.description;
    resultRecommendation = interpretation.mild.recommendation;
    severity = 'mild';
  } else if (score <= 11) {
    resultTitle = interpretation.moderate.title;
    resultDescription = interpretation.moderate.description;
    resultRecommendation = interpretation.moderate.recommendation;
    severity = 'moderate';
  } else {
    resultTitle = interpretation.severe.title;
    resultDescription = interpretation.severe.description;
    resultRecommendation = interpretation.severe.recommendation;
    severity = 'severe';
  }
  
  // Tentukan warna berdasarkan tingkat keparahan
  let cardColorClass = '';
  let scoreColorClass = '';
  
  switch (severity) {
    case 'normal':
      cardColorClass = 'bg-green-50 border-green-200';
      scoreColorClass = 'bg-green-500';
      break;
    case 'mild':
      cardColorClass = 'bg-yellow-50 border-yellow-200';
      scoreColorClass = 'bg-yellow-500';
      break;
    case 'moderate':
      cardColorClass = 'bg-orange-50 border-orange-200';
      scoreColorClass = 'bg-orange-500';
      break;
    case 'severe':
      cardColorClass = 'bg-red-50 border-red-200';
      scoreColorClass = 'bg-red-500';
      break;
    default:
      cardColorClass = 'bg-gray-50 border-gray-200';
      scoreColorClass = 'bg-gray-500';
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-teal-700">Hasil Skrining</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Berikut adalah hasil skrining kesehatan mental Anda. Ingat bahwa ini hanya bersifat indikatif dan bukan diagnosis medis.
        </p>
      </div>

      {/* Score display */}
      <div className="max-w-2xl mx-auto mb-8 flex justify-center">
        <div className={`h-32 w-32 rounded-full ${scoreColorClass} flex items-center justify-center text-white`}>
          <div className="text-center">
            <div className="text-3xl font-bold">{score}</div>
            <div className="text-sm">dari 15</div>
          </div>
        </div>
      </div>

      {/* Result card */}
      <div className={`max-w-2xl mx-auto ${cardColorClass} p-8 rounded-lg shadow-md border`}>
        <h2 className="text-2xl font-semibold mb-4 text-center">{resultTitle}</h2>
        <p className="text-gray-700 mb-6">{resultDescription}</p>
        
        <div className="bg-white p-4 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Rekomendasi:</h3>
          <p className="text-gray-700">{resultRecommendation}</p>
        </div>

        <div className="text-sm text-gray-500 italic">
          Catatan: Hasil skrining ini valid pada tanggal {new Date().toLocaleDateString('id-ID')} dan bersifat sementara.
        </div>
      </div>

      {/* Action buttons */}
      <div className="max-w-2xl mx-auto mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          href="/layanan" 
          className="bg-teal-500 text-white font-medium py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors text-center"
        >
          Cari Layanan Terdekat
        </Link>
        <Link 
          href="/skrining" 
          className="bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors text-center"
        >
          Skrining Lagi
        </Link>
      </div>

      {/* Disclaimer */}
      <div className="max-w-2xl mx-auto mt-8 p-4 bg-teal-50 rounded-lg border border-teal-100">
        <h3 className="font-semibold mb-2">Disclaimer</h3>
        <p className="text-gray-700 text-sm mb-2">
          Hasil skrining ini tidak menggantikan diagnosis profesional. Jika Anda mengalami masalah kesehatan mental, 
          sebaiknya berkonsultasi dengan profesional kesehatan mental seperti psikolog atau psikiater.
        </p>
        <p className="text-gray-700 text-sm">
          Semua data yang Anda masukkan dalam skrining ini tidak disimpan secara permanen dan tidak dikirim ke server.
        </p>
      </div>
    </div>
  );
}
