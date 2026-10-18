# Portfolio – Mauro Jakic

Persönliches Portfolio als Frontend Developer (Vite + Tailwind CSS).

## Starten

```bash
npm install
npm run dev
```

Danach im Browser öffnen: http://localhost:5173/portfolio/

## Build

```bash
npm run build     # erstellt den Ordner dist/
npm run preview   # Build lokal ansehen
```

## Veröffentlichen auf GitHub Pages

1. Neues Repository **portfolio** auf GitHub anlegen und den Code auf `main` pushen.
2. Auf GitHub: **Settings → Pages → Source: GitHub Actions** wählen.
3. Der Workflow `.github/workflows/deploy.yml` baut und veröffentlicht die Seite bei jedem Push automatisch.

Die Seite ist dann erreichbar unter https://mauroj13.github.io/portfolio/

Heisst das Repository anders, in `vite.config.js` den Wert von `base` anpassen.

## Struktur

```
index.html          Inhalt der Seite (Tailwind-Klassen)
style.css           Tailwind + eigene Styles
main.js             Kopieren-Buttons im Kontaktbereich
public/bilder/      Screenshots der Projekte und Profilbild
```
