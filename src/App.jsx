import './App.css'
import { TextScroll } from './components/ui/text-scroll'

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="header-left">
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
            <div className="transparent-box">
              <div className="project-counter">+1</div>
              <div className="projects-text">PROJECTS</div>
            </div>
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

      {/* Section 1: Anime Collection - High-Tech Style */}
      <section className="premium-section anime-section">
        <div className="section-header-tech">
          <div className="header-left-tech">
            <div className="tech-buttons">
              <button className="tech-btn">CATALOG</button>
              <button className="tech-btn">ABOUT US</button>
              <button className="tech-btn">CONTACT US</button>
            </div>
            <div className="tech-shop">
              <div className="tech-thumbnail">
                <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop&crop=center" alt="Anime Preview" />
              </div>
              <div className="vertical-text-tech">SHOP</div>
            </div>
            <div className="tech-action-circle">
              <span className="tech-arrow">→</span>
            </div>
            <div className="tech-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
          <div className="header-right-tech">
            <div className="tech-icons">
              <span className="tech-icon">☁</span>
              <span className="tech-icon">♥</span>
              <span className="tech-icon">🛒</span>
              <span className="tech-icon">👤</span>
            </div>
            <div className="tech-stats">
              <p>&lt;100&gt; New collections of anime tees</p>
              <p>&lt;300&gt; stylishly dressed people with our things</p>
              <p>Quality that Withstands Time and Culture</p>
            </div>
            <div className="tech-view-modes">
              <div className="view-mode"></div>
              <div className="view-mode"></div>
            </div>
          </div>
        </div>

        <div className="hero-content-tech">
          <div className="hero-left">
            <div className="tech-connection">
              <div className="dashed-line"></div>
              <div className="connection-dot"></div>
              <div className="connection-line"></div>
              <div className="connection-text">Go to catalog now</div>
              <div className="tech-bracket">[↓]</div>
            </div>
          </div>
          
          <div className="hero-center">
            <div className="main-product-display">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=800&fit=crop&crop=center" 
                alt="Anime Collection Hero" 
                className="hero-product-image"
              />
            </div>
            <div className="size-options">
              <button className="size-btn">S</button>
              <button className="size-btn">M</button>
              <button className="size-btn">L</button>
              <button className="size-btn">XL</button>
            </div>
            <div className="year-indicator">2024</div>
          </div>
          
          <div className="hero-right">
            <div className="tech-connection">
              <div className="dashed-line"></div>
              <div className="connection-dot"></div>
              <div className="connection-line"></div>
              <div className="connection-text">Find out how iconic our designs are</div>
              <div className="tech-warning">⚠</div>
            </div>
          </div>
        </div>

        <div className="section-footer-tech">
          <div className="footer-left">
            <div className="tech-barcode"></div>
            <h2 className="tech-headline">Your Ultimate Defense Against Bland Fashion</h2>
            <p className="tech-description">***When anime culture meets streetwear____there's no room for compromise on style and expression.////</p>
            <button className="tech-shop-btn">Shop now /// →</button>
          </div>
          
          <div className="footer-right">
            <div className="tech-features">
              <div className="feature-item">Unyielding Style,</div>
              <div className="feature-item">Uncompromising Culture</div>
            </div>
            <div className="scroll-indicator">
              <span className="scroll-arrow">←</span>
              <div className="scroll-circle"></div>
              <span className="scroll-arrow">→</span>
            </div>
            <div className="product-gallery">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=center" alt="Gallery 1" />
              <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=150&h=150&fit=crop&crop=center" alt="Gallery 2" />
              <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop&crop=center" alt="Gallery 3" />
              <span className="gallery-heart">♥</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Greek & Roman - Futuristic Style */}
      <section className="premium-section greek-section">
        <div className="section-header-tech">
          <div className="header-left-tech">
            <div className="tech-buttons">
              <button className="tech-btn">LEGACY</button>
              <button className="tech-btn">MYTHOLOGY</button>
              <button className="tech-btn">HEROES</button>
            </div>
            <div className="tech-shop">
              <div className="tech-thumbnail">
                <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&h=100&fit=crop&crop=center" alt="Greek Preview" />
              </div>
              <div className="vertical-text-tech">SHOP</div>
            </div>
            <div className="tech-action-circle">
              <span className="tech-arrow">→</span>
            </div>
            <div className="tech-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
          <div className="header-right-tech">
            <div className="tech-icons">
              <span className="tech-icon">⚡</span>
              <span className="tech-icon">♥</span>
              <span className="tech-icon">🛒</span>
              <span className="tech-icon">👤</span>
            </div>
            <div className="tech-stats">
              <p>&lt;100&gt; New collections of classical tees</p>
              <p>&lt;300&gt; stylishly dressed people with our things</p>
              <p>Quality that Withstands Time and Legend</p>
            </div>
            <div className="tech-view-modes">
              <div className="view-mode"></div>
              <div className="view-mode"></div>
            </div>
          </div>
        </div>

        <div className="hero-content-tech">
          <div className="hero-left">
            <div className="tech-connection">
              <div className="dashed-line"></div>
              <div className="connection-dot"></div>
              <div className="connection-line"></div>
              <div className="connection-text">Go to catalog now</div>
              <div className="tech-bracket">[↓]</div>
            </div>
          </div>
          
          <div className="hero-center">
            <div className="main-product-display">
              <img 
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop&crop=center" 
                alt="Greek Collection Hero" 
                className="hero-product-image"
              />
            </div>
            <div className="size-options">
              <button className="size-btn">S</button>
              <button className="size-btn">M</button>
              <button className="size-btn">L</button>
              <button className="size-btn">XL</button>
            </div>
            <div className="year-indicator">2024</div>
          </div>
          
          <div className="hero-right">
            <div className="tech-connection">
              <div className="dashed-line"></div>
              <div className="connection-dot"></div>
              <div className="connection-line"></div>
              <div className="connection-text">Find out how legendary our designs are</div>
              <div className="tech-warning">⚠</div>
            </div>
          </div>
        </div>

        <div className="section-footer-tech">
          <div className="footer-left">
            <div className="tech-barcode"></div>
            <h2 className="tech-headline">Your Ultimate Defense Against Modern Mediocrity</h2>
            <p className="tech-description">***When mythology meets contemporary style____there's no room for compromise on heritage and power.////</p>
            <button className="tech-shop-btn">Shop now /// →</button>
          </div>
          
          <div className="footer-right">
            <div className="tech-features">
              <div className="feature-item">Unyielding Power,</div>
              <div className="feature-item">Uncompromising Legacy</div>
            </div>
            <div className="scroll-indicator">
              <span className="scroll-arrow">←</span>
              <div className="scroll-circle"></div>
              <span className="scroll-arrow">→</span>
            </div>
            <div className="product-gallery">
              <img src="https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=150&h=150&fit=crop&crop=center" alt="Gallery 1" />
              <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=150&h=150&fit=crop&crop=center" alt="Gallery 2" />
              <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop&crop=center" alt="Gallery 3" />
              <span className="gallery-heart">♥</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Music Legends - Cyberpunk Style */}
      <section className="premium-section music-section">
        <div className="section-header-tech">
          <div className="header-left-tech">
            <div className="tech-buttons">
              <button className="tech-btn">LEGENDS</button>
              <button className="tech-btn">BANDS</button>
              <button className="tech-btn">ARTISTS</button>
            </div>
            <div className="tech-shop">
              <div className="tech-thumbnail">
                <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=100&h=100&fit=crop&crop=center" alt="Music Preview" />
              </div>
              <div className="vertical-text-tech">SHOP</div>
            </div>
            <div className="tech-action-circle">
              <span className="tech-arrow">→</span>
            </div>
            <div className="tech-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
          <div className="header-right-tech">
            <div className="tech-icons">
              <span className="tech-icon">🎵</span>
              <span className="tech-icon">♥</span>
              <span className="tech-icon">🛒</span>
              <span className="tech-icon">👤</span>
            </div>
            <div className="tech-stats">
              <p>&lt;100&gt; New collections of music tees</p>
              <p>&lt;300&gt; stylishly dressed people with our things</p>
              <p>Quality that Withstands Time and Rhythm</p>
            </div>
            <div className="tech-view-modes">
              <div className="view-mode"></div>
              <div className="view-mode"></div>
            </div>
          </div>
        </div>

        <div className="hero-content-tech">
          <div className="hero-left">
            <div className="tech-connection">
              <div className="dashed-line"></div>
              <div className="connection-dot"></div>
              <div className="connection-line"></div>
              <div className="connection-text">Go to catalog now</div>
              <div className="tech-bracket">[↓]</div>
            </div>
          </div>
          
          <div className="hero-center">
            <div className="main-product-display">
              <img 
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop&crop=center" 
                alt="Music Collection Hero" 
                className="hero-product-image"
              />
            </div>
            <div className="size-options">
              <button className="size-btn">S</button>
              <button className="size-btn">M</button>
              <button className="size-btn">L</button>
              <button className="size-btn">XL</button>
            </div>
            <div className="year-indicator">2024</div>
          </div>
          
          <div className="hero-right">
            <div className="tech-connection">
              <div className="dashed-line"></div>
              <div className="connection-dot"></div>
              <div className="connection-line"></div>
              <div className="connection-text">Find out how legendary our artists are</div>
              <div className="tech-warning">⚠</div>
            </div>
          </div>
        </div>

        <div className="section-footer-tech">
          <div className="footer-left">
            <div className="tech-barcode"></div>
            <h2 className="tech-headline">Your Ultimate Defense Against Silent Style</h2>
            <p className="tech-description">***When rock legends meet street fashion____there's no room for compromise on attitude and sound.////</p>
            <button className="tech-shop-btn">Shop now /// →</button>
          </div>
          
          <div className="footer-right">
            <div className="tech-features">
              <div className="feature-item">Unyielding Attitude,</div>
              <div className="feature-item">Uncompromising Sound</div>
            </div>
            <div className="scroll-indicator">
              <span className="scroll-arrow">←</span>
              <div className="scroll-circle"></div>
              <span className="scroll-arrow">→</span>
            </div>
            <div className="product-gallery">
              <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=150&h=150&fit=crop&crop=center" alt="Gallery 1" />
              <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop&crop=center" alt="Gallery 2" />
              <img src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop&crop=center" alt="Gallery 3" />
              <span className="gallery-heart">♥</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: About & Information - X-MECHS Style */}
      <section className="premium-section about-section">
        <div className="x-mechs-container">
          <div className="x-mechs-left">
            <div className="x-mechs-branding">
              <div className="x-mechs-small">HMD™ NFT</div>
              <div className="x-mechs-small">X-M-0007</div>
              <div className="x-mechs-main">X-MECHS®</div>
              <div className="x-mechs-copyright">X-MECHS® ©</div>
              <div className="x-mechs-logo"></div>
            </div>
          </div>
          
          <div className="x-mechs-center">
            <div className="x-mechs-character">
              <div className="character-outline">
                <div className="character-head"></div>
                <div className="character-body"></div>
                <div className="character-arms"></div>
                <div className="character-legs"></div>
                <div className="neon-accents">
                  <div className="neon-splatter neon-1"></div>
                  <div className="neon-splatter neon-2"></div>
                  <div className="neon-splatter neon-3"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="x-mechs-right">
            <div className="x-mechs-graphic"></div>
            <div className="x-mechs-info">
              <div className="x-mechs-year">AW-2024</div>
              <div className="x-mechs-code">CMP1</div>
              <div className="x-mechs-status">OUT NOW</div>
              <div className="x-mechs-platform">FNYX.COM</div>
              <div className="x-mechs-tag">HMD-2024</div>
            </div>
            <div className="x-mechs-warnings">
              <div className="warning-item">DANGER</div>
              <div className="warning-icon">🔥</div>
              <div className="warning-icon">💧</div>
              <div className="warning-icon">CE</div>
              <div className="warning-icon">♻</div>
            </div>
            <div className="x-mechs-cta">NOW ON FNYX.COM</div>
          </div>
        </div>
        
        <div className="about-content-tech">
          <div className="about-left-tech">
            <h2 className="about-title-tech">ABOUT FYNX</h2>
            <p className="about-description-tech">
              We are a premium t-shirt brand that celebrates culture, art, and individuality. 
              Each design is carefully crafted to tell a story, from anime legends to classical mythology, 
              from music icons to contemporary art.
            </p>
            <div className="about-features-tech">
              <div className="feature-tech">
                <span className="feature-icon-tech">✨</span>
                <div className="feature-text-tech">
                  <h4>Premium Quality</h4>
                  <p>100% organic cotton, sustainable materials</p>
                </div>
              </div>
              <div className="feature-tech">
                <span className="feature-icon-tech">🎨</span>
                <div className="feature-text-tech">
                  <h4>Unique Designs</h4>
                  <p>Limited edition prints, exclusive collaborations</p>
                </div>
              </div>
              <div className="feature-tech">
                <span className="feature-icon-tech">🌍</span>
                <div className="feature-text-tech">
                  <h4>Global Shipping</h4>
                  <p>Worldwide delivery, fast and secure</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-right-tech">
            <div className="contact-info-tech">
              <h3>GET IN TOUCH</h3>
              <div className="contact-item-tech">
                <span className="contact-label-tech">Email:</span>
                <a href="mailto:hello@fnyx.com" className="contact-link-tech">hello@fnyx.com</a>
              </div>
              <div className="contact-item-tech">
                <span className="contact-label-tech">Phone:</span>
                <a href="tel:+1234567890" className="contact-link-tech">+1 (234) 567-890</a>
              </div>
              <div className="contact-item-tech">
                <span className="contact-label-tech">Address:</span>
                <span className="contact-text-tech">123 Design Street, Creative City, CC 12345</span>
              </div>
            </div>
            
            <div className="social-links-tech">
              <h3>FOLLOW US</h3>
              <div className="social-icons-tech">
                <a href="#" className="social-icon-tech">Instagram</a>
                <a href="#" className="social-icon-tech">Twitter</a>
                <a href="#" className="social-icon-tech">Facebook</a>
                <a href="#" className="social-icon-tech">TikTok</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
