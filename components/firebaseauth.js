import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyASGY4o-dAC9GYRus4hPyU07UOhvrXIHlM",
    authDomain: "fir-bio-s.firebaseapp.com",
    databaseURL: "https://fir-bio-s-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-bio-s",
    storageBucket: "fir-bio-s.firebasestorage.app",
    messagingSenderId: "225092418716D",
    appId: "1:225092418716:web:e2404a6059a8a8f4300159"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
