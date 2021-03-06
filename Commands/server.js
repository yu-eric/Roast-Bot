/*
*
*   Things to add to rb!server:
* ----------------------------
*  Add more stats such as how many text channels their are and how many voice.
*
*/

const Discord = require("discord.js");

const prefix_file = require("../Database/prefix.json");
const on_off_file = require("../Database/on-off.json");

exports.run = async (message) => {
    if (message.author.bot) return;
    if(message.content.toLowerCase() == prefix_file.prefix + "server help"){
        return message.channel.send("**rb!server help:**\n\n`rb!server` tells you information about your server. The information that it provides is: Number of people in server, Server name, the date you joined, and the date the server was created.\n\n*Example:\n\n*USER: rb!server\nRoast-Bot: Server Name....\nDate the server was created....\nDate you joined....\nNumber of people in the server....\n\n`rb!server` will still work even if you put 1 or more space after the “server”.  It will not work however if you put 1 or more spaces and then a character that isn’t a space. \n\n\n  If your still having trouble with rb!clear NUMBER please join the support server and ask in #roast-bot-help. \n\n\n\nServer Invite Link: https://discordapp.com/invite/9y8yV42")
    }
    if (message.content.toLowerCase() == prefix_file.prefix + "server" && on_off_file.server == "on") {
        let server_icon = message.guild.iconURL;
        let server_embed = new Discord.RichEmbed()
            .setColor("#EB671D")
            .setTitle("Server Information:")
            .addBlankField()
            .setThumbnail(server_icon)
            .addField("Server Name:", message.guild.name)
            .addField("Created On:", message.guild.createdAt)
            .addField("You Joined:", message.member.joinedAt)
            .addField("Total Members:", message.guild.memberCount);
        return message.channel.send({embed: server_embed});
    } else if(message.content.toLowerCase() == prefix_file.prefix + "server" && on_off_file.server == "off") {
        return message.channel.send("This command has been turned off.");   
    }
}