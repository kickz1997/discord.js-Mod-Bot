const Discord = require('discord.js')
const config = require('../config.json')
const ownerid = "379784651792711700"

module.exports.run = async (bot, message, args) => {

if(message.author.id !== ownerid) return message.channel.send("You are not the Owner of this bot!")

    try {
      const code = args.join(" ");
      let evaled = eval(code);
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
      message.channel.send(evaled)
    }catch (err) {
      console.log(err)
    }}

    module.exports.config = {
        name: "eval",
        description: "Bot Owner can only access this!",
        usage: "?eval",
        accessableby: "Bot Owner",
        aliases: ["ev"]
    }
