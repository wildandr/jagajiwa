'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Question } from '@/data/questionnaires/under17';

interface QuestionnaireProps {
  questions: Question[];
  title: string;
  subtitle: string;
  ageGroup: string;
}

export default function Questionnaire({ questions, title, subtitle, ageGroup }: QuestionnaireProps) {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, 'yes' | 'no' | null>>({});
  const [score, setScore] = useState<number>(0);
  const router = useRouter();

  const handleAnswer = (answer: 'yes' | 'no') => {
    const question = questions[currentQuestion];
    const answerScore = answer === 'yes' ? question.yesScore : question.noScore;
    
    const newAnswers = { ...answers, [question.id]: answer };
    setAnswers(newAnswers);
    
    setScore(prevScore => prevScore + answerScore);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Redirect to results page with the score
      router.push(`/skrining/hasil?score=${score + answerScore}&ageGroup=${ageGroup}`);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-teal-700">{title}</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>

      {/* Progress bar */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="h-2 w-full bg-gray-200 rounded-full">
          <div 
            className="h-full bg-teal-500 rounded-full transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-sm text-gray-600 text-right">
          Pertanyaan {currentQuestion + 1} dari {questions.length}
        </div>
      </div>

      {/* Question card */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-8 text-center">
          {questions[currentQuestion].text}
        </h2>
        
        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleAnswer('yes')}
            className="px-12 py-3 bg-teal-500 text-white font-medium rounded-lg hover:bg-teal-600 transition-colors"
          >
            Ya
          </button>
          <button
            onClick={() => handleAnswer('no')}
            className="px-12 py-3 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
          >
            Tidak
          </button>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-2xl mx-auto mt-8 p-4 bg-teal-50 rounded-lg border border-teal-100">
        <p className="text-gray-700 text-sm">
          <strong>Catatan:</strong> Kuesioner ini bukan pengganti diagnosis profesional. 
          Hasil hanya bersifat indikatif dan sebaiknya didiskusikan dengan profesional kesehatan mental.
        </p>
      </div>
      
      {/* Back button */}
      <div className="max-w-2xl mx-auto mt-6 text-center">
        <Link href="/skrining" className="text-teal-600 hover:underline">
          Kembali ke halaman awal
        </Link>
      </div>
    </div>
  );
}
