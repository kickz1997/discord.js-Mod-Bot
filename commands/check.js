const Discord = require('discord.js')
const config = require('../config.json')
const superagent = require('superagent')

module.exports.run = async (bot, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("I am sorry but you do not have access to this command!")
    if(args[0]){
      let {body} = await superagent
      .get(`https://www.globan.xyz/API?REV=1&TOKEN=a9cfe141&TYPE=BANCHECK&VALUE=${args[0]}`)
      const ifBan = new Discord.RichEmbed()
      .setTitle('Globan Ban Checker!')
      .addField('Banned?', body.banned)
      .addField('Reason?', body.reason)
      .setColor("RANDOM")
      message.channel.send(ifBan)
    } else {
      message.channel.send("Please provide an User ID")
  }}

  module.exports.config = {
      name: "check",
      aliases: ["che"]
  } //this command is used to see if a user is on the globan ban list!
