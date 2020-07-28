import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBDPg1Vf5cc8GnXjP6qVNZVxNWdd3Of4P4',
  authDomain: 'tinder-24e33.firebaseapp.com',
  databaseURL: 'https://tinder-24e33.firebaseio.com',
  projectId: 'tinder-24e33',
  storageBucket: 'tinder-24e33.appspot.com',
  messagingSenderId: '158951927014',
  appId: '1:158951927014:web:18966d3743815de1355f27',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
