//const { Discord , Util } = require('discord.js');
const  Discord  = require("discord.js");
const { Util } = require("discord.js")
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const fs = require('fs')
const path = require('path');
const snek = require('node-superfetch');
const db = require(`quick.db`);
const config = require("./config.json");

const client = new Discord.Client({
	disableEveryone:true,
	disabledEvents:[
		"TYPEING_START",
		"CHANNEL_PINS_UPDATE",
		"MESSAGE_UPDATE",
		"RELATIONSHIP_ADD",
		"RELATIONSHIP_REMOVE"
	],
});
client.pings = new Array(96).fill(0);
client.util = require('./util.js');
const queue = new Discord.Collection();
client.queue = queue;
client.commands = fs.readdirSync('./commands');
client.aliases = {};
client.level = require('discord-leveling');
client.prefix = 'm!';

const youtube = new YouTube(config.KEY);

const DBL = require("dblapi.js");
const dbl = new DBL(config.DBL_TOKEN, client);

dbl.on('posted', () => {
  console.log('Server count on DBL posted!');
});

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
});

// event handler 
fs.readdir("./events/", (err, files) => {
if (err) console.log(err);
files.forEach(file => {
let eventFunc = require(`./events/${file}`);
let eventName = file.split(".")[0];
client.on(eventName, (...args) => eventFunc.run(client, ...args));
	});
});

for(const cmd of client.commands){
const file = require(`./commands/${cmd}`);
if(!file.conf || !file.conf.aliases) continue;
if(file.conf.aliases instanceof Array){
for(const al of file.conf.aliases){
client.aliases[al] = cmd;
    }
  }else{
client.aliases[file.conf.aliases] = cmd;
  }
}
client.on('warn', console.warn);

client.on('error', error => console.log(error));

client.on('disconnect', () => console.log('I just disconnected, making sure you know, I will reconnect now...'));

client.on('reconnecting', () => console.log('I am reconnecting now!'));


client.on('message', async message => { // eslint-disable-line

  //prefix
if (message.author.bot) return undefined;
const prefix = client.prefix;
if(message.content === prefix) return;
if(!message.guild) return;
  
  if (message.guild) {
  
  let xpAdd = Math.floor(Math.random() * 1) + 1; 
  let xp = await client.level.Fetch(message.author.id);
   if(xp.level == 0) {
    client.level.AddXp(message.author.id, 1);
   } else {
  let curxp = xp.xp;
  let curlvl = xp.level;
  let nxtLvl = xp.level * 500;
  if(nxtLvl <= xp.xp) {
   if(message.author.bot) return;
    message.channel.send(`🆙 | ${message.author}, You've leveled up to **\`${curlvl + 1}\`**`)
  client.level.AddLevel(message.author.id, 1);
  } 
  client.level.AddXp(message.author.id, xpAdd);
   }
  }

	if (!prefix || !message.content.startsWith(prefix)) return undefined;
	const args = message.content.slice(prefix.length).split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = client.queue.get(message.guild.id);
	message.member.voiceChannel === message.member.voice;

	let command = message.content.slice(prefix.length).split(' ')[0];
	command = command.toLowerCase();
  
    try {
      if(client.aliases[command]){
				delete require.cache[require.resolve(`./commands/${client.aliases[command]}`)];
        require(`./commands/${client.aliases[command]}`).run(client, message, args, prefix);

      }else{

    delete require.cache[require.resolve(`./commands/${command}.js`)];

		let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args, prefix);

      }

  } catch (e) {
    console.log(e.stack)                                                                  
  } finally {
  }
  


});


exports.handleVideo = handleVideo;
exports.queue = queue;
exports.youtube = youtube;

async function handleVideo(video, message, voiceChannel, playlist = false) {

	const serverQueue = client.queue.get(message.guild.id);
	//console.log(video)
	const song = {
    id: video.id,
    title: Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`, 
    durationmm: video.durationSeconds ? video.durationSeconds : video.duration / 1000,
    channel: message.member.voiceChannel.name,
    uploadedby: video.channel.title, 
    channelurl: `https://www.youtube.com/channel/${video.channel.id}`,
    author: message.author,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
    durations: video.duration.seconds, 
    duration: video.duration,
    requestor: message.author,
};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 100,
			playing: true,
      loop: false, 
		};
client.queue.set(message.guild.id, queueConstruct);
        let m = await queueConstruct.textChannel.send(`If You Like The Music Pls Give Me A Upvote. https://discordbots.org/bot/${client.user.id}/vote`);
        setTimeout(() => { m.delete() }, 9000); 
		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			connection.sendVoiceStateUpdate({self_deaf:true});
			queueConstruct.connection = connection;
			playStream(message.guild, queueConstruct.songs[0])
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			client.queue.delete(message.guild.id);
			return message.channel.send({ embed: { color: 0xf91d1d, description: `I Couldn't Join Voice Channel: ${error}`}});
		}
		} else {
		if (serverQueue.songs.some(song => song.id === video.id)) {				
        message.channel.send({embed: { color: 0xFF0000, description: `**${Util.escapeMarkdown(video.title)}** Is Already In Queue.`}});			
        return;
    }
		serverQueue.songs.push(song); 
		if (playlist) return undefined;

var adedembed = new Discord.RichEmbed()

  .setColor(`#009BFF`)
  .setAuthor(`Added to Queue`, `https://images-ext-1.discordapp.net/external/YwuJ9J-4k1AUUv7bj8OMqVQNz1XrJncu4j8q-o7Cw5M/http/icons.iconarchive.com/icons/dakirby309/simply-styled/256/YouTube-icon.png`)
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .setTitle(`${song.title}`, song.url)
  .addField("Duration:", `${require('./util.js').timeString(song.durationmm)}`, true)
  .addField('Publisher', `[${song.uploadedby}](${song.channelurl})`, true)
  .setFooter(`Requested By: <@${song.author.id}>`)
  .setTimestamp();
 return message.channel.send(adedembed);
	}
	return undefined;
}

function playStream(guild, song, message) {
	const serverQueue = client.queue.get(guild.id);
	if (!song) {
		serverQueue.voiceChannel.leave();
		client.queue.delete(guild.id);
		return;
	}

const dispatcher = serverQueue.connection.playStream(ytdl(song.url, { quality: 'highestaudio' }))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			const shifed = serverQueue.songs.shift();
      if(serverQueue.loop) serverQueue.songs.push(shifed);
			playStream(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);

  

var pleyembed = new Discord.RichEmbed()

  .setColor(`#009BFF`)
  .setAuthor(`Start Playing`, `https://images-ext-1.discordapp.net/external/YwuJ9J-4k1AUUv7bj8OMqVQNz1XrJncu4j8q-o7Cw5M/http/icons.iconarchive.com/icons/dakirby309/simply-styled/256/YouTube-icon.png`)
  .addField('Title', `**[${song.title}](${song.url})**`, false)
  .addField("Video Publisher", `[${song.uploadedby}](${song.channelurl})`, true)
  .addField('Requested by', `<@${song.requestor.id}>`, true)
  .addField("Volume", `${serverQueue.volume}%`, true)
  .addField("Duration", `${require('./util.js').timeString(song.durationmm)}`, true)
  .setTimestamp();

	serverQueue.textChannel.send(pleyembed); //.then(() => {m.delete(); });

}

client.login(config.TOKEN);

client.on('message', async message => {
  if (message == `<@${client.user.id}>` || message == `<@!${client.user.id}>`) {
    message.channel.send(`Hey, <@${message.author.id}>, My Prefix Is \`${prefix}\` Need Help Use \'${prefix}help\'!`);
  }
});