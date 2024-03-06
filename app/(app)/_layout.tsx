import { Redirect } from 'expo-router';
import { Drawer } from 'expo-router/drawer';
import { Text } from 'react-native';

import { CustomDrawerContent } from '../../src/components/customDrawerContent/customDrawerContent';
import { useSession } from '../../src/contexts/auth/authContext';

const MainLayout = () => {
	const { eventId, scannerName, isLoading } = useSession();

	if (isLoading) return <Text>Loading...</Text>;

	if (!eventId || !scannerName) return <Redirect href="/sign-in" />;

	return (
		<>
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
		</>
	);
};

export default MainLayout;
