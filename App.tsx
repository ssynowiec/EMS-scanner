import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';

export default function App() {
	return (
		<View className="flex justify-center items-center flex-1">
			<Text className="text-red-500 font-bold">Welcome!</Text>
			<TouchableOpacity
				onPress={() => console.log('test')}
				className="bg-purple-600 px-5 py-2 rounded-lg text-white"
			>
				<Text>START</Text>
			</TouchableOpacity>
			<StatusBar style="auto" />
		</View>
	);
}
