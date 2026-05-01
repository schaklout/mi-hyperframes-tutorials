# 🫧 Cinematic Tutorial Engine

**Cinematic Tutorial Engine** is a specialized Video-as-Code system built on top of [HyperFrames](https://hyperframes.heygen.com/) and [Astro](https://astro.build/). It transforms raw code snippets into high-end, animated tutorial videos with professional syntax highlighting and synchronized explanations.

![License](https://img.shields.io/badge/license-ISC-blue)
![Tech](https://img.shields.io/badge/tech-Astro%20+%20GSAP%20+%20Shiki-orange)

## ✨ Features

- **Automated Typing Effect:** Code is typed out token-by-token using GSAP animations.
- **Pro Syntax Highlighting:** Powered by `shiki` with the sophisticated *Tokyo Night* theme.
- **Narrative Callouts:** Synchronized explanation cards that highlight specific lines of code programmatically.
- **Editor UI:** A clean, modern editor interface with glassmorphism and deep shadows.
- **Data-Driven:** Change the tutorial content by simply editing a JSON file.

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Preview the Composition
This command builds the Astro site and opens the HyperFrames Studio for real-time preview.
```bash
npm run hf:dev
```

### 3. Render to MP4
Generate the final video file.
```bash
npm run hf:render
```

## 📁 Project Structure

- `data/tutorial.json` — The brain of your tutorial. Define your code and steps here.
- `src/scenes/CodeScene.astro` — The core logic for syntax highlighting and layout.
- `src/pages/index.astro` — The animation orchestrator where the GSAP timeline is defined.

## ⚙️ Configuration

To create a new tutorial, edit `data/tutorial.json`:

```json
{
  "config": {
    "title": "Your Tutorial Title",
    "language": "javascript",
    "theme": "tokyo-night"
  },
  "code": "your_code_here",
  "steps": [
    { "line": 1, "explanation": "This is line 1.", "duration": 5 }
  ]
}
```

## 🛠️ Tech Stack

- **Framework:** Astro (Static Site Generation)
- **Rendering:** HyperFrames
- **Animations:** GSAP
- **Syntax Highlighting:** Shiki

---
*Created as an experiment in creative engineering and Video-as-Code automation.*
