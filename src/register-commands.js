require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands =[
    {
        name: 'soma',
        description: 'Faz a soma de dois números!',
        options:[
            {
            name: 'n1',
            description: 'Primeiro número',
            type: ApplicationCommandOptionType.Number,
            choices: [
                    {
                        name: 'um',
                        value: 1,
                    },
                    {
                        name: 'dois',
                        value: 2,
                    },
                ],
            required: true
        },
        {
            name: 'n2',
            description: 'Segundo número',
            type: ApplicationCommandOptionType.Number,
            required: true
        }
        ]
    },
];

const rest = new REST({version: '10'}).setToken(process.env.DISCORD_TOKEN);

(async () =>{
    try{
        console.log('Registrando comandos...');
        await rest.put(
            Routes.applicationGuildCommands(process.env.APP_ID, process.env.GUILD_ID),
            {
               body: commands
            });

            console.log('Comandos registrados.');

    } catch (e){
        console.log(`Errorro: ${e}`);
    }
})();