import React from 'react';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCn6yPvN-s8utPSkV7nMufxPRzqFbxn4Cc ',
  authDomain: 'seeadelaide-1608511868820.firebaseapp.com',
  databaseURL: 'https://seeadelaide-1608511868820-default-rtdb.firebaseio.com/',
  projectId: 'seeadelaide-1608511868820',
  storageBucket: 'gs://seeadelaide-1608511868820.appspot.com',
};

firebase.initializeApp(firebaseConfig);

function storeHighScore(userId, score) {
  firebase
    .database()
    .ref('users/' + userId)
    .set({
      highscore: score,
    });

    console.log("Stored score.");
}

function listFiles(reference, pageToken) {
  return reference.list({ pageToken }).then(result => {
    // Loop over each item
    result.items.forEach(ref => {
      firebase.storage().ref(ref.fullPath).getDownloadURL().then(
        function(url)
        {
          console.log('Path is: '+ref.fullPath);
          console.log('Download is: '+url);
        });
    });

    if (result.nextPageToken) {
      return listFilesAndDirectories(reference, result.nextPageToken);
    }
    return Promise.resolve();
  });
}
