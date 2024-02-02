import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { TextField } from 'react-native-ui-lib';
import Text from 'react-native-ui-lib/text';

import { TicketListItem } from '../../src/components/ticket/ticketListItem';
import { getAllTicketsByEvent } from '../../src/utils/getAllTicketsByEvent';

const tickets = [
	{
		ticketNo: 'f1c5d7f9-4d3c-4f2a-8f9d-5d6a6c7d5b5f',
		validated: false,
		eventId: '',
		userId: '',
		createdAt: '2024-01-31T18:24:59.000Z',
		updatedAt: '2024-01-31T18:24:59.000Z',
		validatedAt: null,
	},
	{
		ticketNo: 'f1c5d7f9-4d3c-4f2a-8f9d-5d6a6c7d5b5g',
		validated: false,
		eventId: '',
		userId: '',
		createdAt: '2024-01-31T18:24:59.000Z',
		updatedAt: '2024-01-31T18:24:59.000Z',
		validatedAt: null,
	},
	{
		ticketNo: 'f1c5d7f9-4d3c-4f2a-8f9d-5d6a6c7d5b5h',
		validated: false,
		eventId: '',
		userId: '',
		createdAt: '2024-01-31T18:24:59.000Z',
		updatedAt: '2024-01-31T18:24:59.000Z',
		validatedAt: null,
	},
	{
		ticketNo: 'f1c5d7f9-4d3c-4f2a-8f9d-5d6a6c7d5b5f',
		validated: false,
		eventId: '',
		userId: '',
		createdAt: '2024-01-31T18:24:59.000Z',
		updatedAt: '2024-01-31T18:24:59.000Z',
		validatedAt: null,
	},
	{
		ticketNo: '123456-4d3c-4f2a-8f9d-5d6a6c7d5b5g',
		validated: false,
		eventId: '',
		userId: '',
		createdAt: '2024-01-31T18:24:59.000Z',
		updatedAt: '2024-01-31T18:24:59.000Z',
		validatedAt: null,
	},
	{
		ticketNo: 'f1c5d7f9-4d3c-4f2a-8f9d-5d6a6c7d5b5h',
		validated: false,
		eventId: '',
		userId: '',
		createdAt: '2024-01-31T18:24:59.000Z',
		updatedAt: '2024-01-31T18:24:59.000Z',
		validatedAt: null,
	},

	{
		ticketNo: 'f1c5d7f9-4d3c-4f2a-8f9d-5d6a6c7d5b5f',
		validated: true,
		eventId: '',
		userId: '',
		createdAt: '2024-01-31T18:24:59.000Z',
		updatedAt: '2024-01-31T18:24:59.000Z',
		validatedAt: '2024-02-01T10:00:00.000Z',
	},
	{
		ticketNo: 'f1c5d7f9-4d3c-4f2a-8f9d-5d6a6c7d5b5g',
		validated: false,
		eventId: '',
		userId: '',
		createdAt: '2024-01-31T18:24:59.000Z',
		updatedAt: '2024-01-31T18:24:59.000Z',
		validatedAt: null,
	},
	{
		ticketNo: 'f1c5d7f9-4d3c-4f2a-8f9d-5d6a6c7d5b5h',
		validated: true,
		eventId: '',
		userId: '',
		createdAt: '2024-01-31T18:24:59.000Z',
		updatedAt: '2024-01-31T18:24:59.000Z',
		validatedAt: '2024-02-01T11:00:00.000Z',
	},
];
const TicketsPage = () => {
	const ticketsQuery = useQuery({
		queryKey: ['tickets'],
		queryFn: async () => {
			return await getAllTicketsByEvent('');
		},
	});

	const [filteredData, setFilteredData] = useState(tickets);
	const [searchText, setSearchText] = useState('');

	useEffect(() => {
		if (searchText === '') {
			setFilteredData(tickets);
			return;
		}
		const filtered = filteredData.filter((ticket) => {
			return ticket.ticketNo.includes(searchText);
		});
		setFilteredData(filtered);
	}, [searchText]);

	return (
		<View className="flex flex-1 justify-center px-4 bg-white">
			{ticketsQuery.isLoading ? <ActivityIndicator /> : null}
			{ticketsQuery.isError ? <Text>Error</Text> : null}
			<TextField
				floatingPlaceholder
				onChangeText={(value) => setSearchText(value)}
				enableErrors
				className="border rounded p-3 py-2 w-full"
			/>
			{ticketsQuery.isSuccess ? (
				<FlatList
					// data={ticketsQuery.data}
					data={filteredData}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => <TicketListItem ticket={item} />}
					ListEmptyComponent={() => (
						<Text className="font-bold">No tickets</Text>
					)}
					className="flex flex-1 w-full"
				/>
			) : null}
		</View>
	);
};

export default TicketsPage;
