import { Link } from '@react-navigation/native';
import { View } from 'react-native';
import Text from 'react-native-ui-lib/text';

import { useSession } from '../../src/contexts/auth/authContext';

const WelcomeScreen = () => {
	const { eventId, scannerName } = useSession();

	return (
		<View className="flex flex-1 justify-center items-center">
			<Text>Welcome to EMS Scanner!</Text>
			<Link to="/scan">Start scanning</Link>
			<Text>Event: {eventId}</Text>
			<Text>Scanner: {scannerName}</Text>
		</View>
	);
};

export default WelcomeScreen;
