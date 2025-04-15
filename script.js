import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');

uploadButton.addEventListener('click', () => {
  const file = fileInput.files[0];
  if (!file) {
    alert('Please select a file to upload');
    return;
  }

  const storageRef = ref(storage, 'uploads/' + file.name);

  uploadBytes(storageRef, file).then((snapshot) => {
    alert('File uploaded successfully!');
  }).catch((error) => {
    console.error(error);
    alert('Upload failed');
  });
});
