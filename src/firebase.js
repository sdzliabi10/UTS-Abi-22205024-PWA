import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDfFrfAdkcBD1gscDp0b8Gew8uX-lqaimw",
  authDomain: "uts-pwa-portofolio.firebaseapp.com",
  projectId: "uts-pwa-portofolio",
  storageBucket: "uts-pwa-portofolio.firebasestorage.app",
  messagingSenderId: "126430312434",
  appId: "1:126430312434:web:a9647d521f1c4bc7dddd6b",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestPermission = async () => {
  try {
    const registration = await navigator.serviceWorker.register(
      "/firebase-messaging-sw.js"
    );
    // console.log("Service Worker terdaftar:", registration);

    const token = await getToken(messaging, {
      vapidKey:
        "BBMSytqcmtaFR1plSuVeiUAorFd1idoL12Z3bmvrsYUriC-MWvv-7MBC8lWdLOBgqcQ7YmaCBokPu7ckuBYBnZo",
      serviceWorkerRegistration: registration,
    });

    if (token) {
      console.log("Token diperoleh:", token);
      // Kirim token ke server untuk menyimpan
    } else {
      console.log("Token tidak ditemukan.");
    }
  } catch (error) {
    console.error("Gagal memperoleh token:", error);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Pesan diterima di foreground:", payload);
      resolve(payload);
    });
  });
