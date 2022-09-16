let cpuStat = require("cpu-stat");
let os = require("os");
const { green, white } = require('chalk');
const Discord = require("discord.js");

// info Server
const cpus = os.cpus();
const cpu = cpus[0];
const total = Object.values(cpu.times).reduce(
 (acc, tv) => acc + tv, 0
 );
const usage = process.cpuUsage();
const currentCPUUsage = (usage.user + usage.system) * 1000;
const perc = currentCPUUsage / total * 100;
const cpuCount = os.cpus().length
const uptime = os.uptime()

console.log(white('[') + green('Server info') + white('] ') + white(`Cpu = ${os.cpus().map((i) => `${i.model}`)[0]}`));
console.log(white('[') + green('Server info') + white('] ') + white(`Core Count = ${cpuCount}`));
console.log(white('[') + green('Server info') + white('] ') + white(`Cpu Speed = ${os.cpus().map((i) => `${i.speed}`)[0] / 1000} GHs`));
console.log(white('[') + green('Server info') + white('] ') + white(`Ram = ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} Gb`));
console.log(white('[') + green('Server info') + white('] ') + white(`Platform = ${os.platform()}`));
console.log(white('[') + green('Server info') + white('] ') + white(`OS tpye = ${os.type()}`));
console.log(white('[') + green('Server info') + white('] ') + white(`OS Version = ${(os.release())}`));
console.log(white('[') + green('Server info') + white('] ') + white(`Arch = ${os.arch()}`));
console.log(white('[') + green('Server info') + white('] ') + white(`Home Dir = ${os.homedir()}`));
console.log(white('[') + green('Server info') + white('] ') + white(`Host Name = ${os.hostname()}`));
console.log(white('[') + green('Server info') + white('] ') + white(`Endianness = ${os.endianness()}`));
console.log(white('[') + green('Server info') + white('] ') + white(`Discord.js = ${Discord.version}`));
console.log(white('[') + green('Server info') + white('] ') + white(`Node.js = ${process.version}`));
console.log(white('[') + green('Server info') + white('] ') + white(`Load Avg = ${(os.loadavg(os.loadavg()))}`));




const { plsParseArgs } = require('plsargs');
const argv = plsParseArgs(process.argv.slice(2));
const path = require("path");
const { TOKEN } = require("./settings/config.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { readdirSync } = require('fs');

(async () => {
         let publishMode = "global";

        const commands = [];

        readdirSync("./commands/").map(async dir => {
            readdirSync(`./commands/${dir}`).map(async (cmd) => {
                commands.push(require(path.join(__dirname, `./commands/${dir}/${cmd}`)));
            })
        })

        const rest = new REST({ version: "9" }).setToken(TOKEN);

        //console.info("Retrieving account information!");
        /** @type {import("discord-api-types/rest/v9/user").RESTGetAPIUserResult} */

        const client = await rest.get(Routes.user());
        //console.info(`Account information received! ${client.username}#${client.discriminator} (${client.id})`);
        console.log(white('[') + green('INFO Account') + white('] ') + green(`${client.username}#${client.discriminator} (${client.id})`));
        //console.info(`Slash (Application) are deployed on discord!`);

    switch (publishMode) {
        case "guild": {
            let guildId = argv.get(1);
            //console.info(`Sharing mode: server (${guildId})`);

            await rest.put(Routes.applicationGuildCommands(client.id, guildId), { body: commands });

           // console.info(`Slash commands may take 3-5 seconds to arrive.`);
            console.log(white('[') + green('Slash commands') + white('] ') + green(`Slash commands may take 3-5 seconds to arrive.`));
            
            break;
        }
        case "global": {
           // console.info(`Sharing mode: global`);

            await rest.put(Routes.applicationCommands(client.id), { body: commands });

           // console.info(`Slash commands can take up to 1 hour to arrive. If you want it to come immediately, you can throw your bot from your server and get it back.`);
            console.log(white('[') + green('Slash commands') + white('] ') + green(`Slash commands can take up to 1 hour to arrive. If you want it to come immediately, you can throw your bot from your server and get it back.`));
            break;
        }
    }
        //console.info(`Slash (Application) deployed!`);
        console.log(white('[') + green('Slash commands') + white('] ') + green(`Slash (Application) deployed!`));
})();






const MainClient = require("./nanospace");
const client = new MainClient();


client.connect()

module.exports = client; 
