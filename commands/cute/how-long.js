const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');
const moment = require('moment');

const DAYS_WE_MEET = [
  '2021-09-24T13:44:00-04:00',
  '2021-10-22T13:44:00-04:00',
  '2021-12-25T13:44:00-04:00'
];

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
    const dateWeMeet = moment.min(DAYS_WE_MEET.map(d => moment(d)));
    
    message.channel.send(`You will be in my arms again ${todaysDate.to(dateWeMeet)} <3`);
  }
};