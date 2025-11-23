# 🌲 Forest Psychology Test | 森林心理测试

**“Your truest self will reveal the answer in the forest.”**
**“你最真实的内心，会在森林里告诉你答案。”**

An immersive, journey-based psychological projection test. Users walk through a visual narrative in a forest, making intuitive choices that reveal their subconscious views on relationships, career, and self-growth.

---

## 🛠️ Tech Stack

This psychological test web app is built using modern, production-ready technologies:

### **Frontend Framework**
- **React 18** — Component-based UI architecture
- **Vite** — Next-generation frontend tooling for ultra-fast development and building
- **TypeScript** — Type-safe development for cleaner and more scalable code

### **UI & Styling**
- **Tailwind CSS** — Utility-first CSS framework for rapid UI development
- **Framer Motion** — Production-ready motion library for React, powering the immersive background transitions, sticker animations, and UI flows
- **Lucide React** — Lightweight and beautiful icon set

### **Logic & Data**
- **React Context API** — Global state management for tracking quiz progress, answer history, and bilingual settings
- **Kokology Principles** — The application logic (`utils/quizLogic.ts`) is based on psychological projection theories to generate immediate, offline analysis without external API dependencies

### **Project Structure**
- `components/`
    - `screens/` — Main views (Start, Question, Result)
    - `ui/` — Reusable elements (`BackgroundLayer`, `Button`)
    - `layout/` — Responsive layout wrappers
- `context/` — State management (`QuizContext`)
- `utils/` — Analysis algorithms and logic mapping
- `constants.ts` — Configuration for questions, bilingual text, and CDN assets
- `types.ts` — TypeScript interfaces

### **Deployment**
- **Vercel / Netlify** — Optimized for static site deployment (Single Page Application)
- **CDN Assets** — High-performance image delivery for visual assets

---

## 🚀 Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

## © Credits

**Design & Concept**: @人类使用说明书 (@UserManualForHumans)
