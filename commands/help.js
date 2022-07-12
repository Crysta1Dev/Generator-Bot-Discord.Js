const Discord = require('discord.js')
module.exports.run = async (bot, message, args, gen) => {
    let embed = new Discord.MessageEmbed()
    .setTitle('Gen Commands')
    .setColor(bot.color)
    .setThumbnail('https://cdn.discordapp.com/emojis/978779885822677052.webp?size=96&quality=lossless')
    .setDescription('This Help command is for you to understand the commands of the free gen.')
    .addField('%help','Shows you a options account')
    .addField('%gen (acc type) | Caps Sensetive', 'Gens you an account')
    .addField('%stock','Shows you a list of all accounts in stock')

    .setFooter('Dev | Crysta1#0001','https://cdn.discordapp.com/emojis/978779885822677052.webp?size=96&quality=lossless')
    .setTimestamp()
       message.channel.send(embed)
       setTimeout(() => message.delete(), 10000);
    }
    
module.exports.help = {
    name: 'help',
    aliases: []
}