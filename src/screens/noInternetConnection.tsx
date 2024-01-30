import { Text } from 'react-native';
import React from 'react';
import { ConnectionStatusBar } from 'react-native-ui-lib';
import { SafeAreaView as SafeAreaContext } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

interface NoInternetConnectionScreenProps {
	setConnection: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NoInternetConnectionScreen = ({
	setConnection,
}: NoInternetConnectionScreenProps) => {
	return (
		<SafeAreaContext className="flex flex-1 justify-center items-center">
			<ConnectionStatusBar
				onConnectionChange={(isConnected) => setConnection(isConnected)}
			/>
			<Text>No Internet Connection</Text>
			<StatusBar style="auto" hidden={true} />
		</SafeAreaContext>
	);
};
