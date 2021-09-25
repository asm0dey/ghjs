import {Command} from 'commander';
import Config from '../config'


const program = new Command();
program
    .argument("YouTrack URL")
    .argument("Token")
    .action((url, token) => {
        Config.writeConfig({url: url, token: token})
    })
    .parse()


