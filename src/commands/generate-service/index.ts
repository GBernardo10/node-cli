import * as ejs from "ejs";
import path from "path";
import fs from "fs";
import { Utils } from "../../utils";

export interface TemplateData {
	data: string;
}
export function render(content: string, data: TemplateData): string {
	return ejs.render(content, data);
}

export class GenerateService {
	public async createFile(name: string): Promise<void> {
		const { toUpperCaseFirstCharacter } = new Utils();
		const pathFile = `${process.cwd()}/src/service/`;

		let contents = fs.readFileSync(
			`${process.cwd()}/src/templates/service/service.ts.ejs`,
			"utf8",
		);

		contents = render(contents, { data: toUpperCaseFirstCharacter(name) });
		fs.writeFileSync(
			path.resolve(`${pathFile}/${name.toLowerCase()}.service.ts`),
			contents,
			"utf8",
		);
	}
}
