export interface Question {
  id: number;
  text: string;
  yesScore: number;
  noScore: number;
}

export const questions55Plus: Question[] = [
  {
    id: 1,
    text: "Apakah Anda merasa puas dengan hidup Anda?",
    yesScore: 0,
    noScore: 1
  },
  {
    id: 2,
    text: "Apakah Anda mengurangi banyak kegiatan dan minat Anda?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 3,
    text: "Apakah Anda merasa hidup Anda kosong?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 4,
    text: "Apakah Anda sering merasa bosan?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 5,
    text: "Apakah Anda merasa semangat sebagian besar waktu?",
    yesScore: 0,
    noScore: 1
  },
  {
    id: 6,
    text: "Apakah Anda takut sesuatu yang buruk akan terjadi pada Anda?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 7,
    text: "Apakah Anda merasa bahagia sebagian besar waktu?",
    yesScore: 0,
    noScore: 1
  },
  {
    id: 8,
    text: "Apakah Anda sering merasa tidak berdaya?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 9,
    text: "Apakah Anda lebih suka tinggal di rumah daripada keluar dan melakukan hal-hal baru?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 10,
    text: "Apakah Anda merasa memiliki lebih banyak masalah dengan ingatan dibandingkan kebanyakan orang?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 11,
    text: "Apakah Anda pikir menyenangkan untuk hidup saat ini?",
    yesScore: 0,
    noScore: 1
  },
  {
    id: 12,
    text: "Apakah Anda merasa tidak berharga seperti keadaan Anda sekarang?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 13,
    text: "Apakah Anda merasa penuh energi?",
    yesScore: 0,
    noScore: 1
  },
  {
    id: 14,
    text: "Apakah Anda merasa situasi Anda sudah tidak ada harapan?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 15,
    text: "Apakah Anda pikir kebanyakan orang lebih baik keadaannya dibanding Anda?",
    yesScore: 1,
    noScore: 0
  }
];

export const interpretation55Plus = {
  normal: {
    minScore: 0,
    maxScore: 4,
    title: "Kondisi Normal",
    description: "Berdasarkan hasil skrining, Anda tidak menunjukkan tanda-tanda depresi yang signifikan. Teruslah menjaga kesehatan mental Anda dengan melakukan aktivitas positif yang Anda sukai.",
    recommendation: "Tetap jaga pola hidup sehat, olahraga ringan teratur sesuai kemampuan, dan pertahankan interaksi sosial dengan keluarga dan teman."
  },
  mild: {
    minScore: 5,
    maxScore: 8,
    title: "Gejala Ringan",
    description: "Berdasarkan hasil skrining, Anda menunjukkan beberapa tanda yang mungkin terkait dengan gejala depresi ringan.",
    recommendation: "Pertimbangkan untuk berbicara dengan keluarga atau teman dekat tentang perasaan Anda. Tetap aktif secara fisik dan sosial. Jika gejala berlanjut, diskusikan dengan dokter Anda pada kunjungan berikutnya."
  },
  moderate: {
    minScore: 9,
    maxScore: 11,
    title: "Gejala Sedang",
    description: "Berdasarkan hasil skrining, Anda menunjukkan beberapa tanda yang mungkin terkait dengan gejala depresi tingkat sedang.",
    recommendation: "Disarankan untuk berkonsultasi dengan dokter atau profesional kesehatan mental untuk evaluasi lebih lanjut. Mereka dapat membantu menentukan pendekatan yang tepat untuk meningkatkan kesehatan mental Anda."
  },
  severe: {
    minScore: 12,
    maxScore: 15,
    title: "Gejala Signifikan",
    description: "Berdasarkan hasil skrining, Anda menunjukkan beberapa tanda yang mungkin terkait dengan gejala depresi yang lebih serius.",
    recommendation: "Penting untuk segera berkonsultasi dengan dokter atau profesional kesehatan mental. Anda tidak perlu menghadapi ini sendiri, dan bantuan profesional dapat memberikan dukungan dan pengobatan yang efektif."
  }
};
