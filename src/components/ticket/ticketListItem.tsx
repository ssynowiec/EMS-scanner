import { useState } from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-ui-lib';
import Text from 'react-native-ui-lib/text';

import { TicketDetailsModal } from './ticketDetailsModal';

export const TicketListItem = ({ ticket }) => {
	const { validated } = ticket;
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<ListItem
			onPress={() => setIsModalOpen(true)}
			className="flex justify-center w-full border-b border-gray-300"
		>
			<TicketDetailsModal
				ticket={ticket}
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
			/>
			<View className="w-full p-2 flex justify-between h-full">
				<Text grey10 text90>
					{ticket.ticketNo}
				</Text>
				<View>
					{validated ? (
						<Text green10>Validated</Text>
					) : (
						<Text red10>Not validated</Text>
					)}
				</View>
			</View>
			{/*</Drawer>*/}
		</ListItem>
	);
};
