const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});

client.on('ready', async () => {
    console.log("im am online !");
    client.user.setGame('I love ForgeGames');
});

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = "!";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}hello`){
        return message.channel.send("Hello !");
    }
});



client.login('NDA3MTgxODM4NjI5NDcwMjA4.DwpSXQ.F-32WnicHACQdrTYt5L6h-GS5iU');
