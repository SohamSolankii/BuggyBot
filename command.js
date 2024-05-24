import dotenv from "dotenv";
dotenv.config();

import { REST, Routes } from "discord.js";

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "create",
    description: "Creates a new short URL",
  }
];

const rest = new REST({ version: "10" }).setToken(process.env.TOKEN);


try {
  console.log("Started refreshing application (/) commands.");

  await rest.put(Routes.applicationCommands("1243401743941767258"), { body: commands });

  console.log("Successfully reloaded application (/) commands.");
} catch (error) {
  console.error(error);
}

