module.exports = (message) => {
  if (message.author.bot === true) return true;
  console.log(message.content);
};
