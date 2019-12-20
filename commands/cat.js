const Discord = require('discord.js')
const config = require('../config.json')
const superagent = require('superagent')

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    let {body} = await superagent
    .get("http://aws.random.cat/meow")
    if(!{body}) return message.channel.send("I have Broke! Please try again!")
    
    let cEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Cat Command!", message.guild.iconURL)
        .setImage(body.file)
        .setTimestamp()
        .setFooter("Thank you for using the cat command", bot.user.displayAvatarURL)
        message.channel.send({embed: cEmbed})
    } 


    module.exports.config = {
        name: "cat",
        aliases: ["c"] // The aliases can be whatever you want!
    }
