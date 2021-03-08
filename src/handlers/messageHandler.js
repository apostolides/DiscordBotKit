const guildMessageHandler = require('./guild/guildMessageHandler.js');
const privateMessageHandler = require('./private/privateMessageHandler.js');

const BOT_PREFIX = '!';
const BOT_NAME = 'bot'

module.exports = {
  handleMessage:(clientObject,messageObject)=>{
    let message = messageObject.content.trim().split(" ");
    if(message[0]==`${BOT_PREFIX}${BOT_NAME}`){
      if(messageObject.member==null){
        privateMessageHandler.handleMessage(messageObject,message,BOT_PREFIX,BOT_NAME);
      }
      else{
        guildMessageHandler.handleMessage(clientObject,messageObject,message,BOT_PREFIX,BOT_NAME);
      }
    }
  }
}
