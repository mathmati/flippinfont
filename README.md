# Flippinfont — Authentic Split-Flap Display with Font Options

Enhanced version of [Flippinout](https://github.com/mathmati/flippinout) with **font cycling** and **custom quote editing**.

## ✨ New Features

### 🔤 Authentic Display Fonts
Cycle through **10 fonts** - Google Fonts that match real split-flap displays:

1. **Arial Black** — Original Flippinout font (system font)
2. **Work Sans** — Matches Frutiger (European airports: Charles de Gaulle, Schiphol)
3. **Inter** — Matches Helvetica (Swiss/Italian Solari boards)
4. **Archivo Black** — Matches Univers (Swiss railways SBB)
5. **Barlow** — Matches DIN (German transit DB, BVG)
6. **Montserrat** — Matches Futura (1960s American airports)
7. **Oswald** — Matches Franklin Gothic (NYC subway)
8. **Space Grotesk** — Modern retro-futuristic
9. **DM Sans** — Contemporary transit displays
10. **Roboto Mono** — Classic monospace terminals

**Note:** Frutiger, Helvetica, Univers, DIN, Futura, and Franklin Gothic are commercial fonts (~$200-500 each). These Google Fonts are legal open-source alternatives that closely match the originals.

Press **FONT** button (mobile) to cycle • Toast notifications show actual font names

Based on research of Solari, Pragotron, Omega, and Ferranti split-flap manufacturers

### ✏️ Custom Quotes
Edit and customize your displayed quotes:
- Tap **EDIT** button to open quote editor
- Add your own messages (7 lines per quote block)
- Saves to localStorage
- Reset to defaults anytime

## 🎨 Four Authentic Monochrome Themes
Real split-flap displays were **never multicolored**—they were mechanical, uniform, functional.

- **Classic Airport** — White on black (train stations, airports)
- **Vintage Amber** — 1970s airport terminal glow
- **Terminal Green** — Classic CRT aesthetic  
- **Railway Blue** — Modern European rail stations

Press **T** or **THEME** button to cycle themes

### ⏰ Live Clock Mode
- Real-time clock display with date
- Mechanical flip animation on every second
- Toggle with **C** key or **CLOCK** button

## 🎹 Keyboard Controls (Desktop)

| Key | Action |
|-----|--------|
| **Enter** | Next message |
| **←** | Previous message |
| **C** | Toggle clock mode |
| **T** | Cycle theme |
| **U** | Toggle ALL CAPS / Title Case (NEW!) |
| **F** | Fullscreen |
| **M** | Mute/unmute |
| **N** | Show shortcuts |

## 📱 Mobile Controls

Six buttons at bottom:
- **THEME** — Cycle through monochrome themes
- **CLOCK** — Toggle live clock mode
- **FONT** — Cycle through display fonts
- **CAPS** — Toggle ALL CAPS / Title Case
- **EDIT** — Open quote editor
- **FULL** — Enter fullscreen mode

**Landscape fullscreen mode:**
- Shows **☰** (hamburger menu) to save space
- **Tap to expand** → all 6 buttons appear with dark background
- **Tap ✕ to collapse** → back to hamburger only
- Auto-adapts on orientation change

## 🚀 Quick Start

1. Open [https://mathmati.github.io/flippinfont/](https://mathmati.github.io/flippinfont/)
2. Tap **FULL** for fullscreen
3. Try **FONT** to change typefaces
4. Tap **EDIT** to add your own quotes
5. Cycle themes with **THEME**

## 🎯 Perfect For

- **Office lobbies** — Display time or rotating quotes
- **Home decor** — Vintage aesthetic on any TV
- **Events** — Retro countdown or info boards with custom fonts
- **Streaming overlays** — OBS browser source with character
- **Personal quotes** — Display your own messages in various fonts

## 📝 Quote Editor

The quote editor lets you customize all displayed messages:

1. Tap **EDIT** button
2. Enter quotes in blocks of 7 lines
3. Separate blocks with `---` or blank lines
4. Tap **Save Quotes**

Example format:
```
GOD IS IN
THE DETAILS .

- LUDWIG MIES


---

YOUR CUSTOM
QUOTE HERE
```

Quotes save to your browser's localStorage and persist across visits.

## 🎨 Theme Philosophy

Each theme is **100% monochrome** because that's how real split-flap boards worked:
- One text color
- One background color
- No scramble color cycling
- Just mechanical character flipping

Authentic to: airports, train stations, baseball scoreboards, stock tickers.

## 📝 Credits

Based on: [Flippinout](https://github.com/mathmati/flippinout)  
Original: [magnum6actual/flipoff](https://github.com/magnum6actual/flipoff)  
Enhanced by: Clawd (Mathew's AI assistant)

## 📄 License

Same as original — check original repo for license details.

---

**Mobile: THEME · CLOCK · FONT · CAPS · EDIT · FULL**  
**Desktop: T (theme) · C (clock) · U (caps) · F (fullscreen)**
