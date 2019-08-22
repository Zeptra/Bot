const discord = require("discord.js");
const bot = new discord.Client();

  
bot.on("ready", () => {
  console.log("bot is working");
});

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
        return
    }
    
    if (receivedMessage.content.startsWith("`")) {
        processCommand(receivedMessage)
    }
})

function processCommand(receivedMessage) {
    let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
    let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
    let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
    let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command

    console.log("Command received: " + primaryCommand)
    console.log("Arguments: " + arguments) // There may not be any arguments

    if (primaryCommand == "help") {
        helpCommand(arguments, receivedMessage)
    } else if (primaryCommand == "create") {
        createCommand(arguments, receivedMessage)
    } else {
        receivedMessage.channel.send("I don't understand the command. Try ``help` or ``create`")
    }
}

function helpCommand(arguments, receivedMessage){
  bot.reply('Use `Create to make a ticket');
}
    
function createCommand(arguments, receivedMessage){
  bot.reply('What would you like to make the ticket about? 1. Suggestion. 2. Problem?);
     if (user.message === 1){
    
  }
      if (user.message === 2){
      
  }
      else {
       return; 
      }
bot.login(token);
