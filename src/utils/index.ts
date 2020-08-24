export class Utils {
	public toUpperCaseFirstCharacter(value: string): string {
		return value[0].toUpperCase() + value.substring(1, value.length);
	}
}
