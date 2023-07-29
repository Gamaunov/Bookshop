export function classNames(
	cls: string,
	additional: Array<string | undefined> = []
): string {
	return [cls, ...additional.filter(Boolean)].join(' ');
}
