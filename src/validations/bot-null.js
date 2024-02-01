require('dotenv').config();

module.exports = (interaction, commandObj) => {
  if (commandObj.botNull)
    if (interaction.user.bot) {
      return true;
    }
};
