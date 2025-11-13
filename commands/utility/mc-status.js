const { SlashCommandBuilder } = require("discord.js");
const axios = require("axios").create({
    socketPath: "/run/podman/podman.sock",
    baseURL: "http://localhost", // axios precisa disso pra montar URL
    timeout: 5000
});

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('mc-status')
        .setDescription('Mostra o status do servidor Minecraft oasis.'),
    async execute(interaction) {
        await interaction.deferReply();

        try {
            const containerName = "minecraft";

            const res = await axios.get('http://host.containers.internal:8080/v4.0.0/libpod/containers/minecraft/json');

            if (res.data?.State?.Running) {
                return interaction.editReply("🟢 O servidor Minecraft está **rodando**!");
            } else {
                return interaction.editReply("🔴 O servidor Minecraft está **parado**.");
            }

        } catch (err) {
            console.error(err);
            return interaction.editReply("❌ Não consegui obter o status do servidor Minecraft.");
        }
    },
};
