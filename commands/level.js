const Discord = require("discord.js");
const snekfetch = require('node-superfetch');
exports.run = async (client, message, args) => {
var user = message.mentions.users.first() || client.users.get(args[0]);
  if(!user) user = message.author;
  if(user.bot) return message.channel.send('Pls Mention A User Not A Bot!');
  
  const {level} = await client.level.Fetch(user.id);
  const { xp } = await client.level.Fetch(user.id);
  
    var embed = new Discord.RichEmbed() 
  .setColor(`RANDOM`)
  .setThumbnail(user.displayAvatarURL)
  .setAuthor(`${user.username}'s Level`, user.displayAvatarURL) 
  .addField('Level', `${level} | XP: ${xp}`)
  .setFooter(`Requested by ${message.author.username}`)
  .setTimestamp();
  message.channel.send(embed);
}
exports.conf = {
aliases: ["lvl"]
}