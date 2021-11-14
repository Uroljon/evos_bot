const { TOKEN } = require("./config")
const Telegram_bot = require("node-telegram-bot-api");
const sms = require("./src/Controllers/sms");

let bot = new Telegram_bot(TOKEN, {
    polling: true
})

bot.on("message", async data => {
    console.log(`From : ${data.from.first_name} ${data.from.last_name} (${data.from.username}) \nMessage : ${data.text} \n Id=${data.from.id}`);
})

async function send_sms() {  
    let foo = await sms(998901527511, "salom ako")
    console.log(foo);
}
send_sms()