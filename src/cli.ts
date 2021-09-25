import {Command} from 'commander';

const program = new Command();

program
    .command("issue", "issue actions", {executableFile: "commands/issue.js"})

program.parse(process.argv)