exports.run = (client, message ,args) => {
  const serverQueue = client.queue.get(message.guild.id);
 	if (!message.member.voiceChannel) return message.channel.send({ embed: { description: 'Please Connect To A Voice Channel To Loop The Song!'}});
    if(serverQueue.voiceChannel.id !== message.member.voiceChannel.id) return message.channel.send({ embed: { color: 0xf91d1d, description: `You must be in **${serverQueue.voiceChannel.name}** to skip the song`}});
		if (!serverQueue) return message.channel.send({ embed: { description: 'There Is Nothing Playing In The Server Right Now'}});
  serverQueue.loop = !serverQueue.loop;
  client.queue.set(message.guild.id, serverQueue);
  if(serverQueue.loop.) return message.channel.send({ embed: { description: '🔁 Looping Current Song.'}});
  return message.channel.send({ embed: { description: 'Sucessfully Loop off.'}});
}

exports.conf = {
   aliases: ["repeat"]
}
exports.help = {
name: "loop"
}
