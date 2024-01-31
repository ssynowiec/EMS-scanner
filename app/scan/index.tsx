import { View } from 'react-native';
import Text from 'react-native-ui-lib/text';
import { Button } from 'react-native-ui-lib';

const ScanPage = () => {
	return (
		<View className="flex flex-1 justify-center items-center">
			<Text>Scan Page</Text>
			<Button label="START SCAN" />
		</View>
	);
};

export default ScanPage;
