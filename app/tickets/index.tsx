import { View } from 'react-native';
import Text from 'react-native-ui-lib/text';
import { useEffect } from 'react';
import { getAllTicketsByEvent } from '../../src/utils/getAllTicketsByEvent';

const TicketsPage = () => {
	useEffect(() => {
		const fetchTickets = async () => {
			const tickets = await getAllTicketsByEvent('1');
			console.log('tickets');
			console.log(tickets);
		};

		fetchTickets();
	}, []);

	return (
		<View className="flex flex-1 justify-center items-center">
			<Text>Tickets</Text>
		</View>
	);
};

export default TicketsPage;
