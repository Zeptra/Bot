const Discord = require("discord.js");
const bot = new Discord.Client();

const token = "NjA5NTEyNTY0OTk2NzAyMjI1.XU3zgg.IEexN0Y1p380JUp4Cnpsf6he7Ok"

bot.on("ready", () => {
  console.log("bot is working");
});

bot.on("message", msg => {
  if (msg.content) === "hello") {
    msg.reply("hello");
  }
});

bot.login(token);
