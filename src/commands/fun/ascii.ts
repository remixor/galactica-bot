import { Command } from "../../interfaces";
import { MessageEmbed } from "discord.js";
import * as figlet from "figlet";
import * as util from "util";

const figletAsync = util.promisify(figlet);

export const command: Command = {
  name: "ascii",
  aliases: ["unicode", "utf-8", "figlet"],
  run: async (client, message, args) => {
    const text = args.join(" ");
    if (!text) {
      return message.channel.send(
        new MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Notice!")
          .setDescription("You need to add text to execute the command!")
          .setTimestamp()
      );
    } else if (text.length > 20) {
      return message.channel.send(
        new MessageEmbed()
          .setColor("RANDOM")
          .setTitle("Notice!")
          .setDescription("The text input has to be less than 20 characters!")
          .setTimestamp()
      );
    }

    const rendered = await figletAsync(text);
    message.channel.send("```" + rendered + "```");
  },
};
