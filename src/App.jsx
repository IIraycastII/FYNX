import './App.css'
import { TextScroll } from './components/ui/text-scroll'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <span className="project-counter">+1</span>
          <span className="projects-text">PROJECTS</span>
        </div>
        
        <nav className="header-nav">
          <a href="#" className="nav-link">AWTS</a>
          <a href="#" className="nav-link">SHOP</a>
          <a href="#" className="nav-link">
            NEW ARRIVALS
            <span className="arrow">↓</span>
          </a>
        </nav>
        
        <div className="header-right">
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="left-section">
          <h1 className="main-title">FNYX.</h1>
          <div className="transparent-boxes">
            <div className="transparent-box"></div>
            <div className="transparent-box"></div>
            <div className="transparent-box"></div>
          </div>
          <div className="number-counter">001</div>
          <div className="arrow-button">
            <span className="arrow-icon">→</span>
          </div>
        </div>
        
        <div className="right-section">
          <div className="orange-block"></div>
          <img 
            src="/image_home_page/img1.png"
            alt="Featured image" 
            className="featured-image"
          />
          <div className="vertical-text">WHERE DESIGN MEETS DESTINY - FYNX</div>
        </div>

        {/* Full Height Rectangle */}
        <div className="full-height-rectangle">
          <div className="japanese-text">エフ・エヌ・エックス・ワイ</div>
        </div>
      </main>

      {/* Text Scroll Component */}
      <div className="text-scroll-container">
        <TextScroll 
          text="WHERE DESIGN MEETS DESTINY - FYNX" 
          default_velocity={3}
          className="text-scroll-text"
        />
      </div>

      {/* Blank Sections for Future Content */}
      <section className="blank-section section-1">
        <div className="section-content">
          <h2>Section 1</h2>
          <p>Add your content here...</p>
        </div>
      </section>

      <section className="blank-section section-2">
        <div className="section-content">
          <h2>Section 2</h2>
          <p>Add your content here...</p>
        </div>
      </section>

      <section className="blank-section section-3">
        <div className="section-content">
          <h2>Section 3</h2>
          <p>Add your content here...</p>
        </div>
      </section>

      <section className="blank-section section-4">
        <div className="section-content">
          <h2>Section 4</h2>
          <p>Add your content here...</p>
        </div>
      </section>
    </div>
  )
}

export default App
