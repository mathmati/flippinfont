export class FontManager {
  constructor() {
    // Using Google Fonts that closely match real split-flap display fonts
    this.fonts = [
      { name: 'Frutiger', family: '"Work Sans", sans-serif' }, // Work Sans ≈ Frutiger (humanist sans)
      { name: 'Helvetica', family: '"Inter", sans-serif' }, // Inter ≈ Helvetica (neo-grotesque)
      { name: 'Transit', family: '"DM Sans", sans-serif' }, // DM Sans - modern transit
      { name: 'Classic', family: '"Roboto Mono", monospace' } // Authentic monospace option
    ];
    
    this.currentFontIndex = 0; // Starts with Frutiger substitute
    this._loadFonts();
    this._applyFont();
  }

  _loadFonts() {
    // Load Google Fonts - these will ALWAYS load from web, never rely on system
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@800;900&family=Inter:wght@800;900&family=DM+Sans:wght@800;900&family=Roboto+Mono:wght@700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  cycleFont() {
    this.currentFontIndex = (this.currentFontIndex + 1) % this.fonts.length;
    this._applyFont();
    return this.fonts[this.currentFontIndex].name;
  }

  _applyFont() {
    const font = this.fonts[this.currentFontIndex];
    document.documentElement.style.setProperty('--theme-font-family', font.family);
  }

  getCurrentFont() {
    return this.fonts[this.currentFontIndex];
  }
}
