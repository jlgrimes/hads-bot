const { Command } = require('discord.js-commando');

module.exports = class SetCommand extends Command {
  constructor(client) {
    super(client, {
        name: 'message',
        memberName: 'message',
        group: 'cute',
        description: 'A cute message for a cute girl <3 choose from cute, inspirational, or roast.',
        args: [
          {
            key: 'type',
            prompt: 'What type of message you want <3',
            type: 'string',
            default: 'cute',
          },
        ],
    });
  }

  run(message, { type }) {
    const cuteMessages = [
      'ur cute <3',
      'i love you',
      'you are beautiful',
      'hiiiii',
      'i love u a lot a lot',
      'you look really cute',
      'you are pretty',
      'your hair looks nice today!'
    ];

    const inspirationalMessages = [
      'dont let your memes be dreams',
      'you can do it youre so cute',
      'you can do it!! i love you',
      'dont be hard on yourself youre so beautiful!!!',
      'turn that frown upside down cutie :)'
    ];

    const roasts = [
      'oikawa is a punk bitch'
    ]

    const messageMap = {
      cute: cuteMessages,
      inspirational: inspirationalMessages,
      roast: roasts
    };

    const randomMessage = messages => messages[Math.floor(Math.random() * messages.length)]
    message.reply(randomMessage(messageMap[type]));
  }
};