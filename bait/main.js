// import usersArr from './users.mjs';
require( 'dotenv' ).config( {path: './.env'} );
const TelegramBotApi = require( 'node-telegram-bot-api' );
const bot = new TelegramBotApi( process.env.TOKEN, {polling: true} );

// const mysql = require('mysql2')

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'usersdb',
//   password: 'parol2002',
// })



let usersAll = [1042168079]
bot.setMyCommands([
  {command: '/start', description: 'Начать пользоваться ботом'},
  {command: '/help', description: 'Правила пользования'},
  {command: '/menu', description: 'Открыть меню'},
]);

const CHANNELS = [
  {title: 'Инфографика', link: 'https://t.me/+IWY5ZuNyoBc5YjUy', channelId: '-1002021967175'},
  {title: 'IT/Программирование', link: 'https://t.me/+zyegDTSgUoxjNjQy', channelId: '-1002229164310'},
  {title: 'Мотивация', link: 'https://t.me/thatgirl_vibes', channelId: '-1002386104491'},
  {title: 'WB/Артикулы', link: 'https://t.me/WBMonsters222', channelId: '-1002399255827'},
  {title: 'PR/Реклама', link: 'https://t.me/+RD-HZmZ1zuJjNGVi', channelId: '-1002457816117'},
];

const srchPerson = {
  name: 'name',
  lastName: 'lastName',
  surName: 'surName',
  city: 'city'
};

const checkSrch = (chatId) => {
  bot.sendMessage(chatId, `<b><i>Идет поиск...</i></b>`, { parse_mode: "HTML" })
  setTimeout(() => bot.sendMessage(chatId, `Процесс: <b><i>10%</i></b>`, { parse_mode: "HTML" }), 1000);
  setTimeout(() => bot.sendMessage(chatId, `Процесс: <b><i>20%</i></b>`, { parse_mode: "HTML" }), 1500);
  setTimeout(() => bot.sendMessage(chatId, `Процесс: <b><i>28%</i></b>`, { parse_mode: "HTML" }), 1900);
  setTimeout(() => bot.sendMessage(chatId, `Процесс: <b><i>32%</i></b>`, { parse_mode: "HTML" }), 2100);
  setTimeout(() => bot.sendMessage(chatId, `Процесс: <b><i>46%</i></b>`, { parse_mode: "HTML" }), 2400);
  setTimeout(() => bot.sendMessage(chatId, `Процесс: <b><i>67%</i></b>`, { parse_mode: "HTML" }), 3100);
  setTimeout(() => bot.sendMessage(chatId, `Процесс: <b><i>89%</i></b>`, { parse_mode: "HTML" }), 3500);
  setTimeout(() => bot.sendMessage(chatId, `Процесс: <b><i>94%</i></b>`, { parse_mode: "HTML" }), 3900);
  setTimeout(() => bot.sendMessage(chatId, `Процесс: <b><i>98%</i></b>`, { parse_mode: "HTML" }), 4100);
  setTimeout(() => bot.sendMessage(chatId, `Процесс: <b><i>100%</i></b>`, { parse_mode: "HTML" }), 4500);
  setTimeout(() => bot.sendMessage(chatId, channelCheck(chatId)), 5000)
}

const captionCity = `☺️☺️☺️Дорогой друг, 💥mы нашли <b>SLIV</b>ы 💦💦💦 твоего города💥. Мы благодарим наших ❤️<b><i>Спонсоров</i></b>❤️ за то, что они дают нам возможность <s>платно</s> <b>БЕСПЛАТНО</b>✅ пользоваться всеми возможностями на просторах нашего <i>ИНТЕРНЕТА</i>🍆.
    Без них мы бы не смогли сделать что-то подобное.
    <i><b>Убедительная просьба</b></i> ⭐️ПОДПИСАТЬСЯ⭐️ на них, чтобы получить файл с <i>SLIV</i>ами🔥🔥🔥`;

const captionPerson = `☺️☺️☺️Дорогой друг, 💥mы нашли того,💦💦💦 кого ты искал💥. Мы благодарим наших ❤️<b><i>Спонсоров</i></b>❤️ за то, что они дают нам возможность <s>платно</s> <b>БЕСПЛАТНО</b>✅ пользоваться всеми возможностями на просторах нашего <i>ИНТЕРНЕТА</i>🍆.
    Без них мы бы не смогли сделать что-то подобное.
    <i><b>Убедительная просьба</b></i> ⭐️ПОДПИСАТЬСЯ⭐️ на них, чтобы получить <i>SLIV</i>🔥🔥🔥`

const channelCheck = async (chatId) => {
  return bot.sendPhoto(chatId, "https://media.newyorker.com/photos/64629d9ca8c7816949e96e85/master/w_2240,c_limit/Dillon-Blur-11.jpg", {
    caption: captionPerson, 
    reply_markup: {
      inline_keyboard: [
        [{text: CHANNELS[0].title, url: CHANNELS[0].link}, {text: CHANNELS[1].title, url: CHANNELS[1].link}],
        [{text: CHANNELS[2].title, url: CHANNELS[2].link}, {text: CHANNELS[3].title, url: CHANNELS[3].link}],
        [{text: CHANNELS[4].title, url: CHANNELS[4].link}],
        [{text: 'Проверка подписки', callback_data: 'examination'}],
      ]
    }, resize_keyboard: true, parse_mode: "HTML"
  })
} 

const checkSubChannel = async (fromId, channels) => {
  const data = await bot.getChatMember(channels[1].channelId, fromId)
  if(data.status === 'left' || data.status === 'kicked') {
    return false
  } else {
    return true
  }
}

const srchInCity = async (chatId) => {
  return bot.sendPhoto(chatId, "https://media.newyorker.com/photos/64629d9ca8c7816949e96e85/master/w_2240,c_limit/Dillon-Blur-11.jpg", {
    caption: captionCity, 
    reply_markup: {
      inline_keyboard: [
        [{text: CHANNELS[0].title, url: CHANNELS[0].link}, {text: CHANNELS[1].title, url: CHANNELS[1].link}],
        [{text: CHANNELS[2].title, url: CHANNELS[2].link}, {text: CHANNELS[3].title, url: CHANNELS[3].link}],
        [{text: CHANNELS[4].title, url: CHANNELS[4].link}],
        [{text: 'Проверка подписки', callback_data: 'examination'}],
      ]
    }, resize_keyboard: true, parse_mode: "HTML"
  })
}

const start = () => {
  bot.on( 'message', async msg => {
    
    const msgText = msg.text;
    const chatId = msg.chat.id;
    const userName = msg.from.first_name;
    const userId = msg.from.id;
    const msgId = msg.message_id;
    const isAdmin = Number( process.env.ADMINID ) === userId;

    const userInArray = (user) => {
      return user === userId
    }

    switch(true) {

      case msgText === '/start':
        if(usersAll.length > 0) {
          const findUser = usersAll.find(userInArray)
          if(findUser === undefined) {
            usersAll.push(userId)
            console.log(usersAll)
          } else {
            console.log('уже есть')
            console.log(usersAll)
          }
          console.log(usersAll)
        }
        console.log(userId, userName)
        return bot.sendMessage(chatId, `Привет, ${userName}.`, {
        reply_markup: {
          keyboard: [
            ['⭐️ Шоубиз/Slivki ⭐️', '🌇 Твой город/GayGirl 🌇'],
            ['🕵🏽‍♂️ Запрос/YourFriends 🕵🏽‍♂️'],
            ['❌ Закрыть меню ❌'],
          ], resize_keyboard: true
        }
       });

      case msgText === '/help':
        return bot.sendMessage(chatId, `${userName}, ниже представлены правила пользования.`, {
          reply_markup: {
            keyboard: [
              ['btn1', 'btn2'],
              ['btn3'],
              ['❌ Закрыть меню ❌'],
            ], resize_keyboard: true
          }
        });
      
      case msgText === '/menu':
        return bot.sendMessage(chatId, 'Меню открыто', {
          reply_markup: {
            keyboard: [
              ['⭐️ Шоубиз/Slivki ⭐️', '🌇 Твой город/GayGirl 🌇'],
              ['🕵🏽‍♂️ Запрос/YourFriends 🕵🏽‍♂️'],
              ['❌ Закрыть меню ❌'],
            ], resize_keyboard: true
          }
        });

      case msgText == '❌ Закрыть меню ❌':
        return bot.sendMessage(chatId, 'Вы закрыли меню', {
          reply_markup: {
            keyboard: [
              ['⬆️ Открыть меню ⬆️'],
            ], resize_keyboard: true
          }
        });
      
      case msgText == '⬆️ Открыть меню ⬆️':
        return bot.sendMessage(chatId, 'Меню открыто', {
          reply_markup: {
            keyboard: [
              ['⭐️ Шоубиз/Slivki ⭐️', '🌇 Твой город/GayGirl 🌇'],
              ['🕵🏽‍♂️ Запрос/YourFriends 🕵🏽‍♂️'],
              ['❌ Закрыть меню ❌'],
            ], resize_keyboard: true
          }
        });

      case msgText == '⭐️ Шоубиз/Slivki ⭐️':
        console.log(userId, userName)
        return bot.sendMessage(chatId, `Ты хочешь найти SLIV звезды?
          Нажми, чтобы увидеть SLIV своего кумира)`, {
            reply_markup: {
              inline_keyboard: [
                [{text: 'Получить файл с SLIV`ом', callback_data: 'srchStar'}],
              ]
            }
          });

      case msgText == '🌇 Твой город/GayGirl 🌇':
        console.log(userId, userName)
        return bot.sendMessage(chatId, 'Найди SLIV из своего города!', {
          reply_markup: {
            inline_keyboard: [
              [{text: 'Москва', callback_data: 'srchCity'}, {text: 'Санкт-Петербург', callback_data: 'srchCity'}],
              [{text: 'Екатеринбург', callback_data: 'srchCity'}, {text: 'Рязань', callback_data: 'srchCity'}],
              [{text: 'Казань', callback_data: 'srchCity'}, {text: 'Краснодар', callback_data: 'srchCity'}],
              [{text: 'Ростов-на-Дону', callback_data: 'srchCity'}, {text: 'Новосибирск', callback_data: 'srchCity'}],
              [{text: 'Воронеж', callback_data: 'srchCity'}, {text: 'Саратов', callback_data: 'srchCity'}],
              [{text: 'Иркутск', callback_data: 'srchCity'}, {text: 'Белгород', callback_data: 'srchCity'}],
              [{text: 'Волгоград', callback_data: 'srchCity'}, {text: 'Ижевск', callback_data: 'srchCity'}],
              [{text: 'Псков', callback_data: 'srchCity'}, {text: 'Самара', callback_data: 'srchCity'}],
              [{text: 'Барнаул', callback_data: 'srchCity'}, {text: 'Сочи', callback_data: 'srchCity'}],
              [{text: 'Сургут', callback_data: 'srchCity'}, {text: 'Тамбов', callback_data: 'srchCity'}],
              [{text: 'Липецк', callback_data: 'srchCity'}, {text: 'Нижний Новгород', callback_data: 'srchCity'}],
              [{text: 'Тверь', callback_data: 'srchCity'}, {text: 'Владимир', callback_data: 'srchCity'}],
              [{text: 'Череповец', callback_data: 'srchCity'}, {text: 'Чебоксары', callback_data: 'srchCity'}],
              [{text: 'Пермь', callback_data: 'srchCity'}, {text: 'Кисловодск', callback_data: 'srchCity'}],
              [{text: 'Уфа', callback_data: 'srchCity'}, {text: 'Челябинск', callback_data: 'srchCity'}],
              [{text: 'Курган', callback_data: 'srchCity'}, {text: 'Таганрог', callback_data: 'srchCity'}],
              [{text: 'Оренбург', callback_data: 'srchCity'}, {text: 'Омск', callback_data: 'srchCity'}],
            ]
          }
        });
      
      case msgText == '🕵🏽‍♂️ Запрос/YourFriends 🕵🏽‍♂️':
        console.log(userId, userName)
        await bot.sendMessage(chatId, `Введите <b><i>Имя: Иван</i></b>`, {
            parse_mode: 'HTML',
          });
        break;

      case msgText === 'checkUsersInBot':
        bot.sendMessage(chatId, usersAll.indexOf())
        break
        
      case msgText.includes('Имя:'): 
        const srchName = msgText.replace('Имя: ', '')
        const srchPersonName = Object.assign({}, srchPerson)
        srchPersonName.name = srchName;
        Object.assign(srchPerson, srchPersonName)
        await bot.sendMessage(chatId, `Введите <b><i>Фамилия: Иванов</i></b>`, {
          parse_mode: 'HTML'
        });
        break
        
      case msgText.includes('Фамилия:'): 
        const srchLastName = msgText.replace('Фамилия: ', '')
        const srchPersonLastName = Object.assign({}, srchPerson)
        srchPersonLastName.lastName = srchLastName
        Object.assign(srchPerson, srchPersonLastName)
        await bot.sendMessage(chatId, `Введите <b><i>Отчество: Иванович</i></b>`, {
          parse_mode: 'HTML'
        });
        break
        
      case msgText.includes('Отчество:'):
        const srchSurName = msgText.replace('Отчество: ', '')
        const srchPersonSurName = Object.assign({}, srchPerson)
        srchPersonSurName.surName = srchSurName
        Object.assign(srchPerson, srchPersonSurName)
        await bot.sendMessage(chatId, `Введите <b><i>Город: Москва</i></b>`, { parse_mode: "HTML" })
        break

      case msgText.includes('Город:'):
        const srchCity = msgText.replace('Город: ', '')
        const srchPersonCity = Object.assign({}, srchPerson)
        srchPersonCity.city = srchCity
        Object.assign(srchPerson, srchPersonCity)
        if(srchPerson.name === 'name' && srchPerson.lastName === 'lastName' && srchPerson.surName === 'surName' && srchPerson.city === 'city') {
          await bot.sendMessage(chatId, 'Данные не корректны. Повторите попытку')
        } else {
          await bot.sendMessage(chatId, `Вы ищете "<b><i>${srchPerson.name}</i></b> <b><i>${srchPerson.lastName}</i></b> <b><i>${srchPerson.surName}</i></b>" из города <b><i>${srchPerson.city}</i></b>`, {
            parse_mode: "HTML"
          })
          checkSrch(chatId);
        }
        break
    
      // case msgText.includes('Name:'):
      //   checkSrch(chatId)
    };
  });

  bot.on( 'callback_query', async cback => {
    const cData = cback.data;
    const cChatId = cback.message.chat.id;
    const cUserId = cback.from.id;
    const cMsgId = cback.message.message_id;
    
    switch(true) {
      
      case cData === 'srchStar':
        bot.sendMessage(cChatId, `Получи 
        тот самый <b><i>Sliv</i></b> <b><i>Знаменитостей</i></b>`, { parse_mode: "HTML" })
        channelCheck(cChatId)
        break
      case cData === 'examination':
        await bot.sendMessage(cChatId, `<b><i>Проверка подписки...</i></b>`, { parse_mode: "HTML" })
        const userSub = await checkSubChannel(cUserId, CHANNELS)
        if(!userSub) {
          return bot.sendMessage(cChatId, 'Похоже, ты подписался не на все каналы :)')
        } else {
          return bot.sendMessage(cChatId, `Ты подписался на все каналы. ❤️Спасибо❤️
            Выгрузка <b><i>SLIVa</i></b> будет через <i>24 часа</i> после проверки данных модератором.`, { parse_mode: "HTML" })
        };

      case cData === 'srchCity':
        srchInCity(cChatId)
      break
    }
  })
};

start();