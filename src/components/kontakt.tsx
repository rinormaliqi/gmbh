import React from 'react';

function ContactForm() {
  return (
    <div className="bg-gradient-to-r from-white via-gray-100 to-white p-8 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex-1 p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Lass uns reden.
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Erzählen Sie uns von Ihrem Projekt.
          </p>
          <p className="text-gray-500 mb-4">
            Lass uns zusammen etwas schaffen.
          </p>
          <div className="flex items-center space-x-2">
            <span className="p-3 bg-gray-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-gray-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m2.25-2.25h15a2.25 2.25 0 012.25 2.25z"
                />
              </svg>
            </span>
            <span className="text-gray-600 text-sm">
              Schreiben Sie uns an{' '}
              <a
                href="mailto:contact@tailgrids.com"
                className="font-medium text-red-500"
              >
                info@hdigmbh.ch
              </a>
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-red-600 p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            Schicken Sie uns eine Nachricht
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Vollständiger Name*
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Ihr Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                E-Mail-Adresse*
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Ihre E-Mail"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm mb-2">
                Betreff*
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Betreff"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Erzählen Sie uns mehr über Ihr Projekt*
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 h-24 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Geben Sie Ihre Nachricht ein"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-red-600 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-200"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
