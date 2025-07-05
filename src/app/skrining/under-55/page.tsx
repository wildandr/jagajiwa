'use client';

import Questionnaire from '@/components/skrining/Questionnaire';
import { questionsUnder55 } from '@/data/questionnaires/under55';

export default function Under55Questionnaire() {
  return (
    <Questionnaire
      questions={questionsUnder55}
      title="Skrining untuk Usia 18-54 Tahun"
      subtitle="Silakan jawab semua pertanyaan sesuai dengan perasaan dan pengalaman Anda selama 2 minggu terakhir."
      ageGroup="under-55"
    />
  );
}
