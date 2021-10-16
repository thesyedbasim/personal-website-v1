import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

interface firebaseConfigType {
	apiKey: string;
	authDomain: string;
	projectId: string;
	storageBucket: string;
	messagingSenderId: string;
	appId: string;
	measurementId?: string;
}

const firebaseConfig: firebaseConfigType = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

if (process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID)
	firebaseConfig.measurementId =
		process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Creates a new document in firebase firestore database.
 * @param collectionName - Name of the collection in a the firestore database
 * @param data - Data which must be added to the firestore collection
 * @returns The error object, if any
 */
export async function addData(
	collectionName: string,
	data: object
): Promise<Error> {
	try {
		await addDoc(collection(db, collectionName), data);
	} catch (err) {
		return err;
	}
}
