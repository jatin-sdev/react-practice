# to practice and experiment with react + vite

npm create vite@latest my-project
cd my-project

npm install tailwindcss @tailwindcss/vite

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' => in /vite.config.js

export default defineConfig({
plugins: [react(), tailwindcss()],
});

@import "tailwindcss"; => in /index.css

npm run dev
