# BUILDING-MANAGEMENT-SYSTEM

A smart, cloud-connected Building Management System (BMS) with real-time telemetry, HVAC automation, energy monitoring, and Firebase integration.

## 🚀 Firebase Configuration

Connected Firebase Project: **`building-management-syst-c5462`**

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyBeNN1TNGnUxVZNGkgQBTSbs07eQwK0hGA",
  authDomain: "building-management-syst-c5462.firebaseapp.com",
  projectId: "building-management-syst-c5462",
  storageBucket: "building-management-syst-c5462.firebasestorage.app",
  messagingSenderId: "926144485137",
  appId: "1:926144485137:web:b37bc49ecb3c5036e59eb0",
  measurementId: "G-FY3CLBCKFD"
};
```

## 📁 Project Structure

- `firebase.js`: Modular Firebase initialization exporting `app`, `auth`, `db`, `storage`, `analytics`, and `firebaseConfig`.
- `index.html`: Interactive web dashboard displaying telemetry diagnostics and verifying Firebase connection health in real time.
- `logo images/`: Dedicated directory for high-resolution brand identity logos, emblems, and app icons.
- `logo videos/`: Dedicated directory for motion graphics, video bumpers, and interactive animated intro generator (`animated_logo_intro.html`).
- `.env.example`: Template for environment variables (compatible with Vite, React, and Next.js).

## 🌐 Quick Start

1. Open `index.html` directly in a modern web browser or start a local server:
   ```bash
   npx serve .
   ```
2. Open `http://localhost:3000` to inspect the live Firebase connection status and building telemetry console.