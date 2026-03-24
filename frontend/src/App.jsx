import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

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
              Witaj w rozwoju projektu!
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
              <p>Vite + React + JavaScript + TailwindCSS</p>
              <p className="mt-2">🚀 Setup gotowy - czas na mapę!</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
