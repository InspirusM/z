
exports.run = async (client) => {
   console.log('Alive');
    client.user.setActivity("m!help | Rich Quality Music", { "type": "STREAMING", url: "https://twitch.tv/twitch" }); 
 
}
