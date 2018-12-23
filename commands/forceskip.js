const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    const serverQueue = client.queue.get(message.guild.id);
  		if (!message.member.voiceChannel) return message.channel.send({ embed: { description: 'You Are Not Connected To A Voice Channel 🔇'}});
    if(serverQueue.voiceChannel.id !== message.member.voiceChannel.id) return message.channel.send({ embed: { color: 0xf91d1d, description: `You must be in **${serverQueue.voiceChannel.name}** to skip the song`}});
		if (!serverQueue) return message.channel.send({ embed: { description: 'There Is Nothing Playing In The Server Right Now'}});
	await serverQueue.connection.dispatcher.destroy();
		return message.channel.send(`⏩ Successfully Forced Skipped The Song!`)
  
} 

exports.conf = {
   aliases: ['fs']
}
