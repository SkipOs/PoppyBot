const { SlashCommandBuilder } = require("discord.js");
const { exec } = require("child_process");

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('mc-status')
        .setDescription('Mostra o status do servidor Minecraft oasis.'),
    async execute(interaction) {
        await interaction.deferReply();

        try {

            exec('podman ps --filter "name=minecraft" --format "{{.Status}}"', (err, stdout) => {
                if (err) {
                    console.error(err);
                    return interaction.editReply("❌ Erro ao consultar o Podman.");
                }

                const status = stdout.trim();

                if (!status) {
                    return interaction.editReply("🔴 O servidor Minecraft está **parado**.");
                }

                if (status.includes("Up")) {
                    return interaction.editReply("🟢 O servidor Minecraft está **rodando**!");
                }

                return interaction.editReply("🔴 O servidor Minecraft está **parado**.");
            });

        } catch (err) {
            console.error(err);
            return interaction.editReply("❌ Não consegui obter o status do servidor Minecraft.");
        }
    },
};
