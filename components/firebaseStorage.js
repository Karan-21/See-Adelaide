import * as firebase from 'firebase';
// import 'firebase/firestore' ;

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../redux/reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

const firebaseConfig = {
  apiKey: 'AIzaSyCasJoX0kdMIswdl4Gj6DWIqClCm5Jl-Xw',
  authDomain: 'seeadelaide-1608511868820.firebaseapp.com',
  databaseURL: 'https://seeadelaide-1608511868820-default-rtdb.firebaseio.com/',
  projectId: 'seeadelaide-1608511868820',
  storageBucket: 'gs://seeadelaide-1608511868820.appspot.com',
  appId: '1:1028854562585:web:70e6731c085981ba92cf88',
};

let app ;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app() ;
}



// const storageRef = firebase.storage().ref("locations/glenelg") ;

// const storage = [] ;

// storageRef.listAll().then(async function(result) {
//   result.items.forEach(async function(item) {
//     const url = await item.getDownloadURL().then((url) => {
//         storage.push(url) ;
//         // console.log(storage) ;
//     }) ;
//   })
// })

// const db = firebase.firestore();

// firestore()
//   .collection('locations')
//   .get()
//   .then(querySnapshot => {
//     console.log('Total locations: ', querySnapshot.size);

//     querySnapshot.forEach(documentSnapshot => {
//       console.log('Location ID: ', documentSnapshot.id, documentSnapshot.data());
//     });
//   });

// export const locationsRef = db.collection("locations");

// function storeHighScore(userId, score) {
//   firebase
//     .database()
//     .ref('users/' + userId)
//     .set({
//       highscore: score,
//     });

//     console.log("Stored score.");
// }

// export function listFiles(reference, pageToken) {
//   const arr = [];
//   reference.list({ pageToken }).then(result => {
//     // Loop over each item
//     result.items.forEach(ref => {
//       firebase.storage().ref(ref.fullPath).getDownloadURL().then(
//         function(url)
//         {
//           console.log('Path is: '+ref.fullPath);
//           console.log('Download is: '+url);
//           arr.push(url);
//         });
//     });

//     if (result.nextPageToken) {
//       return listFilesAndDirectories(reference, result.nextPageToken);
//     }
//     return Promise.resolve();
//   });
// }
