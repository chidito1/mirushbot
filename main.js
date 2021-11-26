const { color } = require("./lib/color");
console.log('\x1b[1;31m', color("✅ Preparando..."))

const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
  Browsers,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const fs = require("fs");
const { banner, start, success, getGroupAdmins } = require("./lib/functions");
const fetch = require("node-fetch");
const axios = require("axios")  
const encodeUrl = require('encodeurl')
const moment = require("moment-timezone");

blocked = [];

require("./gatybot.js");
nocache("./gatybot.js", (module) => console.log('\x1b[1;31m', color(`─────────────────────────────────────────────────────────────────────\n`, "magenta"), color("➛ ", "red"), color("Estado: "), color(`${module} Se actualizó!`, "pink")));

const starts = async (Fg = new WAConnection()) => {
  Fg.logger.level = "warn";
  Fg.version = [2, 2140, 12];
 
 const CFonts  = require('cfonts')
CFonts.say('gaty', {
  font: 'simple3d',
  align: 'center',
  gradient: ['red', 'magenta']
})

CFonts.say(`gatybot by gatito`, {
  font: 'console',
  align: 'center',
  colors: ['yellow']
})
  
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
	const _welcom = JSON.parse(fs.readFileSync('./database/group/welcom.json'))
	const _bye = JSON.parse(fs.readFileSync('./database/group/bye.json'))	
		if (!_welcom.includes(anu.jid)) return
		try {
			const mdata = await Fg.groupMetadata(anu.jid)
			console.log('\x1b[1;31m', color("─────────────────────────────────────────────────────────────────────", "magenta"))
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Fg.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/9vCxvzL/sinperfil.jpg'
				}
				teks = `👋Hola @${num.split('@')[0]}
───────────────────
*🎊Bienvenido/a al grupo:*
${mdata.subject}

▢ Espero que haya leído las reglas del grupo para no tener malos entendidos u.u`
               
				let buff = await getBuffer(ppimg)			
             const bosco1 = await Fg.prepareMessage("0@s.whatsapp.net", buff, MessageType.location,{ thumbnail: buff})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                welcomeBut = [{buttonId:`a`,buttonText:{displayText:'🐱 GRACIAS'},type:1}]
                welcomeButt = { contentText: `${teks}`, footerText: `*Copyright © gatybot 2021*`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                Fg.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buff', "contextInfo": { "mentionedJid" : [num], },})
                 


            //-----𝗦𝗔𝗟𝗜𝗗𝗔 
         } else if (anu.action == 'remove') {
         	if(!_bye.includes(anu.jid)) return 
         	//sólo foto user
         	let fotouser = await getBuffer(ppimg)
         //
         	let img = await getBuffer(ppimg)
            teks = `_*Adios @${num.split('@')[0]}*_`
            Fg.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
//------𝗔𝗗𝗠𝗜𝗡𝗦
} else if (anu.action == 'promote') {
            let img = await getBuffer(ppimg)
            thu = await Fg.getStatus(anu.participants[0], MessageType.text)
            teks = `≡ *NUEVO ADMIN*
╭──────────────────✾
├ *Nombre* : @${num.split('@')[0]}
├ *Número* : wa.me/${num.replace('@s.whatsapp.net', '')}
├ *Info* : ${thu.status} 
├ *Mensaje* : Felicidades  Admin 🎉
╰──────────────────✾`
            Fg.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'demote') {
            let img = await getBuffer(ppimg)
            thu = await Fg.getStatus(anu.participants[0], MessageType.text)
            teks = `≡ *ADMIN DEGRADADO*
╭──────────────────✾
├ *Nombre* : @${num.split('@')[0]}
├ *Número* : wa.me/${num.replace('@s.whatsapp.net', '')}
├ *Info* : ${thu.status} 
├ *Mensaje* : Lo siento :'v
╰──────────────────✾`
            Fg.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         }
     } catch (e) {
         console.log('Error : %s', color(e, 'red'))
      }
})


//antidelete 
//=================================================//
const _antidel = JSON.parse(fs.readFileSync('./database/group/antidelete.json'))

Fg.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (!_antidel.includes(m.jid)) return
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
console.log('\x1b[1;31m', color("─────────────────────────────────────────────────────────────────────", "magenta"))
console.log('\x1b[1;31m', color("➛ ", "red"), color("Estado: "), color("Mensaje eliminado detectado", "red"))
console.log('\x1b[1;31m', color("➛ ", "red"), color("De: "), color(`${m.participant.split("@")[0]}`, "orange"))
console.log('\x1b[1;31m', color("➛ ", "red"), color("Tipo: "), color(type, "orange"))
Fg.sendMessage(m.key.remoteJid, `*🍃「 Mensaje eliminado 」🍃*

*De:* @${m.participant.split("@")[0]}
*Hora:* ${jam}
*Tipo:* ${type}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
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