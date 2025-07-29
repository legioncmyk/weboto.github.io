// Konfigurasi Firebase (ganti dengan konfigurasi project Anda)
const firebaseConfig = {
    apiKey: "AIzaSyDummyAPIKey1234567890",
    authDomain: "diagnosa-kendaraan.firebaseapp.com",
    databaseURL: "https://diagnosa-kendaraan-default-rtdb.firebaseio.com",
    projectId: "diagnosa-kendaraan",
    storageBucket: "diagnosa-kendaraan.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890abcdef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Referensi ke Realtime Database
const database = firebase.database();
