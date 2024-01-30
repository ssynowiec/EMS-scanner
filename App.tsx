import { StatusBar } from 'expo-status-bar';
import View from 'react-native-ui-lib/view';
import Text from 'react-native-ui-lib/text';
import { useState } from 'react';
import { Button, ConnectionStatusBar } from 'react-native-ui-lib';
import { SafeAreaView as SafeAreaContext } from 'react-native-safe-area-context';
import { NoInternetConnectionScreen } from './src/screens/noInternetConnection';

const App = () => {
	const [isInternetConnection, setIsInternetConnection] =
		useState<boolean>(false);

	if (!isInternetConnection)
		return (
			<NoInternetConnectionScreen setConnection={setIsInternetConnection} />
		);

	return (
		<SafeAreaContext className="flex flex-1 justify-center">
			<View flex center className="flex justify-center items-center flex-1">
				<ConnectionStatusBar
					onConnectionChange={(isConnected) =>
						setIsInternetConnection(isConnected)
					}
				/>
				<Text text50>Welcome!</Text>
				<Button
					label="START"
					className="rounded-2xl bg-purple-600"
					onPress={() => console.log('test')}
				/>
				<StatusBar style="auto" hidden={true} />
			</View>
		</SafeAreaContext>
	);
};

export default App;
