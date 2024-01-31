import { useState } from 'react';
import { Drawer } from 'expo-router/drawer';
import { NoInternetConnectionScreen } from '../src/screens/noInternetConnection';
import { StatusBar } from 'expo-status-bar';

const MainLayout = () => {
	const [isInternetConnection, setIsInternetConnection] = useState<boolean>();

	if (!isInternetConnection)
		return (
			<NoInternetConnectionScreen setConnection={setIsInternetConnection} />
		);

	return (
		<>
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
			</Drawer>
			<StatusBar style="auto" hidden={true} />
		</>
	);
};

export default MainLayout;
