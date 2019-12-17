const Discord = require("discord.js")
 
 module.exports.run = async (bot, message, args) => {

    //!8ball question
    if(!args[1]) return message.reply("Plesae enter a full question with 2 or more words!");
    let replies = ["Yes", "No", "Maybe", "I have broke!", "Try again Later", "You Suck!", "Not again", "No u!", "Stop Asking Please", "No One likes you! Go ask someone else!", ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = new Discord.RichEmbed()

    .setAuthor(message.author.username)
    .setColor("#00ff00")
    .addField("Question", question)
    .addField("Answer", replies[result]);

    message.channel.send(ballembed)

    message.delete();


 }

    module.exports.config = {
        name: "8ball",
        aliases: ["8b"]
    }
