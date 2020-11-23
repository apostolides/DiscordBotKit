const guildMessageHandler = require('./guildMessageHandler.js');
const privateMessageHandler = require('./privateMessageHandler.js');

const BOT_PREFIX = '!';
const BOT_NAME = 'bot'

module.exports = {
  handleMessage:(messageObject)=>{
    let message = messageObject.content.trim().split(" ");
    if(message[0]==`${BOT_PREFIX}${BOT_NAME}`){
      if(messageObject.member==null){
        privateMessageHandler.handleMessage(messageObject,message,BOT_PREFIX,BOT_NAME);
      }
      else{
        guildMessageHandler.handleMessage(messageObject,message,BOT_PREFIX,BOT_NAME);
      }
    }
  }
}
