const { SlashCommandBuilder } = require("discord.js");
const { exec } = require("child_process");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mc-start')
        .setDescription('Inicia o servidor Minecraft.'),
    async execute(interaction) {
        await interaction.deferReply();

        try {
            const containerName = "minecraft";

            // Antes de iniciar: checar se já está rodando
            exec(`podman ps --filter "name=${containerName}" --format "{{.Status}}"`, (err, stdout) => {
                if (err) {
                    console.error(err);
                    return interaction.editReply("❌ Erro ao consultar o Podman.");
                }

                const status = stdout.trim();
                if (status.includes("Up")) {
                    return interaction.editReply("🟨 O servidor **já está rodando**!");
                }

                // Se não está rodando → iniciar
                exec(`podman start ${containerName}`, (err2, stdout2, stderr2) => {
                    if (err2) {
                        console.error(stderr2 || err2);
                        return interaction.editReply("❌ Erro ao iniciar o servidor Minecraft.");
                    }

                    return interaction.editReply("🚀 O servidor Minecraft está **iniciando**! Aguarde alguns segundos…");
                });
            });

        } catch (err) {
            console.error(err);
            return interaction.editReply("❌ Ocorreu um erro inesperado ao tentar iniciar o servidor.");
        }
    },
};
