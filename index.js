const Discord = require('discord.js');
const config = require('./config.json');
const fs = require('fs');
require('dotenv').config()
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;

	const args = message.content.slice(config.prefix.length).trim().split(/ +/);
	const cmd = args.shift().toLowerCase();

 // give role & delete & verify role start
//  if (cmd === 'role'){
//     if (message.member.roles.cache.some(role => role.id === '803596203341774858')) {
//       const member = message.mentions.members.first()
//       roleid = args[0].substring(0,args[0].length-1);
//       roleid2 = roleid.substr(3)
//       if (roleid2 === '781674626173370409' /*warn 1*/ || roleid2 === '781676081748377620' /*warn 2*/ || roleid2 === '769292821223309312' /*DJ*/ || roleid2 === '810535934625447980' /*Clouds*/ || roleid2 === '814810108902113281' /*bermuda*/ || roleid2 === '797892838930382868' /*bull family*/ ){
//         member.roles.add(roleid2)
//         client.channels.cache.get('815517483502665728').send(`:green_square: ${message.author.username} be <@${member.id}> role <@&${roleid2}> dad`)
//       } else if(roleid2 === '797150365745020958' /*reject*/){
//         member.roles.add(roleid2)
//         client.channels.cache.get('815517483502665728').send(`:green_square: ${message.author.username} be <@${member.id}> role <@&${roleid2}> dad`)
//         fs.writeFileSync(`./ban/${member.id}.json`, `${message.author.id}, ${message.author.username}`)
//       }
//       else{
//         message.channel.send('koskesh kiri bia kiramo bokhor')
//       }
//     }
//   }
  
  // if (cmd === 'drole'){
  //   if (message.member.roles.cache.some(role => role.id === '803596203341774858')) {
  //     const member = message.mentions.members.first()
  //     roleid = args[0].substring(0,args[0].length-1);
  //     roleid2 = roleid.substr(3)
  //     if (roleid2 === '781674626173370409' /*warn 1*/ || roleid2 === '781676081748377620' /*warn 2*/ || roleid2 === '769292821223309312' /*DJ*/ || roleid2 === '810535934625447980' /*Clouds*/ || roleid2 === '814810108902113281' /*bermuda*/ || roleid2 === '797892838930382868' /*bull family*/ ){
  //       member.roles.remove(roleid2)
  //       client.channels.cache.get('815517483502665728').send(`:red_square: ${message.author.username} az <@${member.id}> role <@&${roleid2}> gereft`)
  //     } else if(roleid2 === '797150365745020958' /*reject*/){
  //       member.roles.remove(roleid2)
  //       client.channels.cache.get('815517483502665728').send(`:red_square: ${message.author.username} az <@${member.id}> role <@&${roleid2}> gereft`)
  //       fs.unlink(`./ban/${member.id}.json`, (err) => {
  //         if (err) {
  //           throw err;
  //         }
  //       })
  //     }
  //     else{
  //       message.channel.send('koskesh kiri bia kiramo bokhor')
  //     }
  //   }
  // }

  if (cmd === 'verify'){
    if (message.member.roles.cache.some(role => role.id === '874693067045732363')) {
      const member = message.mentions.members.first()
      member.roles.remove('875620544010133544')
      client.channels.cache.get('876480129101094932').send(`${message.author.username} New Member ${member} ra Verify Kard.`)
    }
  }
  //give role & delete & verify role end

  // verficition start
  if (cmd === 'setup') {
    if (message.member.roles.cache.some(role => role.id === '874693067045732363')) {
      const poll = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, 'https://cdn.discordapp.com/icons/826535079656161310/a_ba9495a9515a94b90623745a91bbf4bc.gif?size=1024')
      .addField('به سرور مودی خوش آمدید\n برای گرفتن رول و وریفای شدن ری اکت :green_circle:  زیر را بزنید و در چنل Waiting منتظر  ادمین های ما بمونید', '__ __')
      .setFooter(message.guild.name, 'https://cdn.discordapp.com/icons/826535079656161310/a_ba9495a9515a94b90623745a91bbf4bc.gif?size=1024')
      .setColor('blue')
      message.channel.send(poll).then(embedMessage => {
        embedMessage.react('🟢')
          client.on('messageReactionAdd', function (messageReaction, user) {
            if (messageReaction.emoji.name === '🟢') {
              client.channels.cache.get('875067202057961504').send('<@&874693067045732363> Yeki To Waitinge Check Konid')
            }
          })
      })
    }
  }

  if (cmd === 'nickname'){
    if (message.member.roles.cache.some(role => role.id === '874693067045732363')) {
      const canal = message.guild.channels.cache.get('875070119833911357');
      canal.join()
      for (let i = 1; i < 9999; i++) {
        message.guild.members.cache.get("876412142859997215").setNickname("✠ ")
        message.guild.members.cache.get("876412142859997215").setNickname("✠ 𝖬")
        message.guild.members.cache.get("876412142859997215").setNickname("✠ 𝖬𝖮")
        message.guild.members.cache.get("876412142859997215").setNickname("✠ 𝖬𝖮𝖮")
        message.guild.members.cache.get("876412142859997215").setNickname("✠ 𝖬𝖮𝖮𝖣")
        message.guild.members.cache.get("876412142859997215").setNickname("✠ 𝖬𝖮𝖮𝖣𝖸 🧯 ✠")
      }
    }
  }
});

// client.on("guildMemberAdd", member => {
//     fs.readdir("./ban/", (err, files) => {
//         if (err) return console.error;
//         files.forEach((file) => {
//           if (!file.endsWith(".json")) return;
//           let evtName = file.split(".")[0];
//           console.log(`Banned User '${evtName}'`);
//           if (member.id === evtName){
//             member.roles.add('797150365745020958')
//             member.roles.remove('791988499464323094')
//             member.guild.channels.cache.get("815308445246292008").send(`Yek Madar Jende Ba Id  <@${member.id}> Reject Shode bood Left Dad Ta Maro Kir Kone Ke Nanash Kir Khord`);
//           }
//         });
//     })
// });

client.login(process.env.BOT_TOKEN);