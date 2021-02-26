const mail = require('../modmail.js').get;
const config = require('../config.js');
const Discord = require('discord.js');
const client = new Discord.Client()
const { MessageEmbed, Message } = require('discord.js')  
module.exports = {
  name: 'blacklist',
  description: 'Blocks a user from using ModMail.',
  usage: '{prefix}blacklist [id]',
  shortHands: [''],
  execute(bot, msg, args, checkMail, Message,  ) {
    if (args[1] === undefined) {
      mail.configBan('fromChannel', msg.channel.id, true);
      bot.createMessage(msg.channel.id, {
        embed: {
          color: 0x1a9c3d,
          title: '`✔` Blocked user', // Title of the embed
          description: "لقد تم وضعك في القائمة السوداء لهذا البوت",
          author: { // Author property
            name: msg.author.username,
            icon_url: msg.author.avatarURL
          }}});
      // bot.createMessage(msg.channel.id, '`✔` Blocked user');
    } else if (args[1] !== undefined) {
      mail.configBan('fromUser', args[1].replace(/[\\<>@#&!]/g, ''), true);
      bot.createMessage(msg.channel.id, {
        embed: {
          color: 0x1a9c3d,
          title: '`✔` Blocked user', // Title of the embed
          description: "لقد تم وضعك في القائمة السوداء لهذا البوت",
          author: { // Author property
            name: msg.author.username,
            icon_url: msg.author.avatarURL
          }}});
    }
  },
};
