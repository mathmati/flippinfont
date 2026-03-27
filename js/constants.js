export const GRID_COLS = 22;
export const GRID_ROWS = 7;

// More authentic mechanical timing
export const SCRAMBLE_DURATION = 1200;
export const FLIP_DURATION = 180;
export const STAGGER_DELAY = 35;
export const TOTAL_TRANSITION = 5000;
export const MESSAGE_INTERVAL = 6000;

export const CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,-!?\'/: ';

// Vintage display themes (monochrome per theme - authentic to real mechanical boards)
export const THEMES = {
  classic: {
    name: 'Classic Airport',
    textColor: '#FFFFFF',
    bgColor: '#1C1C1C',
    boardBg: '#0F0F0F',
    tileBg: '#1C1C1C',
    accentColor: '#FFFFFF'
  },
  amber: {
    name: 'Vintage Amber',
    textColor: '#FFB000',
    bgColor: '#1A1008',
    boardBg: '#0A0804',
    tileBg: '#1A1008',
    accentColor: '#FFB000'
  },
  green: {
    name: 'Terminal Green',
    textColor: '#00FF41',
    bgColor: '#0A1508',
    boardBg: '#050A04',
    tileBg: '#0A1508',
    accentColor: '#00FF41'
  },
  cyan: {
    name: 'Railway Blue',
    textColor: '#4DD0E1',
    bgColor: '#0A1418',
    boardBg: '#050A0C',
    tileBg: '#0A1418',
    accentColor: '#4DD0E1'
  }
};

// Removed multicolor scramble - not authentic to real mechanical boards

export const MESSAGES = [
  [
    '',
    'God Is In',
    'The Details .',
    '',
    '- Ludwig Mies',
    '',
    ''
  ],
  [
    '',
    'Stay Hungry',
    'Stay Foolish',
    '',
    '- Steve Jobs',
    '',
    ''
  ],
  [
    '',
    'Good Design Is',
    'Good Business',
    '',
    '- Thomas Watson',
    '',
    ''
  ],
  [
    '',
    'Less Is More',
    '',
    '',
    '- Mies Van Der Rohe',
    '',
    ''
  ],
  [
    '',
    'Make It Simple',
    'But Significant',
    '',
    '- Don Draper',
    '',
    ''
  ],
  [
    '',
    'Have No Fear Of',
    'Perfection',
    '',
    '- Salvador Dali',
    '',
    ''
  ],
  [
    '',
    'Form Follows',
    'Function',
    '',
    '- Louis Sullivan',
    '',
    ''
  ],
  [
    'Design Is Not',
    'Just What It Looks',
    'Like And Feels Like',
    '',
    'Design Is How',
    'It Works',
    ''
  ],
  [
    '',
    'Simplicity Is The',
    'Ultimate',
    'Sophistication',
    '',
    '',
    ''
  ],
  [
    'The Best Way To',
    'Predict The Future',
    'Is To Invent It',
    '',
    '- Alan Kay',
    '',
    ''
  ],
  [
    '',
    'I Will Rage Code',
    'This In A Few Minutes',
    '',
    '- Wayne',
    '',
    ''
  ]
];
