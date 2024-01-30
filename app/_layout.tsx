import Text from 'react-native-ui-lib/text';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Slot } from 'expo-router';
import { useState } from 'react';
import { NoInternetConnectionScreen } from '../src/screens/noInternetConnection';
import { ConnectionStatusBar } from 'react-native-ui-lib';
import { StatusBar } from 'expo-status-bar';

const MainLayout = () => {
	const [isInternetConnection, setIsInternetConnection] = useState<boolean>();

	if (!isInternetConnection)
		return (
			<NoInternetConnectionScreen setConnection={setIsInternetConnection} />
		);

	return (
		<SafeAreaView className="flex flex-1 justify-center items-center">
			<ConnectionStatusBar
				onConnectionChange={(isConnected) =>
					setIsInternetConnection(isConnected)
				}
			/>
			<Text>Header</Text>
			<Slot />
			<Text>Footer</Text>
			<StatusBar style="auto" hidden={true} />
		</SafeAreaView>
	);
};

export default MainLayout;
