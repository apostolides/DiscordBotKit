const commands = require('./privateCommands.js');

module.exports = {
  handleMessage:(messageObject,message,botPrefix,botName)=>{
    switch(message[1]){
        case "greet":
          commands.botGreet(messageObject);
          break;
        case "help":
          commands.botHelp(messageObject);
          break;
        default:
          commands.botInvalidCommand(messageObject,botPrefix,botName);
    }
  }
}