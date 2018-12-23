const Discord = require("discord.js");
exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    let noperm = new Discord.RichEmbed()
    .setDescription("You Don't Have `ADMINISTRATOR` Permission To Use This Command")
    .setColor(`#d604cf`);
    return message.channel.send(noperm);
  }
  
    var amount = args[1]
    var user = message.mentions.users.first() || message.author;
 
    var output = await client.level.AddLevel(user.id, amount)
    message.channel.send(`Hey ${user}! Successfully Added ${amount} Level!`);
}
exports.conf = {
aliases: ["addlvl","setlvl","setlevel"]
}