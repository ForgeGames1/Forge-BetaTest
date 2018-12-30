const Discord = require('discord.js');

const bot = new Discord.Client({disableEveryone: true});


bot.on('ready', async () =>{
    console.log('${bot.user.username} is online !');
});


client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
bot.login('NTI4OTA4MTI1NzU1OTMyNjcz.DwpMjQ.fKwBVNSW80UjUmG0neZybcywBYY');
