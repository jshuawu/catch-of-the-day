import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCB5px2ct69MLi5HXkNphQXmSNCDlsNFTU',
  authDomain: 'catch-of-the-day-joshua-5f025.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-joshua-5f025.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
