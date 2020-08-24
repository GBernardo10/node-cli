/* eslint-disable no-unused-expressions */
import { Command, CommanderStatic } from "commander";
import { Generate } from "./commands";
import {
	INIT,
	GENERATE,
	GENERATE_OPTION_SERVICE,
	GENERATE_OPTION_MODEL,
	GENERATE_OPTION_CONTROLLER,
} from "./constants";
import { version } from "../package.json";

class Main {
	private generate: Generate;

	constructor(private commander: CommanderStatic["new Command"]) {
		this.generate = new Generate();
		this.initialize();
	}

	private generateDefaultProject(): void {
		this.commander.command(INIT).action(this.generate.default);
	}

	private generateService(): void {
		// const teste: Command;

		// teste.action;

		this.commander
			.command(GENERATE.command)
			.alias(GENERATE.alias)
			.description(GENERATE.description)
			.option(GENERATE_OPTION_SERVICE.get(GENERATE.options[0]), "Service")
			.option(GENERATE_OPTION_MODEL.get(GENERATE.options[1]), "Model")
			.option(GENERATE_OPTION_CONTROLLER.get(GENERATE.options[2]), "Controller")
			.action((res: Command, args: Command) => {
				this.generate.default(res, args);
			});
	}

	private initialize() {
		this.commander.version(version);
		this.generateDefaultProject();
		this.generateService();
		this.commander.parse(process.argv);
	}
}

new Main(new Command());
