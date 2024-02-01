require('dotenv').config();

module.exports = (interaction, commandObj) => {
  if (commandObj.devOnly)
    if (interaction.member.id !== process.env.DEV_ID) {
      interaction.reply(
        'Esse comando está disponível apenas para desenvolvedores.'
      );
      return true;
    }
};
