const commands = require('./commands.js');

const PREFIX = '!';
const BOT_NAME = 'bot'

module.exports = {
  handleMessage : (messageObject)=>{
    let message = messageObject.content.trim().split(" ");
    if(message[0]==`${PREFIX}${BOT_NAME}`){
      switch(message[1]){
        case "greet":
          commands.botGreet(messageObject);
          break;
        case "image":
          commands.botImage(messageObject);
          break;
        case "music":
          commands.botMusic(messageObject,message);
          break;
        case "leave":
          commands.botLeaveVoice(messageObject);
          break;
        case "help":
          commands.botHelp(messageObject);
          break;
        case "mute_all":
          commands.botMuteAll(messageObject);
          break;
        case "unmute_all":
          commands.botUnmuteAll(messageObject);
          break;
        /*case "youtube": // Removed until ytdl conflict gets resolved.
          commands.botYoutube(messageObject,message);
          break;
        */
        default:
          commands.botInvalidCommand(messageObject,PREFIX,BOT_NAME);
      }
    }
  }
}
