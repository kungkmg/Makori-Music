const { EmbedBuilder, CommandInteraction, ApplicationCommandOptionType, PermissionsBitField } = require('discord.js');
const GLang = require('../../settings/models/Language.js'); 

module.exports = { 
    name: "image",
    description: "anime image",
    options: [
        {
            name: "pat",
            description: "Anime pat",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "hug",
            description: "Anime hug",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "kiss",
            description: "Anime kiss",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "desktopwallpaper",
            description: "Anime desktopWallpaper",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "mobilewallpaper",
            description: "Anime mobileWallpaper",
            type: ApplicationCommandOptionType.Subcommand,
        },
        {
            name: "foxgirl",
            description: "Anime foxGirl",
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
        if (interaction.options.getSubcommand() === "pat") {
            const image = await gen.anime.pat();
            const anime = new EmbedBuilder()
                .setTitle(`image anime`)
                .setImage(image)
                .setColor(client.color)
                .setDescription(`Download : ||${image}||`);
            await interaction.editReply({ embeds: [anime] });
        }
        /////
        if (interaction.options.getSubcommand() === "hug") {
            const image = await gen.anime.hug();
            const anime = new EmbedBuilder()
                .setTitle(`image anime`)
                .setImage(image)
                .setColor(client.color)
                .setDescription(`Download : ||${image}||`);
            await interaction.editReply({ embeds: [anime] });
        }
        /////
        if (interaction.options.getSubcommand() === "kiss") {
            const image = await gen.anime.kiss();
            const anime = new EmbedBuilder()
                .setTitle(`image anime`)
                .setImage(image)
                .setColor(client.color)
                .setDescription(`Download : ||${image}||`);
            await interaction.editReply({ embeds: [anime] });
        }
        /////
        if (interaction.options.getSubcommand() === "desktopWallpaper") {
            const image = await gen.anime.desktopWallpaper();
            const anime = new EmbedBuilder()
                .setTitle(`image anime`)
                .setImage(image)
                .setColor(client.color)
                .setDescription(`Download : ||${image}||`);
            await interaction.editReply({ embeds: [anime] });
        }
        /////
        if (interaction.options.getSubcommand() === "mobileWallpaper") {
            const image = await gen.anime.mobileWallpaper();
            const anime = new EmbedBuilder()
                .setTitle(`image anime`)
                .setImage(image)
                .setColor(client.color)
                .setDescription(`Download : ||${image}||`);
            await interaction.editReply({ embeds: [anime] });
        }
        /////
        if (interaction.options.getSubcommand() === "foxGirl") {
            const image = await gen.anime.foxGirl();
            const anime = new EmbedBuilder()
                .setTitle(`image anim`)
                .setImage(image)
                .setColor(client.color)
                .setDescription(`Download : ||${image}||`);
            await interaction.editReply({ embeds: [anime] });
        }
    }
};