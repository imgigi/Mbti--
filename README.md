# ⚡ MBTI Speed Run | 30秒 MBTI 快速人格测评

**“✨Who am I really?✨”**
**“✨我到底是什么样的人？✨”**

A lightning-fast, adaptive personality assessment tool. Unlike traditional lengthy questionnaires, this application uses a dynamic decision tree to determine a user's MBTI archetype in under 30 seconds (usually within 8 questions). It features bilingual support, data visualization, and AI-powered insights.

---

## 🛠️ Tech Stack

This application is built as a lightweight, high-performance Single Page Application (SPA):

### **Frontend Core**
- **React 19** — The latest modern UI library for robust component management.
- **TypeScript** — Ensures type safety across complex data structures like the personality decision tree.
- **Tailwind CSS** — Utility-first styling for a clean, modern, and responsive interface.

### **Visualization & Media**
- **Recharts** — Renders the dynamic Radar Chart (Spider Web) to visualize personality dimensions (Logic vs. Abstract vs. Social vs. Control).
- **Lucide React** — Beautiful, consistent iconography.
- **html2canvas** — Enables the "Save Result" feature by converting the DOM into a high-quality shareable image.

### **AI & Logic**
- **Adaptive Decision Tree** — Custom logic engine (`constants.ts`) that routes questions dynamically based on previous answers, reducing redundancy.
- **Google Gemini API** — Uses the `@google/genai` SDK (Gemini 2.5 Flash) to generate unique, "Fortune Cookie" style life advice for the user's specific personality type.

### **Project Structure**
- `components/`
    - `LandingPage.tsx` — Hero section with bilingual toggles and selling points.
    - `QuizPage.tsx` — Renders the interactive question tree with progress tracking.
    - `ResultPage.tsx` — Displays the comprehensive analysis, radar charts, and AI tips.
- `services/`
    - `geminiService.ts` — Handles communication with Google's GenAI for dynamic content generation.
- `constants.ts` — Centralized repository for all bilingual text, question logic, and MBTI profile data.
- `types.ts` — Type definitions for Profile, Questions, and Results.
- `App.tsx` — Main state manager handling view transitions (Landing -> Quiz -> Result).

---

## 🚀 Key Features

1.  **Speed Run Logic**: An optimized algorithm that narrows down personality types through branching paths rather than linear scoring, cutting testing time to ~30 seconds.
2.  **Bilingual Support**: Instant toggle between Chinese (Simplified) and English.
3.  **Visual Analysis**: Generates a "Mind Map" radar chart showing the user's balance between Rationality, Control, Social connection, and Abstract thinking.
4.  **AI Integration**: Fetches real-time, witty advice ("AI Fortune Cookie") based on the result archetype using Google Gemini.
5.  **Social Sharing**: One-click generation of a "Long Image" card for easy sharing on social media.

---

## 📦 Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Configure API Key**
    Ensure your environment has access to a Google GenAI API Key for the AI features to work.
    *(Note: In this demo environment, the key is handled via `process.env.API_KEY`)*

3.  **Run Development Server**
    ```bash
    npm start
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

## © Credits

**Design & Concept**: @人类使用说明书 (@UserManualForHumans)
