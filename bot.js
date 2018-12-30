const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone: true});

bot.on('ready', async () => {
    console.log("im am online !");
    bot.user.setActivity("tutorials on TSC", {type: "WATCHING"});
});

bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = "!";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}hello`){
        return message.channel.send("Hello !");
    }
    if(cmd === `${prefix}test`){
        return message.channel.send("t !");
    }
});


bot.login('NTI4OTA4MTI1NzU1OTMyNjcz.DwpYSg.Su3NLqHCP2923sYeqMIbf_nR0fQ');
