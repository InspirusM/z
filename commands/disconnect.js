exports.run = async (client, message, args) => {
  const serverQueue = client.queue.get(message.guild.id);
	if (!message.member.voiceChannel) return message.channel.send({ embed: { description: 'Please Connect To A Voice Channel To Disconnect!'}});
    if(serverQueue.voiceChannel.id !== message.member.voiceChannel.id) return message.channel.send({ embed: { color: 0xf91d1d, description: `You must be in **${serverQueue.voiceChannel.name}** to skip the song`}});
		if (!serverQueue) return message.channel.send({ embed: { description: 'There Is Nothing Playing In The Server Right Now'}});
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
	return message.channel.send({ embed: { color: 0xef090, description: '⏹ Successfully Disconnected!'}});
}

exports.conf = {
   aliases: ['leave', 'dc','stop']
}
 
