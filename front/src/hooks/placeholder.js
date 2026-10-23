import { useState } from 'react';

export default function usePlaceholder(initialValue = null) {
	const [value, setValue] = useState(initialValue);

	return { value, setValue };
}
