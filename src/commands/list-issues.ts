import {Command} from 'commander';
import Config from "../config.js";

const program = new Command();
program
    .option("-q, --query", "query for issue listing", "assignee: me")
    .parse();

const api = Config.getClient()
api.issuesGet(program.opts().query, "id")
    .then((mess) => {
        for (const issue of mess.body) {
            console.log(issue)
        }
    })