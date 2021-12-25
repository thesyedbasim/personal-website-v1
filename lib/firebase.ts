import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, set } from 'firebase/database';

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

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

/**
 * Pushes data into realtime data in the specified path
 * @param path path to push data onto
 * @param data payload
 * @returns object with error
 */
export const pushData: (
	path: string,
	data: any
) => Promise<{ error: Error | null }> = async (path, data) => {
	let error: Error | null = null;

	try {
		const pathListRef = ref(database, path);
		const dataToPush = push(pathListRef);

		await set(dataToPush, data);
	} catch (err) {
		error = err;

		console.error(err);
	} finally {
		return { error };
	}
};
