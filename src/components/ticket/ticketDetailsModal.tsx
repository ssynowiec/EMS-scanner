import { Colors, Modal } from 'react-native-ui-lib';
import { SafeAreaView, View } from 'react-native';
import Text from 'react-native-ui-lib/text';
import { StatusBar } from 'expo-status-bar';

export const TicketDetailsModal = ({ ticket, isModalOpen, setIsModalOpen }) => {
	return (
		<Modal visible={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
			<SafeAreaView className="flex flex-1">
				<Modal.TopBar
					title="TICKET"
					includeStatusBar={false}
					subtitle={ticket.ticketNo}
					leftButtons={[
						{
							label: 'close',
							buttonProps: {
								labelStyle: { color: Colors.purple10 },
							},
							onPress: () => setIsModalOpen(false),
						},
					]}
				/>
				<View className="p-4">
					<Text text60>Details</Text>
					<View className="flex flex-row justify-between">
						<Text>Status:</Text>
						{ticket.validated ? (
							<Text green10>Validated</Text>
						) : (
							<Text red10>Not validated</Text>
						)}
					</View>
				</View>
				<StatusBar style="auto" hidden={true} />
			</SafeAreaView>
		</Modal>
	);
};
