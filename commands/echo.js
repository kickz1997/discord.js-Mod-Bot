const Discord = require('discord.js')
const config = require('../config.json')
const superagent = require('superagent')

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You do not have permission to access this command!")

    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()

    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        message.channel.send(argsresult)
    }
}


module.exports.config = {
    name:"echo",
    description: "Says a custom message!",
    usage: "?echo <message>",
    accessableby: "ADMINISTRATOR",
    aliases: ["say", "s"]
}
