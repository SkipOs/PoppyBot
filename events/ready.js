const { Events } = require('discord.js');

module.exports =    {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Pronto! ${client.user.tag} saiu em busca do herói 🔨`);
    }
};