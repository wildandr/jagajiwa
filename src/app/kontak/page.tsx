import { emergencyContacts, faqs } from '@/data/staticData';

export default function Kontak() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-teal-700">Kontak & Bantuan</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Temukan kontak penting dan jawaban atas pertanyaan umum tentang kesehatan mental dan layanan JagaJiwa.
        </p>
      </div>
      
      {/* Kontak Penting */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-teal-700 border-b border-teal-100 pb-2">Kontak Penting</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="bg-white border border-teal-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-teal-50 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-teal-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-teal-700">{contact.name}</h3>
              <p className="text-sm text-teal-600 mb-3 text-center font-medium">{contact.type}</p>
              <p className="mb-2 text-gray-700"><span className="font-medium">Telepon:</span> {contact.phone}</p>
              {contact.website && (
                <p className="mb-3 text-gray-700"><span className="font-medium">Website:</span> <a href={contact.website} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">{contact.website}</a></p>
              )}
              <p className="text-gray-600">{contact.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* FAQ */}
      <section className="bg-teal-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-teal-700 border-b border-teal-100 pb-2">Pertanyaan Umum (FAQ)</h2>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium mb-3 text-teal-700">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
