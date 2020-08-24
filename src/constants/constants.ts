const SERVICE = "service";
const MODEL = "model";
const CONTROLLER = "controller";

export const INIT = "init";
export const GENERATE = {
	command: "generate",
	alias: "g",
	description: "Generate",
	options: [SERVICE, MODEL, CONTROLLER],
};

export const GENERATE_OPTION_SERVICE = new Map().set(
	SERVICE,
	"-s, --service <type>",
);
export const GENERATE_OPTION_MODEL = new Map().set(MODEL, "-m, --model <type>");
export const GENERATE_OPTION_CONTROLLER = new Map().set(
	CONTROLLER,
	"-c, --controller <type>",
);
