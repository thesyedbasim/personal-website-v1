import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { useState, useEffect } from 'react';

const useDisplayToast = () => {
	const [error, setError] = useState<boolean | string | null>(null);
	const [sent, setSent] = useState<boolean>(false);

	useEffect(() => {
		const showSuccess = () => {
			toast.success('Your request was successfully submitted!', {
				position: 'top-right',
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined
			});
		};

		if (sent === true && !error) {
			showSuccess();
			setSent(false);
		}
	}, [sent, error]);

	useEffect(() => {
		const showError = () => {
			toast.error(error, {
				position: 'top-right',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined
			});
		};

		if (error) {
			showError();
			setError(false);
		}
	}, [error]);

	return { err: { error, setError }, sentStatus: { sent, setSent } };
};

export default useDisplayToast;
