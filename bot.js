const Discord = require('discord.js');
const client = new Discord.Client();
const { PREFIX } = require('./config');

client.on('ready', () => {
    console.log('I am ready!');
});

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

client.on('message', message => {

  if (message.content.startsWith('!play')) {
    voiceChannel.join()
  .then(connection => {
    const stream = ytdl('https://www.youtube.com/watch?v=XAWgeLF9EVQ', { filter : 'audioonly' });
    broadcast.playStream(stream);
    const dispatcher = connection.playBroadcast(broadcast);
  })
  .catch(console.error);
  });


client.login(process.env.BOT_TOKEN);
