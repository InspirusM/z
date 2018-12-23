exports.run = async(client, message, args) => {

    const serverQueue = client.queue.get(message.guild.id);
if (!message.member.voiceChannel) return message.channel.send({ embed: { description: 'You Are Not Connected To A Voice Channel'}});
    if(serverQueue.voiceChannel.id !== message.member.voiceChannel.id) return message.channel.send({ embed: { color: 0xf91d1d, description: `You must be in **${serverQueue.voiceChannel.name}** to change the current volume`}});	
		if (!serverQueue) return message.channel.send({ embed: { description: 'There Is Nothing Playing In The Server Right Now!'}});
    var botRoleColorSync = message.guild.member(client.user).highestRole.color;
		if (!args[1]) return message.channel.send({embed: { color: 0x32ffe7,  description: `The current volume is: **${serverQueue.volume}**%`}});
		serverQueue.volume = args[1];
    if (args[1] > 100) return message.channel.send({ embed: { description: `${message.author}, Volume limit is 100%!`}});
    serverQueue.volume = args[1];
    if (args[1] > 100) return !serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 100) +
    message.channel.send({ embed: { description: `${message.author}, Volume limit is 100%!`}});
 
    if (args[1] < 101) return serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 100) + message.channel.send({ embed: { description: `I set the volume to: __**${args[1]}**%__`}});
    
}

exports.conf = {
   aliases: ['v']
}


  exports.help = {
    name: 'volume' 
  } 
