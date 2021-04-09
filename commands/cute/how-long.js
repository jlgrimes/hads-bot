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
    const dateWeMeet = moment('2021-05-03')
    
    message.channel.send(`There are ${dateWeMeet.diff(todaysDate, 'days')} more days until you're in my arms again <3`);
  }
};