const { green, white } = require('chalk');
let cp = require("child_process");
const os = require('os');
const { ActivityType } = require('discord.js');
const Premium = require('../../settings/models/Premium.js')

module.exports = async (client) => {
    await client.manager.init(client.user.id);
    client.user.setActivity(`/music play เพื่อฟังเพลง`, { type: 'WATCHING' });

    console.log(white('[') + green('INFO') + white('] ') + green(`${client.user.tag} (${client.user.id})`) + white(` is Ready!`));

    const users = await Premium.find();
    for (let user of users) {
      client.premiums.set(user.Id, user);
    }

    let guilds = client.guilds.cache.size;
    let members = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0);
    let channels = client.channels.cache.size;
	
    const activities = [
        `${guilds} servers`,
        `${members} users`,
        `/music play เพื่อฟังเพลง`,
    ]
   
    console.log(white('[') + green('INFO') + white('] ') + green(`status`) + white(` is Ready!`));
    setInterval(() => {
     client.user.setStatus('idle');
     client.user.setActivity(`/music play | ${guilds} servers ${members} users`, { type: ActivityType.Listening });
     client.user.setStatus('idle'); 
    }, 30000)
    
};

// 


  
