let player = require('discordjs-ytdl');

let YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

function simpleYoutubePlayer(messageObject,message){
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
      voiceChannel.join().then(async(connection)=>{
        try{
          await player.play(connection,query,YOUTUBE_API_KEY);
          messageObject.channel.send(`Playing first youtube result of: ${query}`);
        }
        catch(err){
          messageObject.channel.send("I can't play this one!");
        }
      });
    }
}

module.exports = {simpleYoutubePlayer:simpleYoutubePlayer}