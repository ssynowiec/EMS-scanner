import { useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	Text,
	TextInput,
	TouchableHighlight,
	View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { useFilteredTickets } from '../../../hooks/useFilteredTickets';
import { CameraScreen } from '../../../src/components/cameraScreen/cameraScreen';
import { TicketListItem } from '../../../src/components/ticket/ticketListItem';

const TicketsPage = () => {
	const [startCamera, setStartCamera] = useState(false);

	const {
		isLoading,
		isError,
		isSuccess,
		refetch,
		isFetching,
		searchText,
		setSearchText,
		filteredTickets,
	} = useFilteredTickets();

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
