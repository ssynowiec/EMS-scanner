import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Text,
	TextInput,
	TouchableHighlight,
	View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { CameraScreen } from '../../src/components/cameraScreen/cameraScreen';
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
	const [startCamera, setStartCamera] = useState(false);

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

	if (startCamera) {
		return (
			<CameraScreen
				setStartCamera={setStartCamera}
				onCodeScanned={setSearchText}
			/>
		);
	}

	return (
		<View className="flex flex-1 justify-center px-4 bg-white">
			{ticketsQuery.isLoading ? <ActivityIndicator /> : null}
			{ticketsQuery.isError ? <Text>Error</Text> : null}

			<View className="flex flex-row justify-between items-center w-full">
				<TextInput
					onChangeText={(value) => setSearchText(value)}
					className="border rounded p-3 py-2 w-[90%]"
					value={searchText}
				/>
				<TouchableHighlight
					onPress={() => setStartCamera(true)}
					className="w-10% p-2"
				>
					<Icon name="qrcode-scan" size={30} />
				</TouchableHighlight>
			</View>

			{ticketsQuery.isSuccess ? (
				<FlatList
					// data={ticketsQuery.data}
					data={filteredData}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => <TicketListItem ticket={item} />}
					ListEmptyComponent={() => (
						<Text className="font-bold">No tickets</Text>
					)}
					onRefresh={() => ticketsQuery.refetch()}
					refreshing={ticketsQuery.isFetching}
					className="flex flex-1 w-full"
				/>
			) : null}
		</View>
	);
};

export default TicketsPage;
