 exports.run = async (client, message, args) => {
   
   const serverQueue = client.queue.get(message.guild.id);

if (!message.member.voiceChannel) return message.channel.send({ embed: { color: 0xfc0505, description: 'You are not in a voice channel!'}});
    if(serverQueue.voiceChannel.id !== message.member.voiceChannel.id) return message.channel.send({ embed: { color: 0xf91d1d, description: `You must be in **${serverQueue.voiceChannel.name}** to shuffle the queue`}});	
    if(!serverQueue) return message.channel.send({ embed: { color: 0xfc0505, description: 'There Is nothing Playing In The Server Right Now!'}});
    if(serverQueue.songs.length  < 3) return message.channel.send({ embed: { color: 0xfc0505, description: 'Add Some More Song In Queue First!'}});
    const np = serverQueue.songs.shift();
    const shuffled = require('../util.js').shuffle(serverQueue.songs);
    shuffled.unshift(np);
    serverQueue.songs = shuffled;
    message.channel.send({ embed: { color: 0x2efc05, description: 'Successfully Shuffled The Queue Songs!'}});

	}
 
 exports.conf = {
   aliases: []
}
 
 exports.help = {
   name: 'shuffle' 
 } 
