import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyD54ewayp_1bvDHBwZdexBJnK0kR3WXk-g",
    authDomain: "burnished-range-184119.firebaseapp.com",
    databaseURL: "https://burnished-range-184119.firebaseio.com",
    projectId: "burnished-range-184119",
    storageBucket: "",
    messagingSenderId: "787835937009"
};

firebase.initializeApp(config);

export {
    firebase,
}

