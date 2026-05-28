# AGENTS.md — Weather Dashboard (CSS Modules)

## Project state
Scaffold-only — only `prd.md` exists. No `package.json`, no `vite.config`, no source yet.

## Tech stack (from PRD)
- **React + Vite** (must use Vite, not CRA)
- **CSS Modules** (every component needs a `.module.css` file)
- **No API fetching** — static local mock data only
- **State**: `useState` (no Redux, no Context)

## Project setup
```bash
npm create vite@latest . -- --template react
npm install
```
Run dev: `npm run dev`

## Structure (inferred from PRD)
```
src/
  data/weatherData.js     — static mock data (export const weatherData = {...})
  components/
    HeroWidget/           — main weather card (city, temp, condition, humidity, wind)
      HeroWidget.jsx
      HeroWidget.module.css
    ForecastWidget/       — 3-5 day forecast cards
      ForecastWidget.jsx
      ForecastWidget.module.css
    SearchBar/            — static city switcher
      SearchBar.jsx
      SearchBar.module.css
  App.jsx                 — composes widgets, holds selectedCity state
  App.module.css
```

## Data shape (must match exactly)
```js
export const weatherData = {
  CityName: {
    temp: "32°C",
    condition: "Cerah Berawan",
    humidity: "75%",
    wind: "12 km/h",
    forecast: [
      { day: "Besok", temp: "31°C", cond: "Hujan Ringan" },
      ...
    ]
  }
}
```

## Conventions
- `className={styles.xxx}` for all component styling — never global class strings
- One `.module.css` file per component
- No CSS-in-JS libraries
- No routing library — single-page dashboard
- No tests required (no test framework in scope)
