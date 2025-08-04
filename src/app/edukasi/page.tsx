'use client';

import { useState } from 'react';

interface VideoItem {
  id: string;
  title: string;
  url: string;
}

export default function Edukasi() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const videos: VideoItem[] = [
    {
      id: '_50igeHW7vw',
      title: 'Kesehatan Mental',
      url: 'https://youtu.be/_50igeHW7vw?si=kQk7Lt6ZHxAmd0kl'
    },
    {
      id: 'MvSkn9svGGw',
      title: 'Pentingnya Kesehatan Mental',
      url: 'https://youtu.be/MvSkn9svGGw?si=clx3BSESZAotExWL'
    },
    {
      id: 'DqQHIZSoJRI',
      title: 'Tips Menjaga Kesehatan Mental',
      url: 'https://youtu.be/DqQHIZSoJRI?si=pdMfciUGQBOTKb8q'
    },
    {
      id: 'rDYFMwQhFAU',
      title: 'Mengenal Depresi',
      url: 'https://youtu.be/rDYFMwQhFAU?si=yNEzk7_MZTndFbl2'
    },
    {
      id: 'HkWFo5973Z4',
      title: 'Macam-macam Gangguan Mental',
      url: 'https://youtu.be/HkWFo5973Z4?si=EdF_C7gb8rzGnUwm'
    },
    {
      id: 'aakMc6bOjdw',
      title: 'Burnout',
      url: 'https://youtu.be/aakMc6bOjdw?si=bOsZAKxXuhM4bdhT'
    },
    {
      id: 'zz_in6b5VaQ',
      title: 'Burnout (Part 2)',
      url: 'https://youtu.be/zz_in6b5VaQ?si=fpZG1g1pKcxHKTgT'
    },
    {
      id: 'FJfrQl7zSrE',
      title: 'Teknik Relaksasi',
      url: 'https://youtu.be/FJfrQl7zSrE?si=mrjg3GVWw3biy3Yu'
    },
    {
      id: 'eZBa63NZbbE',
      title: 'Teknik Pernapasan untuk Stres & Kecemasan',
      url: 'https://youtu.be/eZBa63NZbbE?si=ec6R_RwKPbLzlZiL'
    },
    {
      id: 'BFdhA139_tc',
      title: 'Menghadapi Emosi',
      url: 'https://youtu.be/BFdhA139_tc?si=iYxI1l6BLhQVhbQm'
    }
  ];

  const openVideo = (video: VideoItem) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-teal-700">Edukasi Kesehatan Mental</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Kumpulan video edukasi tentang kesehatan mental untuk membantu Anda memahami, 
          mengelola, dan meningkatkan kesejahteraan mental.
        </p>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div 
            key={video.id}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
            onClick={() => openVideo(video)}
          >
            <div className="relative pb-[56.25%]">
              <img 
                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-white" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg w-full max-w-4xl">
            <button 
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-4 border-b">
              <h3 className="text-xl font-semibold">{selectedVideo.title}</h3>
            </div>
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                src={`https://www.youtube.com/embed/${selectedVideo.id}`}
                title={selectedVideo.title}
                className="absolute top-0 left-0 w-full h-full" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
