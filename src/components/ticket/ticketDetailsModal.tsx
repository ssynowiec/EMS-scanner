import { useMutation } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import { Button, Colors, Modal } from 'react-native-ui-lib';
import Text from 'react-native-ui-lib/text';

import { validateTicketByNumber } from '../../utils/validateTicketByNumber';

export const TicketDetailsModal = ({ ticket, isModalOpen, setIsModalOpen }) => {
	const validateTicket = useMutation({
		mutationFn: async () => validateTicketByNumber('', ticket.ticketNo),
	});

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
				<View className="p-4">
					{validateTicket.isError && (
						<Text>{validateTicket.error.message}</Text>
					)}
					{validateTicket.isSuccess && (
						<Text>Successfully validated ticket</Text>
					)}
					{!ticket.validated && (
						<Button
							label="Validate ticket"
							color={Colors.purple10}
							className="rounded-md border border-purple-800 bg-white text-purple-800"
							onPress={() => validateTicket.mutate()}
						/>
					)}
				</View>
				<StatusBar style="auto" hidden />
			</SafeAreaView>
		</Modal>
	);
};
