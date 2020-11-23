const commands = require('./guildCommands.js');

module.exports = {
  handleMessage:(messageObject,message,botPrefix,botName)=>{
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
        case "protected_command":
          commands.botProtectedCommand(messageObject);
          break;
        /*case "youtube": // Removed until ytdl conflict gets resolved.
          commands.botYoutube(messageObject,message);
          break;
        */
        default:
          commands.botInvalidCommand(messageObject,botPrefix,botName);
    }
  }
}