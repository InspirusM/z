const Discord = require(`discord.js`);
const ms = require("ms");
let cpuStat = require("cpu-stat");
let os = require('os');

function convertMS(ms) {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    return {
        d: d
        , h: h
        , m: m
        , s: s
    };
};
  
exports.run = async(client, msg, args) => {
  let u = convertMS(client.uptime);
 let uptime = u.d + " days : " + u.h + " hours : " + u.m + " minutes : " + u.s + " seconds";
  
let cpuLol;
  cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }
const embed = new Discord.RichEmbed()
.setColor(`#FA054C`)
.setAuthor(client.user.username)
.setDescription(`**__Tuney Creator's__**:\n**R4A ϟ• Rajat#8525**\n**R4A 彡 Rajat Mishra#1883**\n**__Credits__**:\n**GØĐG ツDragon#2077**\n**Sharif#9781**\n**Panda Dev#6666**`)
.addField(`<:Servers:518054418130796604> Server Count: ${client.guilds.size}`, `Tuney Total Server Count`)
.addField(`👥 Total Members: ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, `Tuney Total Member`)
.addField(`📕 Total Channels: ${client.channels.size}`, `Tuney Total Channels`)
.addField(`🔊 Playing Music In ${client.queue.size} Server`, `Tuney Music Queue`)
.addField(`<:Upt:518056190492672000> Bot Uptime: ${uptime}`, `Tuney Uptime`)
.addField(`<:Upt:518056190492672000> CPU Usage: ${percent.toFixed(2)}%`, `Tuney CPU Usage`)
.addField(`<:Disk:518059803713732632> Memory Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, `Tuney Memory Usage`)
msg.channel.send(embed);
  })
}
                       
exports.conf = {
   aliases: ['stat','botinfo']
}
exports.help = {
name: "stats"
}