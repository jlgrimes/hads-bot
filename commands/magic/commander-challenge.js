const { Command } = require('discord.js-commando');
const fetch = require('node-fetch');

module.exports = class SetCommand extends Command {
  constructor(client) {
    super(client, {
        name: 'commander-challenge',
        memberName: 'commander-challenge',
        group: 'magic',
        description: 'commander-challenge',
        args: [
        ],
    });
  }

  async run(message, { type }) {
    const URL = 'https://api.scryfall.com/cards/random?q=is%3Acommander&format%3Acommander';
    let jaredCommander, hadleyCommander;

    while ((jaredCommander && jaredCommander.legalities.commander) !== 'legal' || (hadleyCommander && hadleyCommander.legalities.commander !== 'legal')) {
      jaredCommander = await fetch(URL).then((response) => response.json());
      hadleyCommander = await fetch(URL).then((response) => response.json());
    }

    const getPrice = (player) => player.prices.usd || player.prices.usd_foil || 'idk';
    message.channel.send(`Hadley's commander. Price is $${getPrice(hadleyCommander)}`, {files: [hadleyCommander.image_uris.png]});
    message.channel.send(`Jared's commander. Price is $${getPrice(jaredCommander)}`, {files: [jaredCommander.image_uris.png]});
  }
};