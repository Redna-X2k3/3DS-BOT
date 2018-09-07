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
client.login(process.env.NDg1OTk5OTE0OTgwMjEyNzQ5.DnSdQA.JHb6kPuKRQe76oa6aXeRuCKh2yk);