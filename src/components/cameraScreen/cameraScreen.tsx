import { CameraView, useCameraPermissions } from 'expo-camera/next';
import { Text, TouchableOpacity, View } from 'react-native';

export const CameraScreen = ({ setStartCamera, onCodeScanned }) => {
	const [permission, requestPermission] = useCameraPermissions();

	if (!permission) requestPermission();

	// if (!permission.granted)
	// 	return (
	// 		<View className="flex flex-1 justify-center items-center">
	// 			<Text>No access to camera</Text>
	// 			<Button onPress={requestPermission}>
	// 				<Text>Request permission</Text>
	// 			</Button>
	// 		</View>
	// 	);

	return (
		<View className="flex flex-1 w-full">
			<CameraView
				className="flex flex-1"
				type="back"
				barcodeScannerSettings={{
					barCodeTypes: ['qr'],
				}}
				onBarcodeScanned={(event) => {
					onCodeScanned(event.data);
					setStartCamera(false);
				}}
			>
				<CameraView />
				<View className="flex h-full items-center flex-row justify-center">
					<TouchableOpacity
						onPress={() => setStartCamera(false)}
						className="bg-purple-600 p-4 w-1/2 items-center justify-center text-white rounded-md self-end mb-10"
					>
						<Text className="text-white">stop scanning</Text>
					</TouchableOpacity>
				</View>
			</CameraView>
		</View>
	);
};
