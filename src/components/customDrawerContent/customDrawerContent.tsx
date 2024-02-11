import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
	DrawerItem,
	DrawerItemList,
} from '@react-navigation/drawer';
import { router } from 'expo-router';

import { useSession } from '../../contexts/auth/authContext';

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
	const { signOut } = useSession();

	return (
		<DrawerContentScrollView>
			<DrawerItemList {...props} />

			<DrawerItem
				label="Wyloguj się"
				onPress={async () => {
					signOut();
					router.push('/');
				}}
			/>
		</DrawerContentScrollView>
	);
};
