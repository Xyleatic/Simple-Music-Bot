module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');
  
    bot.buttube.play(message, args.join(" "));
}

module.exports.config = {
    name: "play",
    aliases: ['p']
}
