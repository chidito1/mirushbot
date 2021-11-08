console.log('✅ Preparando ...')

const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
} = require("@adiwajshing/baileys");
const simple = require("./libreria/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const fs = require("fs");
const { banner, start, success, getGroupAdmins } = require("./libreria/functions");
const { color } = require("./libreria/color");
//const { keepalive } = require("./keepalive");
const fetch = require("node-fetch");
const axios = require("axios")  
const encodeUrl = require('encodeurl')
const moment = require("moment-timezone");

blocked = [];

require("./gatybot.js");
nocache("./gatybot.js", (module) => console.log(`${module} Se actualizó!`));

const starts = async (Fg = new WAConnection()) => {
  Fg.logger.level = "warn";
  Fg.version = [2, 2140, 12];
 
 const CFonts  = require('cfonts')
CFonts.say('FG98', {
  font: 'pallet',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`DyLux By FG98 Ig : @fg98._`, {
  font: 'console',
  align: 'center',
  colors: ['yellow']
})


  /*Fg.browserDescription = ["DyLux v4", "Chrome", "3.0"];
  console.log(banner.string);*/
  
  
  Fg.on("qr", () => {
    console.log(
      color("[", "white"),
      color("!", "blue"),
      color("]", "white"),
      color(" Escanee el codigo QR para conectarse...")
    );
  });

  fs.existsSync("./session.json") && Fg.loadAuthInfo("./session.json");
  Fg.on("connecting", () => {
    start("2", "Conectando...");
  });
  Fg.on("open", () => {
    success("2", "Conectado");
  });
  await Fg.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync(
    "./session.json",
    JSON.stringify(Fg.base64EncodedAuthInfo(), null, "\t")
  );
  
  //𝗕𝗜𝗘𝗡𝗩𝗘𝗡𝗜𝗗𝗔 𝗬 𝗗𝗘𝗦𝗣𝗘𝗗𝗜𝗗𝗔 𝗰𝗼𝗻 𝗮𝗽𝗶 //
Fg.on('group-participants-update', async (anu) => {
	const _welcom = JSON.parse(fs.readFileSync('./database/welcom.json'))
	const _left = JSON.parse(fs.readFileSync('./database/left.json'))	
		if (!_welcom.includes(anu.jid)) return
	
		try {
       const mdata = await Fg.groupMetadata(anu.jid)
         num = anu.participants[0]
         console.log(anu)
         ini_user = Fg.contacts[num]
         namaewa = ini_user.notify
         member = mdata.participants.length
        
        try {
sunumero = mek.key.fromMe ? Fg.user.name : conts.notify || conts.vname || conts.name || '-'

} catch {
sunumero = num.split('@')[0]
} 
  
         try {
               var ppimg = await Fg.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i.ibb.co/PZNv21q/Profile-FG98.jpg'
            }
        try {
               var ppgc = await Fg.getProfilePicture(anu.jid)
            } catch {
               var ppgc = 'https://i.ibb.co/PZNv21q/Profile-FG98.jpg'
            }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
        shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
         if (anu.action == 'add') {
         	//sólo foto user
         	let fotouser = await getBuffer(ppimg)
         //
         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/welkom?nama=${sunumero}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://i.ibb.co/JzSdSYx/2775fbed9275.jpg&member=${mdata.participants.length}&apikey=GFL`)
            teks = `Hola @${num.split('@')[0]}\nBienvenido/a al Grupo *${mdata.subject}*
───────────────────
▢ *Pide las reglas del grupo*, O escribe /𝗶𝗻𝗳𝗼𝗴𝗽

▢ Escriba /𝗩𝗲𝗿𝗶𝗳𝘆 para comenzar a usar el Bot.`
            Fg.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]} })
           
            //-----𝗦𝗔𝗟𝗜𝗗𝗔 
         } else if (anu.action == 'remove') {
         	if(!_left.includes(anu.jid)) return 
         	//sólo foto user
         	let fotouser = await getBuffer(ppimg)
         //
         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/goodbye?nama=${encodeUrl(namaewa)}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://i.ibb.co/qd5zCkk/121e4bf7a757.jpg&member=${mdata.participants.length}&apikey=GFL`)
            teks = `_*Adios @${num.split('@')[0]}*_`
            Fg.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
//------𝗔𝗗𝗠𝗜𝗡𝗦
} else if (anu.action == 'promote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Nuevo admin!&pp=${shortpc.data}&bg=https://i.ibb.co/1qWxBwN/morde.jpg`)
            thu = await Fg.getStatus(anu.participants[0], MessageType.text)
            teks = `≡ *NUEVO ADMIN*
┌──────────────
├ *Nombre* : @${num.split('@')[0]}
├ *Número* : ${num.replace('@s.whatsapp.net', '')}
├ *Info* : ${thu.status} 
├ *Mensaje* : Felicidades  Admin 🎉
└──────────────`
            Fg.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'demote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=Lo siento te Degradaron :'v&pp=${shortpc.data}&bg=https://i.ibb.co/ZW0xBXL/amumu.jpg`)
            thu = await Fg.getStatus(anu.participants[0], MessageType.text)
            teks = `≡ *ADMIN DEGRADADO*
┌──────────────
├ *Nombre* : @${num.split('@')[0]}
├ *Número* : ${num.replace('@s.whatsapp.net', '')}
├ *Info* : ${thu.status} 
├ *Mensaje* : Lo siento :'v
└──────────────`
            Fg.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         }
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})


//antidelete 
antidel = false
Fg.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === false) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('America/La_Paz').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0]
Fg.sendMessage(m.key.remoteJid, `━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━

    *▢ Nombre :* @${m.participant.split("@")[0]}
    *▢ Hora :* ${jam}
    *▢ Tipo :* ${type}

━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
Fg.copyNForward(m.key.remoteJid, m.message)
})

//---

  Fg.on("chat-update", async (message) => {
    require("./gatybot.js")(Fg, message);
  });
  isBattre = "Not Detect"; //
  isCharge = "Not Detect"; //
  Fg.on(`CB:action,,battery`, (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batterylevel = parseInt(batteryLevelStr);
    isBattre = batterylevel + "%";
    isCharge = json[2][0][1].live;
  });
  Fg.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist) {
      blocked.push(i.replace("c.us", "s.whatsapp.net"));
    }
  });
};

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional>
 */
function nocache(module, cb = () => {}) {
  console.log("Modulo", `'${module}'`, "Se está revisando");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

starts();
