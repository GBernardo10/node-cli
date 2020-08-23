import "reflect-metadata";
import { decorate, inject, injectable } from "inversify";
import { Command } from "commander";

decorate(injectable(), Command);

@injectable()
export class Main {
	@inject(Command) private readonly commander: Command;

	public init(): void {
		this.commander.option("-e", "--exec", "Teste").parse(process.argv);
	}
}

new Main().init();
