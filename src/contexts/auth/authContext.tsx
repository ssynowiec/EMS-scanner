import { createContext, PropsWithChildren, useContext } from 'react';

import { useStorageState } from './useStorageState';

export interface LoginDataInterface {
	login: string;
}

interface ScannerDataInterface extends LoginDataInterface {
	eventId: string;
}

const AuthContext = createContext<{
	signIn: (data: ScannerDataInterface) => void;
	signOut: () => void;
	scannerName: string | null;
	eventId: string | null;
	isLoading: boolean;
}>({
	signIn: () => null,
	signOut: () => null,
	scannerName: null,
	eventId: null,
	isLoading: false,
});

export const useSession = () => {
	const value = useContext(AuthContext);
	if (process.env.NODE_ENV !== 'production') {
		if (!value) {
			throw new Error('useSession must be wrapped in a <SessionProvider />');
		}
	}

	return value;
};

export const SessionProvider = (props: PropsWithChildren) => {
	const [[isEventIdLoading, eventId], setEventId] = useStorageState('eventId');
	const [[isScannerNameLoading, scannerName], setScannerName] =
		useStorageState('scannerName');

	return (
		<AuthContext.Provider
			value={{
				signIn: (data) => {
					setScannerName(data.login);
					setEventId(data.eventId);
				},
				signOut: () => {
					setEventId(null);
					setScannerName(null);
				},
				eventId,
				scannerName,
				isLoading: isEventIdLoading,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
