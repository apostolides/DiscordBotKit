const helpMessage = require('./privateHelpMessage.js');

module.exports = {
  botGreet:(messageObject)=>{
    messageObject.channel.send(`Hello, this is a private message!`);
  },
  botHelp:(messageObject)=>{
    messageObject.channel.send(helpMessage);
  },
  botInvalidCommand:(messageObject,prefix,botname)=>{
    messageObject.channel.send(`Invalid command, view available commands with: ${prefix}${botname} help`);
  }
}