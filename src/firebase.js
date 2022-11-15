// import firebase from './firebase';
import * as firebase from "firebase/app";
import "firebase/auth";
import {
    browserLocalPersistence,
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    sendPasswordResetEmail,
    setPersistence,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut
} from "firebase/auth";
import {addDoc, collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAemto1Zr71afUAe08c8PNzH5bF4rm1N5I",
    authDomain: "dash-reserve.firebaseapp.com",
    projectId: "dash-reserve",
    storageBucket: "dash-reserve.appspot.com",
    messagingSenderId: "630238503597",
    appId: "1:630238503597:web:dfeec74f3ce34800049c24",
    measurementId: "G-B1R1P6KVPR"
  });


const db = getFirestore(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};


const auth = getAuth();
(async () => {
    await setPersistence(auth, browserLocalPersistence);
})();

export {
    firebaseConfig,
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
};
