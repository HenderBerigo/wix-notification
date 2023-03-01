import { publish } from 'wix-realtime-backend';

export function DB_afterUpdate(item, context) {
	const channel = { name: 'new-property' };
	let hookContext = context;
	let user = item.idMembro;
	publish(channel, { user: user });
	
	return item;
	
}