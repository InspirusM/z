const Discord = require(`discord.js`);
const send = require(`quick.hook`);

exports.run = (client, guild) => {

    const join = client.channels.get("517749949413457938"); //CHANGE TO YOUR CHANNEL-ID TO GET NOTIFICATIONS

    let rbnEmbed = new Discord.RichEmbed()
    .setTitle(`Stoped Serving In **${guild.name}**`)
    .setColor(`GREEN`)
    .setDescription(`**Guild Owner**: ${guild.owner}\n**Guild Name**: ${guild.name}\n**Guild ID**: ${guild.id}\n**Guild Channels Count**: ${guild.channels.size} \n**Members Lost**: ${guild.memberCount}\n**Now I Have**: ${client.guilds.size}`)
    send(join , rbnEmbed, {
        name: `${client.user.username} Monitor`,
        icon: "https://cdn.discordapp.com/attachments/517885564779757570/517931521856897043/get-support.jpg"
         });
  
  };
