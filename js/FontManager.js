export class FontManager {
  constructor() {
    // Authentic split-flap display fonts from real installations worldwide
    this.fonts = [
      { name: 'Original', family: '"Arial Black", "Helvetica Neue", Arial, sans-serif' }, // Original Flippinout font
      { name: 'Frutiger', family: '"Work Sans", sans-serif' }, // European airports (Charles de Gaulle)
      { name: 'Helvetica', family: '"Inter", sans-serif' }, // Swiss/Italian Solari boards
      { name: 'Univers', family: '"Archivo Black", sans-serif' }, // Swiss railway stations
      { name: 'DIN', family: '"Barlow", sans-serif' }, // German transit (condensed geometric)
      { name: 'Futura', family: '"Montserrat", sans-serif' }, // 1960s American airports
      { name: 'Franklin', family: '"Oswald", sans-serif' }, // NYC subway/transit
      { name: 'Grotesk', family: '"Space Grotesk", sans-serif' }, // Modern retro-futuristic
      { name: 'Transit', family: '"DM Sans", sans-serif' }, // Contemporary transit displays
      { name: 'Mono', family: '"Roboto Mono", monospace' } // Classic monospace option
    ];
    
    this.currentFontIndex = 0; // Starts with Original
    this._loadFonts();
    this._applyFont();
  }

  _loadFonts() {
    // Load all Google Fonts at weights 700-900 for authentic bold split-flap look
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Work+Sans:wght@800;900&family=Inter:wght@800;900&family=Archivo+Black&family=Barlow:wght@700;900&family=Montserrat:wght@800;900&family=Oswald:wght@700&family=Space+Grotesk:wght@700&family=DM+Sans:wght@800;900&family=Roboto+Mono:wght@700;900&display=swap';
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
