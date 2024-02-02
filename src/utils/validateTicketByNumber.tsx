export const validateTicketByNumber = async (
	eventID: string,
	ticketNo: string,
) => {
	const res = await fetch(
		`${process.env.EXPO_PUBLIC_API_URL}ticket/validate/${eventID}/${ticketNo}`,
	);
	return await res.json();
};
