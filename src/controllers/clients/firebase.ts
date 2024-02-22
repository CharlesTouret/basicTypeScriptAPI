import * as firebaseApp from 'firebase/app';
import * as firebaseAuth from 'firebase/auth';

const configFirebase = {
  apiKey: 'AIzaSyD5KJOHndJVAVAg4eQ7gZjX28xbqU96MIw',
  authDomain: 'finsbury-edd90.firebaseapp.com',
  projectId: 'finsbury-edd90',
  storageBucket: 'finsbury-edd90.appspot.com',
  messagingSenderId: '991025568541',
  appId: '1:991025568541:web:9151af1f7e7a4c7de01ff4',
  measurementId: 'G-D96XWJS362',
};

let app: any = null;

function getConnection() {
  if (!app) {
    app = firebaseApp.initializeApp(configFirebase);
    app = firebaseAuth.getAuth(app);
  }
  return app;
}

export default {
  getConnection,
};
