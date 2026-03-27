export class FontManager {
  constructor() {
    this.fonts = [
      { name: 'Solari', family: '"Helvetica Neue", Helvetica, "Work Sans", Arial, sans-serif' },
      { name: 'Frutiger', family: '"Frutiger", "Work Sans", "Trebuchet MS", Arial, sans-serif' },
      { name: 'Helvetica', family: '"Helvetica Neue", Helvetica, "Inter", Arial, sans-serif' },
      { name: 'Transit', family: '"DM Sans", "Franklin Gothic", Arial, sans-serif' }
    ];
    
    this.currentFontIndex = 0; // Starts with Solari (classic split-flap)
    this._loadFonts();
    this._applyFont();
  }

  _loadFonts() {
    // Load Google Fonts as fallbacks for authentic split-flap display fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@800;900&family=Inter:wght@800;900&family=DM+Sans:wght@800;900&display=swap';
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
