import { prompt } from "inquirer";
import { Command } from "commander";
import { Answers } from "./index";

export class GenerateDefaultProject {
	public async generateEmpty(opts: Command) {}

	public async generateWithDatabase(opts: Command) {}

	public async generateDefault(opts: Command) {}

	// public async generateEmpty(opts: Command): Promise<Answers> {
	// 	const answers: Answers = await prompt([
	// 		{
	// 			type: "input",
	// 			name: "project_name",
	// 			message: "what's the name of the project ",
	// 		},
	// 		{
	// 			type: "list",
	// 			name: "option",
	// 			message: "How do you want to start your project?",
	// 			choices: ["TypeScript", "JavaScript [ES6]"],
	// 		},
	// 	]);

	// 	console.log(opts);

	// 	return answers;
	// }
}
