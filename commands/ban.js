const Discord = require('discord.js')
const config = require('../config.json')
const superagent = require('superagent')

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to access this command!")

   let banMember = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!banMember) return message.channel.send("Please Specify a user to be banned!")

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "No reason given!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I do not have permission to access this comand!")

    message.delete()

    banMember.send(`You have been banned in ${message.guild.name} for: ${reason}`).then(() =>
    message.guild.ban(banMember, { days: 1, reason: reason})).catch(err => console.log(err))
    
    message.channel.send(`**${banMember.user.tag} has successfully been banned!**`)
    
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`ServerLogs!`, message.guild.iconURL)
    .addField("Moderation:", "Ban")
    .addField("Banned:", banMember.user.username)
    .addField("Moderator:", message.author.username)
    .addField("Reason:", reason)
    .addField("Date:", message.createdAt)

    let schannel = message.guild.channels.find(c => c.name === 'modlogs')

    schannel.send(embed)

}

module.exports.config = {
    name: "ban",
    description: "bans a user",
    usage: "?ban <@user> <reason>",
    accessableby: "Moderators",
    }
