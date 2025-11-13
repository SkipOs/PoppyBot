const { SlashCommandBuilder } = require("discord.js");
const { exec } = require('child_process');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mc-start')
        .setDescription('Inicia o servidor Minecraft.'),
    async execute(interaction) {
        await interaction.deferReply();

        exec('podman start minecraft', (error, stdout, stderr) => {
            if (error) {
                interaction.editReply(`❌ Erro ao iniciar o servidor:\n\`\`\`${stderr}\`\`\``);
                return;
            }

            interaction.editReply('✅ Servidor Minecraft iniciado com sucesso!');
        })
    },
};