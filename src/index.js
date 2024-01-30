const {Client, IntentsBitField} = require ('discord.js');
require("dotenv").config();

const client = new Client({ intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
]});

client.on('ready', (c) => {
    console.log(`🔨 ${c.user.username} Está à procura do herói!`);
});

client.on('interactionCreate', (interaction) =>{
    if (!interaction.isChatInputCommand()) return;
    
    if (interaction.commandName === 'soma'){
        const n1 = interaction.options.get('n1').value;
        const n2 = interaction.options.get('n2').value;


        console.log(n1);
        interaction.reply(`O resultado é ${n1+n2} ☝️🤓`);
    } 
});

client.on('messageCreate', (msg) => {
    if (msg.author.bot)
        return;

    if (msg.content === 'ping')
        msg.reply('Pong! 🏓');
});

client.login(process.env.DISCORD_TOKEN);