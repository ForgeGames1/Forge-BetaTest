const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});

client.on('ready', async () => {
    console.log('I am ready!');
    client.user.setGame('I love ForgeGames');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login('NTI4OTA4MTI1NzU1OTMyNjcz.DwpMjQ.fKwBVNSW80UjUmG0neZybcywBYY');
