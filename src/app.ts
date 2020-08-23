import { Command } from "commander";
import { decorate, inject, injectable } from "inversify";
import { Main } from "src";

decorate(injectable(), Command);

@injectable()
export class Start {
	constructor(@inject(Command) private readonly commander: Command) {
		this.start();
	}

	public start() {
		this.commander.option("-e", "--exec", "Teste").parse(process.argv);
	}
}
