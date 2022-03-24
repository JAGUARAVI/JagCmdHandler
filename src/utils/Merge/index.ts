// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export = function merge(model: { [key: string]: any }, value: { [key: string]: any }, strict = true): { [key: string]: any } {
	const obj1 = { ...model }, obj2 = { ...value };

	for (const key in obj2) {
		if (typeof obj2[key] == 'object' && !Array.isArray(obj1[key])) obj1[key] = merge(obj1[key], obj2[key], strict);
		else if (strict) {
			if (key in obj1) obj1[key] = obj2[key];
		}
		else obj1[key] = obj2[key] || obj1[key];
	}

	return obj1;
}