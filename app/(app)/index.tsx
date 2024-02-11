import { Link } from '@react-navigation/native';
import { View } from 'react-native';
import { Button } from 'react-native-ui-lib';
import Text from 'react-native-ui-lib/text';

import { useSession } from '../../src/contexts/auth/authContext';

const WelcomeScreen = () => {
	const { signOut } = useSession();

	return (
		<View className="flex flex-1 justify-center items-center">
			<Text>Welcome to React Native!</Text>
			<Link to="/scan">Go scan</Link>
			<Button label="logout" onPress={signOut} />
		</View>
	);
};

export default WelcomeScreen;
