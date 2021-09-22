import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAJwxIyCEsDyF3DL3lzFswW4h7yZbW09s8',
	authDomain: 'personal-website-99bc5.firebaseapp.com',
	projectId: 'personal-website-99bc5',
	storageBucket: 'personal-website-99bc5.appspot.com',
	messagingSenderId: '205522380299',
	appId: '1:205522380299:web:68ff4d1f17ffba014c090e',
	measurementId: 'G-D4B8YCFEQ0'
};

initializeApp(firebaseConfig);

export const db = getFirestore();

export async function addData(collectionName: string, data: object) {
	try {
		await addDoc(collection(db, collectionName), data);
	} catch (err) {
		return err;
	}
}
