import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ConnectionStatusBar } from 'react-native-ui-lib';

import { SessionProvider } from '../src/contexts/auth/authContext';
import { NoInternetConnectionScreen } from '../src/screens/noInternetConnection';

const queryClient = new QueryClient();

const RootLayout = () => {
	const [isInternetConnection, setIsInternetConnection] = useState<boolean>();

	if (!isInternetConnection)
		return (
			<NoInternetConnectionScreen setConnection={setIsInternetConnection} />
		);

	return (
		<QueryClientProvider client={queryClient}>
			<ConnectionStatusBar
				onConnectionChange={(isConnected) =>
					setIsInternetConnection(isConnected)
				}
			/>
			<SessionProvider>
				<Slot />
			</SessionProvider>
			<StatusBar style="auto" hidden />
		</QueryClientProvider>
	);
};

export default RootLayout;
