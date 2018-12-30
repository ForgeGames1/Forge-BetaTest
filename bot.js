const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login('NTI4ODk2NzQzMzk2NjA1OTUy.Dwo9Gg.L33_jZn3XCcNIBLfFQEbUnj3Ip0');
