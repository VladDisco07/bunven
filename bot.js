/*
  A bot that welcomes new guild members when they join
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDM0Njc4NDEwNTczMjUwNTcx.DbN_gw.gSAtsHlnNZ0x4Vcil433b4QHtH8';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Bine ai venit pe **HackerLand Rewritten**, ${member}! Nu uita sa citesti regulamentul si apoi sa te alaturi chat-ului :wink:`);
});

// Log our bot in
client.login(token);
