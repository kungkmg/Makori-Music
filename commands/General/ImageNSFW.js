const { EmbedBuilder, CommandInteraction, ApplicationCommandOptionType, PermissionsBitField } = require('discord.js');
const GLang = require('../../settings/models/Language.js'); 

module.exports = { 
    name: "imagensfw",
    description: "Nsfw anime",
    options: [
        {
            name: "boobs",
            description: "!NSFW! Anime boobs",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "hentai",
            description: "!NSFW! Anime hentai",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "lesbian",
            description: "!NSFW! Anime lesbian",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "ass",
            description: "!NSFW! Anime ass",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "yuri",
            description: "!NSFW! Anime yuri",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "school",
            description: "!NSFW! Anime school",
            type: ApplicationCommandOptionType.Subcommand,
        }
    ],
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
run: async (interaction, client, user, language) => {
    /// import images generator module
    const gen = require("images-generator");

        await interaction.deferReply({ ephemeral: false });
        ///// boobs
        if (interaction.options.getSubcommand() === "boobs") {
            const imageboobs = await gen.nsfw.anime.boobs();
            const animeboobs = new EmbedBuilder()
                .setTitle(`NSFW image anime`)
                .setImage(imageboobs)
                .setColor(client.color)
                .setDescription(`Download : ||${imageboobs}||`);
            await interaction.editReply({ embeds: [animeboobs] });
        }
        /////
        if (interaction.options.getSubcommand() === "hentai") {
            const imageboobs = await gen.nsfw.anime.hentai();
            const animeboobs = new EmbedBuilder()
                .setTitle(`NSFW image anime`)
                .setImage(imageboobs)
                .setColor(client.color)
                .setDescription(`Download : ||${imageboobs}||`);
            await interaction.editReply({ embeds: [animeboobs] });
        }
        /////
        if (interaction.options.getSubcommand() === "lesbian") {
            const imageboobs = await gen.nsfw.anime.lesbian();
            const animeboobs = new EmbedBuilder()
                .setTitle(`NSFW image anime`)
                .setImage(imageboobs)
                .setColor(client.color)
                .setDescription(`Download : ||${imageboobs}||`);
            await interaction.editReply({ embeds: [animeboobs] });
        }
        /////
        if (interaction.options.getSubcommand() === "ass") {
            const imageboobs = await gen.nsfw.anime.ass();
            const animeboobs = new EmbedBuilder()
                .setTitle(`NSFW image anime`)
                .setImage(imageboobs)
                .setColor(client.color)
                .setDescription(`Download : ||${imageboobs}||`);
            await interaction.editReply({ embeds: [animeboobs] });
        }
        /////
        if (interaction.options.getSubcommand() === "yuri") {
            const imageboobs = await gen.nsfw.anime.boobs();
            const animeboobs = new EmbedBuilder()
                .setTitle(`NSFW image anime`)
                .setImage(imageboobs)
                .setColor(client.color)
                .setDescription(`Download : ||${imageboobs}||`);
            await interaction.editReply({ embeds: [animeboobs] });
        }
        /////
        if (interaction.options.getSubcommand() === "school") {
            const imageboobs = await gen.nsfw.anime.school();
            const animeboobs = new EmbedBuilder()
                .setTitle(`NSFW image anim`)
                .setImage(imageboobs)
                .setColor(client.color)
                .setDescription(`Download : ||${imageboobs}||`);
            await interaction.editReply({ embeds: [animeboobs] });
        }
    }
};