export const getAllTicketsByEvent = async (eventId: string) => {
	const res = await fetch(
		`${process.env.EXPO_PUBLIC_API_URL}ticket/all/${eventId}`,
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			cache: 'no-cache',
		},
	);
	return await res.json();
};
