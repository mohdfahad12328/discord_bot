const { token, clientId, guildId } = require("./config.json");

const { pingCmd, userHelloCmd } = require("./cmds");
const { REST, Routes } = require("discord.js");

const commands = [];

commands.push(pingCmd.data.toJSON());
commands.push(userHelloCmd.data.toJSON());

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`,
    );

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands },
    );

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`,
    );
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();
