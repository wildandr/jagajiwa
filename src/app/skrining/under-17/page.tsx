'use client';

import Questionnaire from '@/components/skrining/Questionnaire';
import { questionsUnder17 } from '@/data/questionnaires/under17';

export default function Under17Questionnaire() {
  return (
    <Questionnaire
      questions={questionsUnder17}
      title="Skrining untuk Usia 2-17 Tahun"
      subtitle="Silakan jawab semua pertanyaan sesuai dengan perasaan dan pengalamanmu selama seminggu terakhir."
      ageGroup="under-17"
    />
  );
}
