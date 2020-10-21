import { firebase } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBX1PreDJi_Z-e2Irp_HcmV2vayJ9bcZzg",
  authDomain: "discord-58ed2.firebaseapp.com",
  databaseURL: "https://discord-58ed2.firebaseio.com",
  projectId: "discord-58ed2",
  storageBucket: "discord-58ed2.appspot.com",
  messagingSenderId: "95549079058",
  appId: "1:95549079058:web:e1155694091545bf28a2cb",
  measurementId: "G-WRFDNTT57F",
};

const firebaseApp = firebase.initialize(firebaseConfig);
const db = firebaseApp.firstore();
const auth = firebase.auth();
const provider = firebase.auth.GoogleAuthProvider();

export { db, provider };
export default db;
