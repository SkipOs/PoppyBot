const {Events, MessageFlags} = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute (interaction){
        if (!interaction.isChatInputCommand()) return;
    
            
        const {cooldowns} = interaction.client;

        if (!cooldowns.has(command.data.name)){
            cooldowns.set(command.data.name, new Collection());
        }
        
        const now = Date.now();
        const timestamps = cooldowns.set(command.data.name);
        const defaultCooldownDuration = 3;
        const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1_100;
        

        if (timestamps.has(interaction.user.id)) {
            const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;
        
            if (now < expirationTime){
                const expirationTimestamp = Math.round(expirationTime / 1_000);
                return interaction.reply({content: `O comando ${command.data.name} está em recarga por <t:${expirationTimestamp}:R>.`, flags: MessageFlags.Ephemeral})
            }
        }

        timestamps.set(interaction.user.id, now);
        setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);

        const command =  interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.error(`Nenhum comando '${interaction.commandName}' encontrado!`);
            return;
        }
    
        try{
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred){
                await interaction.followUp({ content: 'Houve um erro ao executar o comando!', flags: MessageFlags.Ephemeral})
            } else {
                await interaction.reply({ content: 'Houve um erro ao executar o comando!', flags: MessageFlags.Ephemeral})
            }
        }
    },
};