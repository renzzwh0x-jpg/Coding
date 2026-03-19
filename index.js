const Discord = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new Discord.Client();

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === '!ping') {
        message.channel.send('Pong!');
    }
});

client.login(process.env.DISCORD_TOKEN);