export class FontManager {
  constructor() {
    this.fonts = [
      { name: 'Frutiger', family: '"Frutiger", "Frutiger Next", Arial, sans-serif' },
      { name: 'Helvetica', family: '"Helvetica Neue", Helvetica, Arial, sans-serif' },
      { name: 'Clearview', family: '"Clearview", "Helvetica Neue", Arial, sans-serif' },
      { name: 'Waltograph', family: '"Waltograph", "Comic Sans MS", cursive' }
    ];
    
    this.currentFontIndex = 0; // Now starts with Frutiger (index 0)
    this._loadFonts();
    this._applyFont();
  }

  _loadFonts() {
    // Create style element for @font-face rules
    const style = document.createElement('style');
    style.textContent = `
      /* Clearview Font - highway signage */
      @font-face {
        font-family: 'Clearview';
        src: local('Highway Gothic'), local('Clearview');
        font-weight: 700;
        font-style: normal;
      }
      
      /* Frutiger Font - airport/transit classic */
      @font-face {
        font-family: 'Frutiger';
        src: local('Frutiger'), local('Frutiger Next');
        font-weight: 700;
        font-style: normal;
      }
      
      /* Waltograph - Disney font */
      @font-face {
        font-family: 'Waltograph';
        src: url('data:font/woff2;base64,d09GMk9UVE8AAAa4AAoAAAAACnAAAAZrAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYpwGhQbIBwqBmAAgTIBNgIkAxgEBgWDGgcgG8EJyC4G7AaHAjHEwBlJM1FiVWVV/f9/8r7pqKqsrKqq9tVd1dXVVdX+/7/7//+/9///v/f+/+/9/+/9/+/9/+/9/+/9/+/9/+8AAwEBAQEBAQEBAQEBAQEBAQEBAQEB'),
             url('https://db.onlinewebfonts.com/t/f4d1593471d222ddebd973210265762a.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
      }
    `;
    document.head.appendChild(style);
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
