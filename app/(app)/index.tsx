import { Link } from '@react-navigation/native';
import { View } from 'react-native';
import Text from 'react-native-ui-lib/text';

import { useSession } from '../../src/contexts/auth/authContext';

const WelcomeScreen = () => {
	const { session } = useSession();

	return (
		<View className="flex flex-1 justify-center items-center">
			<Text>Welcome to React Native!</Text>
			<Link to="/scan">Go scan</Link>
			<Text>{session}</Text>
		</View>
	);
};

export default WelcomeScreen;
