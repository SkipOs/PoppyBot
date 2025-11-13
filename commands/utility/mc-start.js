const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios").create({
    socketPath: "/run/podman/podman.sock",
    timeout: 5000
});

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mc-start')
        .setDescription('Inicia o servidor Minecraft.'),
    async execute(interaction) {
        await interaction.deferReply();

        try {
            const containerName = "minecraft";

            // Tenta iniciar
            const res = await axios.post(`/v4.0.0/libpod/containers/${containerName}/start`);

            if (res.status === 204) {
                return interaction.editReply("🚀 Iniciando o servidor Minecraft! Aguarde um instante…");
            } else {
                return interaction.editReply("⚠️ Recebi uma resposta inesperada ao tentar iniciar o servidor.");
            }

        } catch (err) {
            console.error(err);

            if (err.response?.status === 304) {
                return interaction.editReply("🟨 O servidor já estava rodando!");
            }
            return interaction.editReply("❌ Erro ao iniciar o servidor Minecraft.");
        }
    },
};
