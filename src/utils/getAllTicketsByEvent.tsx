export const getAllTicketsByEvent = async (eventId: string) => {
	const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}ticket/all`);
	return await res.json();
};