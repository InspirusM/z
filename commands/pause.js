  const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
  const serverQueue = client.queue.get(message.guild.id);
    if(serverQueue.voiceChannel.id !== message.member.voiceChannel.id) return message.channel.send({ embed: { color: 0xf91d1d, description: `You must be in **${serverQueue.voiceChannel.name}** to pause the song`}});	

		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send({ embed: { description: '⏸ Successfully Paused!'}});
		}
		return message.channel.send({ embed: { description: 'There Is Nothing Playing In The Server!'}});
} 

exports.conf = {
   aliases: []
}

exports.help = {
  name: 'pause' 
} 
