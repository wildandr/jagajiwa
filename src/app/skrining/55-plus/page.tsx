'use client';

import Questionnaire from '@/components/skrining/Questionnaire';
import { questions55Plus } from '@/data/questionnaires/over55';

export default function Plus55Questionnaire() {
  return (
    <Questionnaire
      questions={questions55Plus}
      title="Skrining untuk Usia 55 Tahun ke Atas"
      subtitle="Silakan jawab semua pertanyaan sesuai dengan perasaan dan pengalaman Anda selama seminggu terakhir."
      ageGroup="55-plus"
    />
  );
}
