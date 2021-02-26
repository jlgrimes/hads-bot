const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class SetCommand extends Command {
  constructor(client) {
    super(client, {
        name: 'cat',
        memberName: 'cate',
        group: 'cute',
        description: 'cat',
        args: [
        ],
    });
  }

  async run(message, { type }) {
    const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
    const response = await fetch(BASE_URL);
    const json = await(response.json());
    
    message.channel.send({files: [json[0].url]});
  }
};