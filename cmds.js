const {
  Client,
  Events,
  GatewayIntentBits,
  Collection,
  SlashCommandBuilder,
  InteractionType,
} = require("discord.js");

const pingCmd = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    await interaction.reply("Pong!");
  },
};

const userHelloCmd = {
  data: new SlashCommandBuilder()
    .setName("hello")
    .setDescription("Replies with heyy"),
  /**
  @param {InteractionType} interaction
  */
  async execute(interaction) {
    await interaction.reply(`heyy ${interaction.user.username} i missed you`);
  },
};

module.exports = { pingCmd, userHelloCmd };
