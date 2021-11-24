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
console.log('\x1b[1;31m', color("─────────────────────────────────────────────────────────────────────", "magenta"))
nocache("./gatybot.js", (module) => console.log('\x1b[1;31m', color("➛ ", "red"), color("Estado: "), color(`${module} Se actualizó!`, "pink"))

const starts = async (Fg = new WAConnection()) => {
  Fg.logger.level = "warn";
  Fg.version = [2, 2140, 12];
 
 const CFonts  = require('cfonts')
CFonts.say('GATY-BOT', {
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
	const _left = JSON.parse(fs.readFileSync('./database/group/bye.json'))	
		if (!_welcom.includes(anu.jid)) return
		try {
			const mdata = await Fg.groupMetadata(anu.jid)
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await Fg.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/FX6pMj0/profile.png'
				}
				teks = `👋Hola @${num.split('@')[0]}
───────────────────
*🎊Bienvenido/a al grupo:*
${mdata.subject}

▢ Espero que haya leído las reglas del grupo para no tener malos entendidos u.u`
               
				let buff = await getBuffer(ppimg)
				Fg.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				
            //-----𝗦𝗔𝗟𝗜𝗗𝗔 
         } else if (anu.action == 'remove') {
         	if(!_left.includes(anu.jid)) return 
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
Fg.on('message-delete', async (m) => {
var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = 'Domingo'; break;
                case 1: hari = 'Lunes'; break;
                case 2: hari = 'Martes'; break;
                case 3: hari = 'Miercoles'; break;
                case 4: hari = 'Jueves'; break;
                case 5: hari = 'Viernes'; break;
                case 6: hari = 'Sabado'; break;
            }
            switch(bulan1) {
                case 0: bulan = "De Enero Del"; break;
                case 1: bulan = "De Febrero Del"; break;
                case 2: bulan = "De Marzo Del"; break;
                case 3: bulan = "De Abril Del"; break;
                case 4: bulan = "De Mayo Del"; break;
                case 5: bulan = "De Junio Del"; break;
                case 6: bulan = "De Julio Del"; break;
                case 7: bulan = "De Agosto Del"; break;
                case 8: bulan = "De Septiembre Del"; break;
                case 9: bulan = "De Octubre Del"; break;
                case 10: bulan = "De Noviembre Del"; break;
                case 11: bulan = "De Diciembre Del"; break;
            }
                 var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun;
                var tampilJam = '' + jam + ':' + menit + ':' + detik;
var ase = new Date();
                        var waktoo = ase.getHours();
                        switch(waktoo){
                case 0: waktoo = "Buena Media Noche"; break;
                case 1: waktoo = "Buena Madrugada"; break;
                case 2: waktoo = "Buena Madrugada"; break;
                case 3: waktoo = "Buena Madrugada"; break;
                case 4: waktoo = "Buena Madrugada"; break;
                case 5: waktoo = "Buena Madrugada"; break;
                case 6: waktoo = "Buen Día"; break;
                case 7: waktoo = "Buen Día"; break;
                case 8: waktoo = "Buen Día"; break;
                case 9: waktoo = "Buen Día"; break;
                case 10: waktoo = "Buen Día"; break;
                case 11: waktoo = "Buen Mediodía"; break;
                case 12: waktoo = "Buen Mediodía"; break;
                case 13: waktoo = "Buen Mediodía"; break;
                case 14: waktoo = "Buena Tarde"; break;
                case 15: waktoo = "Buena Tarde"; break;
                case 16: waktoo = "Buena Tarde"; break;
                case 17: waktoo = "Buena Tarde"; break;
                case 18: waktoo = "Buena Noche"; break;
                case 19: waktoo = "Buena Noche"; break;
                case 20: waktoo = "Buena Noche"; break;
                case 21: waktoo = "Buena Noche"; break;
                case 22: waktoo = "Buena Noche"; break;
                case 23: waktoo = "Buena Noche"; break;
            }
            var tampilUcapan = '' + waktoo;  
if (antidel === false) return 
const type2 = Object.keys(m.message)[0]
console.log(color('[GATYBOT]', 'magenta'), color(`Mensaje eliminado detectado`, 'red')) 
Fg.sendMessage(m.key.remoteJid, `*🍃「 Mensaje eliminado 」🍃*

*De:* @${m.participant.split("@")[0]}
*Hora:* ${tampilJam}
*Tipo:* ${type2}`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
setTimeout( () => {
                Fg.copyNForward(m.key.remoteJid, m.message)
                }, 1000)
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