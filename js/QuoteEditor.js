export class QuoteEditor {
  constructor(messageRotator) {
    this.messageRotator = messageRotator;
    this.isOpen = false;
    this._createModal();
    this._loadCustomQuotes();
  }

  _createModal() {
    const modal = document.createElement('div');
    modal.className = 'quote-editor-modal';
    modal.innerHTML = `
      <div class="quote-editor-content">
        <div class="quote-editor-header">
          <h2>Edit Quotes</h2>
          <button class="quote-editor-close" aria-label="Close">&times;</button>
        </div>
        <div class="quote-editor-body">
          <p class="quote-editor-instructions">
            Enter your quotes below, one per block. Use blank lines to separate quote rows.
            Each block should have 7 lines (use empty lines for spacing).
          </p>
          <textarea 
            class="quote-editor-textarea" 
            placeholder="Example:&#10;&#10;GOD IS IN&#10;THE DETAILS .&#10;&#10;- LUDWIG MIES&#10;&#10;"
            rows="20"
          ></textarea>
          <div class="quote-editor-actions">
            <button class="quote-editor-reset">Reset to Default</button>
            <button class="quote-editor-save">Save Quotes</button>
          </div>
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    this.modal = modal;
    
    // Event listeners
    const closeBtn = modal.querySelector('.quote-editor-close');
    const saveBtn = modal.querySelector('.quote-editor-save');
    const resetBtn = modal.querySelector('.quote-editor-reset');
    const textarea = modal.querySelector('.quote-editor-textarea');
    
    closeBtn.addEventListener('click', () => this.close());
    saveBtn.addEventListener('click', () => this._save());
    resetBtn.addEventListener('click', () => this._reset());
    
    // Close on background click
    modal.addEventListener('click', (e) => {
      if (e.target === modal) this.close();
    });
    
    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.close();
    });
    
    this.textarea = textarea;
  }

  _loadCustomQuotes() {
    const saved = localStorage.getItem('customQuotes');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        this.messageRotator.setMessages(parsed);
      } catch (e) {
        console.error('Failed to load custom quotes:', e);
      }
    }
  }

  open() {
    this.isOpen = true;
    this.modal.classList.add('visible');
    
    // Populate textarea with current messages
    const currentMessages = this.messageRotator.getAllMessages();
    const text = this._messagesToText(currentMessages);
    this.textarea.value = text;
    this.textarea.focus();
  }

  close() {
    this.isOpen = false;
    this.modal.classList.remove('visible');
  }

  _messagesToText(messages) {
    return messages.map(msg => msg.join('\n')).join('\n---\n');
  }

  _textToMessages(text) {
    // Split by separator (--- or double newline)
    const blocks = text.split(/---|\n\n\n+/);
    return blocks
      .filter(block => block.trim())
      .map(block => {
        const lines = block.split('\n').slice(0, 7);
        // Pad to 7 lines
        while (lines.length < 7) {
          lines.push('');
        }
        return lines;
      });
  }

  _save() {
    const text = this.textarea.value;
    const messages = this._textToMessages(text);
    
    if (messages.length === 0) {
      alert('Please enter at least one quote block');
      return;
    }
    
    // Save to localStorage
    localStorage.setItem('customQuotes', JSON.stringify(messages));
    
    // Update message rotator
    this.messageRotator.setMessages(messages);
    
    this._showNotification('Quotes saved!');
    this.close();
  }

  _reset() {
    if (confirm('Reset to default quotes? This will delete your custom quotes.')) {
      localStorage.removeItem('customQuotes');
      this.messageRotator.resetMessages();
      this._showNotification('Reset to default quotes');
      this.close();
    }
  }

  _showNotification(message) {
    const existing = document.querySelector('.mode-notification');
    if (existing) existing.remove();
    
    const notif = document.createElement('div');
    notif.className = 'mode-notification';
    notif.textContent = message;
    document.body.appendChild(notif);
    
    setTimeout(() => notif.classList.add('visible'), 10);
    setTimeout(() => {
      notif.classList.remove('visible');
      setTimeout(() => notif.remove(), 300);
    }, 2000);
  }
}
