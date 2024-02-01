import { useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import { NoInternetConnectionScreen } from '../src/screens/noInternetConnection';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectionStatusBar } from 'react-native-ui-lib';

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
				<StatusBar style="auto" hidden={true} />
			</QueryClientProvider>
		</>
	);
};

export default MainLayout;
