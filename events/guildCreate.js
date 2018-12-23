var Discord = require('discord.js');
const send = require(`quick.hook`);

exports.run = async (client, guild) => {
 let bicon = client.user.displayAvatarURL;
  let support = new Discord.RichEmbed()
.setThumbnail(bicon)
.setColor("RANDOM")
.setTitle(`Hello I'm **${client.user.username}**`)
.addField(`My Prefix is **${client.prefix}**`,`and Help Command is **${client.prefix}help**`)
.setTimestamp()
  guild.owner.send(support);
  
  const join = client.channels.get("517749949413457938"); //CHANGE TO YOUR CHANNEL-ID TO GET NOTIFICATIONS
       const invite = await guild.channels.find(c => c.type !== "category" && c.position === 0).createInvite({
        maxAge: 0
    });
    let rbnEmbed = new Discord.RichEmbed()
    .setTitle(`Started Serving In **${guild.name}**`)
    .setColor(`GREEN`)
    .setDescription(`**Guild Owner**: ${guild.owner}\n**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Guild Channels Count**: ${guild.channels.size} \n**Members Gained**: ${guild.memberCount}\n**Invite**: ${invite.url}\n**Now I Have**: ${client.guilds.size}`)
    send(join , rbnEmbed, {
        name: `${client.user.username} Monitor`,
        icon: "https://cdn.discordapp.com/attachments/517885564779757570/517931521856897043/get-support.jpg"
         });
};
