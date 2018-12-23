const { handleVideo, youtube, prefix } = require('../tune.js');
const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args) => {
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	
	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send({ embed: { description: 'Please Connect To A Voice Channel To Play Something!'}});
	if (!args[1]) return message.channel.send({ embed: { color: 0x4286f4, description: `*Correct usage is*: **${prefix}play** ***[Song Name]/[Video URL]/[Playlist URL]***`}});
        //if(serverQueue.voiceChannel.id !== msg.member.voiceChannel.id) return msg.channel.send({ embed: { color: 0xf91d1d, description: `Woop I already playing in the other channel you must be in **${serverQueue.voiceChannel.name}** to request the song`}});	
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT')) return message.channel.send({ embed: { description: 'I Can\'t Connect To Your Voice Channel I Don\'t Have Proper Permission!'}});
	if (!permissions.has('SPEAK')) return message.channel.send({ embed: { description: 'I Can\'t Speak In Your Voice Channel I Don\'t Have Proper Permission!'}});
	if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
		const playlist = await youtube.getPlaylist(url);
		const videos = await playlist.getVideos();
		for (const video of Object.values(videos)) {
			const video2 = await youtube.getVideoByID(video.id);
			await handleVideo(video2, message, voiceChannel, true);
		}
		return message.channel.send({ embed: { description: `Playlist: **${playlist.title}** Has Been Added To The Queue.`}});
} else {
		try {
			var video = await youtube.getVideo(url);
		} catch (error) {
			try {
				var videos = await youtube.searchVideos(searchString, 1);
				var video = await youtube.getVideoByID(videos[0].id);
			} catch (err) {
				return message.channel.send('I Couldn\'t Find The Serched Result.');
			}
		}
		return handleVideo(video, message, voiceChannel);
	}
}
exports.conf = {
   aliases: ['p']
}

exports.help = {
  name: 'forceplay'
}
 
