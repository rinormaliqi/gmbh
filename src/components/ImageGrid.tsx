import React from 'react';

function ImageGrid() {
  const images = [
    '/qwe.jpg', // Replace with your images
    '/dgdf.jpg',
    '/eeee.jpg',
    '/asd.jpg',
    '/qqqq.jpg',
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="lg:text-center mt-14 mb-10">
        <h2
          className={`text-base text-primary font-semibold tracking-wide uppercase`}
        >
          Galerie
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          unserer Arbeiten
        </p>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          im Laufe des Jahres haben wir viele Projekte abgeschlossen
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
