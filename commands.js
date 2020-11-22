const ytdl = require('ytdl-core');
const helpMessage = require('./helpMessage.js');

module.exports = {
  botGreet:(messageObject)=>{
    messageObject.channel.send(`Hello!`);
  },
  botHelp:(messageObject)=>{
    messageObject.channel.send(helpMessage);
  },
  botInvalidCommand:(messageObject,prefix,botname)=>{
    messageObject.channel.send(`Invalid command, view available commands with: ${prefix}${botname} help`);
  },
  botImage:(messageObject)=>{
    messageObject.channel.send("Here is your image!",{files:["https://cdn.mos.cms.futurecdn.net/xkpSwSrpjNKXkmTsvHvfXY-320-80.jpg"]});
  },
  botMusic:(messageObject)=>{
    let voiceChannel = messageObject.member.voice.channel;
    if(!voiceChannel){
      messageObject.channel.send("Please join a voice channel first!");
      return;
    }
    let permissions = voiceChannel.permissionsFor(messageObject.client.user);
    if(!permissions.has('CONNECT') || !permissions.has('SPEAK')){
      messageObject.channel.send("I can't access this voice channel :(");
    }
    else{
      voiceChannel.join().then((connection)=>{
        connection.play('./songs/sample.mp3');    
      });
    }
  },
  botYoutube:(messageObject,message)=>{
    let query = message.slice(2).join(" ")
    let voiceChannel = messageObject.member.voice.channel;
    if(!voiceChannel){
      messageObject.channel.send("Please join a voice channel first!");
      return;
    }
    let permissions = voiceChannel.permissionsFor(messageObject.client.user);
    if(!permissions.has('CONNECT') || !permissions.has('SPEAK')){
      messageObject.channel.send("I can't access this voice channel :(");
    }
    else{
      voiceChannel.join().then(async (connection)=>{
        try{
          let songInfo = await ytdl.getInfo(query);
          let song = {title: songInfo.title,url: songInfo.video_url};
          messageObject.channel.send(`Playing: ${song.title}`);
          connection.play(ytdl(song.url));    
        }
        catch(err){
          console.error(err);
          messageObject.channel.send("I can't play this one!");
        }
      });
    }
  },
  botLeaveVoice:(messageObject)=>{
    try{
      let voiceChannel = messageObject.member.voice.channel;
      voiceChannel.leave();
      messageObject.channel.send("Goodbye!");
    }
    catch{

    }
  },
  botMuteAll:(messageObject)=>{
    let members = messageObject.member.voice.channel.members
    for(member of members){
      try{
        member[1].voice.setMute(true);
      }
      catch{
        messageObject.channel.send(`Seems like I can't mute: ${member[1].username}`);
      }
    }
    messageObject.channel.send("Muted!");
  },
  botUnmuteAll:(messageObject)=>{
    let members = messageObject.member.voice.channel.members
    for(member of members){
      try{
        member[1].voice.setMute(false);
      }
      catch{
        messageObject.channel.send(`Seems like I can't unmute: ${member[1].username}`);
      }
    }
    messageObject.channel.send("Unmuted!");
  }
}
