import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Redirect } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text } from 'react-native';
import { ConnectionStatusBar } from 'react-native-ui-lib';

import { CustomDrawerContent } from '../../src/components/customDrawerContent/customDrawerContent';
import { useSession } from '../../src/contexts/auth/authContext';
import { NoInternetConnectionScreen } from '../../src/screens/noInternetConnection';

const queryClient = new QueryClient();

const MainLayout = () => {
	const { session, isLoading } = useSession();

	const [isInternetConnection, setIsInternetConnection] = useState<boolean>();

	if (!isInternetConnection)
		return (
			<NoInternetConnectionScreen setConnection={setIsInternetConnection} />
		);

	if (isLoading) return <Text>Loading...</Text>;

	if (!session) return <Redirect href="/sign-in" />;

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ConnectionStatusBar
					onConnectionChange={(isConnected) =>
						setIsInternetConnection(isConnected)
					}
				/>
				<Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
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
