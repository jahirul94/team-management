
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDQ7NgTflQrQsrgeOpDTOJuQsdNiKVn-M0",
    authDomain: "team-management-5e13c.firebaseapp.com",
    projectId: "team-management-5e13c",
    storageBucket: "team-management-5e13c.appspot.com",
    messagingSenderId: "118072857129",
    appId: "1:118072857129:web:e97dafc765c906799e4238",
    measurementId: "G-KECRFE5PWD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
