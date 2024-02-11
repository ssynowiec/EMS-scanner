import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ConnectionStatusBar } from 'react-native-ui-lib';

import { NoInternetConnectionScreen } from '../src/screens/noInternetConnection';

const queryClient = new QueryClient();

const MainLayout = () => {
	const [isInternetConnection, setIsInternetConnection] = useState<boolean>();

	if (!isInternetConnection)
		return (
			<NoInternetConnectionScreen setConnection={setIsInternetConnection} />
		);

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ConnectionStatusBar
					onConnectionChange={(isConnected) =>
						setIsInternetConnection(isConnected)
					}
				/>
				<Drawer>
					<Drawer.Screen
						name="index"
						options={{
							drawerLabel: 'Home',
							title: 'Start',
						}}
					/>
					<Drawer.Screen
						name="welcome/index"
						options={{
							drawerLabel: 'Welcome',
							title: 'Welcome',
						}}
					/>
					<Drawer.Screen
						name="scan/index"
						options={{
							drawerLabel: 'Scan',
							title: 'Scan',
						}}
					/>
					<Drawer.Screen
						name="tickets/index"
						options={{
							drawerLabel: 'All tickets',
							title: 'All tickets',
						}}
					/>
				</Drawer>
				<StatusBar style="auto" hidden />
			</QueryClientProvider>
		</>
	);
};

export default MainLayout;
