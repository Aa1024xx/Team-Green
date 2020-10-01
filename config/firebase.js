import * as firebase from 'firebase';

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAp-hXRkkFwhmIZ9G6YtoJqh2Lk-o5_3f0",
    authDomain: "tempo-873ec.firebaseapp.com",
    databaseURL: "https://tempo-873ec.firebaseio.com",
    projectId: "tempo-873ec",
    storageBucket: "tempo-873ec.appspot.com",
    messagingSenderId: "397266004128",
    appId: "1:397266004128:web:03868b2510d5b88e6a01c5"
};

firebase.initializeApp(firebaseConfig);

export { firebase };