import { router } from 'expo-router';
import { View } from 'react-native';
import { Button } from 'react-native-ui-lib';

import { useSession } from '../src/contexts/auth/authContext';

export default function SignIn() {
	const { signIn } = useSession();
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Button
				onPress={() => {
					signIn();
					// Navigate after signing in. You may want to tweak this to ensure sign-in is
					// successful before navigating.
					router.replace('/');
				}}
				label="Sign In"
			/>
		</View>
	);
}
