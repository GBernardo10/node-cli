/* eslint-disable no-underscore-dangle */
import { Command } from "commander";
import { GenerateService } from "../generate-service";

// export abstract class Answers implements IAnswers {
// 	name: string;

// 	option: string;
// }

// export interface IAnswers {
// 	name: string;
// 	option: string;
// }

export class Generate {
	public async default(source: Command, destination: Command): Promise<void> {
		const generateService = new GenerateService();

		const { _name, service, model, controller } =
			destination || source || undefined;

		const _options = Object.keys(source)[
			Object.values(source).indexOf(service || model || controller)
		];

		if (!_name) {
			process.exit(1);
		}

		const command = {
			init(arg: string) {
				console.log(arg);
			},
			generate() {
				const options = {
					service(option: string) {
						generateService.createFile(option);
					},
					model(option: string) {
						generateService.createFile(option);
					},
					controller(option: string) {
						generateService.createFile(option);
					},
				};
				return options;
			},
		};

		const commands = command[_name];

		commands()[_options](service, model, controller);
	}
}
