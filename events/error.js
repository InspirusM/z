exports.run = (client, error) => {
	console.log(error);
  client.channels.get("517751387623522354").send(error);
};
