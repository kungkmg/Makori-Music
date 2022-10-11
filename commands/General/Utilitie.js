const { EmbedBuilder, CommandInteraction, ApplicationCommandOptionType, PermissionsBitField } = require('discord.js');
const GLang = require('../../settings/models/Language.js'); 

module.exports = { 
    name: "utilitie",
    description: "Utilitie Command!",
    options: [
        {
            name: "language",
            description: "Change the language for the bot",
            type: ApplicationCommandOptionType.Subcommand,
            options: [
                {
                    name: "input",
                    description: "The new language",
                    required: true,
                    type: ApplicationCommandOptionType.String,
                }
            ],
        },
        {
            name: "info",
            description: "info Bot&Server",
            type: ApplicationCommandOptionType.Subcommand,
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
run: async (interaction, client, user, language) => {
        await interaction.deferReply({ ephemeral: false });
        ///// CHANGE LANGUAGE COMMAND!
        if (interaction.options.getSubcommand() === "language") {
            const input = interaction.options.getString("input");

            if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageGuild)) return interaction.editReply(`${client.i18n.get(language, "utilities", "lang_perm")}`);
            const languages = client.i18n.getLocales();
            if (!languages.includes(input)) return interaction.editReply(`${client.i18n.get(language, "utilities", "provide_lang", {
                languages: languages.join(', ')
            })}`);
    
            const newLang = await GLang.findOne({ guild: interaction.guild.id });
            if(!newLang) {
                const newLang = new GLang({
                    guild: interaction.guild.id,
                    language: input
                });
                newLang.save().then(() => {
                    const embed = new EmbedBuilder()
                    .setDescription(`${client.i18n.get(language, "utilities", "lang_set", {
                        language: input
                    })}`)
                    .setColor(client.color)
    
                    interaction.editReply({ content: " ", embeds: [embed] });
                }
                ).catch(() => {
                    interaction.editReply(`${client.i18n.get(language, "utilities", "Lang_error")}`);
                });
            }
            else if(newLang) {
                newLang.language = input;
                newLang.save().then(() => {
                    const embed = new EmbedBuilder()
                    .setDescription(`${client.i18n.get(language, "utilities", "lang_change", {
                        language: input
                    })}`)
                    .setColor(client.color)
        
                    interaction.editReply({ content: " ", embeds: [embed] });
                }
                ).catch(() => {
                    interaction.editReply(`${client.i18n.get(language, "utilities", "Lang_error")}`);
                });
            }
        }
        ///// info server&Bot
        if (interaction.options.getSubcommand() === "info") {
            const os = require("os"); //Module require server info
            // info Server
        const cpus = os.cpus();
        const Discord = require("discord.js"); // import Discord.JS for info commands
        const cpu = cpus[0];
        const total = Object.values(cpu.times).reduce(
        (acc, tv) => acc + tv, 0
                     );
        const usage = process.cpuUsage();
        const currentCPUUsage = (usage.user + usage.system) * 1000;
        const perc = currentCPUUsage / total * 100;
        const cpuCount = os.cpus().length
        const uptime = os.uptime()

            const infogui = new EmbedBuilder()
                .setTitle(`welcome to InfoGUI MakoriinfoV1`)
                .setTimestamp()
                .setImage(`https://cdn.discordapp.com/attachments/950770133972971558/967297361825132544/musicplayer.gif`)
                .setColor(client.color)
                .setDescription(`CPU : ${os.cpus().map((i) => `${i.model}`)[0]}\nCore Count = ${cpuCount}\nCpu Speed = ${os.cpus().map((i) => `${i.speed}`)[0] / 1000} GHs\nRam = ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} Gb\nPlatform = ${os.platform()}\nOS tpye = ${os.type()}\nOS Version = ${(os.release())}\nArch = ${os.arch()}\nDiscord.js = ${Discord.version}\nNode.js = ${process.version}\nLoad Avg = ${(os.loadavg(os.loadavg()))}\nAPI Latency is ${Math.round(client.ws.ping)}ms\n\n\n\nV1.9`);
                
                
        
            await interaction.editReply({ embeds: [infogui] });
        }
    }
};