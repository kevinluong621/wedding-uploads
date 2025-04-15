// Import the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getStorage, ref, uploadBytes } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-storage.js";

// Firebase config (replace with your own config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Get the file input and upload button
const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');

// Upload button click event
uploadButton.addEventListener('click', () => {
  const file = fileInput.files[0]; // Get the file selected by the user
  if (!file) {
    alert('Please select a file to upload');
    return;
  }

  // Create a reference to Firebase Storage
  const storageRef = ref(storage, 'uploads/' + file.name); // File path in Firebase Storage

  // Upload the file to Firebase
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a file!');
    alert('File uploaded successfully!');
  }).catch((error) => {
    console.error('Error uploading file:', error);
    alert('Failed to upload the file');
  });
});
