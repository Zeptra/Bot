const discord = require("discord.js");
const bot = new Discord.Client();



bot.on("ready", () => {
  console.log("bot is working");
});

bot.on("message", msg => {
  if (msg.content) === "help") {
    msg.reply("create: create a new ticket.");
  }
});

bot.login(token);
