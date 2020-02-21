import Telegraf from 'telegraf';
import HttpsProxyAgent from 'https-proxy-agent';

const bot = new Telegraf(process.env.BOT_TOKEN, {
  telegram: {
    agent: new HttpsProxyAgent('http://5.133.213.84:3617')
  }
});
bot.start(ctx => {
  ctx.reply(`Привет, ${ctx.from.first_name}`);
});
bot.help(ctx => ctx.reply('Пришли файл'));

export default bot;
