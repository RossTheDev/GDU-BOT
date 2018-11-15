const Discord = require('discord.js');
const bot = new Discord.Client();
new Discord.RichEmbed();




const config = require("./config.json")

bot.on('ready', () => {
  console.log('GDU Shield Online');
});

bot.on('ready', () => {
  bot.user.setActivity('GDU | Prefix: +')
})

bot.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);






// commands

if (command === "mods") {
    message.channel.send({embed: {
    color: 7506394,
    author: {
    name: "Bot Builders",
    icon_url: bot.user.avatarURL
},
 fields: [{
        name: "Server Staff",
        value: "<@232277686431645697> <@478026812048408581> <@313365707083612160>  ",
      },

      {
        name: "Bot Dev",
        value: " <@478026812048408581>",
      },

       ],
    timestamp: new Date(),
    footer: {
      name: "",
      text: "",
    }
  }
});
}

if (command === "help") {
    message.channel.send("```Commands: \n +mods: Displays server staff \n +links: All our important info \n +fun: the current months fun commands!```");
}

if (command === "links") {
    message.channel.send("Server invite: https://invite.gg/gdu \n Our Twitter: https://twitter.com/GameDevsUnite")
}

if (command === "fun") {
    message.channel.send("+spooky & +f , have fun!")
}


if (command === "spooky") {
    message.channel.send(":jack_o_lantern:")
}

if (command === "f") {
    message.channel.send(":regional_indicator_o: :regional_indicator_r: :regional_indicator_t: :regional_indicator_n: :regional_indicator_i: :cross: :regional_indicator_e:")
}

//admin
  if(command === "kick") {
    if(!message.member.roles.some(r=>["Administrator", "Staff"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");

    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please @ a member of the server!");
    if(!member.kickable)
      return message.reply("Unable to kick, Check Roles and Permissions");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please Give A Reason");

     member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }

  if (command === "announce") {
      message.channel.send({embed: {
    color: 43115,
    description: args.join(" ")
  }});
  }




});

bot.login(config.token);
