const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


client.on("guildMemberRemove" , async member => {
  const channel = member.guild.channels.get("611474677465874440")
  channel.send(embed: {
      color: 02552551,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
title: `さようなら…${message.user.tag}様`,
description: `現在のサーバーの人数は${message.guild.memberCount}人です。`,
fields: [{
    name: "今どんな気持ち?",
    value: "悲しいですね。(大嘘)(退会メッセージはこのサーバーだけです。)"
  },
],
timestamp: new Date(),
footer: {
  icon_url: message.user.avatarURL,
  text: "やったねRennsuraちゃん、メンバーが減ったよ！"
}
}
})
})

client.on('guildMemberAdd', message => {
message.guild.channels.get('497998038305079296').send({embed: {
      color: 02552551,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
title: `ようこそ${message.user.tag}様`,
description: `現在のサーバーの人数は${message.guild.memberCount}人です！`,
fields: [{
    name: "ここはどんな所?",
    value: "Rennsuraが色々言ってくるサーバーです(入室メッセージはこのサーバーだけです。)"
  },
],
timestamp: new Date(),
footer: {
  icon_url: message.user.avatarURL,
  text: "やったねRennsuraちゃん、メンバーが増えたよ！"
}
}
})
});

  client.user.setActivity(` | ${client.guilds.size}個のサーバーで稼働中`, {
    type: 'STREAMING'
  });
});















const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {

 console.log(
    `${message.guild.name}:${message.channel.name}(${message.channel.id}):${message.author.username}:${message.content}`
  );
  if (message.author.bot || !message.guild) return;
  if (message.content.indexOf("!r".trim()) !== 0) return;

  const args = message.content
    .slice("!r".length)
    .trim()
    .split(/ +/g);

  const command = args.shift().toLowerCase();

  const kekka = message.content
    .replace(/\s+/, "")
    .slice("!r".length + command.length);

  if (command === 'eval') {
  if (message.author.id !== "551421671332904960") return;
    try {
      message.channel.send(eval(kekka));
    } catch (e) {
      message.react("❌");
      message.reply(e.message);
      return;
    }
    message.react("✅");
    return;
  }
});

client.on('error', error => {
  console.log(error)
  console.log('エラー')
})
client.login(process.env.token);
