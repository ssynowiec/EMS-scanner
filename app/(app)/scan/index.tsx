import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-ui-lib';

import { CameraScreen } from '../../../src/components/cameraScreen/cameraScreen';
import { Modal } from '../../../src/components/modal/modal';
import { validateTicketByNumber } from '../../../src/utils/validateTicketByNumber';

const ScanPage = () => {
	const [startScanner, setStartScanner] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [scannedTicket, setScannedTicket] = useState({});

	const onSuccessScanned = useMutation({
		mutationFn: async (data: string) => {
			setScannedTicket({ ticketNo: data });
			const ticketData = await validateTicketByNumber(
				'61772e63-4345-4e60-91c9-db7e1901e993',
				data,
			);
			setScannedTicket((prevState) => ({ ...prevState, ...ticketData }));
			setModalVisible(true);
		},
	});

	if (startScanner) {
		return (
			<CameraScreen
				setStartCamera={setStartScanner}
				onCodeScanned={onSuccessScanned.mutate}
			/>
		);
	}

	return (
		<View className="flex flex-1 justify-center items-center">
			<Button
				label="OPEN SCANNER"
				onPress={() => setStartScanner(true)}
				className="rounded-md"
			/>
			<Modal
				modalVisible={modalVisible}
				setModalVisible={setModalVisible}
				ticket={scannedTicket}
			/>
		</View>
	);
};

export default ScanPage;
