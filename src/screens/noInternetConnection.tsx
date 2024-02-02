import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView as SafeAreaContext } from 'react-native-safe-area-context';
import { ConnectionStatusBar } from 'react-native-ui-lib';

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
			<StatusBar style="auto" hidden />
		</SafeAreaContext>
	);
};
