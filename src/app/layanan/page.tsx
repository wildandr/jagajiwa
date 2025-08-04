'use client';

import Link from 'next/link';
import { useState } from 'react';

interface Psychologist {
  name: string;
  expertise: string;
}

interface Facility {
  name: string;
  address: string;
  mapLink: string;
  psychologists: Psychologist[];
}

interface OnlineService {
  name: string;
  type: string;
  link: string;
  scheduleLink?: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function Layanan() {
  const [activeTab, setActiveTab] = useState<'offline' | 'online' | 'bpjs' | 'contact'>('offline');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const facilities: Facility[] = [
    {
      name: "RSJD Dr. RM. Soedjarwadi",
      address: "Jl. Ki Pandanaran No.KM. 2, Senden, Danguran, Kec. Klaten Sel., Kabupaten Klaten, Jawa Tengah 57426",
      mapLink: "https://maps.app.goo.gl/wgEsfyXWujxQ8cPe7",
      psychologists: [
        {
          name: "Ima Santika Jayanti, M.Psi., Psikolog",
          expertise: "Klinis anak, remaja, dan dewasa"
        },
        {
          name: "Dra. Sukarsini, M.Si., Psikolog",
          expertise: "Klinis anak, remaja, dan dewasa"
        },
        {
          name: "Murtiningtyas, S.Psi, M.Psi., Psikolog",
          expertise: "Klinis anak dan remaja"
        },
        {
          name: "Yulia Eka Sari Maria Goretti, S.Psi., M.Psi., Psikolog",
          expertise: "Klinis anak dan remaja"
        },
        {
          name: "Etik Dwi Wulandari, S.Psi, M.Psi., Psikolog",
          expertise: "Klinis dewasa dan remaja"
        },
        {
          name: "Martiani, M.Psi., Psikolog",
          expertise: "Klinis remaja dan dewasa"
        },
        {
          name: "Asis Muslimin, S.Psi., M.Psi., Psikolog",
          expertise: "Klinis dewasa"
        }
      ]
    }
  ];

  const onlineServices: OnlineService[] = [
    {
      name: "Telekonseling Ikatan Psikologi Klinis Indonesia (IPK Indonesia)",
      type: "Gratis dan Berbayar",
      link: "https://api.whatsapp.com/send/?phone=6281125010666&text&type=phone_number&app_absent=0",
      scheduleLink: "https://sahabat.ipkindonesia.or.id/jadwal-telekonseling/"
    },
    {
      name: "BERBAGICERITA.ID",
      type: "Gratis dan Berbayar",
      link: "https://berbagicerita.id/web/"
    }
  ];

  const bpjsSteps = [
    {
      title: "Kunjungi Faskes Tingkat Pertama (FKTP)",
      content: "Apabila sudah terdaftar dalam program BPJS Kesehatan, kunjungan ke FKTP dapat dilakukan. FKTP ini dapat berupa klinik, Puskesmas, RS Kelas D Pratama, hingga praktek dokter umum. Apabila di faskes tingkat pertama terdapat layanan poli jiwa, konsultasi dapat langsung dilakukan. Jika tidak ada, FKTP dapat memberikan surat rujukan ke pelayanan poli jiwa di faskes lanjutan."
    },
    {
      title: "Pemeriksaan di Faskes Rujukan",
      content: "Jika kondisi kesehatan mental tidak bisa ditangani di Faskes Tingkat Pertama (FKTP), pasien akan dirujuk ke rumah sakit yang memiliki layanan poli jiwa dan bekerja sama dengan BPJS Kesehatan, seperti RSUD atau Rumah Sakit Jiwa. Pastikan selalu membawa surat rujukan dari Faskes 1 saat melakukan konsultasi. Proses administrasi BPJS biasanya dilakukan di awal, namun tiap rumah sakit bisa punya aturan berbeda soal alurnya. Kalau kondisi pasien memungkinkan untuk rawat jalan, psikolog akan menjadwalkan sesi konsultasi lanjutan secara berkala sampai kondisinya membaik. Tapi jika gangguan mental tergolong berat, pasien akan dirujuk ke psikiater. Psikiater memiliki kewenangan khusus, termasuk memberikan resep obat dan melakukan terapi medis lanjutan sesuai kebutuhan pasien."
    },
    {
      title: "Sesi Konsultasi",
      content: "Setelah proses administrasi selesai, pasien dapat melakukan konsultasi di Poli Jiwa. Biasanya psikolog akan menanyakan sejumlah pertanyaan mengenai keluhan yang dialami dan meminta pasien menjalankan tes. Hasilnya akan digunakan untuk mengidentifikasi gangguan psikologis yang dimiliki serta memberikan diagnosis. Selanjutnya, psikolog dapat menjadwalkan sesi lanjutan apabila diperlukan. Pasien yang memerlukan obat akan dirujuk ke psikiater untuk mendapatkan resep obat."
    },
    {
      title: "Pengambilan Obat",
      content: "Pasien dapat mengambil obat sesuai resep dari psikiater secara gratis. Pasien perlu mematuhi dosis dan anjuran dari psikiater serta tidak diperbolehkan menghentikan pengobatan tanpa persetujuan psikiater. Pengobatan akan dilakukan pada jangka waktu tertentu dengan melihat perkembangan pasien hingga pasien dinyatakan stabil."
    }
  ];

  const emergencyContacts = [
    {
      name: "Hotline Kesehatan Mental",
      contact: "119 ext. 9"
    },
    {
      name: "Layanan Sehat Jiwa Kemenkes",
      contact: "0811-1500-567"
    },
    {
      name: "Layanan Sehat Jiwa WhatsApp",
      contact: "62-811-1500-567"
    },
    {
      name: "Layanan Kesehatan Jiwa Kemenkes",
      contact: "sehatjiwa.kemkes.go.id"
    },
    {
      name: "IPKJI (Ikatan Psikolog Klinis Indonesia)",
      contact: "www.ipkji.org"
    }
  ];

  const faqs: FAQ[] = [
    {
      question: "Apa perbedaan psikolog, psikiater, dan konselor?",
      answer: "Psikolog adalah profesional dengan gelar pendidikan tinggi dalam psikologi yang berfokus pada asesmen, diagnosis, dan terapi non-medis. Psikiater adalah dokter spesialis yang dapat meresepkan obat dan melakukan intervensi medis. Konselor biasanya memiliki pelatihan khusus dalam konseling untuk membantu orang mengatasi masalah tertentu, tetapi umumnya tidak melakukan diagnosis klinis."
    },
    {
      question: "Apakah hasil skrining ini akurat?",
      answer: "Hasil skrining bersifat indikatif dan bukan diagnosis formal. Skrining dirancang sebagai alat bantu awal untuk mengenali potensi masalah kesehatan mental, tetapi tidak menggantikan evaluasi klinis oleh profesional kesehatan mental."
    },
    {
      question: "Apakah konsultasi harus tatap muka?",
      answer: "Tidak selalu. Saat ini tersedia layanan konsultasi daring (online) yang dapat diakses melalui platform tertentu. Beberapa situasi mungkin lebih efektif ditangani secara tatap muka, namun konsultasi daring bisa menjadi alternatif yang baik terutama untuk tahap awal atau tindak lanjut rutin."
    },
    {
      question: "Bagaimana jika saya tidak punya BPJS?",
      answer: "Jika Anda tidak memiliki BPJS, masih ada beberapa opsi: (1) Konsultasi di puskesmas dengan biaya yang relatif terjangkau, (2) Mencari layanan konsultasi gratis atau bersubsidi yang sering diadakan oleh organisasi sosial atau institusi pendidikan, (3) Menggunakan layanan daring yang menawarkan konsultasi dengan biaya yang lebih rendah, atau (4) Menghubungi hotline kesehatan mental yang tersedia secara gratis."
    }
  ];

  const toggleFAQ = (index: number) => {
    if (activeFAQ === index) {
      setActiveFAQ(null);
    } else {
      setActiveFAQ(index);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-teal-700">Info Layanan Psikologis</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Informasi tentang layanan psikologi yang tersedia di Kabupaten Klaten dan sekitarnya,
          termasuk layanan daring serta panduan mengakses layanan dengan BPJS.
        </p>
      </div>
      
      {/* Tab Navigation */}
      <div className="flex flex-wrap border-b border-gray-200 mb-8">
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'offline' ? 'border-b-2 border-teal-500 text-teal-600' : 'text-gray-500 hover:text-teal-500'}`}
          onClick={() => setActiveTab('offline')}
        >
          Layanan Tatap Muka
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'online' ? 'border-b-2 border-teal-500 text-teal-600' : 'text-gray-500 hover:text-teal-500'}`}
          onClick={() => setActiveTab('online')}
        >
          Layanan Daring
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'bpjs' ? 'border-b-2 border-teal-500 text-teal-600' : 'text-gray-500 hover:text-teal-500'}`}
          onClick={() => setActiveTab('bpjs')}
        >
          Panduan BPJS
        </button>
        <button 
          className={`px-4 py-2 font-medium ${activeTab === 'contact' ? 'border-b-2 border-teal-500 text-teal-600' : 'text-gray-500 hover:text-teal-500'}`}
          onClick={() => setActiveTab('contact')}
        >
          Kontak & FAQ
        </button>
      </div>
      
      {/* Tab Content */}
      <div className="max-w-4xl mx-auto">
        
        {/* Offline Services */}
        {activeTab === 'offline' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-teal-700">Daftar Layanan Psikologi Klinis di Kabupaten Klaten</h2>
            
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-2 text-teal-700">{facility.name}</h3>
                <p className="text-gray-600 mb-2">{facility.address}</p>
                <a 
                  href={facility.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:underline mb-4 inline-block"
                >
                  Lihat di Google Maps
                </a>
                
                <h4 className="text-lg font-medium mt-4 mb-3 text-teal-700">Daftar Psikolog dan Minat Keahliannya:</h4>
                <div className="space-y-3">
                  {facility.psychologists.map((psychologist, idx) => (
                    <div key={idx} className="bg-gray-50 p-3 rounded">
                      <p className="font-medium text-black">{psychologist.name}</p>
                      <p className="text-sm text-gray-600">Minat Keahlian: {psychologist.expertise}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Online Services */}
        {activeTab === 'online' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-teal-700">Daftar Layanan Psikologi Klinis secara Daring</h2>
            
            <div className="space-y-6">
              {onlineServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2 text-teal-700">{service.name}</h3>
                  <p className="text-gray-600 mb-3">Tipe Layanan: {service.type}</p>
                  
                  <div className="space-y-2">
                    <a 
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:underline block"
                    >
                      {service.scheduleLink ? "Pendaftaran melalui tautan ini" : "Informasi dapat diakses pada tautan ini"}
                    </a>
                    
                    {service.scheduleLink && (
                      <a 
                        href={service.scheduleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:underline block"
                      >
                        Jadwal dapat diakses pada tautan ini
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* BPJS Guide */}
        {activeTab === 'bpjs' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-teal-700">Cara Mengakses Layanan Psikologi & Psikiatri Menggunakan BPJS</h2>
            
            <div className="space-y-6">
              {bpjsSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start">
                    <div className="h-8 w-8 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold flex-shrink-0 mr-4">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-teal-700">{step.title}</h3>
                      <p className="text-gray-600">{step.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Contact & FAQ */}
        {activeTab === 'contact' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-teal-700">Kontak & Bantuan</h2>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-700">Layanan Darurat & Kontak Penting</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded">
                    <p className="font-medium text-black">{contact.name}</p>
                    <p className="text-teal-600">{contact.contact}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-teal-700">Pertanyaan Umum (FAQ)</h3>
              
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      className="w-full p-4 text-left font-medium flex justify-between items-center focus:outline-none text-black"
                      onClick={() => toggleFAQ(index)}
                    >
                      {faq.question}
                      <svg
                        className={`w-5 h-5 transition-transform ${activeFAQ === index ? 'transform rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {activeFAQ === index && (
                      <div className="p-4 border-t border-gray-200 bg-gray-50">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* CTA Section */}
      <div className="max-w-4xl mx-auto mt-12 p-6 bg-teal-50 rounded-lg text-center">
        <h2 className="text-xl font-semibold mb-3 text-teal-700">Perlukan bantuan segera?</h2>
        <p className="text-gray-600 mb-4">
          Jika Anda atau seseorang yang Anda kenal memerlukan bantuan segera terkait kesehatan mental, 
          silakan hubungi layanan darurat atau konsultasikan dengan profesional kesehatan mental.
        </p>
        <Link 
          href="/skrining" 
          className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
        >
          Lakukan Skrining Mandiri
        </Link>
      </div>
    </div>
  );
}
