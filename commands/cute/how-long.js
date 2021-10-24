const { Command } = require('discord.js-commando');

const differenceInHours = require('date-fns/differenceInHours');
const isBefore = require('date-fns/isBefore');
const min = require('date-fns/min');

const TIME_ZONE_OFFSET = 6 * 60 * 60 * 1000;

const DAYS_WE_MEET = [
  '2021-9-24',
  '2021-10-16',
  '2021-11-28'
].map((date) => new Date(date));

const generateHowLongMessage = () => {
  const todaysDate = new Date(new Date() - TIME_ZONE_OFFSET);
  const daysWeWillMeet = DAYS_WE_MEET.filter((meetDay) => isBefore(todaysDate, meetDay));

  if (daysWeWillMeet === 0) {
    return `I dunno when you'll be in my arms next, but I can't wait for the next time you are!!`;
  }

  const dateWeMeet = min(daysWeWillMeet);
  const daysUntilWeMeet = Math.ceil(differenceInHours(dateWeMeet, todaysDate) / 24);

  if (daysUntilWeMeet === 1) {
    return `You will be in my arms tomorrow!! Yay!!!!`;
  }

  return `You will be in my arms again in ${daysUntilWeMeet} days <3`;
}

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
    message.channel.send(generateHowLongMessage());
  }
};
