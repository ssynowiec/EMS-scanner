import { Slot } from 'expo-router';

import { SessionProvider } from '../src/contexts/auth/authContext';

const RootLayout = () => {
	return (
		<SessionProvider>
			<Slot />
		</SessionProvider>
	);
};

export default RootLayout;
