const Discord = require(`discord.js`);
exports.run = (client, message, args, prefix) => {
/*if(`${args[1]}` == `1`) {
let modhelp = new Discord.RichEmbed()
.setTitle(`All Moderation Commands Listed Below!`)
.setColor(`#FF3371`)
.setDescription(`**__${prefix}kick__** **Usage:** **${prefix}kick @user reason Description: To Kick Someone From Server**\n\n**__${prefix}ban__** **Usage:** **${prefix}ban @user reason Description: To Ban Someone From Server**\n\n**__${prefix}mute__** **Usage:** **${prefix}mute @user <sec/min/hour/day>  Description: To Mute Someone From Server**\n\n**__${prefix}warn__**  **Usage:** **${prefix}warn @user reason Description: To Warn Someone From Server**\n\n**__${prefix}clear__** **Usage: ** **${prefix}clear amount Description: To Delete Messages From Server**`);
return msg.channel.send(modhelp);
}
*/
if (`${args[1]}` == `1`) {
let musicembed = new Discord.RichEmbed()
.setTitle(`All Music Commands Listed Below!`)
.setDescription(`**__${prefix}play__** **Usage: ${prefix}play <Song Name> Description: To Play Music**\n\n**__${prefix}skip__** **Usage: ${prefix}skip Description: To Skip Music**\n\n**__${prefix}dc__** **Usage: ${prefix}dc Description: Bot Disconnect From Connected VC**\n\n**__${prefix}queue__** **Usage: ${prefix}queue Description: To Check The Queue List**\n\n**__${prefix}np__** **Usage: ${prefix}np Description: To Check The Current Playing Song**\n\n**__${prefix}volume__** **Usage: ${prefix}volume 10 Description: To Increase Or Decrease Song Volume**\n\n**__${prefix}pause__** **Usage: ${prefix}pause Description: Pause The Current Playing Song**\n\n**__${prefix}resume__** **Usage: ${prefix}resume Description: Resumes The Paused Song**\n\n**__${prefix}search__** **Usage: ${prefix}search <Song Name> Description: Searches Song By Given Name**\n\n**__${prefix}shuffle__** **Usage: ${prefix}shuffle Description: Shuffle The Song**\n\n**__${prefix}loop__** **Usage: ${prefix}loop Description: Repeat The Current Song. To Off Loop Use Again ${prefix}loop**\n\n**__${prefix}forceskip__** **Usage: ${prefix}forceskip Description: Force To Skip A Song!**`)
.setColor(`#FF3371`)
.setFooter(`Requested By ${message.author.tag}`)
.setTimestamp();
return message.channel.send(musicembed);
}
else if(`${args[1]}` == `2`) {
let funembed = new Discord.RichEmbed()
.setTitle(`All Fun Commands Listed Below!`)
.setColor(`#FF3371`)
.setDescription(`**__${prefix}hug__** **Usage: ${prefix}hug @user Description: To Hug Someone**\n\n**__${prefix}pat__** **Usage: ${prefix}pat @user Description: To Pat Someone**\n\n**__${prefix}kiss__** **Usage: ${prefix}kiss @user Description: To Kiss Someone**\n\n**__${prefix}slap__** **Usage: ${prefix}slap @user Description: To Slap Someone**\n\n**__${prefix}memes__** **Usage: ${prefix}memes Description: Show You Some Random Memes**`)
.setFooter(`Requested By ${message.author.tag}`)
.setTimestamp();
  return message.channel.send(funembed);
}
else if (`${args[1]}` == `3`) {
let utilityembed = new Discord.RichEmbed()
.setTitle(`All Utility Commands Listed Below!`)
.setDescription(`**__${prefix}emoji__** **Usage: ${prefix}emoji emojiname Description: To Find Emoji By Name**`)
.setColor(`#ff6a00`)
.setFooter(`Requested By ${message.author.tag}`)
.setTimestamp();
return message.channel.send(utilityembed);
}
else if (`${args[1]}` == `4`) {
const botcore = new Discord.RichEmbed()
.setTitle('All Bot Core Commands Listed Below!')
.setDescription(`**__${prefix}botinfo__** **Description: ${prefix}botinfo Usage: ${prefix} Description: Gives Info About Me**\n\n**__${prefix}vote__** **Usage: ${prefix}vote Description: Gives Link To Upvote Me**`)
.setColor(`#ff6a00`)
.setFooter(`Requested By ${message.author.tag}`)
.setTimestamp();
return message.channel.send(botcore);
}
else if (`${args[1]}` == `5`) {
let utilityembed = new Discord.RichEmbed()
.setTitle(`All Leveling Commands Listed Below!`)
.setDescription(`**__${prefix}level__** **Usage: ${prefix}level Description: Show Your Current Level and Xp**\n\n**__${prefix}addlevel__** **Usage: ${prefix}addlevel <10> Description: Adds Level To The User Your Desired Level**\n\n**__${prefix}addxp__** **Usage: ${prefix}addxp <200> Description: Adds Xp To The User Your Desired Xp**`)
.setColor(`#ff6a00`)
.setFooter(`Requested By ${message.author.tag}`)
.setTimestamp();
return message.channel.send(utilityembed);
}
let helpemb = new Discord.RichEmbed()
.setTitle(`My All Commands Listed Below!`)
.setDescription("My Default Prefix Is `m!`")
.setColor(`#E3FF33`)
//.addField(`**__1.Moderation__**`,`**${prefix}help 1**`)
.addField(`**__1.Music__**`,`**${prefix}help 1**`)
.addField(`**__2.Fun__**`,`**${prefix}help 2**`)
.addField(`**__3.Utility__**`,`**${prefix}help 3**`)
.addField(`**__4.Bot Core__**`,`**${prefix}help 4**`)
.addField(`**__5.Leveling__**`,`**${prefix}help 5**`)
.addField('If You Found Me Useful For Your Server Then Vote Me!',`[Click Here To Upvote Me](https://discordbots.org/bot/489076647727857685/vote)`)
.addField('Want To Invite Me',`[Click Here To Invite Me](https://discordapp.com/oauth2/authorize?client_id=489076647727857685&scope=bot&permissions=2146958847)`)
.addField('Need Help or Support While Using The Bot Join My Server',`[Click Me To Join](https://discord.gg/GJ8zqEH)`)
.setFooter(`Requested By ${message.author.tag}`)
.setTimestamp();
message.channel.send(helpemb);
};
exports.conf = {
aliases: ["h","cmds","cmd"]
}
