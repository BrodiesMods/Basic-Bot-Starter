const Discord = require('discord.js');
const bot = new Discord.Client();
//put your bot token in apostrophes below
const token = 'token here!!!';
const prefix = '!';

bot.on('ready', () => {
    console.log('Your Bot is Online!')
    bot.user.setActivity('Opuz-Tech#0001 Develop me!', { type: 'WATCHING' });
    bot.user.setStatus('dnd')
})

bot.on("message", message => {
    if(message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLocaleLowerCase();
    if (command === 'testembed') {
        const testEmbed = new Discord.RichEmbed()
            .setColor(0x34c9eb)
            .setTitle('Test Embed')
            .setDescription('This is your Bots embed')
            .setAuthor(message.author.username)
            .addField('This embed works!', 'Opuz is great!')
            .setThumbnail(message.author.avatarURL)
            .setFooter('This is my embed!')
            .setTimestamp()
        try {
            message.author.sendEmbed(testEmbed);
        } catch {
            message.reply(`Sorry @${message.author.username} I cannot message you, make sure your dms are public!`)
        } 
    } else
    if (command === 'ban') {
        const userBan = message.mentions.users.first();

    if(userBan) {
        var member = message.guild.member(userBan);

        if (member) {
            member.ban({
                reason: 'You have broke the rules'
            }).then(() => {
                message.reply(` ${userBan.tag} was banned from the server.`)
            })
        } else {
            message.reply('That user is not in this server.');
        }
    } else 
        message.reply('You need to state a user to ban.');
}
})

bot.login(token)

//First section coded by Opuz-Tech#0001
//DO NOT REMOVE THIS