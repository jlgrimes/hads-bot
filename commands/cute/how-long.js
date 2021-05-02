const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');
const moment = require('moment');

module.exports = class SetCommand extends Command {
  constructor(client) {
    super(client, {
        name: 'how-long',
        memberName: 'how-long',
        group: 'cute',
        description: 'how-long',
        args: [
        ],
    });
  }

  async run(message) {
    const todaysDate = moment();
    const dateWeMeet = moment('2021-05-13T13:44:00-04:00')
    
    message.channel.send(`You will be in my arms again ${todaysDate.to(dateWeMeet)} <3`);
  }
};