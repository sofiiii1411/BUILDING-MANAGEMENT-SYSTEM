/**
 * Firebase Configuration and Initialization
 * Project: BUILDING-MANAGEMENT-SYSTEM
 * Project ID: building-management-syst-c5462
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-storage.js";

// Web app Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBeNN1TNGnUxVZNGkgQBTSbs07eQwK0hGA",
  authDomain: "building-management-syst-c5462.firebaseapp.com",
  projectId: "building-management-syst-c5462",
  storageBucket: "building-management-syst-c5462.firebasestorage.app",
  messagingSenderId: "926144485137",
  appId: "1:926144485137:web:b37bc49ecb3c5036e59eb0",
  measurementId: "G-FY3CLBCKFD"
};

// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Safe Analytics initialization (checks for browser environment support)
export let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
      console.log("Firebase Analytics initialized successfully.");
    }
  }).catch((err) => {
    console.warn("Analytics not supported in this environment:", err);
  });
}

console.log("🔥 Firebase initialized for project:", firebaseConfig.projectId);

export default app;
