const { Command } = require('discord.js-commando');

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const messages = [
  `Hi cutie, I wanted to do a little something for Valentines day <3`,
  `I know you've probably made a huge craft thing for me but... I'm trying here lol`,
  `Anyways, I already kinda made a minecraft world where I said all the reasons I love you...`,
  `So here are some words that remind me of you, 22 words to be exact`,
  `(that is day we started dating, oct 22)`,
  `(and no, there is no way to stop the bot from sending these, brace yourself)`,
  `1. Thoughtful. You always put others first`,
  `2. Loving. You always love me with all your heart`,
  `3. Funny. I can't get enough cackling w you at the Bachelor`,
  `4. Quirky. You have so many little quirks to you and i love them all`,
  `5. Cute. I can't get enough of your cute face`,
  `6. Hot - god DAMN`,
  `7. seggsy - good LORD`,
  '8. beautiful - both inside and out',
  `9. charismatic - always light up my world`,
  `10. competitive - your exploding kittens game is strong`,
  `11. optimistic - you are always looking for the next fun adventure`,
  `12. cheerful - you always make me smile :)`,
  `13. respectful - you always respect everyone around you`,
  `14. positive - you are always a ray of sunshine`,
  `15. right - you're usually right about things`,
  '16. oriented - you always remember where my car is :)',
  '17. supportive - youre supportive of whatever i do',
  '18. sex warlock - ;)',
  '19. future - i see a future w you and it makes me happy :)',
  '20. strong-minded - i am too which makes for fun arguments lol',
  '21. smart - WOW youre smart i love it!!',
  '22. girl of my dreams :)',
  'happy valentines day cupcake, i love you <3'
];

module.exports = class ValentineCommand extends Command {
  constructor(client) {
    super(client, {
        name: 'valentine',
        memberName: 'valentine',
        group: 'cute',
        description: 'Something for Valentines day <3',
        args: [
        ],
    });
  }

  async run(message) {
    for (const msg of messages) {
      message.reply(msg);
      await sleep(5000);
    };
  }
};