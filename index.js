const Discord = require('discord.js');
const client = new Discord.Client();
const messageHandler = require('./messageHandler.js');

const GENERAL_CHANNEL_NAME = 'general';
const BOT_TOKEN = 'TOKEN_HERE';

client.on('guildMemberAdd', newMember => {
  const channel = member.guild.channels.cache.find(ch => ch.name === GENERAL_CHANNEL_NAME);
  if(channel){
    channel.send(`Welcome ${newMember}`);
  }
});

client.on('message',(message)=>{
  messageHandler.handleMessage(message);
});

client.login(BOT_TOKEN);
