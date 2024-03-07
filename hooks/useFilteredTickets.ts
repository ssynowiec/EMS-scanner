import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

import { useSession } from '../src/contexts/auth/authContext';
import { getAllTicketsByEvent } from '../src/utils/getAllTicketsByEvent';

export const useFilteredTickets = () => {
	const { eventId } = useSession();

	const {
		data: tickets,
		isLoading,
		isError,
		isSuccess,
		refetch,
		isFetching,
	} = useQuery({
		queryKey: ['tickets', eventId],
		queryFn: () => getAllTicketsByEvent(eventId),
	});

	const [searchText, setSearchText] = useState('');

	const filteredTickets = useMemo(() => {
		if (!searchText) return tickets;
		return tickets.filter((ticket) => ticket.ticketNo.includes(searchText));
	}, [searchText, tickets]);

	return {
		isLoading,
		isError,
		isSuccess,
		refetch,
		isFetching,
		searchText,
		setSearchText,
		filteredTickets,
	};
};
