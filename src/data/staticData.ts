export interface ContactInfo {
  name: string;
  type: string;
  phone: string;
  website?: string;
  description: string;
}

export const emergencyContacts: ContactInfo[] = [
  {
    name: "Hotline Bunuh Diri",
    type: "Darurat",
    phone: "119",
    website: "https://www.kemkes.go.id",
    description: "Layanan darurat untuk mencegah bunuh diri"
  },
  {
    name: "Kemenkes - Sehat Jiwa",
    type: "Pemerintah",
    phone: "021-500567",
    website: "https://sehat-jiwa.kemkes.go.id/",
    description: "Layanan informasi dan bantuan kesehatan mental oleh Kementerian Kesehatan"
  },
  {
    name: "Into The Light Indonesia",
    type: "LSM",
    phone: "021-1500454",
    website: "https://www.intothelightid.org",
    description: "Organisasi nirlaba untuk pencegahan bunuh diri"
  }
];

export interface CounselingService {
  name: string;
  address: string;
  types: string[];
  phone: string;
  hours: string;
  payment: string[];
  description: string;
  location?: string;
}

export const counselingServices: CounselingService[] = [
  {
    name: "Puskesmas Teladan",
    address: "Jl. Contoh No. 123, Jakarta",
    types: ["Umum", "Keluarga"],
    phone: "021-1234567",
    hours: "Senin-Jumat, 08.00-16.00",
    payment: ["BPJS", "Gratis"],
    description: "Layanan konseling psikologis di puskesmas"
  },
  {
    name: "RSUD Contoh",
    address: "Jl. Rumah Sakit No. 45, Jakarta",
    types: ["Umum", "Keluarga", "Anak", "Dewasa"],
    phone: "021-7654321",
    hours: "Senin-Sabtu, 08.00-20.00",
    payment: ["BPJS", "Asuransi", "Bayar Sendiri"],
    description: "Layanan konseling dan psikiater di rumah sakit umum daerah"
  },
  {
    name: "Biro Psikologi Sehat Mental",
    address: "Jl. Psikologi No. 78, Jakarta",
    types: ["Umum", "Keluarga", "Anak", "Dewasa", "Pernikahan"],
    phone: "021-9876543",
    hours: "Senin-Minggu, 09.00-18.00",
    payment: ["Asuransi", "Bayar Sendiri"],
    description: "Biro psikologi profesional dengan layanan konseling komprehensif"
  }
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "Apa perbedaan psikolog, psikiater, dan konselor?",
    answer: "Psikolog adalah profesional dengan latar belakang ilmu psikologi yang dapat melakukan asesmen dan konseling. Psikiater adalah dokter spesialis yang dapat mendiagnosis dan memberikan resep obat. Konselor adalah profesional yang membantu melalui konseling tanpa kewenangan medis atau diagnosis klinis."
  },
  {
    question: "Apakah hasil skrining ini akurat?",
    answer: "Hasil skrining di JagaJiwa bersifat indikatif dan bukan diagnosis medis. Skrining ini dirancang sebagai alat bantu awal untuk mengenali potensi masalah kesehatan mental yang perlu ditindaklanjuti dengan konsultasi profesional."
  },
  {
    question: "Apakah konsultasi harus tatap muka?",
    answer: "Tidak selalu. Saat ini tersedia beragam layanan konsultasi psikologi baik secara tatap muka langsung maupun daring (online). Kedua bentuk konsultasi memiliki kelebihan dan keterbatasan masing-masing."
  },
  {
    question: "Bagaimana jika saya tidak punya BPJS?",
    answer: "Jika tidak memiliki BPJS, Anda tetap dapat mengakses layanan psikologi melalui:\n1) Konsultasi berbayar di biro psikologi\n2) Layanan daring berbayar\n3) Layanan gratis terbatas dari LSM atau program pemerintah tertentu\n4) Asuransi kesehatan lainnya jika tersedia."
  }
];
