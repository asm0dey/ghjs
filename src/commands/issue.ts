import {Command} from 'commander';

const program = new Command();
program
    .command("list", "list issues by query", {executableFile: "list-issues"})
program.parse(process.argv);

