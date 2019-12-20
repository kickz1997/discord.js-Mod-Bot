const Discord = require('discord.js')
const config = require('../config.json')
const superagent = require('superagent')

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")
    
    let {body} = await superagent
    .get("https://dog.ceo/api/breeds/image/random")
    if(!{body}) return message.channel.send("I have Broke! Please try again!")
    
    let dEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Dog Command!", message.guild.iconURL)
        .setImage(body.message)
        .setTimestamp()
        .setFooter("Thank you for using the Dog Command!", bot.user.displayAvatarURL)
        message.channel.send({embed: dEmbed})
    }


    module.exports.config = {
        name: "dog",
        aliases: ["d"]
    } 
