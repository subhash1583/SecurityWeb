// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyBKjYKlQSd0aMQSdwJRREZ08hQ07lR9CFQ',
	authDomain: 'security-agency-app-e136c.firebaseapp.com',
	projectId: 'security-agency-app-e136c',
	storageBucket: 'security-agency-app-e136c.appspot.com',
	messagingSenderId: '420120527710',
	appId: '1:420120527710:web:fa58c0b14da578a0c185cf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const insertData = async (name, email, subject, message) => {
	try {
		await addDoc(collection(db, 'users'), {
			name: name,
			email: email,
			subject: subject,
			message: message,
		});
	} catch (err) {
		console.log(`${err}`);
	}
};

export const insertAppliedData = async (...data) => {
	try {
		await addDoc(collection(db, 'position-seekers'), {
			name: data[0],
			contact: data[1],
			address: data[2],
			height: data[3],
		});
	} catch (err) {
		console.log(`${err}`);
	}
};
