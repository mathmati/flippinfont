export class FontManager {
  constructor() {
    // Authentic split-flap display fonts from real installations worldwide
    // name = what it represents, actualFont = what Google Font is actually used
    this.fonts = [
      { name: 'Arial Black', actualFont: 'Arial Black', family: '"Arial Black", "Helvetica Neue", Arial, sans-serif' },
      { name: 'Work Sans', actualFont: 'Work Sans (≈ Frutiger)', family: '"Work Sans", sans-serif' },
      { name: 'Inter', actualFont: 'Inter (≈ Helvetica)', family: '"Inter", sans-serif' },
      { name: 'Archivo Black', actualFont: 'Archivo Black (≈ Univers)', family: '"Archivo Black", sans-serif' },
      { name: 'Barlow', actualFont: 'Barlow (≈ DIN)', family: '"Barlow", sans-serif' },
      { name: 'Montserrat', actualFont: 'Montserrat (≈ Futura)', family: '"Montserrat", sans-serif' },
      { name: 'Oswald', actualFont: 'Oswald (≈ Franklin Gothic)', family: '"Oswald", sans-serif' },
      { name: 'Space Grotesk', actualFont: 'Space Grotesk', family: '"Space Grotesk", sans-serif' },
      { name: 'DM Sans', actualFont: 'DM Sans', family: '"DM Sans", sans-serif' },
      { name: 'Roboto Mono', actualFont: 'Roboto Mono', family: '"Roboto Mono", monospace' },
      { name: 'Space Mono', actualFont: 'Space Mono (≈ Solari)', family: '"Space Mono", monospace' }
    ];
    
    this.currentFontIndex = 0; // Starts with Arial Black
    this._loadFonts();
    this._applyFont();
  }

  _loadFonts() {
    // Load all Google Fonts at weights 700-900 for authentic bold split-flap look
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@800;900&family=Inter:wght@800;900&family=Archivo+Black&family=Barlow:wght@700;900&family=Montserrat:wght@800;900&family=Oswald:wght@700&family=Space+Grotesk:wght@700&family=DM+Sans:wght@800;900&family=Roboto+Mono:wght@700;900&family=Space+Mono:wght@700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  cycleFont() {
    this.currentFontIndex = (this.currentFontIndex + 1) % this.fonts.length;
    this._applyFont();
    return this.fonts[this.currentFontIndex].actualFont;
  }

  _applyFont() {
    const font = this.fonts[this.currentFontIndex];
    document.documentElement.style.setProperty('--theme-font-family', font.family);
  }

  getCurrentFont() {
    return this.fonts[this.currentFontIndex];
  }
}
