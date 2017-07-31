const Telegraf = require('telegraf')
const { reply } = Telegraf

const bot = new Telegraf(process.env.359959145:AAFR3XTdCEER06eiCykiGhWhkGo3nUQbCn8)
bot.command('/oldschool', (ctx) => ctx.reply('Hello'))
bot.command('/modern', ({ reply }) => reply('Yo'))
bot.command('/hipster', reply('λ'))
bot.startPolling()
