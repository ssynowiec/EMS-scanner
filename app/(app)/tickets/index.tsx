import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Text,
	TextInput,
	TouchableHighlight,
	View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { CameraScreen } from '../../../src/components/cameraScreen/cameraScreen';
import { TicketListItem } from '../../../src/components/ticket/ticketListItem';
import { useSession } from '../../../src/contexts/auth/authContext';
import { getAllTicketsByEvent } from '../../../src/utils/getAllTicketsByEvent';

const TicketsPage = () => {
	const { eventId } = useSession();

	const {
		data: tickets,
		isLoading,
		isError,
		isSuccess,
		refetch,
		isFetching,
	} = useQuery({
		queryKey: ['tickets'],
		queryFn: async () => {
			return await getAllTicketsByEvent(eventId);
		},
	});

	const [searchText, setSearchText] = useState('');
	const [startCamera, setStartCamera] = useState(false);

	const filteredTickets = useMemo(() => {
		if (!searchText) return tickets;
		return tickets.filter((ticket) => ticket.ticketNo.includes(searchText));
	}, [searchText, tickets]);

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
			{isLoading ? <ActivityIndicator /> : null}
			{isError ? <Text>Error</Text> : null}

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

			{isSuccess ? (
				<FlatList
					data={filteredTickets}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => <TicketListItem ticket={item} />}
					ListEmptyComponent={() => (
						<Text className="font-bold">No tickets</Text>
					)}
					onRefresh={() => refetch()}
					refreshing={isFetching}
					className="flex flex-1 w-full"
				/>
			) : null}
		</View>
	);
};

export default TicketsPage;
