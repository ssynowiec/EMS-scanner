import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import { Button, Colors, Modal } from 'react-native-ui-lib';
import Text from 'react-native-ui-lib/text';

export const TicketDetailsModal = ({ ticket, isModalOpen, setIsModalOpen }) => {
	const validateTicket = () => {};

	return (
		<Modal visible={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
			<SafeAreaView className="flex flex-1 flex-col justify-between">
				<View>
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
				</View>
				<Button
					label="Validate ticket"
					color={Colors.purple10}
					className="m-4 rounded-md border border-purple-800 bg-white text-purple-800"
					onPress={() => validateTicket()}
				/>
				<StatusBar style="auto" hidden />
			</SafeAreaView>
		</Modal>
	);
};
