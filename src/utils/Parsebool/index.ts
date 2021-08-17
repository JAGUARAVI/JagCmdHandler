export = (v: string) => {
	if (v == '1') return true;
	if (v == '0') return false;
	if (v == undefined || v == 'undefined') return false;
	if (v == null || v == 'null') return false;
	if (v == 'yes') return true;
	if (v == 'no') return false;
	if (v == 'on') return true;
	if (v == 'off') return false;
	return (v.toLowerCase() === 'true');
}
  