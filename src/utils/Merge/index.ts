// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export = function merge(model: { [key: string]: any }, value: { [key: string]: any }): { [key: string]: any }  {
	const obj1 = { ...model }, obj2 = { ...value };

	for (const key in obj1) {
		if (typeof obj2[key] === 'object' && obj2[key].constructor === Object) obj1[key] = merge(obj1[key], obj2[key]);
		else if (key in obj2) obj1[key] = obj2[key];
	}
    
	return obj1;
}