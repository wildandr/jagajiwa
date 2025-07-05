export interface Question {
  id: number;
  text: string;
  yesScore: number;
  noScore: number;
}

export const questionsUnder17: Question[] = [
  {
    id: 1,
    text: "Apakah kamu merasa puas dengan hidupmu?",
    yesScore: 0,
    noScore: 1
  },
  {
    id: 2,
    text: "Apakah kamu mengurangi banyak kegiatan dan minatmu?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 3,
    text: "Apakah kamu merasa hidupmu kosong?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 4,
    text: "Apakah kamu sering merasa bosan?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 5,
    text: "Apakah kamu merasa semangat sebagian besar waktu?",
    yesScore: 0,
    noScore: 1
  },
  {
    id: 6,
    text: "Apakah kamu takut sesuatu yang buruk akan terjadi padamu?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 7,
    text: "Apakah kamu merasa bahagia sebagian besar waktu?",
    yesScore: 0,
    noScore: 1
  },
  {
    id: 8,
    text: "Apakah kamu sering merasa tidak berdaya?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 9,
    text: "Apakah kamu lebih suka tinggal di rumah daripada keluar dan melakukan hal-hal baru?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 10,
    text: "Apakah kamu merasa memiliki lebih banyak masalah dengan ingatan dibandingkan teman-temanmu?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 11,
    text: "Apakah kamu pikir menyenangkan untuk hidup saat ini?",
    yesScore: 0,
    noScore: 1
  },
  {
    id: 12,
    text: "Apakah kamu merasa tidak berharga seperti keadaanmu sekarang?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 13,
    text: "Apakah kamu merasa penuh energi?",
    yesScore: 0,
    noScore: 1
  },
  {
    id: 14,
    text: "Apakah kamu merasa situasimu sudah tidak ada harapan?",
    yesScore: 1,
    noScore: 0
  },
  {
    id: 15,
    text: "Apakah kamu pikir kebanyakan orang lebih baik keadaannya dibanding kamu?",
    yesScore: 1,
    noScore: 0
  }
];

export const interpretationUnder17 = {
  normal: {
    minScore: 0,
    maxScore: 4,
    title: "Kondisi Normal",
    description: "Berdasarkan hasil skrining, kamu tidak menunjukkan tanda-tanda depresi yang signifikan. Teruslah menjaga kesehatan mentalmu dengan melakukan aktivitas positif yang kamu sukai.",
    recommendation: "Tetap jaga pola hidup sehat, olahraga teratur, dan komunikasikan perasaanmu dengan orang terdekat."
  },
  mild: {
    minScore: 5,
    maxScore: 8,
    title: "Gejala Ringan",
    description: "Berdasarkan hasil skrining, kamu menunjukkan beberapa tanda yang mungkin terkait dengan perasaan sedih atau tidak nyaman.",
    recommendation: "Cobalah berbicara dengan orang tua, guru, atau orang dewasa yang kamu percayai tentang perasaanmu. Jika perasaan ini berlanjut, mungkin akan membantu untuk berbicara dengan profesional kesehatan mental."
  },
  moderate: {
    minScore: 9,
    maxScore: 11,
    title: "Gejala Sedang",
    description: "Berdasarkan hasil skrining, kamu menunjukkan beberapa tanda yang mungkin terkait dengan perasaan sedih atau cemas yang lebih sering.",
    recommendation: "Sebaiknya kamu berbicara dengan orang tua atau wali tentang perasaanmu dan mempertimbangkan untuk berkonsultasi dengan profesional kesehatan mental untuk mendapatkan dukungan lebih lanjut."
  },
  severe: {
    minScore: 12,
    maxScore: 15,
    title: "Gejala Signifikan",
    description: "Berdasarkan hasil skrining, kamu menunjukkan beberapa tanda yang mungkin terkait dengan perasaan sedih yang lebih serius.",
    recommendation: "Penting untuk segera berbicara dengan orang tua atau wali dan mencari bantuan profesional kesehatan mental untuk mendapatkan dukungan yang tepat."
  }
};
