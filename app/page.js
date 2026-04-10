"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-mountain-50 to-forest-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-mountain-900 mb-4">
            🏔️ Portal Turystyczny Karkonoszy
          </h1>
          <p className="text-xl text-mountain-600">
            Twoja przewodnik po magicznych Karkonoszach
          </p>
        </header>

        {/* Hero Section */}
        <main className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-mountain-900 mb-4">
              Witaj w Next.js migration!
            </h2>
            <p className="text-mountain-600 mb-6">
              Mapa fantasy, komunikacja real-time, avatary i działanie offline.
            </p>
            
            {/* Interactive Counter */}
            <div className="mb-6">
              <button
                className="bg-forest-500 hover:bg-forest-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                onClick={() => setCount((count) => count + 1)}
              >
                Kliknij mnie: {count} 🌲
              </button>
            </div>

            {/* Tech Stack Info */}
            <div className="text-sm text-mountain-500">
              <p>Next.js + React + JavaScript + TailwindCSS v4</p>
              <p className="mt-2">🚀 Migration completed - czas na mapę!</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
