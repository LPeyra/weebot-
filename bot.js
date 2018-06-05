const Discord = require('discord.js');
const client = new Discord.Client();
const { PREFIX } = require('./config');
const fs = require('fs');
//const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };
const broadcast = client.createVoiceBroadcast();

//FUNCTIONS
var foundWord_command = word_command.find(function(element) {
  return element === message.content
});

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('disconnect', () => {
	console.log('I just disconnected');
});

client.on('reconnecting', () => {
	console.log('I\'m reconnecting');
});

//TEXT INTERACTIONS
client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
       message.reply('BONG!');
  	}
});

//VOCAL INTERACTIONS
var word_command = ['ahahah', 'iyf', 'weeb', 'weebot'];

if (!foundWord_command) return undefined;
else {
  const voiceChannel = msg.member.voiceChannel;
  if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
  const permissions = voiceChannel.permissionsFor(msg.client.user);
  if (!permissions.has('CONNECT')) {
    return msg.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
  }
  if (!permissions.has('SPEAK')) {
    return msg.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
  }
  (broadcast.playFile('./music/weeb.mp3'));
}

client.on('message', message => {

  if (message.content.startsWith('!play')) {
    voiceChannel.join()
  .catch(console.error);
  }
});

client.login(process.env.BOT_TOKEN);
