import { clsx } from 'clsx';
import {
	Modal as NativeModal,
	Pressable,
	StyleSheet,
	Text,
	View,
} from 'react-native';

export const Modal = ({ modalVisible, setModalVisible, ticket }) => {
	const { ticketNo, isValid, message } = ticket;
	const validClass = isValid ? 'bg-green-400' : 'bg-red-400';
	return (
		<View>
			<NativeModal
				animationType="slide"
				transparent
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<View className="flex flex-1 justify-center items-center">
					<View
						style={styles.modalView}
						className={clsx(
							'rounded-md flex items-center bg-white p-8',
							validClass,
						)}
					>
						<Text>Ticket:</Text>
						<Text className="font-bold">{ticketNo}</Text>
						{!isValid && <Text>Error: {message}</Text>}
						<Pressable
							className="bg-purple-600 p-4 rounded-md"
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text className="text-white font-extrabold">OK (close)</Text>
						</Pressable>
					</View>
				</View>
			</NativeModal>
		</View>
	);
};

const styles = StyleSheet.create({
	modalView: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
});
