//====================[ CONECTAR A WHATSAPP]====================//
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WAMessageProto,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReconnectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
  Browsers,
} = require("@adiwajshing/baileys");
//====================[ FIN DE CONECTAR A WHATSAPP ]====================//

//====================[ MÓDULOS ]====================//
const simple = require("./libreria/simple.js");
const hx = require("hxz-api");
const yo = require("tod-api");
const dh = require("dhn-api");
const qrcode = require("qrcode-terminal");
const encodeUrl = require('encodeurl')
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpeg = require("fluent-ffmpeg");
const imgbb = require('imgbb-uploader');
const imgbbUploader = require('imgbb-uploader')
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const FormData = require("form-data");
const phoneNum = require("awesome-phonenumber");
const googlefg = require('google-it')
const gis = require("g-i-s");
const got = require("got");
const Exif = require('./libreria/exif');
const exif = new Exif();
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const brainly = require("brainly-scraper");
const yts = require("yt-search");
const ms = require("parse-ms");
const toMs = require("ms");
const { error } = require("qrcode-terminal");
const CryptoJS = require("crypto-js");
const crypto = require('crypto');
//====================[ FIN DE MODULOS ]====================//


const { removeBackgroundFromImageFile } = require('remove.bg');

//====================[ LIBRERIA ]====================//
const { convertSticker } = require("./libreria/swm.js")
const { webp2mp4Url, webp2gifFile, reverseVideoFile } = require('./libreria/ezgif')
const { validmove, setGame } = require("./libreria/tictactoe");
const { recognize } = require('./libreria/ocr')
const { wikiSearch } = require('./libreria/wiki.js')
const { getBuffer, h2k,  generateMessageID, getGroupAdmins,  getRandom, banner,  start,  info, success, close, simih} = require("./libreria/functions");
const { color, bgcolor } = require("./libreria/color");
const { fetchJson, getBase64, kyun, createExif } = require("./libreria/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./libreria/ytdl");
const { webp2mp4File } = require("./libreria/webp2mp4");
const time = moment().tz("America/La_Paz").format("HH:mm:ss");
const { sleep, isAfk, cekafk,  } = require("./libreria/offline");
const { cmdadd } = require("./libreria/totalcmd.js");
const { mediafire } = require('./libreria/mediafire.js')
const { jadibot, stopjadibot, listjadibot } = require("./libreria/jadibot");
const _prem = require("./libreria/premium");
const game = require("./libreria/game");
const afk = require("./libreria/afk");
//====================[ FIN DE LIBRERIA ]====================//

//New
const translate = require("@vitalets/google-translate-api");
const listbahasa = require("@vitalets/google-translate-api/languages");

//apiimgbb //20a14861e4f7591f3dc52649cb07ae02
const apikeyimgbb = '04b9e9337ecb1ceb0250f81549301785'

//-- Reportes

const _informe = JSON.parse(fs.readFileSync('./result/reportes/informe.json'));
const _solicitud = JSON.parse(fs.readFileSync('./result/reportes/solicitud.json'));
const confi = JSON.parse(fs.readFileSync('./settings.json'))

//====================[ BASE DE DATOS ]====================//
const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtual = JSON.parse(fs.readFileSync('./database/antivirtual.json'))
const _antiviewonce = JSON.parse(fs.readFileSync('./database/antiviewonce.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const _bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
const ban = JSON.parse(fs.readFileSync('./database/banned.json'));
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
const limit = JSON.parse(fs.readFileSync('./database/diaman.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const _scommand = JSON.parse(fs.readFileSync('./database/stickcmd.json'))
const _welcom = JSON.parse(fs.readFileSync('./database/welcom.json'))
const _left = JSON.parse(fs.readFileSync('./database/left.json'))	 
const _user = JSON.parse(fs.readFileSync('./database/verify.json'))
const _samih = JSON.parse(fs.readFileSync('./database/simi.json'))
const Verify = JSON.parse(fs.readFileSync('./database/verify.json'))
const _antilinkte = JSON.parse(fs.readFileSync('./database/antilinkte.json'));
const _antilinkdi = JSON.parse(fs.readFileSync('./database/antilinkdi.json'));
const nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./database/nivel.json'))
const awgp = JSON.parse(fs.readFileSync('./database/awgp.json'))
const _claim = JSON.parse(fs.readFileSync('./database/claim.json'))
//====================[ FIN DE BASE DE DATOS ]====================//


//====================[ ECONOMÍA ]====================//
const { 
isLimit, 
limitAdd, 
getLimit, 
giveLimit, 
addBalance, 
kurangBalance, 
getBalance, 
isGame, 
gameAdd, 
givegame, 
cekGLimit 
} = require("./libreria/economy");
//====================[ FIN DE ECONOMÍA ]====================//

//====================[ RESULTADOS ]====================//
const _verdad = JSON.parse(fs.readFileSync('./result/verdad.json'));
const _reto = JSON.parse(fs.readFileSync('./result/reto.json'));
//====================[ FIN DE RESULTADOS ]====================//

//---Ajustes  Del prefijo
let multi = true
let nopref = false
let single = false
let prefa = '/'

//--
banChats = false;
offline = false;

//====================[ HELP/MENU ]====================//
const { help } = require('./help/menu')
const { 
wait, 
stick, 
errorfg, 
group, 
banf, 
ownerB, 
modsB, 
premi, 
userB, 
admin, 
Badmin, 
leveloff, 
lvlnul, 
fdiama, 
fgnsfw, 
gCoinF 
} = require('./help/respon');
//====================[ FIN DE HELP/MENU ]====================//

//====================[ CONFIGURACIÓN ]====================//
const Vkey = confi.Zekskey
const lolkey = confi.LolHumanKey
const hunterkey = confi.fgkey  
const valkey = 'rivalgans'
const Xinz = 'XinzBot'
const Pkode = 'pais' 
const grupomc = 'https://chat.whatsapp.com/KQLMoi0FX0JHWBzRPOwJ31'
const owner = confi.ownerN
const mods = confi.mods
//====================[ FIN DE CONFIGURACIÓN ]====================//


//====================[ ENLACES ]====================//
const soportefg = 'https://chat.whatsapp.com/KQLMoi0FX0JHWBzRPOwJ31'
//====================[ FIN DE ENLACES ]====================//

//====================[ ALMACENAMIENTO ]====================//
fakefg = fs.readFileSync('./image/fake.jpg')
fakelogo = fs.readFileSync('./almacenamiento/imagenes/gaty_2.jpg')
fglogo = fs.readFileSync('./almacenamiento/imagenes/gaty_0.jpg')
gatylogo = fs.readFileSync('./almacenamiento/imagenes/gaty_2.jpg')
minecraft = fs.readFileSync('./almacenamiento/imagenes/minecraft_0.jpg')
//====================[ FIN DE ALMACENAMIENTO ]====================//

//--anti delete 
antidel = false
ngetik = false
vn = true
//---
hit_today = [];

//----Juegos
let mtk = [];
 let {GameTime, limitCount } = require('./settings')
//---

//====================[ CONTACTO DEL DUEÑO ]====================//
const vcard1 = 'BEGIN:VCARD\n' 
 + 'VERSION:3.0\n' 
 + 'FN:式⃟🩸고양이🩸⃟式⁩\n'
 + 'ORG:Dueño de GatyBot;\n' 
 + `TEL;type=CELL;type=VOICE;waid=${owner}:+${owner}\n`
 + 'END:VCARD'
      
const vcard2 = 'BEGIN:VCARD\n' 
 + 'VERSION:3.0\n' 
 + 'FN:式⃟🩸고양이🩸⃟式⁩\n'
 + 'ORG:Dueño de GatyBot;\n' 
 + 'TEL;type=CELL;type=VOICE;waid=51940617554:+51 940 617 554\n'
 + 'END:VCARD'
//====================[ FIN DE CONTACTO DEL DUEÑO ]====================//
  
//====================[ FUNCIÓN DE NIVELACIÓN ]====================//
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./database/nivel.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./database/nivel.json', JSON.stringify(_level))
	}
}

const addLevelingId = (sender) => {
	const obj = { id: sender, xp: 1, level: 1 }
	_level.push(obj)
	fs.writeFileSync('./database/nivel.json', JSON.stringify(_level))
}
//====================[ FIN FUNCIÓN DE NIVELACIÓN ]====================//


//====================[ GENERADOR DE CODIGO ]====================//
const bikinSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
//====================[ FIN DE GENERADOR DE CODIGO ]====================//
        
//====================[ FUNCION DE REGISTRO ]====================//
const getuserRandomId = () => {
  return _user[Math.floor(Math.random() * _user.length)].id
}

//registro
const adduserUser = (sender, pushname, fecha2, hora2, seriTod) => {
  const obj = {
id: sender,
name: pushname,
fecha: fecha2,
time: hora2,
serial: seriTod
  }
  _user.push(obj)
  fs.writeFileSync('./database/verify.json', JSON.stringify(_user))
}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
} 

const checkuserUser = (sender) => {
  let status = false
  Object.keys(_user).forEach((i) => {
if (_user[i].id === sender) {
  status = true
}
  })
  return status
}

//====================[ FECHA ]====================//
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
                case 0: hari = "domingo"; break;
                case 1: hari = "lunes"; break;
                case 2: hari = "martes"; break;
                case 3: hari = "miercoles"; break;
                case 4: hari = "jueves"; break;
                case 5: hari = "viernes"; break;
                case 6: hari = "sabado"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "enero"; break;
                case 1: bulan1 = "febrero"; break;
                case 2: bulan1 = "marzo"; break;
                case 3: bulan1 = "abril"; break;
                case 4: bulan1 = "mayo"; break;
                case 5: bulan1 = "junio"; break;
                case 6: bulan1 = "julio"; break;
                case 7: bulan1 = "agosto"; break;
                case 8: bulan1 = "setiembre"; break;
                case 9: bulan1 = "octubre"; break;
                case 10: bulan1 = "noviembre"; break;
                case 11: bulan1 = "diciembre"; break;
            }
            var fecha2 = "" + hari + ", " + tanggal + " - " + bulan1 + " - " + tahun;
            var tampilWaktu = "" + jam + " horas con " + menit + " minutos y " + detik + " segundos";
//====================[ FIN DE FECHA ]====================//
            
//-------𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦-----
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/stickcmd.json", JSON.stringify(_scommand));
};

const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};

//------------
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dias, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Horas, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minutos, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};



module.exports = Fg = async (Fg, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;

global.prefix
global.blocked
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    
   const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
    
    const type = Object.keys(mek.message)[0]
    1;
    if (mek.key.fromMe) return
    //if (!mek.key.fromMe === true) return
    
    const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    
    //---Multi Prefix
if(multi){
//var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~,¿;+×!#$%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×!#$,|`÷?;:%abcdefghijklmnopqrstuvwxyz%^&./\\©^]/gi) : '/'
var prefix = ("+");

} else {
if (nopref){
prefix = ''

} else {
if(single){
prefix = prefa }}}

        //---body
        let body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) 
       ? mek.message.conversation 
       : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) 
       ? mek.message[type].caption 
       : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) 
      ? mek.message[type].caption 
       : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) 
        ? mek.message[type].text 
        : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId 
       ? mek.message[type].singleSelectReply.selectedRowId 
     : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId 
       ? mek.message[type].selectedButtonId
      : (type == 'stickerMessage') && 
     (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && 
    getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) 
      ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""

        //---
        
    const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    const autofg = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    hit_today.push(command);
    const args = body.trim().split(/ +/).slice(1)
    const isCmd = body.startsWith(prefix)
    const q = args.join(" ");
    
    const botNumber = Fg.user.jid;
    const botNumero = botNumber.replace('@s.whatsapp.net', '') //sólo número del bot   
    const isGroup = from.endsWith("@g.us"); 
    const sender = mek.key.fromMe 
      ? Fg.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? Fg.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
      
    const senderNumber = sender.split("@")[0]
    const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = Fg.user.phone
    
      const isYo = mek.key.fromMe ? true : false
      const isOwner = senderNumber == owner || senderNumber == botNumero
      const isMods = mods.includes(senderNumber)
      
      const isClaimOn = _claim.includes(sender)

    const isVerify = _user.includes(sender)
    const isAntilink = isGroup ? _antilink.includes(from) : false
    const isAntiviewOnce = isGroup ? _antiviewonce.includes(from) : false
    const isAntivirtual = isGroup ? _antivirtual.includes(from) : false
    const isPremium = _prem.checkPremiumUser(sender,premium) || false || isOwner
    const isWelcom = isGroup ? _welcom.includes(from) : false
    const isLeft = isGroup ? _left.includes(from) : false
    const isBanchat = isGroup ? _bancht.includes(from) : false
    const isSimi = isGroup ? _samih.includes(from) : false
    
    const totalchat = await Fg.chats.all();
    const m = simple.smsg(Fg, mek);
    const groupMetadata = isGroup ? await Fg.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    //----nuevo fg 
const isBanned = ban.includes(sender)
const isAntiTele = isGroup ? _antilinkte.includes(from) : false
const isAntiDis = isGroup ? _antilinkdi.includes(from) : false
const isNsfw = isGroup ? nsfw.includes(from) : false 
const isLevelingOn = isGroup ? _leveling.includes(from) : false
const isAw = isGroup ? awgp.includes(from) : false 

    const conts = mek.key.fromMe
      ? Fg.user.jid
      : Fg.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? Fg.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (isCmd) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./libreria/totalcmd.json"))[0]
      .totalcmd;
const gcounti = confi.gcount
const gcount = isPremium ? gcounti.prem : gcounti.user
   
   chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    const arg = chats.slice(command.length + 2, chats.length)
    const argss = body.split(/ +/g)
    //Y
    const time = moment.tz('America/La_Paz').format('DD/MM HH:mm:ss')
    const hora = moment.tz('America/La_Paz').format('HH:mm')
    const hora2 = moment.tz('America/La_Paz').format('HH:mm:ss')
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Libra", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    
    //----saludos
    const time2 = moment().tz("America/La_Paz").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Buenas noches";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "buenas tardes";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "buenas tardes";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Buenos dias";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Buenas noches";
    }

//====================[ SALUDOS ]====================//
var ase = new Date();
                        var waktoonyabro = ase.getHours();
                        switch(waktoonyabro){
                case 0: waktoonyabro = `espero que tengas una linda noche 🌛`; break;
                case 1: waktoonyabro = `espero que tengas una linda noche 💤`; break;
                case 2: waktoonyabro = `espero que tengas una linda noche 🦉`; break;
                case 3: waktoonyabro = `espero que tengas una linda mañana ✨`; break;
                case 4: waktoonyabro = `espero que tengas una linda mañana 💫`; break;
                case 5: waktoonyabro = `espero que tengas una linda mañana 🌅`; break;
                case 6: waktoonyabro = `espero que tengas una linda mañana 🌄`; break;
                case 7: waktoonyabro = `espero que tengas una linda mañana 🌅`; break;
                case 8: waktoonyabro = `espero que tengas una linda mañana 💫`; break;
                case 9: waktoonyabro = `espero que tengas una linda mañana ✨`; break;
                case 10: waktoonyabro = `espero que tengas un lindo dia 🌞`; break;
                case 11: waktoonyabro = `espero que tengas un lindo dia 🌨`; break;
                case 12: waktoonyabro = `espero que tengas un lindo dia ❄`; break;
                case 13: waktoonyabro = `espero que tengas un lindo dia 🌤`; break;
                case 14: waktoonyabro = `espero que tengas una linda tarde 🌇`; break;
                case 15: waktoonyabro = `espero que tengas una linda tarde 🥀`; break;
                case 16: waktoonyabro = `espero que tengas una linda tarde 🌹`; break;
                case 17: waktoonyabro = `espero que tengas una linda tarde 🌆`; break;
                case 18: waktoonyabro = `espero que tengas una linda noche 🌛`; break;
                case 19: waktoonyabro = `espero que tengas una linda noche 🌃`; break;
                case 20: waktoonyabro = `espero que tengas una linda noche 🌌`; break;
                case 21: waktoonyabro = `espero que tengas una linda noche 🌃`; break;
                case 22: waktoonyabro = `espero que tengas una linda noche 🌛`; break;
                case 23: waktoonyabro = `espero que tengas una linda noche 🌃`; break;
            }
            var YahahaHayyuk = "" + waktoonyabro;
//====================[ FIN DE SALUDO ]====================//

    //// --- Función de respuesta
			mess = {
				ferr: '❎ Error! \n🔍 Intentalo de nuevo mas tarde',
				
				error: {
					link: '❎ Link invalido, corríjalo e intente de nuevo'
				}
			}

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };

 //---- 𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔----
    const reply = (teks) => {
      Fg.sendMessage(from, teks, text, { quoted: mek });
    };
    
    const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `GATY-BOT`,
                 "h": `Hola ${pushname}`,
                 'duration': '99999', 
                 'caption': `Hola ${pushname}`,
                 'jpegThumbnail': gatylogo
                        }
                       }
	                  }
    
 //---respuesta con thumbnail
const replyfg = (teks) => {
Fg.sendMessage(from, teks, text, {quoted:mek,thumbnail : false})
};
    const sendMess = (hehe, teks) => {
      Fg.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? Fg.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : Fg.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };
    
    //---- 𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗗𝗘 𝗥𝗘𝗦𝗣𝗨𝗘𝗦𝗧𝗔 𝗙𝗔𝗟𝗦𝗔 ----  
   //--fake estado
    const estadofake = (teks) => {
      Fg.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: `${pushname}`,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./image/fake.jpg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
   
    const fakethumb = (teks, yes) => {
      Fg.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./image/fake.jpg"),
        quoted: mek,
        caption: yes,
      });
    };
   
   
    //-- juego random números 
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
//-buy limit
const nebal = (angka) => {
return Math.floor(angka)
}

//>> sticker nombre
function addMetadata(packname, author) {	
	if (!packname) packname = 'gatybot'; if (!author) author = 'gatito';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./${name}.exif`)) return `./${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./${name}.exif`, buffer, (err) => {	
		return `./${name}.exif`	
	})
}

//=> Juego slot
const zootoy = ['🍊 : 🍉 : 🍐','🍒 : 🔔 : 🥑','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🥥 : 🍒 : 🍐','🔔 : 🍉 : 🍊','🍓 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍎 : 🍐','🍊 : 🥝 : 🍒','🍑 : 🔔 : 🍇','🍌 : 🥥 : 🔔','🍐 : 🥝 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🍍 : 🍇','🔔 : 🥥 : 🍇','🍊 : 🥑 : 🍐','🍒 : 🥝 : 🍊','🍇 : 🥥 : 🍐','🍊 : 🥑 : 🔔','🍉 : 🍒 : 🍓','🔔 : 🍒 : 🍊','🍑 : 🍋 : 🍉','🍐 : 🍒 : 🍋','🍎 : 🍐 : 🍎','🍊 : 🥥 : 🍓','🍑 : 🔔 : 🍑','🍌 : 🍒 : 🔔','🥝 : 🔔 : 🥝','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🍍 : 🔔 : 🍍','🥥 : 🍐 : 🥥']
const zotoy = ['🍓 : 🍒 : 🍐','🍎 : 🍎 : 🍎','🍒 : 🔔 : 🍊','🍇 : 🍒 : 🍐','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🥝','🔔 : 🍑 : 🥑','🔔 : 🍒 : 🥝','🍊 : 🍍 : 🔔','🥥 : 🍒 : 🥥','🍉 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🍍 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🥥','🍊 : 🍑 : 🍒','🍍 : 🍑 : 🥥','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🥑 : 🥑 : 🥑','🍉 : 🍉 : 🍉','🍓 : 🍓 : 🍓','🍍 : 🍍 : 🍍','🥝 : 🥝 : 🥝','🍑 : 🍑 : 🍑','🥥 : 🥥 : 🥥','🍋 : 🍋 : 🍋','🍐 : 🍐 : 🍐','🍌 : 🍌 : 🍌','🍒 : 🍒 : 🍒','🔔 : 🔔 : 🔔','🍊 : 🍊 : 🍊','🍊 : 🍉 : 🍐','🍒 : 🔔 : 🥑','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🥥 : 🍒 : 🍐','🔔 : 🍉 : 🍊','🍓 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍎 : 🍐','🍊 : 🥝 : 🍒','🍑 : 🔔 : 🍇','🍌 : 🥥 : 🔔','🍐 : 🥝 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🍍 : 🍇','🔔 : 🥥 : 🍇']
const zoootoy = ['🍊 : 🥑 : 🍐','🍒 : 🥝 : 🍊','🍇 : 🥥 : 🍐','🍊 : 🥑 : 🔔','🍉 : 🍒 : 🍓','🔔 : 🍒 : 🍊','🍑 : 🍋 : 🍉','🍐 : 🍒 : 🍋','🍎 : 🍐 : 🍎','🍊 : 🥥 : 🍓','🍑 : 🔔 : 🍑','🍌 : 🍒 : 🔔','🥝 : 🔔 : 🥝','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🍍 : 🔔 : 🍍','🥥 : 🍐 : 🥥','🍊 : 🍉 : 🍐','🍒 : 🔔 : 🥑','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🥥 : 🍒 : 🍐','🔔 : 🍉 : 🍊','🍓 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍎 : 🍐','🍊 : 🥝 : 🍒','🍑 : 🔔 : 🍇','🍌 : 🥥 : 🔔','🍐 : 🥝 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🍍 : 🍇','🔔 : 🥥 : 🍇']

const loli = [
  "https://wallpapercave.com/wp/wp4034195.jpg",
  "https://wallpapercave.com/wp/wp5384968.jpg",
  "https://wallpapercave.com/wp/wp2263080.jpg",
  "https://wallpapercave.com/wp/wp5114719.jpg",
  "https://wallpapercave.com/wp/wp2263081.jpg",
  "https://wallpapercave.com/wp/wp5610986.jpg",
  "https://wallpapercave.com/wp/wp5286580.jpg",
  "https://wallpapercave.com/wp/wp4747958.jpg",
  "https://wallpapercave.com/wp/wp5114766.jpg",
  "https://wallpapercave.com/wp/wp5683632.jpg",
  "https://wallpapercave.com/wp/wp5580868.jpg",
  "https://wallpapercave.com/wp/wp5286597.jpg",
  "https://wallpapercave.com/wp/wp5683640.jpg",
  "https://wallpapercave.com/wp/wp5124558.jpg",
  "https://wallpapercave.com/wp/wp4355522.jpg",
  "https://wallpapercave.com/wp/wp5683647.png",
  "https://wallpapercave.com/wp/wp4249502.jpg",
  "https://wallpapercave.com/wp/wp5026790.jpg",
  "https://wallpapercave.com/wp/wp5683661.jpg",
  "https://wallpapercave.com/wp/wp5232987.jpg",
  "https://wallpapercave.com/wp/wp5683667.jpg",
  "https://wallpapercave.com/wp/wp5683683.jpg",
  "https://wallpapercave.com/wp/wp4747930.png",
  "https://wallpapercave.com/wp/wp5125663.jpg",
  "https://wallpapercave.com/wp/wp5683685.jpg",
  "https://wallpapercave.com/wp/wp5683695.jpg",
  "https://wallpapercave.com/wp/wp4890455.jpg",
  "https://wallpapercave.com/wp/wp5683712.jpg",
  "https://wallpapercave.com/wp/wp5683714.jpg",
  "https://wallpapercave.com/wp/wp5683717.png",
  "https://wallpapercave.com/wp/wp5683723.jpg",
  "https://c4.wallpaperflare.com/wallpaper/764/1023/645/genshin-impact-paimon-loli-space-stars-hd-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/630/703/783/platelet-chan-hataraku-saibou-anime-girls-children-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/531/363/687/256864-bed-blue-blush-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/790/546/428/anime-anime-girls-kafuu-chino-gochuumon-wa-usagi-desu-ka-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/909/509/121/loli-anime-anime-girls-kafuu-chino-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/546/973/206/chie-sayama-komako-semenovich-loli-sleeping-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/57/539/710/joukamachi-no-dandelion-anime-anime-girls-loli-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/982/106/560/boku-wa-tomodachi-ga-sukunai-hasegawa-kobato-heterochromia-hair-bows-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/601/178/378/eromanga-sensei-anime-girls-izumi-sagiri-loli-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/691/363/600/kiitarou-shounen-no-youkai-enikki-anime-girls-yukimusume-loli-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/1012/863/677/anime-girls-lying-down-bed-stars-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/920/948/974/anime-anime-girls-white-skin-fan-art-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/528/896/848/monogatari-series-hachikuji-mayoi-anime-girls-loli-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/1017/161/89/sky-blue-eyes-grey-hair-loli-twintails-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/433/172/59/anime-anime-girls-show-by-rock-animal-ears-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/778/960/57/platelet-chan-hataraku-saibou-anime-girls-children-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/969/43/793/anime-anime-girls-gochuumon-wa-usagi-desu-ka-gochuumon-wa-usagi-desu-ka-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/475/753/161/school-uniform-neko-loli-animal-ears-backpacks-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/205/596/985/re-zero-starting-life-in-another-world-rem-loli-yukata-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/412/469/206/zutto-sukishite-takusan-sukishite-housa-serina-blue-eyes-blushing-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/18/89/160/anime-anime-girls-loli-white-skin-wallpaper-preview.jpg",
  "https://wallpaperaccess.com/full/6765507.jpg",
  "https://wallpaperaccess.com/full/5525299.jpg",
  "https://wallpaperaccess.com/full/540079.jpg",
  "https://wallpaperaccess.com/full/6155490.png",
  "https://wallpaperaccess.com/full/4306462.png",
  "https://wallpaperaccess.com/full/5410794.jpg",
  "https://wallpaperaccess.com/full/3457127.jpg",
  "https://wallpaperaccess.com/full/6765536.jpg",
  "https://www.wallpapermaiden.com/image/2021/08/11/haizakura-prima-doll-pink-hair-loli-traditional-clothes-microphone-anime-45564-resized.jpeg",
  "https://w.wallhaven.cc/full/ox/wallhaven-ox69kl.png",
  "https://w.wallhaven.cc/full/vg/wallhaven-vgd7wm.jpg",
  "https://w.wallhaven.cc/full/5w/wallhaven-5wjd97.png",
  "https://w.wallhaven.cc/full/57/wallhaven-575x38.jpg",
  "https://w.wallhaven.cc/full/73/wallhaven-73wlle.png",
  "https://w.wallhaven.cc/full/96/wallhaven-96vr2d.png",
    "https://i.pinimg.com/736x/cf/7d/74/cf7d741fecb5e2c6abe1b9b237b30b04.jpg",
    "https://i.pinimg.com/736x/b5/b2/62/b5b2620e392e74139487c209c3b03dc2.jpg",
    "https://i.pinimg.com/736x/b6/b4/0b/b6b40b6ae0e0123adc040d16d4b05348.jpg",
    "https://i.pinimg.com/originals/e3/30/66/e33066f3cdbddd7ba3e37d2d576e8b66.jpg",
    "https://i.pinimg.com/474x/7a/72/eb/7a72ebd743f1aa0df55965e6856d02c6.jpg",
    "https://i.pinimg.com/originals/9b/2d/65/9b2d652e8f9742d6e6767a5eb3424df6.png",
    "https://i.pinimg.com/originals/ee/c1/d8/eec1d883e44ef0a61d11fc6fe3c6d827.jpg",
    "https://i.pinimg.com/736x/d0/2f/49/d02f4926e0f7b32685fcce4203752532.jpg",
    "https://i.pinimg.com/564x/b4/3d/64/b43d641d0a624008996a01bf64f411d1.jpg",
    "https://i.pinimg.com/236x/a4/ad/52/a4ad52b80ea5538d0cc743c95ecca40f.jpg",
    "https://i.pinimg.com/originals/de/d4/61/ded461956b110d610f1190dcae5cd59f.jpg",
    "https://i.pinimg.com/564x/8e/5c/f0/8e5cf0a7026d0a8b2e94693d5bcf9321.jpg",
    "https://i.pinimg.com/originals/b5/02/bc/b502bc59d17ae464560202d1e000a11a.jpg",
    "https://i.pinimg.com/originals/49/6e/4b/496e4b7de7edaa6e03c45250f4f516fc.jpg",
    "https://i.pinimg.com/originals/4e/dd/43/4edd430da39fb3f969865fb377878879.jpg",
    "https://i.pinimg.com/originals/82/8c/5c/828c5c9543010265c82cb3e9a7e22539.jpg",
    "https://i.pinimg.com/236x/2d/87/0f/2d870ffe100b76810577f90fe8f4c121.jpg",
    "https://i.pinimg.com/564x/c7/9c/69/c79c6998a87196995b8370bc45344ffd.jpg",
    "https://i.pinimg.com/474x/ca/5f/70/ca5f708da44d1e5b74d604f91d2940b9.jpg",
    "https://i.pinimg.com/originals/3c/4f/fb/3c4ffbb99fda42f0cb0bd8a5a8407298.jpg",
    "https://i.pinimg.com/originals/c6/73/13/c67313758a2eda2cb063c419b20c4065.jpg",
    "https://i.pinimg.com/736x/37/74/13/3774139f776a42d59d28f56a783fa3dc.jpg",
    "https://i.pinimg.com/736x/b6/1e/2d/b61e2d7cdd166b63c0e0f29a90ccdca2.jpg",
    "https://i.pinimg.com/736x/c9/14/e6/c914e6d3e52c218348a2e0b9581a5d9a.jpg",
    "https://i.pinimg.com/originals/7d/cd/4e/7dcd4eedebe7da3d4e9567ede11439e8.jpg",
    "https://i.pinimg.com/736x/30/3a/db/303adb62a2e5fe179f698ff992520420.jpg",
    "https://i.pinimg.com/736x/db/86/c6/db86c635ac3ae10373ff460eea4ec7fe.jpg",
    "https://i.pinimg.com/564x/aa/d0/89/aad089b60695808ef7f3d86550907410.jpg",
    "https://i.pinimg.com/736x/d9/fb/a8/d9fba8e7ae331cbe83bd0dbb8697e15f.jpg",
    "https://i.pinimg.com/originals/05/58/b4/0558b44e6fb2afaaa22db18adcbc5f30.jpg",
    "https://i.pinimg.com/736x/97/5c/dd/975cdd87fe34a5832f07b8e17d5edd1d.jpg",
    "https://i.pinimg.com/originals/f0/46/e0/f046e0147179103d0d6c42bb0a77e8e6.png",
    "https://i.pinimg.com/originals/9a/76/8b/9a768b08d31d07e30db78ee24be8ea62.jpg",
    "https://i.pinimg.com/originals/42/ca/20/42ca20ce567b97ac89eec4e7ed79f1e1.png",
    "https://i.pinimg.com/236x/37/a7/33/37a7333ff01f4691a23fbaee1abffb58.jpg",
    "https://i.pinimg.com/736x/06/4a/7f/064a7ff14a04fd8bb624e075568213ba.jpg",
    "https://i.pinimg.com/originals/7c/a0/66/7ca0669c73078cad874e27e7e20e2d14.jpg",
    "https://i.pinimg.com/originals/6f/1b/3f/6f1b3fa3dcde574df7836d2e8a295a9f.jpg",
    "https://i.pinimg.com/originals/bd/43/d1/bd43d1beba3c9888707ca91d0ac8ed85.png",
    "https://i.pinimg.com/474x/62/65/a3/6265a32d6e32fcfd0231e1a1ada10016.jpg",
    "https://i.pinimg.com/originals/67/e0/87/67e0879eac574ea3290ecbde629adb37.jpg",
    "https://i.pinimg.com/originals/a5/bb/d5/a5bbd57f5b1b884f27aff0890de43216.jpg",
    "https://i.pinimg.com/564x/9a/36/94/9a3694a6bd14e2294706b619b7879d41.jpg",
    "https://i.pinimg.com/736x/f6/71/7d/f6717d0dffda72a01a51b8d437e05eba.jpg",
    "https://i.pinimg.com/originals/9f/4c/50/9f4c508e6ff5f7a6f790980239a18497.png",
    "https://i.pinimg.com/originals/1e/25/7f/1e257fd78c54bf3de6129d8ad38d39b6.png",
    "https://i.pinimg.com/originals/13/c5/77/13c57739ad0cdc60fc8ff065f00ee9aa.png",
    "https://i.pinimg.com/originals/c9/5e/03/c95e038b17d47a05289b1e951817fd04.jpg",
    "https://i.pinimg.com/originals/82/e3/59/82e359ea27b9acf90359f6a2234af06d.jpg",
    "https://i.pinimg.com/originals/8d/71/9d/8d719d260e8bb1ef1ac8c2db6f9ca301.jpg",
    "https://i.pinimg.com/736x/72/f4/eb/72f4eb5b28e89035c10007125d67e7c3.jpg",
    "https://i.pinimg.com/originals/b4/fe/35/b4fe35474c76728474d2ef6d92493a7e.jpg",
    "https://i.pinimg.com/originals/b3/1b/50/b31b50676592389319594e04ab1cc54a.jpg",
    "https://i.pinimg.com/originals/41/72/a3/4172a3f2212bd8fb33b12a39e1e5bcde.jpg",
    "https://i.pinimg.com/originals/15/53/e3/1553e31681b77be72dd4dfe34e7ef5ff.jpg",
    "https://i.pinimg.com/originals/4a/c6/64/4ac66497c0ef2ad7788be3042e45a418.jpg",
    "https://i.pinimg.com/originals/ab/ff/e7/abffe7475bab7d1a91d2f45742f7753b.jpg",
    "https://i.pinimg.com/474x/12/30/23/123023de1c90d7391356aa291226b3df.jpg",
    "https://i.pinimg.com/originals/a3/eb/51/a3eb51e91236feeb47b6a192bc501edc.jpg",
    "https://i.pinimg.com/originals/f0/7a/3e/f07a3e338ad35cad89254f81f430793a.jpg",
    "https://i.pinimg.com/originals/52/c9/d1/52c9d1662b9980ea5828c15c6f2f40bc.jpg",
    "https://i.pinimg.com/originals/e6/35/f0/e635f0a968870cfa1f61fe7c54294ebe.jpg",
    "https://i.pinimg.com/originals/e1/58/5b/e1585bda44f7c2f53651188438883eca.jpg",
    "https://i.pinimg.com/736x/07/1e/93/071e93d9e922000826e5b97c0125f3f3.jpg",
    "https://i.pinimg.com/originals/75/a6/6a/75a66aa75bbbc5943de0982b28ce3a7d.png",
    "https://i.pinimg.com/originals/81/c2/68/81c268fe66221cf4262b8596acce22bd.jpg",
    "https://i.pinimg.com/originals/b9/f8/8c/b9f88c6b29df1bb69704164f9a1f71f0.jpg",
    "https://i.pinimg.com/736x/bb/e4/9b/bbe49bc932cb327ebf32a4f09099a3f5.jpg",
    "https://i.pinimg.com/originals/82/3d/c5/823dc5924e67e90e2c18f9388667f83d.jpg",
    "https://i.pinimg.com/236x/75/d6/f4/75d6f4c8773e43d190597ce4fba88d08.jpg",
    "https://i.pinimg.com/236x/ef/46/6b/ef466bdbb29a3b441afeb795f2e54c9a.jpg",
    "https://i.pinimg.com/564x/8e/44/88/8e448838113866ee507bf57d4ebebedd.jpg",
    "https://i.pinimg.com/originals/1f/f8/d7/1ff8d799952c720cb7e78aa058ac41f7.jpg",
    "https://i.pinimg.com/originals/83/de/b7/83deb7d5108736a3703a21fbb574daa6.jpg",
    "https://i.pinimg.com/originals/6a/ae/04/6aae043bd88448a6302ae0322053faee.jpg",
    "https://i.pinimg.com/originals/4e/0b/62/4e0b62b3d42e3f2b4b021ebc60b12023.jpg",
    "https://i.pinimg.com/originals/e3/55/3c/e3553cde950d823a5862b301df9adc29.png",
    "https://i.pinimg.com/originals/53/a2/79/53a279fb4a12b715beee319a0c1343d6.png",
    "https://i.pinimg.com/originals/4a/3d/01/4a3d0165a5d1a1ef2577a09057377184.jpg",
    "https://i.pinimg.com/originals/df/aa/2c/dfaa2cb28ab4353732a2dfe2c20932eb.jpg",
    "https://i.pinimg.com/564x/2e/3a/6c/2e3a6cd9e819e888d38cf70d0a117dbf.jpg",
    "https://i.pinimg.com/originals/c4/32/7d/c4327df2c6d37f8426d93d352c48bd99.png",
    "https://i.pinimg.com/originals/54/35/d6/5435d61e1811e8ae1f364095c3eb32ad.jpg",
    "https://i.pinimg.com/736x/42/2d/05/422d05e07268257dbf0602f8417a16a1.jpg",
    "https://i.pinimg.com/236x/f3/05/ce/f305ce7aa1e8622cb6634dea461a278a.jpg",
    "https://i.pinimg.com/originals/e3/49/94/e34994b4aeec15a025cf95b622e286f8.png",
    "https://i.pinimg.com/originals/30/1d/27/301d27cd014867f80c851877fa3a8bcc.jpg",
    "https://i.pinimg.com/originals/cf/bb/4a/cfbb4a669cadaab18b19f5522722f3cb.jpg",
    "https://i.pinimg.com/originals/cb/b2/0b/cbb20bf3a92499982daa0d1059d17790.jpg",
    "https://i.pinimg.com/474x/fe/aa/22/feaa22b7f776fc988fb4ccbf2c539549.jpg",
    "https://i.pinimg.com/originals/c9/ea/f7/c9eaf78967ed514f730e6d161b9ee1f9.png",
    "https://i.pinimg.com/736x/26/ba/79/26ba79102b971a2da11349d7fd84fdc1.jpg",
    "https://i.pinimg.com/736x/72/2c/9b/722c9bb59f65d1d3148f1b751c8ca7d5.jpg",
    "https://i.pinimg.com/736x/6c/f3/04/6cf3041ebf6a8f7e4836c98837ea9609.jpg",
    "https://i.pinimg.com/736x/86/80/77/8680778b298641c65d81dd0d1c0ee280.jpg",
    "https://i.pinimg.com/originals/25/24/22/2524225fc756bc17f98f26d50ef342fa.jpg",
    "https://i.pinimg.com/280x280_RS/dc/6e/53/dc6e53b48dd3de659bd43257056147a6.jpg",
    "https://i.pinimg.com/736x/73/e0/fb/73e0fb7a2f1ab8a7216f076da3574d0f.jpg",
    "https://i.pinimg.com/originals/d7/a4/ac/d7a4ac159dfac1fa0ac5b0d9114a025a.jpg",
    "https://i.pinimg.com/originals/cd/ef/fc/cdeffc0bf155fe2c8c63561b437c6864.jpg"
]
 
 const waifu = [
   "https://www.peakpx.com/es/hd-wallpaper-desktop-gosdk",
   "https://w0.peakpx.com/wallpaper/672/539/HD-wallpaper-sakurajima-mai-anime-cool-kawai-mai-otaku-sakurajima-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/467/481/HD-wallpaper-brunhilde-goll-shuumatsu-no-valkyrie-waifu-gods-anime-aesthetic-record-of-ragnarok.jpg",
   "https://cutewallpaper.org/22/anime-waifus-wallpapers/465520885.jpg",
   "https://image.winudf.com/v2/image1/Y29tLkFtcmFuem9lbFN0dWRpby5XYWxscGFwZXJXYWlmdWFuaW1lX3NjcmVlbl81XzE1NjE4MDAxODJfMDYz/screen-5.jpg?fakeurl=1&type=.jpg",
   "https://w0.peakpx.com/wallpaper/1023/114/HD-wallpaper-waifu-anime-girl-manga.jpg",
   "https://w0.peakpx.com/wallpaper/667/927/HD-wallpaper-secret-class-anime-manwha-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/262/414/HD-wallpaper-rotania-illusion-connect-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/631/203/HD-wallpaper-sinon-sao-shino-asada-xaons-waifu-sword-art-online-kirito-asuna-anime.jpg",
   "https://w0.peakpx.com/wallpaper/193/385/HD-wallpaper-nero-claudius-bride-anime-fate-fate-go-fate-grand-order-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/87/459/HD-wallpaper-darling-in-franxx-02-02-anime-darling-darling-in-the-franxx-girl-kawaii-waifu-zero-two.jpg",
   "https://w0.peakpx.com/wallpaper/311/273/HD-wallpaper-lisa-genshin-impact-genshin-impact-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/10/453/HD-wallpaper-tsukasa-anime-girl-beautiful-cute-kawaii-realistic-tonikaku-tonikaku-kawaii-tonikawa-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/491/545/HD-wallpaper-power-%E3%83%91%E3%83%AF%E3%83%BC-aesthetic-facial-expression-pink-city-girl-makima-waifu-chainsaw-shonem-chainsawman-denji-aki-anime.jpg",
   "https://w0.peakpx.com/wallpaper/467/788/HD-wallpaper-anime-power-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/17/659/HD-wallpaper-komi-san-cosplaytifa-best-waifu-komi-san.jpg",
   "https://w0.peakpx.com/wallpaper/69/1000/HD-wallpaper-mei-mei-aesthetic-anime-crows-gojosatoru-jjk-jujutsukaisen-meimei-nanami-uiui-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/743/370/HD-wallpaper-violet-evergarden-waifu-relax-chill-anime-hermosa.jpg",
   "https://w0.peakpx.com/wallpaper/171/679/HD-wallpaper-rem-anime-azul-emilia-ramchi-re-re-zero-subaru-waifu-zero.jpg",
   "https://w0.peakpx.com/wallpaper/371/983/HD-wallpaper-yuna-kuma-bear-shoujo-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/18/467/HD-wallpaper-long-live-ayame-adorable-anime-girl-cute-demon-hololive-nakiri-ayame-vtuber-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/347/671/HD-wallpaper-a-silent-voice-anime-girl-koe-no-katachi-random-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/846/1006/HD-wallpaper-katawa-shoujo-anime-girls-shizune-hakamichi.jpg",
   "https://w0.peakpx.com/wallpaper/27/604/HD-wallpaper-astolfospecialforce-anime-astolfo-fate-special-force-trap-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/678/87/HD-wallpaper-rin-tohsaka-red-fate-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/688/25/HD-wallpaper-genshin-impact-angel-anime-game-girl-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/132/107/HD-wallpaper-player-anime-gamer-gamers-nintendo-swicht-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/366/827/HD-wallpaper-cat-girl-waifu-kawaii.jpg",
   "https://w0.peakpx.com/wallpaper/634/859/HD-wallpaper-sucrose-alchemist-anime-genshin-impact-green-mihoyo-nature-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/648/97/HD-wallpaper-kanade-angel-beats-tenshi-anime-girl-angel-tachibana-kanade-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/433/38/HD-wallpaper-jibril-anime-girl-no-game-no-life-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/500/61/HD-wallpaper-girl-anime-waifu-beautiful-red-hair-princess-pony.jpg",
   "https://w0.peakpx.com/wallpaper/401/671/HD-wallpaper-ulti-wano-anime-waifu-one-piece-manga-onigashima.jpg",
   "https://w0.peakpx.com/wallpaper/298/253/HD-wallpaper-overlord-narberal-anime-doe-gamer-games-girl-nabe-narberal-gamma-overlord-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/293/790/HD-wallpaper-nezuko-anime-demon-demon-slayer-girl-kimetsu-kimetsu-no-yaiba-slayer-sugar-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/892/227/HD-wallpaper-jiro-kyoka-hero-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/318/972/HD-wallpaper-nice-dream-anime-girl-lazy-night-sky-star-stars-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/807/910/HD-wallpaper-kei-yonagi-act-age-anime-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/734/992/HD-wallpaper-azur-lane-anime-anime-games-anime-girl-black-clothes-cute-gray-hair-lines-suit-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/213/695/HD-wallpaper-waifu-high-love-school.jpg",
   "https://w0.peakpx.com/wallpaper/305/212/HD-wallpaper-sayu-anime-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/775/402/HD-wallpaper-nao-tomori-charlotte-xaons-waifu-yuu-otosaka-waifus-anime.jpg",
   "https://w0.peakpx.com/wallpaper/790/535/HD-wallpaper-blue-hair-waifu-naruto-week-demon-slayer-kawaii-jujutsu-kaisen-anime-wifus-one-piece-anime.jpg",
   "https://w0.peakpx.com/wallpaper/840/798/HD-wallpaper-kaguya-sama-anime-beautiful-cute-girl-peaceful-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/63/363/HD-wallpaper-re-zero-ram-pink-anime-girl-green-school-girl-re-zero-knee-%E3%83%A9%E3%83%A0-japanese-waifu-waifus-anime.jpg",
   "https://w0.peakpx.com/wallpaper/681/725/HD-wallpaper-sumi-aesthetic-anime-beach-edit-girl-girlfriend-love-rent-a-girlfriend-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/872/434/HD-wallpaper-chuunibyou-anime-beatiful-girl-random-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/517/413/HD-wallpaper-konosuba-anime-art-fantasy-fire-girl-random-rory-waifu-woman.jpg",
   "https://w0.peakpx.com/wallpaper/130/212/HD-wallpaper-celina-%E2%9D%A4%EF%B8%8F%E2%9D%A4%EF%B8%8F-games-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/311/628/HD-wallpaper-motto-love-ru-anime-art-beatiful-girl-random-waifu-yellow.jpg",
   "https://w0.peakpx.com/wallpaper/646/686/HD-wallpaper-miyamoto-musashi-fate-samurai-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/708/337/HD-wallpaper-mirai-nikki-anime-art-asasins-girl-nikki-pink-random-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/298/629/HD-wallpaper-byleth-byleth-fire-emblem-nintendo-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/406/983/HD-wallpaper-bowsette-girl-nintendo-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/1012/633/HD-wallpaper-sunflower-neko-chan-anime-artwork-cat-flowers-girl-peaceful-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/522/65/HD-wallpaper-azur-lane-admiral-graf-spee-anime-anime-girl-cute-military-uniform-waifu-white-hair.jpg",
   "https://w0.peakpx.com/wallpaper/586/636/HD-wallpaper-fate-tohsaka-rin-thighs-pantyhose-icon-animegirl-cute-red-waifu-ishtar-fategrandorder-profile-animedrawing-aestethic-fanart-fatestaynight-portrait-doodle-girlfriend-fateseries-tohsakarin.jpg",
   "https://w0.peakpx.com/wallpaper/188/540/HD-wallpaper-more-gawr-gura-anime-anime-girl-gawr-gura-hololive-idol-shark-vtuber-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/134/71/HD-wallpaper-ninomae-inanis-anime-girl-cute-hololive-hololive-english-ninomae-vtuber-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/175/272/HD-wallpaper-fischl-aesthetic-anime-genshin-genshin-impact-impact-japanese-mihoyo-purple-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/406/122/HD-wallpaper-anime-waifu-naruto-babes-demon-slayer-kawaii-jujutsu-kaisen-anime-one-piece.jpg",
   "https://w0.peakpx.com/wallpaper/693/271/HD-wallpaper-tenki-no-ko-anime-art-beatiful-fantasy-girl-random-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/229/478/HD-wallpaper-asuna-anime-girl-sao-sword-art-online-swordartonline-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/883/129/HD-wallpaper-skarlet-mk11-blood-waifu-mortal-kombat-11.jpg",
   "https://w0.peakpx.com/wallpaper/132/862/HD-wallpaper-uruha-rushia-draw-hololive-vtuber-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/749/604/HD-wallpaper-noelle-genshin-cute-genshin-impact-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/176/721/HD-wallpaper-fubuki-one-punch-man-magenta-anime-girl-cool-saitama-opm-android-genos-fashion-design-tatsumaki-waifu-anime.jpg",
   "https://w0.peakpx.com/wallpaper/470/663/HD-wallpaper-waifu-anime-girl.jpg",
   "https://w0.peakpx.com/wallpaper/368/455/HD-wallpaper-anime-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/716/482/HD-wallpaper-anti-covid-19-team-anime-coronavirus-covid19-girl-virus-waifu.jpg",
   "https://w0.peakpx.com/wallpaper/192/210/HD-wallpaper-mushashi-fate-waifu-women.jpg",
   "https://w0.peakpx.com/wallpaper/802/413/HD-wallpaper-panda-waifu.jpg",
   "https://wallpapercave.com/wp/wp5039243.jpg",
   "https://wallpapercave.com/wp/wp5924546.jpg",
   "https://wallpapercave.com/wp/wp5924548.jpg",
   "https://wallpapercave.com/wp/wp5924549.jpg",
   "https://wallpapercave.com/wp/wp3394023.jpg",
   "https://wallpapercave.com/wp/wp5924677.jpg",
   "https://wallpaperaccess.com/full/2061.png",
   "https://c4.wallpaperflare.com/wallpaper/334/903/651/anime-anime-girls-waifu2x-5-toubun-no-hanayome-nakano-nino-hd-wallpaper-preview.jpg",
   "https://c4.wallpaperflare.com/wallpaper/962/680/30/anime-anime-girls-waifu2x-kaguya-sama-love-is-war-hayasaka-ai-hd-wallpaper-preview.jpg",
   "https://c4.wallpaperflare.com/wallpaper/213/955/637/anime-anime-girls-5-toubun-no-hanayome-nakano-miku-waifu2x-hd-wallpaper-preview.jpg",
        "https://i.pinimg.com/736x/c3/53/d5/c353d5b69271d572a1b1bec8ff50f4b2.jpg",
        "https://i.pinimg.com/736x/40/28/4c/40284c46155cb812372e9895066b1b28.jpg",
        "https://i.pinimg.com/736x/52/c2/53/52c253338492f7b6185637378fefd2a1.jpg",
        "https://i.pinimg.com/736x/44/ed/fd/44edfde351c836c760f7db7fa75bf77c.jpg",
        "https://i.pinimg.com/736x/eb/72/de/eb72de9117538e2bf445a6130030abe9.jpg",
        "https://i.pinimg.com/originals/53/2f/f8/532ff81b4f3bc92c8db823f2cea3d7a6.jpg",
        "https://i.pinimg.com/originals/91/5e/47/915e47e83801b992ff66d92dc8cc1244.jpg",
        "https://i.pinimg.com/originals/41/2e/f3/412ef39c4244861c287675498a9c6296.png",
        "https://i.pinimg.com/236x/85/65/a5/8565a5a34f0bec9e6c791ed927673374.jpg",
        "https://i.pinimg.com/originals/89/68/6e/89686edeb4316f53832e00ea7980cf01.jpg",
        "https://i.pinimg.com/736x/cd/53/b0/cd53b02aec22e034be15c42d81fea760.jpg",
        "https://i.pinimg.com/474x/4e/62/50/4e6250d42f22d2ef37181c7ba8caf9c7.jpg",
        "https://i.pinimg.com/736x/d4/66/47/d466476d52f5db16f042cc660eefb66d.jpg",
        "https://i.pinimg.com/736x/f6/16/7f/f6167f6a8cfb2e8471bb71ccb6983ef1.jpg",
        "https://i.pinimg.com/736x/0d/30/ef/0d30efe3b9ba40cf6ebb67b03d27c3dc.jpg",
        "https://i.pinimg.com/originals/23/8d/3a/238d3abe793fcdd198efd85308f1bce9.jpg",
        "https://i.pinimg.com/originals/74/35/b1/7435b1c713e956dd946c6721e19e6e14.jpg",
        "https://i.pinimg.com/564x/c4/cf/10/c4cf101520d8fe3329dbef541e75b69a.jpg",
        "https://i.pinimg.com/originals/e6/96/63/e69663c0f775438826c62e02c8b8eac8.jpg",
        "https://i.pinimg.com/originals/15/d1/c5/15d1c53899bafb2fd4b06b66bb6deb50.jpg",
        "https://i.pinimg.com/originals/8f/31/17/8f31178899d16701c0764cda76430433.png",
        "https://i.pinimg.com/originals/1d/a6/1a/1da61a5df4a31dd394758b035b17320e.jpg",
        "https://i.pinimg.com/736x/43/88/c8/4388c8f657e25e192b65dab3dea1818b.jpg",
        "https://i.pinimg.com/originals/42/e2/2c/42e22c72db81ff2c2900badfea2aaad1.jpg",
        "https://i.pinimg.com/originals/b6/03/80/b6038086c1c26c47f84c1f73851e74b2.jpg",
        "https://i.pinimg.com/736x/15/d9/f6/15d9f667d54648b378704e0db83d00cf.jpg",
        "https://i.pinimg.com/736x/3c/53/3e/3c533ee5fd2eb2bc09bf22537f41f340.jpg",
        "https://i.pinimg.com/originals/b6/32/dd/b632dd5f206d8295e4dfdac93411e75c.jpg",
        "https://i.pinimg.com/originals/a4/f2/ce/a4f2cec43267f37efd7cca541385d706.jpg",
        "https://i.pinimg.com/564x/8c/b8/c6/8cb8c6f4ccf92a35b0afe18484233106.jpg",
        "https://i.pinimg.com/736x/e8/78/42/e87842875dda5f9ff0aea490bd95088a.jpg",
        "https://i.pinimg.com/736x/d6/e5/9d/d6e59dae68d18854a857371ba2dc1ddd.jpg",
        "https://i.pinimg.com/236x/e0/0a/85/e00a85d7e42f81b5ab0caea47bbb827a.jpg",
        "https://i.pinimg.com/originals/ce/4f/4b/ce4f4b7635e8c8ab5c8db2911edd4249.jpg",
        "https://i.pinimg.com/originals/54/2a/01/542a017e6b4b677bc5d79f5bb8943476.jpg",
        "https://i.pinimg.com/originals/b5/7d/54/b57d54e40df741ddd37adbb0de41e004.jpg",
        "https://i.pinimg.com/originals/12/e5/35/12e535a4c8da2694f22809eb456886e9.png",
        "https://i.pinimg.com/originals/eb/74/1b/eb741b162e3255172bac9f19fa40d06c.jpg",
        "https://i.pinimg.com/736x/40/99/45/409945e40138e0ce9aca128adf8b39e4.jpg",
        "https://i.pinimg.com/564x/08/c7/2d/08c72d8d6153277e0c2fada59a42c1cb.jpg",
        "https://i.pinimg.com/736x/72/c9/39/72c9391de6204ab7d6020aed0722bd0d.jpg",
        "https://i.pinimg.com/originals/d6/b9/34/d6b934119056594f17a94192110cdbd8.jpg",
        "https://i.pinimg.com/originals/46/79/25/467925d52634fd098ab6890a23c33f30.jpg",
        "https://i.pinimg.com/736x/44/62/a3/4462a3cf3792a8cf12587fd7875d75bc.jpg",
        "https://i.pinimg.com/474x/bf/c4/d2/bfc4d2286865a6a20cd0c16c702e04af.jpg",
        "https://i.pinimg.com/736x/c1/a3/07/c1a30773b80a709e5a73350286447502.jpg",
        "https://i.pinimg.com/originals/44/4b/9b/444b9b8136ba26466b75136ef5d684cb.jpg",
        "https://i.pinimg.com/originals/79/ac/74/79ac742105acb071fac7eacbb2ff1e14.jpg",
        "https://i.pinimg.com/originals/c9/71/fd/c971fd4936c93b8343691952a88e3199.jpg",
        "https://i.pinimg.com/236x/8c/5a/8f/8c5a8f2112aac44c45de13f6ae86704f.jpg",
        "https://i.pinimg.com/originals/1b/f2/c5/1bf2c59a4b5c977ee61d0b5739da8a84.jpg",
        "https://i.pinimg.com/originals/42/2b/bf/422bbfbaaeb2d5b62ece67206cdb1ae5.jpg",
        "https://i.pinimg.com/474x/ee/47/d9/ee47d90d165a1985a6f1e95936aee4e2.jpg",
        "https://i.pinimg.com/originals/fa/ad/b0/faadb0977c90790eb72f051e4966059c.jpg",
        "https://i.pinimg.com/originals/dc/e9/f9/dce9f9beb37722c1d4c460065a37e252.jpg",
        "https://i.pinimg.com/originals/94/bd/e9/94bde9abb7f5d25ae7f1548b65c2869e.jpg",
        "https://i.pinimg.com/originals/04/eb/2f/04eb2f337389bf0b1247fb31aff9f93f.jpg",
        "https://i.pinimg.com/originals/bf/18/b3/bf18b3f21c536f3d4f442002c2f74684.jpg",
        "https://i.pinimg.com/originals/da/1c/ac/da1cac1d1cc919ec4362b6dac5bb539d.jpg",
        "https://i.pinimg.com/originals/6c/8d/19/6c8d196474794342a5b07ff57a78fecb.jpg",
        "https://i.pinimg.com/736x/fd/39/80/fd398084130bcfd15f1d1164bf4abb19.jpg",
        "https://i.pinimg.com/736x/ba/81/8b/ba818b7b031bc2c0031f29038ce49947.jpg",
        "https://i.pinimg.com/originals/6d/6e/45/6d6e45825121046f929e26fe02b828f3.jpg",
        "https://i.pinimg.com/736x/86/c8/5d/86c85d469d2b0d10f96dafcd76bc6915.jpg",
        "https://i.pinimg.com/originals/f0/49/5c/f0495c7f50d78e28e31645d8adc38603.jpg",
        "https://i.pinimg.com/originals/9a/fa/d1/9afad13f18ada18954231ee93708040b.jpg",
        "https://i.pinimg.com/736x/c2/21/1f/c2211fa07896c211f8f345df09959591.jpg",
        "https://i.pinimg.com/originals/27/ca/b1/27cab176e51f16f4513c0e139c52a401.png",
        "https://i.pinimg.com/originals/b3/6e/84/b36e84613cc59a7b5c5e280ce7a91502.jpg",
        "https://i.pinimg.com/originals/a7/52/84/a75284bb38036502ea6638d5ae2a3dd2.jpg",
        "https://i.pinimg.com/originals/e6/e3/87/e6e3876124a051597fd113a3f3308941.png",
        "https://i.pinimg.com/564x/15/29/ce/1529ce3e7b0301af49d80e2af0028385.jpg",
        "https://i.pinimg.com/originals/b2/33/68/b233685b5910013a24d7a970ee77fa03.jpg",
        "https://i.pinimg.com/236x/39/7b/cb/397bcbf7d8b2e77eab68f3a9022bddef.jpg",
        "https://i.pinimg.com/564x/5f/da/45/5fda45eb93f281ec982267f88eeaf90c.jpg",
        "https://i.pinimg.com/736x/a3/75/c3/a375c3877c5e9ac2c431d496551cbd40.jpg",
        "https://i.pinimg.com/originals/e2/e5/b7/e2e5b7f0eddf1dfaab585c4373a78ff5.jpg",
        "https://i.pinimg.com/originals/9c/ec/9b/9cec9b35d2001bf571afdb8f59752fdf.jpg",
        "https://i.pinimg.com/originals/89/08/a9/8908a93add420e241916092415bbe75a.png",
        "https://i.pinimg.com/736x/b3/9d/c6/b39dc6c0d4e8bcefd9b45414680af57f.jpg",
        "https://i.pinimg.com/originals/05/cb/c4/05cbc42b3a81f63377abf978cf6c03f3.jpg",
        "https://i.pinimg.com/originals/63/8f/70/638f70ce3de17589a9f3dc163e30d7b1.jpg",
        "https://i.pinimg.com/originals/3b/f3/e2/3bf3e24281dbeefd964ec56b63f3b079.jpg",
        "https://i.pinimg.com/originals/a9/94/fb/a994fbc39e15f70a78ea462a851f149f.jpg",
        "https://i.pinimg.com/originals/94/41/d0/9441d0191fe1a1adc663f53acd1149cb.jpg",
        "https://i.pinimg.com/originals/63/ed/bf/63edbf309339c3aac5a33b62d5b8a0a2.jpg",
        "https://i.pinimg.com/564x/71/c4/01/71c40151a067cfd1682969e4a8e47eb6.jpg",
        "https://i.pinimg.com/736x/a9/67/96/a967962e02779b95f1464861cb53076e.jpg",
        "https://i.pinimg.com/736x/53/62/da/5362da49580e1b4c6225144c7deb2dd0.jpg",
        "https://i.pinimg.com/736x/3f/69/97/3f6997166bc2fa89d05779cb2cbc7a8d.jpg",
        "https://i.pinimg.com/564x/4a/ec/f8/4aecf8ac4d14e7fd3118c58082c01a1c.jpg",
        "https://i.pinimg.com/236x/28/2f/81/282f81f5de984104a9227583b39df527.jpg",
        "https://i.pinimg.com/originals/27/41/11/27411120fcee8e125cef86280d58c80d.jpg",
        "https://i.pinimg.com/736x/59/19/35/591935f55e03142fcf1a3fe1a49e63d6--anime-kimono-kawaii-anime.jpg",
        "https://i.pinimg.com/originals/ec/c5/8b/ecc58b5b8c4883c5ef8b8f253b4768c2.png",
        "https://i.pinimg.com/originals/f9/75/66/f975668faecfdae1ab019dd6d5681b51.jpg",
        "https://i.pinimg.com/originals/64/61/2b/64612be0159860b88f280e7081770f3c.jpg",
        "https://i.pinimg.com/736x/8d/73/c3/8d73c37ac839b53d1994995ccfa634aa.jpg",
        "https://i.pinimg.com/originals/60/c4/62/60c462a2f5b991cbce026b09fab25769.jpg",
        "https://i.pinimg.com/originals/e7/3a/2a/e73a2a1325458dca54350c75598f68d0.jpg",
        "https://i.pinimg.com/736x/10/85/31/1085317f6e01744da22de9077ea68af3.jpg",
        "https://i.pinimg.com/originals/36/b2/7b/36b27beb4433279a44b93769c4f02a2d.jpg",
        "https://i.pinimg.com/originals/8f/10/a4/8f10a4730033aaf94a2504139e277daf.jpg",
        "https://i.pinimg.com/474x/b9/44/7e/b9447e911a91d837b787b368138f4d12.jpg",
        "https://i.pinimg.com/originals/8d/f2/85/8df28530ca82c87170f951c7b24149b8.jpg",
        "https://i.pinimg.com/originals/15/9f/51/159f51a34ffbe8052e903656e714a512.jpg",
        "https://i.pinimg.com/originals/f9/2b/71/f92b716bc5959bf76284c8289cdcfe9a.png",
        "https://i.pinimg.com/originals/6d/cc/62/6dcc6290532e1988e991f3f2e1374b0f.jpg",
        "https://i.pinimg.com/originals/73/b9/f0/73b9f0f9c77224472befd458ed5edffd.png",
        "https://i.pinimg.com/originals/36/4b/90/364b905f23b86dbdc4e8cfc1d17d37b5.jpg",
        "https://i.pinimg.com/736x/b3/30/b8/b330b852952404650fb95514e64ee214.jpg",
        "https://i.pinimg.com/originals/36/7e/be/367ebec29f313aa9ff4a118741f37b6d.jpg",
        "https://i.pinimg.com/736x/50/20/cb/5020cbac8e84fda0b8b7b6d97b76415f.jpg",
        "https://i.pinimg.com/originals/fb/e0/15/fbe0152aec760539d96acd91ad28c345.png",
        "https://i.pinimg.com/originals/5e/7b/eb/5e7beb883bc07319921dfbca6d4d6dfa.jpg",
        "https://i.pinimg.com/736x/0d/e9/d8/0de9d89ec8f5b64a44b80cf9ac009713.jpg",
        "https://i.pinimg.com/originals/91/5d/b7/915db7bdf6de7b154b947c701f353da4.png",
        "https://i.pinimg.com/originals/d0/83/81/d0838135c082f0906032fbf02d6084d5.png",
        "https://i.pinimg.com/originals/98/75/37/98753784596979d39d00d92e120ddb8c.jpg",
        "https://i.pinimg.com/originals/42/ff/74/42ff7423988923098a5ff9f7a470e9f4.png",
        "https://i.pinimg.com/originals/bb/c3/42/bbc3425bd25ab8b4d9da0471e4a902c5.jpg",
        "https://i.pinimg.com/736x/92/d3/cb/92d3cb181a6dc6e654854c0a637ccba1.jpg",
        "https://i.pinimg.com/originals/d1/01/3d/d1013d31a1aeab172bd9c02404ad4065.jpg",
        "https://i.pinimg.com/736x/4b/45/63/4b456311f3d56ae388ea5851eafee7bb.jpg",
        "https://i.pinimg.com/originals/70/06/92/70069213d0f54a4409a3d5176268e712.jpg",
        "https://i.pinimg.com/736x/de/9d/23/de9d23a68466f911290dba5e37db7e72.jpg",
        "https://i.pinimg.com/736x/96/ef/ad/96efad6db9cdeeb107eca1c6a9e943cf.jpg",
        "https://i.pinimg.com/originals/c3/02/b1/c302b10840b3521f732b113cfff67b6f.png",
        "https://i.pinimg.com/originals/3d/ee/a7/3deea7238ac7ae18c30763ee95545b5d.jpg",
        "https://i.pinimg.com/originals/ea/40/bb/ea40bb01b91dd575e409af0c95befeb1.jpg",
        "https://i.pinimg.com/originals/e0/bf/15/e0bf15b0696753b4c3724d06f58af313.png",
        "https://i.pinimg.com/originals/05/4f/df/054fdfbc2045fd65876c2dc0934e6547.png",
        "https://i.pinimg.com/originals/be/24/3b/be243b5b9238c63679ea69feb8c67856.jpg",
        "https://i.pinimg.com/originals/1a/e4/de/1ae4defe9ed245a145aeb65591ba3967.jpg",
        "https://i.pinimg.com/236x/7a/d8/7a/7ad87a4eb06bdabd9065045c36d2b329.jpg",
        "https://i.pinimg.com/originals/ac/b2/6c/acb26c516d6681e922f6aeb3f3848d2f.jpg",
        "https://i.pinimg.com/originals/f3/fe/61/f3fe619cd29b07f0a8f8b213f2005bba.jpg",
        "https://i.pinimg.com/originals/a0/9b/86/a09b864c3234ea0c6c420187e4c0a721.jpg",
        "https://i.pinimg.com/736x/93/30/b7/9330b732e09e0201509f2728f81c61f0.jpg",
        "https://i.pinimg.com/474x/31/f5/5b/31f55bd574c5262b830ec9f5c442675a.jpg",
        "https://i.pinimg.com/originals/67/09/ee/6709ee13ea60b70d1aaaac9f2060c8b8.jpg",
        "https://i.pinimg.com/originals/66/60/c9/6660c99808c9ebb40fbab1e0c82bb3c9.jpg",
        "https://i.pinimg.com/originals/f8/fe/ce/f8fece5a97db23cfdb4862cd77ed60ba.jpg",
        "https://i.pinimg.com/originals/68/46/14/6846147ae61c96a2c866c6d64b02dd4c.jpg",
        "https://i.pinimg.com/originals/57/29/0f/57290f004bc38e6c0236ce2449504038.jpg",
        "https://i.pinimg.com/originals/4e/3e/fe/4e3efe1e994eb425465937b493ebcace.jpg",
        "https://i.pinimg.com/originals/0e/c9/a4/0ec9a4023e11a63f1443565b51162d51.jpg",
        "https://i.pinimg.com/originals/a3/de/f2/a3def24de57de9c335889bdaf1e38675.jpg",
        "https://i.pinimg.com/originals/e2/f6/0b/e2f60bd206f7ae4c337e4d4b8fec9dd4.jpg",
        "https://i.pinimg.com/736x/de/cf/60/decf60580d3ce62a35e1e53614cbaaea.jpg",
        "https://i.pinimg.com/originals/4e/08/ec/4e08ecba60a4e2fea2c8b7e2e537c596.jpg",
        "https://i.pinimg.com/originals/02/28/98/0228989655b4b78085b9eaf63f2de331.jpg",
        "https://i.pinimg.com/originals/cc/cc/89/cccc89172f7c17851dec4b97abde669f.png",
        "https://i.pinimg.com/564x/75/69/9f/75699f5ef9c294513d3a24393b09c978.jpg",
        "https://i.pinimg.com/originals/27/ed/88/27ed88ea911360f051060866451a14eb.jpg",
        "https://i.pinimg.com/originals/4f/bd/54/4fbd547a10ea9bfccde6e3f1e04fb9e7.png",
        "https://i.pinimg.com/originals/15/47/9b/15479bb3c033da49c26310682b370976.jpg",
        "https://i.pinimg.com/736x/e8/77/56/e87756dd6bcc2727b836876a0c784c7c.jpg",
        "https://i.pinimg.com/originals/39/bc/ab/39bcabbfff2647f37ad49df75d486aa1.png",
        "https://i.pinimg.com/originals/6a/39/8e/6a398e9554b6b438d208ea60f0f17e9a.jpg",
        "https://i.pinimg.com/736x/da/be/80/dabe804328738cd10c3f702937f0b393.jpg",
        "https://i.pinimg.com/originals/4e/5e/dc/4e5edc8963b81fb714e54c813a169fb7.jpg",
        "https://i.pinimg.com/originals/15/48/e0/1548e0fffaf2f582d5c6b4b7fe61dbb0.jpg",
        "https://i.pinimg.com/originals/fa/36/d9/fa36d966437565d96b555811f0a4481c.jpg",
        "https://i.pinimg.com/originals/b3/3c/4b/b33c4bcdcf147931a428b4474d64854d.png",
        "https://i.pinimg.com/originals/08/43/e7/0843e7ce782fc9f27151e3ab2e1734b9.png",
        "https://i.pinimg.com/originals/fd/08/09/fd08091dde0df47db1e7355f80ef144e.jpg",
        "https://i.pinimg.com/originals/52/bb/68/52bb687687bfa006bc71d145a7a885b2.jpg",
        "https://i.pinimg.com/originals/44/eb/3d/44eb3dbec735cbe328cdd8e2b37e1197.jpg",
        "https://i.pinimg.com/564x/7b/27/72/7b2772bc12777eba1b7af103f610f9d9.jpg",
        "https://i.pinimg.com/originals/f2/01/bd/f201bdd2532c7034cdc0e3a779ca5137.jpg",
        "https://i.pinimg.com/736x/41/2d/e7/412de7747b86518bd2b1fc0b69556bb5.jpg",
        "https://i.pinimg.com/originals/4c/3a/fe/4c3afe0c22d19c78f32c687aa9b4ea20.jpg",
        "https://i.pinimg.com/originals/62/74/c0/6274c0d42db0b928d6cec37d498c8f30.jpg",
        "https://i.pinimg.com/originals/91/0a/05/910a050858ead717bf0a85b4c91b13eb.jpg",
        "https://i.pinimg.com/originals/24/4e/35/244e35b1a55df0bc8651f45c98213a6d.jpg",
        "https://i.pinimg.com/originals/11/41/40/114140962dd288b85e72443b8b4fea2e.jpg",
        "https://i.pinimg.com/originals/dd/cb/d7/ddcbd7aa37278e177c3f8dce9b932d34.jpg",
        "https://i.pinimg.com/originals/30/42/bf/3042bf1d758e0e7575d3f52725e65011.png",
        "https://i.pinimg.com/originals/63/23/ea/6323eadeb278901c9a3012882efcb37c.png",
        "https://i.pinimg.com/originals/15/d0/66/15d06684c88d6158afcaf4a420ee3b30.jpg",
        "https://i.pinimg.com/originals/11/46/fd/1146fd486ada70d44ffc7ca295116229.jpg",
        "https://i.pinimg.com/originals/d0/76/10/d0761081beb385185d9124f52560dadf.jpg",
        "https://i.pinimg.com/originals/1f/c6/bf/1fc6bf6f3b3c9e78c288951b4a161c54.png",
        "https://i.pinimg.com/originals/62/ad/3d/62ad3d807771ee99b948040568f3e4c1.png",
        "https://i.pinimg.com/originals/b2/8e/52/b28e526c16bedca0954636718ff28fe7.png",
        "https://i.pinimg.com/originals/db/06/92/db069236209fd30b6020dfa6acef9f2f.jpg",
        "https://i.pinimg.com/originals/41/91/e0/4191e01d3a8596160980d6345647023d.jpg",
        "https://i.pinimg.com/originals/15/2e/d5/152ed5d86e61b7d5f8386bdbf628e9a0.png",
        "https://i.pinimg.com/originals/1b/d9/2d/1bd92d837d65cdda3e87dc240d531de6.jpg",
        "https://i.pinimg.com/originals/2f/b1/15/2fb115ddccb13b43a4b4c00cd3de2254.jpg",
        "https://i.pinimg.com/originals/6b/04/fe/6b04fe8af13392d5215e9793d79c5424.png",
        "https://i.pinimg.com/736x/26/7a/fc/267afcf2f421e84593c51cf88dd391ff.jpg",
        "https://i.pinimg.com/originals/05/3d/a8/053da85abb650f36fbd023f0f55a1b0b.jpg",
        "https://i.pinimg.com/originals/b9/e1/ed/b9e1edd56d8338f8def9ee6e9e32cb33.png",
        "https://i.pinimg.com/originals/c6/71/d6/c671d68d7ee45e7f7ec3dbd8b20fdd50.png",
        "https://i.pinimg.com/originals/fc/de/3c/fcde3c888c4680d97bd419586c8b8f69.png",
        "https://i.pinimg.com/originals/a2/26/54/a22654c645a7c0ab482983141d4c9e7f.jpg",
        "https://i.pinimg.com/originals/79/15/f1/7915f11c61fb6374b8aa20dfdba5257a.jpg",
        "https://i.pinimg.com/originals/41/23/f2/4123f28655aa4874a956d2ba0147e296.jpg",
        "https://i.pinimg.com/736x/b7/3a/96/b73a9642a5380c8941352022cfc07371.jpg",
        "https://i.pinimg.com/736x/05/6d/23/056d23fff769555983d3b72b97d13d1f.jpg",
        "https://i.pinimg.com/originals/4a/77/4a/4a774a04858fa8dc8a04a0dbc22af729.jpg",
        "https://i.pinimg.com/originals/50/38/98/503898e84962573df440773b224a9d04.jpg",
        "https://i.pinimg.com/originals/93/c6/fb/93c6fbaf62f8b797eea55f7ae79e356d.jpg",
        "https://i.pinimg.com/736x/44/ed/fd/44edfde351c836c760f7db7fa75bf77c.jpg",
        "https://i.pinimg.com/originals/80/a9/2d/80a92d9bf7123b4906158c5a63d94ff0.jpg",
        "https://i.pinimg.com/originals/d6/51/a8/d651a8546d44aa0f2ca16e7ec610ee25.jpg",
        "https://i.pinimg.com/564x/92/a6/e2/92a6e29533a70918bcc61abba55eadf5.jpg",
        "https://i.pinimg.com/474x/04/89/59/048959e47907e5622cc7ad9c8d54c965.jpg",
        "https://i.pinimg.com/736x/08/3e/9e/083e9e711c4a62da298115aa286fc2de.jpg",
        "https://i.pinimg.com/originals/c2/c1/9f/c2c19f5b8c573a3493589add1087a0af.jpg",
        "https://i.pinimg.com/originals/57/d2/3e/57d23e7f36de853db205e2f8edf57dc9.jpg",
        "https://i.pinimg.com/originals/cf/2a/cc/cf2acc66e631382da0197da4c59dbada.jpg",
        "https://i.pinimg.com/originals/ee/9a/4e/ee9a4ee17b3caefeeb21411abc866acf.jpg",
        "https://i.pinimg.com/originals/82/18/ec/8218ec505a0fe7ed65f66e7624900e1c.jpg",
        "https://i.pinimg.com/originals/df/5f/4e/df5f4e18d1e48b9466913ba1999883e9.jpg",
        "https://i.pinimg.com/736x/df/ec/f0/dfecf0baa693b8c1edfb55c830c9dd7d.jpg",
        "https://i.pinimg.com/474x/5a/6d/7b/5a6d7b276a81e41ae2619d66941b710b.jpg",
        "https://i.pinimg.com/originals/f1/64/ee/f164ee68add02194e673f2682913a258.jpg",
        "https://i.pinimg.com/564x/4e/03/a5/4e03a5e88c2a0b1fda9f8428beb611b4.jpg",
        "https://i.pinimg.com/originals/bb/56/0e/bb560e6b81e4ea2740f4cb967018bebe.jpg",
        "https://i.pinimg.com/474x/83/02/8a/83028a2842e9f7ddf99c934fcecc584f.jpg",
        "https://i.pinimg.com/originals/61/a4/a5/61a4a549a8d1bf9e1293f8ee373aa143.jpg",
        "https://i.pinimg.com/736x/19/74/db/1974db8964d3c9287414a9d3d6cbeccf.jpg",
        "https://i.pinimg.com/736x/aa/6b/df/aa6bdf98cbc9e1fc741c36682fa3e838.jpg",
        "https://i.pinimg.com/originals/e3/13/a8/e313a86922cecd050bb2561425ad8257.png",
        "https://i.pinimg.com/736x/24/3c/71/243c71b9fdbb25b51037ab3ac8928eb7.jpg",
        "https://i.pinimg.com/originals/fa/ad/b0/faadb0977c90790eb72f051e4966059c.jpg",
        "https://i.pinimg.com/736x/c1/0c/f2/c10cf211537491a3c1383a7bbd539d38.jpg",
        "https://i.pinimg.com/originals/08/78/e3/0878e32620b43b1adbd295be23fed001.jpg",
        "https://i.pinimg.com/originals/af/08/4a/af084aee5e2043131dad14b8f2a99e6e.jpg",
        "https://i.pinimg.com/originals/bc/a8/c6/bca8c65b62c52a78362c9239ce894d0b.jpg",
        "https://i.pinimg.com/originals/2f/69/92/2f6992cd3b288bc94d2093cd184dca56.jpg",
        "https://i.pinimg.com/originals/25/e3/28/25e32849ce741ef6949d440f25d92332.jpg",
        "https://i.pinimg.com/originals/6f/78/9a/6f789a9ea17311ee72ac8ae0ae8c66c0.jpg",
        "https://i.pinimg.com/originals/d3/85/63/d38563715af9d94f6fc6092563b73e8d.jpg",
        "https://i.pinimg.com/originals/71/8e/1e/718e1e0ffb55fc0fc288c1567bbf54b8.jpg",
        "https://i.pinimg.com/originals/76/14/ea/7614ea924f23dae9fed86a85d313ac3f.jpg",
        "https://i.pinimg.com/originals/42/3d/bc/423dbc54927907734290f1c1d5187edb.jpg",
        "https://i.pinimg.com/originals/bc/3a/1f/bc3a1f36e19e36c590bb8942ba1618de.png",
        "https://i.pinimg.com/originals/8a/a1/f4/8aa1f4f164d3f1317fded035ad59e39e.jpg",
        "https://i.pinimg.com/736x/e6/83/f5/e683f50350031cb53687a396afba39ff.jpg",
        "https://i.pinimg.com/474x/a2/21/13/a22113ccae86c391e3cd2594ec59d53b.jpg",
        "https://i.pinimg.com/originals/de/4b/10/de4b105d0560e5f01e77cd0fcb69570e.jpg",
        "https://i.pinimg.com/474x/36/e5/50/36e5509ed7a49a0a15c2d2ef283acdbe.jpg",
        "https://i.pinimg.com/originals/25/bb/20/25bb205317b48a1c987246e087405568.jpg",
        "https://i.pinimg.com/originals/3c/47/06/3c47069432b5fadb7c358099a36f063b.jpg",
        "https://i.pinimg.com/736x/ba/77/92/ba77924eceab03b00827ef2b8519451a.jpg",
        "https://i.pinimg.com/originals/89/4d/10/894d10830c341c5aa5bd3c0fec83e76c.jpg",
        "https://i.pinimg.com/originals/89/55/bd/8955bdaca7aa8c8b6399644ba5c5644b.png",
        "https://i.pinimg.com/736x/76/fe/2a/76fe2a24de79ed2945e331e0589f2caa.jpg",
        "https://i.pinimg.com/originals/05/78/58/05785877c531ea28277ac687a06d7eb9.jpg",
        "https://i.pinimg.com/564x/b4/e4/9f/b4e49f4cead77dbe61710d4a044aaaa3.jpg",
        "https://i.pinimg.com/736x/68/f4/6d/68f46d61769150315c316fc6e656f374.jpg",
        "https://i.pinimg.com/originals/c1/23/8a/c1238a1500c4901d5f51f715f857ee1f.png",
        "https://i.pinimg.com/originals/de/3b/ba/de3bba5cd3b2186f11b7587abad2bea5.jpg",
        "https://i.pinimg.com/280x280_RS/29/8b/f5/298bf53f120299775f101d2bc0fc0908.jpg",
        "https://i.pinimg.com/564x/f1/72/68/f17268e705b00f53784c4ff3852722ac.jpg",
        "https://i.pinimg.com/originals/d9/73/d7/d973d7bbf94dfa270295d78954b9a129.jpg",
        "https://i.pinimg.com/originals/9b/f4/07/9bf407786accda157d99b0deaceaeff0.jpg",
        "https://i.pinimg.com/564x/fd/cf/a2/fdcfa2a7b4fca5a93640fc648cf47242.jpg",
        "https://i.pinimg.com/originals/1b/5b/53/1b5b53c1971fa4138bc1c8f0e0d851c1.png",
        "https://i.pinimg.com/280x280_RS/65/fd/37/65fd37f9e585ea92637cdcba2ed5383f.jpg",
        "https://i.pinimg.com/736x/6a/93/97/6a9397fc90466a45adec83003b6b8ff1.jpg",
        "https://i.pinimg.com/736x/5a/21/38/5a2138e9c516999c5fddb9094de051ae.jpg",
        "https://i.pinimg.com/originals/8b/f8/3b/8bf83b14a1efdc4d0a04b45146f85324.jpg",
        "https://i.pinimg.com/736x/79/94/ed/7994ed900039094d0ea45dadc9b088a2.jpg",
        "https://i.pinimg.com/236x/85/65/a5/8565a5a34f0bec9e6c791ed927673374.jpg",
        "https://i.pinimg.com/originals/4d/68/ea/4d68eade7a54351dce8f6aae76f52501.jpg",
        "https://i.pinimg.com/originals/5e/0c/19/5e0c198be3b7b094533f0f9d9a0d05d3.jpg",
        "https://i.pinimg.com/originals/e4/ba/d0/e4bad04892bb8269715abda58352a2e5.png",
        "https://i.pinimg.com/originals/99/06/fd/9906fdde250e68f81367508f3ef5bc9c.jpg",
        "https://i.pinimg.com/736x/01/2b/9e/012b9e7543c33638a4cc970d5a4e39c9.jpg",
        "https://i.pinimg.com/originals/99/36/36/993636cce9b8b4a82ca84153b239780e.jpg",
        "https://i.pinimg.com/564x/c6/91/d5/c691d523b5c65c62deb3b57516c19b1b.jpg",
        "https://i.pinimg.com/originals/cd/e3/63/cde363113146648f9367a9cadd56e90f.jpg",
        "https://i.pinimg.com/originals/ef/8e/e9/ef8ee98953c8a8239f83208147058753.jpg",
        "https://i.pinimg.com/originals/7a/ad/63/7aad6333a788bc12cc362fcadd96ee05.jpg",
        "https://i.pinimg.com/474x/db/a8/1f/dba81f1ce9873e52b970f69764332824.jpg",
        "https://i.pinimg.com/736x/91/79/c5/9179c56ea350e37c66065a08e66c9be3.jpg",
        "https://i.pinimg.com/736x/fe/26/6f/fe266f58054cc29b48c59c4221f45cfa.jpg",
        "https://i.pinimg.com/originals/9a/72/ed/9a72ede6d15b7ea2a0abe72f63eb0325.png",
        "https://i.pinimg.com/originals/e7/91/1c/e7911ca981856a6b244d5ca817d66f17.jpg",
        "https://i.pinimg.com/originals/0f/da/85/0fda854a569af4560f859c7d0e65a9af.png",
        "https://i.pinimg.com/originals/a9/ab/38/a9ab388d8feaf67ccb396ee91e988aa5.jpg",
        "https://i.pinimg.com/736x/33/ed/c9/33edc95108e2c8104d8a392cb03206c0.jpg",
        "https://i.pinimg.com/originals/68/2c/c0/682cc0ced90762268112e2c88c03d9db.jpg",
        "https://i.pinimg.com/474x/4e/62/50/4e6250d42f22d2ef37181c7ba8caf9c7.jpg",
        "https://i.pinimg.com/736x/cb/14/13/cb1413695246b59c760a8cf824549e9c.jpg",
        "https://i.pinimg.com/originals/b6/ef/b3/b6efb3057388568f431b00f54bd73084.jpg",
        "https://i.pinimg.com/564x/99/83/5a/99835aa6cc644df3296fcbb0e369bf29.jpg",
        "https://i.pinimg.com/originals/cc/b7/fb/ccb7fbefcac8c65452dc7cb7049800f8.jpg",
        "https://i.pinimg.com/originals/00/47/9a/00479aac1d7af8b996018d89f85e7f0b.jpg",
        "https://i.pinimg.com/originals/91/69/44/916944a5a24270ba6df2a164a0276cf1.jpg",
        "https://i.pinimg.com/originals/8c/bb/18/8cbb18000f0be5bbc35ad9f00ddb0601.jpg",
]
 
 const meme = [
   "https://images3.memedroid.com/images/UPLOADED657/618c3ed1527ac.jpeg",
   "https://images7.memedroid.com/images/UPLOADED352/618c55625f0b6.jpeg",
   "https://images3.memedroid.com/images/UPLOADED107/618c3b0c9bd2a.jpeg",
   "https://images3.memedroid.com/images/UPLOADED398/618c61c639d0e.jpeg",
   "https://images3.memedroid.com/images/UPLOADED594/618c3e3d96680.jpeg",
   "https://images7.memedroid.com/images/UPLOADED202/618b9aa1aa4d5.jpeg",
   "https://images7.memedroid.com/images/UPLOADED979/618c72d234869.jpeg",
   "https://images7.memedroid.com/images/UPLOADED473/618c174446176.jpeg",
   "https://images3.memedroid.com/images/UPLOADED247/618c4987c37e9.jpeg",
   "https://images7.memedroid.com/images/UPLOADED353/618c4adbcb051.jpeg",
   "https://images3.memedroid.com/images/UPLOADED929/618c7a949570b.jpeg",
   "https://images3.memedroid.com/images/UPLOADED563/618c3f7fcbc75.jpeg"
]

const nsfw_loli = [
   "https://img-12.poringa.net/poringa/img/7/E/2/9/A/2/Suputamadrexd/D87.jpg",
   "https://img-12.poringa.net/poringa/img/8/8/9/B/C/E/Suputamadrexd/317.jpg",
   "https://img-12.poringa.net/poringa/img/9/D/5/8/B/E/Suputamadrexd/406.jpg",
   "https://img-12.poringa.net/poringa/img/B/A/1/F/3/4/Suputamadrexd/6E3.jpg",
   "https://img-12.poringa.net/poringa/img/C/5/4/F/A/F/Suputamadrexd/CF6.jpg",
   "https://img-12.poringa.net/poringa/img/8/1/A/1/8/A/Suputamadrexd/A8F.jpg",
   "https://img-12.poringa.net/poringa/img/5/E/E/B/D/9/Suputamadrexd/A38.jpg",
   "https://img-12.poringa.net/poringa/img/5/E/1/4/8/4/Suputamadrexd/096.jpg",
   "https://img-12.poringa.net/poringa/img/E/2/5/6/3/C/Suputamadrexd/496.jpg",
   "https://img-12.poringa.net/poringa/img/6/0/3/1/B/E/Suputamadrexd/0C2.jpg",
   "https://img-12.poringa.net/poringa/img/1/C/6/1/C/F/Suputamadrexd/6B1.jpg",
   "https://img-12.poringa.net/poringa/img/F/F/C/1/A/E/Suputamadrexd/2EE.jpg",
   "https://img-12.poringa.net/poringa/img/B/5/B/5/6/C/Suputamadrexd/8DF.jpg",
   "https://img-12.poringa.net/poringa/img/6/8/0/C/2/4/Suputamadrexd/A26.jpg",
   "https://img-12.poringa.net/poringa/img/6/F/2/C/4/4/Suputamadrexd/80A.jpg",
   "https://img-12.poringa.net/poringa/img/4/E/C/2/E/3/Suputamadrexd/6F7.jpg",
   "https://img-12.poringa.net/poringa/img/F/8/6/8/5/3/Suputamadrexd/F54.jpg",
   "https://img-12.poringa.net/poringa/img/9/6/5/3/7/8/Suputamadrexd/D34.jpg"
]

const nsfw_waifu = [
   "https://img-12.poringa.net/poringa/img/8/3/C/5/4/3/punisher2017/C6B.jpg",
   "https://img-12.poringa.net/poringa/img/9/8/B/C/7/9/punisher2017/AB5.jpg",
   "https://img-12.poringa.net/poringa/img/A/6/D/F/D/7/punisher2017/C54.jpg",
   "https://img-12.poringa.net/poringa/img/9/7/D/A/F/3/punisher2017/355.jpg",
   "https://img-12.poringa.net/poringa/img/D/F/F/9/F/5/punisher2017/82E.jpg",
   "https://img-12.poringa.net/poringa/img/8/3/B/D/8/0/punisher2017/305.jpg",
   "https://img-12.poringa.net/poringa/img/D/4/B/F/D/1/punisher2017/319.jpg",
   "https://img-12.poringa.net/poringa/img/4/0/3/9/8/9/punisher2017/3CB.jpg",
   "https://img-12.poringa.net/poringa/img/6/4/B/0/4/F/punisher2017/67B.jpg",
   "https://img-12.poringa.net/poringa/img/F/3/F/8/4/6/punisher2017/00A.jpg",
   "https://img-12.poringa.net/poringa/img/8/D/7/8/0/3/punisher2017/C28.jpg",
   "https://img-12.poringa.net/poringa/img/6/7/4/A/D/B/punisher2017/248.jpg",
   "https://i.waifu.pics/D99m3Bl.jpg",
   "https://img-12.poringa.net/poringa/img/C/A/E/A/F/0/punisher2017/901.jpg",
   "https://i.waifu.pics/_09oawn.jpg",
   "https://i.waifu.pics/c911IZa.jpg",
   "https://i.waifu.pics/eYGN-kx.jpg",
   "https://i.waifu.pics/EkGjZVC.jpg",
   "https://i.waifu.pics/-pn1uiI.jpg",
   "https://i.waifu.pics/JPtPHHr.com_0371.jpg",
   "https://i.waifu.pics/OLryhT9.png",
   "https://i.waifu.pics/0FRrqpH.jpg",
   "https://i.waifu.pics/v-zdPb4.png",
   "https://i.waifu.pics/1iGvZCn.png",
   "https://i.waifu.pics/t17Oixv.jpg",
   "https://i.waifu.pics/lHUFq~j.jpg",
   "https://i.waifu.pics/JGwqnP4.jpg"
]

const neko = [
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx",
   "xxx"
]

  //---------𝗙𝗨𝗡𝗖𝗜𝗢́𝗡 𝗥𝗔𝗡𝗚𝗢𝗦--------
	const levelRole = getLevelingLevel(sender, _level)
        var role = 'HIERRO I'
        if (levelRole <= 2) {
            role = 'HIERRO I'
        } else if (levelRole <= 4) {
            role = 'HIERRO II'
        } else if (levelRole <= 6) {
            role = 'HIERRO III'
        } else if (levelRole <= 8) {
            role = 'HIERRO IV'
        } else if (levelRole <= 10) {
            role = 'HIERRO V'
        } else if (levelRole <= 12) {
            role = 'BRONCE I'
        } else if (levelRole <= 14) {
            role = 'BRONCE II'
        } else if (levelRole <= 16) {
            role = 'BRONCE III'
        } else if (levelRole <= 18) {
            role = 'BRONCE IV'
        } else if (levelRole <= 20) {
            role = 'BRONCE V'
        } else if (levelRole <= 22) {
            role = 'PLATA I'
        } else if (levelRole <= 24) {
            role = 'PLATA II'
        } else if (levelRole <= 26) {
            role = 'PLATA III'
        } else if (levelRole <= 28) {
            role = 'PLATA IV'
        } else if (levelRole <= 30) {
            role = 'PLATA V'
        } else if (levelRole <= 32) {
            role = 'ORO I'
        } else if (levelRole <= 34) {
            role = 'ORO II'
        } else if (levelRole <= 36) {
            role = 'ORO III'
        } else if (levelRole <= 38) {
            role = 'ORO IV'
        } else if (levelRole <= 40) {
            role = 'ORO V'
        } else if (levelRole <= 42) {
            role = 'DIAMANTE I'
        } else if (levelRole <= 44) {
            role = 'DIAMANTE II'
        } else if (levelRole <= 46) {
            role = 'DIAMANTE III'
        } else if (levelRole <= 48) {
            role = 'DIAMANTE IV'
        } else if (levelRole <= 50) {
            role = 'DIAMANTE V'
        } else if (levelRole <= 52) {
            role = 'NIVEL FINAL'
        } else if (levelRole <= 100000) {
            role = 'NIVEL FINAL'
		}
		
//====================================================================================================//

//>> Porsentaje del nivel
		var per = '□□□□□□□□□□ 0%'
			const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
			const perl = peri-getLevelingXp(sender) 
			const resl = Math.round(100-((perl/getLevelingXp(sender))*100))
			if (resl <= 10) {
				per = `■□□□□□□□□□ ${resl}%`
			} else if (resl <= 20) {
				per = `■■□□□□□□□□ ${resl}%`
			} else if (resl <= 30) {
				per = `■■■□□□□□□□ ${resl}%`
			} else if (resl <= 40) {
				per = `■■■■□□□□□□ ${resl}%`
			} else if (resl <= 50) {
				per = `■■■■■□□□□□ ${resl}%`
			} else if (resl <= 60) {
				per = `■■■■■■□□□□ ${resl}%`
			} else if (resl <= 70) {
				per = `■■■■■■■□□□ ${resl}%`
			} else if (resl <= 80) {
				per = `■■■■■■■■□□ ${resl}%`
			} else if (resl <= 90) {
				per = `■■■■■■■■■□ ${resl}%`
			} else if (resl <= 100) {
				per = `■■■■■■■■■■ ${resl}%`
			}
//====================================================================================================//

//>> Nivelación
			if (isGroup && isLevelingOn) {
				const currentLevel = getLevelingLevel(sender)
				const checkId = getLevelingId(sender)
				try {
					if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
					const amountXp = Math.floor(Math.random() * 50) + 1000
					const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
					const getLevel = getLevelingLevel(sender)
					addLevelingXp(sender, amountXp)
					if (requiredXp <= getLevelingXp(sender)) {
						addLevelingLevel(sender, 1)
						     giveLimit(sender, 2, limit)
levelup = `*🥳Hola @${sender.split("@")[0]} acabas de subir de nivel*

⎔ *✨Exp* : ${getLevelingXp(sender)}
⎔ *🆙Nivel* : ${getLevel} ➪ ${getLevelingLevel(sender)}
⎔ *🏅Rango* : ${role}
⎔ *💎Diamantes* : +2

*Felicidadeesss 🎉🎉*`
Fg.sendMessage(from, levelup, text, {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
					}
				} catch (err) {
					console.error(err)
				}
			}
			
//====================================================================================================//

//>> Emoji a sticker
    const sendStickerFromUrl = async(to, url) => {
			console.log(color('[GATYBOT]','magenta'), color('✅ Descargando sticker...'));
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./libreria/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					Fg.sendMessage(to, media, sticker,{quoted:mek})
					console.log(color('[GATYBOT]','magenta'), color('💎 Enviando sticker...'));
					fs.unlinkSync(asw)
					fs.unlinkSync(filess)
					});
					});
				});
			}

//====================================================================================================//

//>> Descargas de mediafire
    const sendFileFromUrl = async(link, type, options) => {
         hasil = await getBuffer(link).catch(e => {
	     fetch(link).then((hasil) => {
	     return Fg.sendMessage(from, hasil, type, options)
	     }).catch(e => {
	     Fg.sendMessage(from, { url : link }, type, options).catch(e => {
	     reply('❎ Error al descargar el archivo')
	     console.log(e)
	     }) 
         }) 
         })
        Fg.sendMessage(from, hasil, type, options).catch(e => {
	    fetch(link).then((hasil) => {
	    Fg.sendMessage(from, hasil, type, options).catch(e => {
	    Fg.sendMessage(from, { url : link }, type, options).catch(e => {
	    reply('❎ Error al descargar el archivo')
	    console.log(e)
	     })
	     })
	     })
	     })
	     }

//====================================================================================================//

//>> Descargas de YouTube
  const sendMediaURL = async(url, text="", mids=[]) =>{
        if(mids.length > 0){
          text = normalizeMention(to, text, mids)
        }
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
          request.head(uri, function (err, res, body) {
            mime = res.headers['content-type']
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        download(url, filename, async function () {
          console.log('✅ Enviando');
          let media = fs.readFileSync(filename)
          let type = mime.split("/")[0]+"Message"
          if(mime === "image/gif"){
            type = MessageType.video
            mime = Mimetype.gif
          }
          if(mime.split("/")[0] === "audio"){
            mime = Mimetype.mp4Audio
          }
          Fg.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
          fs.unlinkSync(filename)
        });
      }
 
 //====================================================================================================//

//>> Ttp2 ttp3 y demás de Stickers
const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('./libreria/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
Fg.sendMessage(from, media, sticker, {quoted: mek})
console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))  
});
});
});
}
   //-----------

_prem.expiredCheck(premium)

//====================================================================================================//

//>> Juego de matemáticas
game.cekWaktuMtk(Fg, mtk)

if (game.isMtk(from, mtk)){
if (chats.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
var htgm3 = Math.floor(Math.random() * (10000 - 5000 + 1) + 5000)
addBalance(sender, htgm3, balance)
await reply(`*✅ Felicidades tu respuesta es correcta*\n*‣ Respuesta :* ${game.getJawabanMtk(from, mtk)}\n*‣ Ganaste :* ${htgm3}💰\n\nQuieres jugar de nuevo? 📌 Escribe\n*${prefix}mates*`)
mtk.splice(game.getMtkPosi(from, mtk), 1)
}
}

//====================================================================================================//

//>> Juego tictactoe
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if (fs.existsSync(`./libreria/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if (budy == "Cex") return reply("why");
if (
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "S"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`✳️ El juego ha comenzado antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./libreria/tictactoe/db/${from}.json`,JSON.stringify(boardnow, null, 2)
);
const chatAccept = ` TICTACTOE - GAME 

INFO :
  Jugador ❎ : @${boardnow.X}
  Jugador2 ⭕ : @${boardnow.O}
               
     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Tu turno @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

Escriba *rendirse* para dejar de jugar!
`;
Fg.sendMessage(from, chatAccept, MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
} else {
Fg.sendMessage(from,`❎ Esta opción es solo para @${boardnow.O} !`,
MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
},
}
);
}
} else if (
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "N"
) {
if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if (boardnow.status)
return reply(`✳️ El juego ha comenzado antes!`);
fs.unlinkSync(`./libreria/tictactoe/db/${from}.json`);
Fg.sendMessage(from,`📌 Desafortunadamente el desafío @${boardnow.X} a sido rechazado 😕`,
MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.X + "@s.whatsapp.net"],
},
}
);
} else {
Fg.sendMessage(from,`❎ Esta opción es solo para @${boardnow.O} !`,MessageType.text, {quoted: mek,
contextInfo: {
mentionedJid: [boardnow.O + "@s.whatsapp.net"],
},
}
);
}
}
}

if (arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if (!boardnow.status) return reply(`✳️ Parece que el oponente no a recibido aceptar/rechazar el desafío.`)
if (
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if (moving.isWin) {
if (moving.winner == "SERI") {
const chatEqual = `*🎮 TICTACTOE - GAME 🎳*
          
El juego terminó en empate 😐
`;
reply(chatEqual);
fs.unlinkSync(`./libreria/tictactoe/db/${from}.json`);
return;
}
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 20) + 10;
const limLoose = Math.floor(Math.random() * 10) + 5;
const winttt = Math.floor(Math.random() * 500) + 1000
giveLimit(`${winnerJID}@s.whatsapp.net`, 5, limit)
addBalance(`${winnerJID}@s.whatsapp.net`, winttt, balance)
const winttc = Math.floor(Math.random() * 5000) + 10000
addLevelingXp(`${winnerJID}@s.whatsapp.net`, winttc)


const chatWon = `*🎮 TICTACTOE - GAME 🎳*
          
🎉 El ganador es @${winnerJID} 👑

💰Ganaste : *${winttt}* BotCoins
✨Ganaste : *${winttc}* Exp
💎Ganaste : *5* Diamantes`;

Fg.sendMessage(from, chatWon, MessageType.text, {quoted: mek,contextInfo: {
mentionedJid: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net",
],
},
});
fs.unlinkSync(`./libreria/tictactoe/db/${from}.json`);
} else {
const chatMove = `  TICTACTOE - GAME 

INFO
  Jugador ❎ : @${moving.X}
  Jugador2 ⭕ : @${moving.O}

     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Tu turno : @${moving.turn == "X" ? moving.X : moving.O}

Escribe *rendirse* para dejar de jugar
`;
Fg.sendMessage(from, chatMove, MessageType.text, {quoted: mek,contextInfo: {
mentionedJid: [
moving.X + "@s.whatsapp.net",
moving.O + "@s.whatsapp.net",
],
},
});
}
}

if ((senderNumber) && ["Rendirse", "rendirse"].includes(budy) && !isCmd) {
orangnye = sender
teks = `@${orangnye.split("@")[0]} Se Rendio\n_jajaja xd_`
if (fs.existsSync("./libreria/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./libreria/tictactoe/db/" + from + ".json");
mentions(teks,[sender],true)
  } else {
reply(`✳️ No hay sesión en curso`);
  }
}

//====================================================================================================//

//>> Función de balance
                if (isVerify && isGroup ) {
                        const checkATM = getBalance(sender, balance)
  try {
if (checkATM === undefined) addBalance(sender)
const uangsaku = Math.floor(Math.random() * 50) + 200
addBalance(sender, uangsaku, balance)
  } catch (err) {
console.error(err)
  }
}

//====================================================================================================//

//>> Botones de mensaje
    const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
      const buttonMessage = {
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 1,
      };
      Fg.sendMessage(
        id,
        buttonMessage,
        MessageType.buttonsMessage,
        options
      );
    };

//>> Boton de documento
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await Fg.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mek.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
Fg.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//>> Botones
    const sendButLok = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await Fg.prepareMessage(from,  {degreesLatitude: 0, degreesLongitude: 0, jpegThumbnail: gam1}, location)
      const buttonMessages = {
        locationMessage: mhan.message.locationMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 6,
      };
      Fg.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        {quoted: mek}
      );
    };
    
//>> Botones de localización
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Fg.prepareMessage(from, kma, location)

const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Fg.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//>> Botones de imagen
    const sendButImage = async (
      id,
      text1,
      desc1,
      gam1,
      but = [],
      options = {}
    ) => {
      kma = gam1;
      mhan = await Fg.prepareMessage(from, kma, image);
      const buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      };
      Fg.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        {quoted: mek}
      );
    };

//>> Botones de video
    const sendButVideo = async (
      id,
      text1,
      desc1,
      vid1,
      but = [],
      options = {}
    ) => {
      kma = vid1;
      mhan = await Fg.prepareMessage(from, kma, video);
      const buttonMessages = {
        videoMessage: mhan.message.videoMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 5,
      };
      Fg.sendMessage(
        id,
        buttonMessages,
        MessageType.buttonsMessage,
        options
      );
    };
    
//====================================================================================================//

//>> kick
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        Fg.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      Fg.groupAdd(from, orangnya);
    };
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await Fg.relayWAMessage(
        Fg.prepareMessageFromContent(
          target,
          Fg.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      Fg.sendMessage(target, teks, "conversation");
    };

//====================================================================================================//

//>> Función
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

//====================================================================================================//

//>> Tipo de enlace 
var enlace = 'WhatsApp'
            if (budy.includes("chat.whatsapp.com")) {
                enlace = 'WhatsApp'
            } else if (budy.includes("m.kwai.me")) {
                enlace = 'Kwai'
            } else if (budy.includes("instagram.com")) {
                enlace = 'Instagram'
	        } else if (budy.includes("t.me")) {
                enlace = 'Telegram'
            } else if (budy.includes("whatsthemes.com")) {
                enlace = 'whatsthemes'
            } else if (budy.includes("getsnap.link")) {
                enlace = 'Snaptube'
            } else if (budy.includes("nysL.com")) {
                enlace = 'nysL'
            } else if (budy.includes("discord.gg")) {
                enlace = 'Discord'
            } else if (budy.includes("getsnap.link")) {
                enlace = 'Snaptube'
            }

//====================================================================================================//

//>> Anti enlaces
	if (budy.includes("chat.whatsapp.com") || (budy.includes("getsnap.link") || (budy.includes("m.kwai.me") || (budy.includes("instagram.com") || (budy.includes("t.me") || (budy.includes("whatsthemes.com") || (budy.includes("nysL.com") || (budy.includes("discord.gg") || (budy.includes("getsnap.link")))))))))){
		if (!isGroup) return
		if (!isAntilink) return
		console.log(color('[GATYBOT]','magenta'), color(`${enlace} enlace detectado`,'red'));
		linkgp = await Fg.groupInviteCode (from)
		if (budy.includes(`https://chat.whatsapp.com/${linkgp}`)) return reply('✳️ Menos mal que este enlace es de este grupo :v')
		if (isGroupAdmins) return Fg.sendMessage(from, `*🪀「 Enlace Detectado 」🪀*\n\n*De* : @${sender.split("@")[0]}\n*Hora* : ${hora2}\n*Enlace* : ${enlace}\n\n${isOwner ? 'Si puedes enviar enlaces :3': `Espero que hayas pedido permiso`}`, text, {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
		if (!isBotGroupAdmins) return reply('🤨 Por suerte no soy  admin, asi que no te expulsare')
		Fg.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		Fg.sendMessage(from, `*🪀「 Enlace Detectado 」🪀*\n\n• *De* : @${sender.split("@")[0]}\n• *Hora* : ${hora2}\n• *Enlace* : ${enlace}\n\nLos enlaces no son permitidos adiós`, text, {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
		setTimeout( () => {
			Fg.groupRemove(from, [kic]).catch((e)=>{reply('❎ Error, no se pudo eliminar al usuario')})
		}, 0)
	}

//>> Anti cadenas
if (budy.includes("ncuentra el error") || (budy.includes("alo a 5 grupos y") || (budy.includes("█████") || (budy.includes("tu deseo se cumplira") || (budy.includes("telo en 5 grupos") || (budy.includes("solo envía esta cadena") || (budy.includes("uevo patron de desbloqueo")) || (budy.includes("pide tres deseos")) || (budy.includes("pide 3 deseos")))))))){
		if (!isGroup) return 
		if (!isAntilink) return 
		if (sender.includes("78118982")) return
		console.log(color('[GATYBOT]','magenta'), color(`Cadena detectado`,'red'));
		if (isGroupAdmins) return Fg.sendMessage(from, `*🪀「 Cadena Detectado 」🪀*\n\n*De* : @${sender.split("@")[0]}\n*Hora* : ${hora2}\n\n${isOwner ? 'Tu puedes hacer lo que quieras :|': `No deberías enviar cadenas xd`}`, text, {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
		if (!isBotGroupAdmins) return reply('🤨 Por suerte no soy  admin, asi que no te expulsare')
		Fg.updatePresence(from, Presence.composing)
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		Fg.sendMessage(from, `*🪀「 Cadena Detectado 」🪀*\n\n• *De* : @${sender.split("@")[0]}\n• *Hora* : ${hora2}\n\nLas cadena no son permitidos adiós`, text, {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
		setTimeout( () => {
			Fg.groupRemove(from, [kic]).catch((e)=>{reply('❎ Error, no se pudo eliminar al usuario')})
		}, 0)
	}

//====================================================================================================//

//>> Colores
    colors = ["red", "white", "black", "blue", "yellow", "green", "magenta", "cyan", "pink", "gold", "purple", "navy", "gray"];
   
//>> Tipo de mensaje
    const isViewOnce = (type == 'viewOnceMessage')
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message');
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
      
//>> Mensaje privado y grupo
 if (!isGroup && isCmd) console.log(color('[GATYBOT]','magenta'), "Pv", color(command, "blue"), "de", color(sender.split('@')[0], "aqua"), args.length)
if (isGroup && isCmd) console.log(color('[GATYBOT]','magenta'), "Gp", color(command, "green"), "de", color(sender.split('@')[0], "aqua"), "en", color(groupName, "gold"), args.length)

//====================================================================================================//

//>> Ver características
let prem_ = '❎'
			if (isPremium) {
			prem_ = '✅'
			} 
			if (isOwner) {
			prem_ = 'VIP'
			}
let public_ = 'Publico'
           if (banChats){
           public_ = 'Privado'
          }
let antidel_ = 'desactivado'
           if (antidel){
           antidel_ = 'activado'
          }
let Welcome_ = 'desactivado'
			if (isWelcom) {
			Welcome_ = 'activado'
			}
let Adios_ = 'desactivado'
			if (isLeft) {
			Adios_ = 'activado'
			}
let AntiLink_ = 'desactivado'
			if (isAntilink) {
			AntiLink_ = 'activado'
			}
let AntiLinktele_ = 'Inactivo'
			if (isAntiTele) {
			AntiLinktele_ = 'Activo'
			}
let AntiLinkdis_ = 'Inactivo'
			if (isAntiDis) {
			AntiLinkdis_ = 'Activo'
			}
let Nsfw_ = 'desactivado'
			if (isNsfw) {
			Nsfw_ = 'activado'
			}
let Leveling_ = 'desactivado'
			if (isLevelingOn) {
			Leveling_ = 'activado'
			}

//====================================================================================================//

//>> Usuario no Verificado
const isUser = () => { 
  sendButMessage(from, `*≡* Hola @${sender.split("@")[0]}\n\nTodavía no estas verificado/a, para usar mis comandos primero verifiquese u.u`, `Presiona el botón para verificarte o escribe ${prefix}verify`, [
          {
            buttonId: `${prefix}verify`,
            buttonText: {
              displayText: `✅ Verify`,
            },
            type: 1,
          },
        ], {contextInfo: { mentionedJid: [sender]} } );
}

//====================================================================================================//

//>> Enlace en los stickers
const sendSticker = (from, filename, mek) => {
        Fg.sendMessage(from, filename, MessageType.sticker, {contextInfo: {externalAdReply:{
title:`${pushname}`,body:"",previewType:"PHOTO",thumbnail: fakelogo,sourceUrl:`${grupomc}` }},quoted: mek})
}

//----
const sendMessageFromContent = async(jid, message, options) => { 
		var option = { contextInfo: {}, ...options }
		send = await Fg.prepareMessageFromContent(jid,message,option)
		return Fg.relayWAMessage(send) 
             }

//>> Bot modo privado y grupo muteado
    if (!isOwner && banChats && isCmd === true) return reply('✳️ Bot en modo privado, todas las funciones bloqueadas')
    if (!isOwner && !isMods && isBanchat && isCmd === true) return reply('✳️ Grupo muteado, todas las funciones bloqueadas')
   
//====================================================================================================//

//>> Comandos sin prefijo
        switch(autofg) {
        	
        case '_bot':
buf = fs.readFileSync(`./src/mp3/1.mp3`)
Fg.sendMessage(from, buf, audio, {mimetype: 'audio/mp4', quoted: mek, ptt: true})
break
        	
 case 'prefix':
 case 'prefijo': 
pre = `⭐ El prefijo que se utiliza es : *${prefix}*`
reply(pre)
break

}

//====================================================================================================//

//>> Comandos con prefijo
    switch (command) {
      case "_menu":
      case "_help":  
        if(!isVerify) return isUser()
          if (isBanned) return reply(banf())
        imgth = fs.readFileSync(`./almacenamiento/imagenes/gaty_4.jpg`)
        
        lvlh = getLevelingLevel(sender)
       infost = await Fg.getStatus(`${sender.split('@')[0]}@c.us`)
	  infost = infost.status == 401 ? '' : infost.status
			
     helpfg = `☰ *INFO DEL USUARIO*
╭──────────────────✾
├ *Nombre* : @${sender.split("@")[0]}
├ *Nivel* : ${lvlh}
├ *Rango* : ${role} 🏅
├ *Info* : ${infost}
╰──────────────────✾

☰ *INFO DEL BOT*
╭──────────────────✾
├ *Hora* : ${hora2}
├ *Prefijo* : ${single ? `${prefa}` : multi ? 'Multiprefijo' : 'SinPrefijo'}
├ *Total Hits* : ${totalhit}
├ *Usuarios* : ${_user.length}
╰──────────────────✾

╭────ꕥ *Comandos* ꕥ───────✾
├─❐ *${prefix}reglas*
├─❐ *${prefix}creador*
├─❐ *${prefix}info*
├─❐ *${prefix}bot* _(simsimi)_
├─❐ *${prefix}report*
├─❐ *${prefix}ping*
├─❐ *${prefix}runtime*
├─❐ *${prefix}estado*
├─❐ *${prefix}join*
╰──────────────────✾`
        sendButLocation(from, `${helpfg}`, ` *NOTA:* Si tiene problemas con los botones use el comando ${prefix}menu`, {jpegThumbnail:imgth},

 [
{buttonId:`${prefix}menu`,buttonText:{displayText:'⦙☰ MENU'},type:1},
{buttonId:`${prefix}info`,buttonText:{displayText:'📇 INFO'},type:1}],

{contextInfo: { mentionedJid: [sender]}} )
break;

		case 'menu':
        case 'menú':
        case 'comandos':
        case 'commands':
        if(!isVerify) return isUser()
          if (isBanned) return reply(banf())
          try {
        lvlh = getLevelingLevel(sender)
       infost = await Fg.getStatus(`${sender.split('@')[0]}@c.us`)
	  infost = infost.status == 401 ? 'sin info' : infost.status
        imgth = fs.readFileSync(`./almacenamiento/imagenes/gaty_4.jpg`)
        autorfg = `${sender.split("@")[0]}`

        helfxz = `_👋Hola @${autorfg} ${YahahaHayyuk}_
        
_*<INFO DEL USUARIO/>*_

• 式 ⃟🐱 *_Nombre_* _: @${sender.split("@")[0]}_
• 式 ⃟🆙 *_Nivel_* _: ${lvlh}_
• 式 ⃟🏅 *_Rango_* _: ${role}_
• 式 ⃟ℹ️ *_Info_* _: ${infost}_

_*<INFO DEL BOT/>*_

• 式 ⃟📆 *_Fecha_* _: ${fecha2}_
• 式 ⃟🕜 *_Hora_* _: ${hora2}_
• 式 ⃟#️⃣ *_Prefijo_* _: ${prefix}_
• 式 ⃟✅ *_Usuarios_* _: ${_user.length}_

_*<CONVERTIDORES/>*_

• 式 ⃟🎨 _${prefix}sticker (Foto/video)_ 
• 式 ⃟🎨 _${prefix}sticker2 (Nombre|Autor)_
• 式 ⃟🎨 _${prefix}take (Nombre|Autor)_
• 式 ⃟🎨 _${prefix}exif (Nombre|Autor)_
• 式 ⃟🎨 _${prefix}ttp_
• 式 ⃟🎨 _${prefix}ttp2_
• 式 ⃟🎨 _${prefix}attp_
• 式 ⃟🎨 _${prefix}attp2_
• 式 ⃟🎨 _${prefix}attp3_
• 式 ⃟🎨 _${prefix}smeme_ _(txt|text2)_
• 式 ⃟🎨 _${prefix}smeme2_
• 式 ⃟🎨 _${prefix}toimg_
• 式 ⃟🎨 _${prefix}togif_
• 式 ⃟🎨 _${prefix}tovid_
• 式 ⃟🎨 _${prefix}toav_
• 式 ⃟🎨 _${prefix}rvo_
• 式 ⃟🎨 _${prefix}triggered_
• 式 ⃟🎨 _${prefix}passed_
• 式 ⃟🎨 _${prefix}wasted_
• 式 ⃟🎨 _${prefix}wanted_
• 式 ⃟🎨 _${prefix}gtav_
• 式 ⃟🎨 _${prefix}imgrip_
• 式 ⃟🎨 _${prefix}imgrip2_
• 式 ⃟🎨 _${prefix}scelda_
• 式 ⃟🎨 _${prefix}emoji_app_
• 式 ⃟🎨 _${prefix}emoji_wa_
• 式 ⃟🎨 _${prefix}emoji_fb_
• 式 ⃟🎨 _${prefix}emoji_go_
• 式 ⃟🎨 _${prefix}emoji_mo_
• 式 ⃟🎨 _${prefix}emoji_tw_
• 式 ⃟🎨 _${prefix}emoji_sa_
• 式 ⃟🎨 _${prefix}emoji_op_
• 式 ⃟🎨 _${prefix}emoji_pi_
• 式 ⃟🎨 _${prefix}emoji_ht_
• 式 ⃟🎨 _${prefix}emoji_lg_

_*<DESCARGAS/>*_

• 式 ⃟📥 _${prefix}play_
• 式 ⃟📥 _${prefix}play2_
• 式 ⃟📥 _${prefix}playvid_
• 式 ⃟📥 _${prefix}ytmp3_
• 式 ⃟📥 _${prefix}ytmp4_
• 式 ⃟📥 _${prefix}instagram_
• 式 ⃟📥 _${prefix}igstory_
• 式 ⃟📥 _${prefix}tiktok_
• 式 ⃟📥 _${prefix}tiktokaudio_
• 式 ⃟📥 _${prefix}mdfire_

_*<BUSQUEDA/>*_

• 式 ⃟🔎 _${prefix}ytsearch_
• 式 ⃟🔎 _${prefix}ytstalk_
• 式 ⃟🔎 _${prefix}igstalk_
• 式 ⃟🔎 _${prefix}playstore_

_*<EDUCACIÓN/>*_

• 式 ⃟📚 _${prefix}covid_
• 式 ⃟📚 _${prefix}hora_
• 式 ⃟📚 _${prefix}trad_
• 式 ⃟📚 _${prefix}cal_
• 式 ⃟📚 _${prefix}google_
• 式 ⃟📚 _${prefix}wiki_
• 式 ⃟📚 _${prefix}encode_
• 式 ⃟📚 _${prefix}decode_

_*<LOGOS/>*_

• 式 ⃟🧩 _${prefix}blackpink_
• 式 ⃟🧩 _${prefix}glich_
• 式 ⃟🧩 _${prefix}retroneon_
• 式 ⃟🧩 _${prefix}luzneon_
• 式 ⃟🧩 _${prefix}gaming_
• 式 ⃟🧩 _${prefix}3d_
• 式 ⃟🧩 _${prefix}phlogo_

_*<MEDIA/>*_

• 式 ⃟🎥 _${prefix}screenshot_
• 式 ⃟🎥 _${prefix}tourl_
• 式 ⃟🎥 _${prefix}tourl2_
• 式 ⃟🎥 _${prefix}urltoimg_
• 式 ⃟🎥 _${prefix}toav_
• 式 ⃟🎥 _${prefix}tomp3_
• 式 ⃟🎥 _${prefix}asupan_
• 式 ⃟🎥 _${prefix}wame_
• 式 ⃟🎥 _${prefix}ocr_
• 式 ⃟🎥 _${prefix}sinfondo_
• 式 ⃟🎥 _${prefix}escribe_
• 式 ⃟🎥 _${prefix}tinyurl (acortador)_

_*<FUNCIÓNES/>*_

• 式 ⃟🍒 _${prefix}random_
• 式 ⃟🍒 _${prefix}leermas (txt1|txt2)_
• 式 ⃟🍒 _${prefix}fake (@tag|txt1|txt2)_
• 式 ⃟🍒 _${prefix}tagme_
• 式 ⃟🍒 _${prefix}mention (549xxx)_
• 式 ⃟🍒 _${prefix}say_

_*<ECONOMÍA/>*_

• 式 ⃟🪙 _${prefix}shop_
• 式 ⃟🪙 _${prefix}toplevel_
• 式 ⃟🪙 _${prefix}bal_
• 式 ⃟🪙 _${prefix}buy (compra 💎)_ 
• 式 ⃟🪙 _${prefix}buygcoin (compra 🎰)_ 
• 式 ⃟🪙 _${prefix}adddiama_
• 式 ⃟🪙 _${prefix}addgcoin_
• 式 ⃟🪙 _${prefix}claim_

_*<DIVERSIÓN/>*_

• 式 ⃟🎲 _${prefix}shipping_ 
• 式 ⃟🎲 _${prefix}pregunta_
• 式 ⃟🎲 _${prefix}vor (verdad/reto)_
• 式 ⃟🎲 _${prefix}verdad_
• 式 ⃟🎲 _${prefix}reto_
• 式 ⃟🎲 _${prefix}meme_
• 式 ⃟🎲 _${prefix}ppt_
• 式 ⃟🎲 _${prefix}topgay_
• 式 ⃟🎲 _${prefix}ttc_ <@tag>
• 式 ⃟🎲 _${prefix}delttc_
• 式 ⃟🎲 _${prefix}mates_
• 式 ⃟🎲 _${prefix}simi_
• 式 ⃟🎲 _${prefix}simi2_
• 式 ⃟🎲 _${prefix}slot_
• 式 ⃟🎲 _${prefix}dado_

_*<IMAGENES/>*_

• 式 ⃟🌅 _${prefix}imagen_
• 式 ⃟🌅 _${prefix}pinterest_
• 式 ⃟🌅 _${prefix}wallpaper_
• 式 ⃟🌅 _${prefix}loli_
• 式 ⃟🌅 _${prefix}neko_
• 式 ⃟🌅 _${prefix}waifu_
• 式 ⃟🌅 _${prefix}girl_
• 式 ⃟🌅 _${prefix}man_
• 式 ⃟🌅 _${prefix}rip_

_*<NSFW/>*_

• 式 ⃟🔞 _${prefix}nsfw_waifu_
• 式 ⃟🔞 _${prefix}nsfw_loli_

_*<GRUPOS/>*_

• 式 ⃟👥 _${prefix}infogp_
• 式 ⃟👥 _${prefix}infodetec_
• 式 ⃟👥 _${prefix}group_
• 式 ⃟👥 _${prefix}group2 [close/open]_
• 式 ⃟👥 _${prefix}link_
• 式 ⃟👥 _${prefix}mensaje_
• 式 ⃟👥 _${prefix}online_
• 式 ⃟👥 _${prefix}kick_
• 式 ⃟👥 _${prefix}okick_
• 式 ⃟👥 _${prefix}staff_
• 式 ⃟👥 _${prefix}dueñogp_
• 式 ⃟👥 _${prefix}setdesc_
• 式 ⃟👥 _${prefix}setname_
• 式 ⃟👥 _${prefix}anularlink_
• 式 ⃟👥 _${prefix}getbio (@tag)_
• 式 ⃟👥 _${prefix}getperfil (@tag)_
• 式 ⃟👥 _${prefix}perfil_
• 式 ⃟👥 _${prefix}nivel_
• 式 ⃟👥 _${prefix}rangos_
• 式 ⃟👥 _${prefix}leido (Mensaje bot)_ 
• 式 ⃟👥 _${prefix}leveling [on/off]_
• 式 ⃟👥 _${prefix}welcome [on/off]_
• 式 ⃟👥 _${prefix}goodbye [on/off]_
• 式 ⃟👥 _${prefix}simih [on/off]_
• 式 ⃟👥 _${prefix}antiviewonce [on/off]_
• 式 ⃟👥 _${prefix}antilink [on/off]_
• 式 ⃟👥 _${prefix}antivirtual [on/off]_
• 式 ⃟👥 _${prefix}nsfw [on/off]_
• 式 ⃟👥 _${prefix}delete (mensaje bot)_
• 式 ⃟👥 _${prefix}salir (dejo el grupo)_

_*<MENSIONES/>*_

• 式 ⃟🪀 _${prefix}tagall_
• 式 ⃟🪀 _${prefix}tag_
• 式 ⃟🪀 _${prefix}notify (texto)_
• 式 ⃟🪀 _${prefix}hidetag_
• 式 ⃟🪀 _${prefix}contag (Nombre|Num)_
• 式 ⃟🪀 _${prefix}sticktag_
• 式 ⃟🪀 _${prefix}imgtag_

_*<SESIÓN/>*_

• 式 ⃟🤖 _${prefix}serbot_
• 式 ⃟🤖 _${prefix}stopbot_
• 式 ⃟🤖 _${prefix}listbots_

_*<AVANZADO/>*_

• 式 ⃟⚙️ _${prefix}blocklist_
• 式 ⃟⚙️ _${prefix}banlist_
• 式 ⃟⚙️ _${prefix}listbanchat_
• 式 ⃟⚙️ _${prefix}liststickcmd_
• 式 ⃟⚙️ _${prefix}getstickcmd_
• 式 ⃟⚙️ _${prefix}premiumlist_
• 式 ⃟⚙️ _${prefix}checkpremium_

_*<OWNER/>*_

• 式 ⃟🐱 _${prefix}actualizar_
• 式 ⃟🐱 _${prefix}modo (publico/privado)_
• 式 ⃟🐱 _${prefix}stickcmd_
• 式 ⃟🐱 _${prefix}delstickcmd_
• 式 ⃟🐱 _${prefix}addprem_
• 式 ⃟🐱 _${prefix}delprem_
• 式 ⃟🐱 _${prefix}setprefix_
• 式 ⃟🐱 _${prefix}ban_
• 式 ⃟🐱 _${prefix}unban_
• 式 ⃟🐱 _${prefix}clearchat_
• 式 ⃟🐱 _${prefix}buscarmsg_
• 式 ⃟🐱 _${prefix}listagp_
• 式 ⃟🐱 _${prefix}antillamada_
• 式 ⃟🐱 _${prefix}antidelete_
• 式 ⃟🐱 _${prefix}autoread_
• 式 ⃟🐱 _${prefix}informes_
• 式 ⃟🐱 _${prefix}solicitudes_
• 式 ⃟🐱 _${prefix}clonar_
• 式 ⃟🐱 _${prefix}banchat_
• 式 ⃟🐱 _${prefix}unbanchat_
• 式 ⃟🐱 _${prefix}chatmode_

_*<INFORMACIÓN/>*_

• 式 ⃟ℹ️ _${prefix}reglas_
• 式 ⃟ℹ️ _${prefix}creador_
• 式 ⃟ℹ️ _${prefix}info_
• 式 ⃟ℹ️ _${prefix}gpbot_
• 式 ⃟ℹ️ _${prefix}report_
• 式 ⃟ℹ️ _${prefix}ping_
• 式 ⃟ℹ️ _${prefix}runtime_
• 式 ⃟ℹ️ _${prefix}estado_
• 式 ⃟ℹ️ _${prefix}join_
• 式 ⃟ℹ️ _${prefix}ayuda_`

  py =  await Fg.prepareMessage(from, imgth, image)
gbutsan = [
{buttonId: `${prefix}creador`, buttonText: {displayText: '🐱 CREADOR'}, type: 1},
{buttonId: `${prefix}info`, buttonText: {displayText: '🤖 INFO'}, type: 1}
]
gbuttonan = {
imageMessage: py.message.imageMessage,
contentText: helfxz,
footerText: `  *Copyright © gatybot*`,
buttons: gbutsan,
headerType: 4
}
await Fg.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {contextInfo: {  mentionedJid: [sender]}, quoted: mek})
} catch (e) {
	console.log(`Error :`, color(e,'red'))
     reply('❎ Error al mostrar el menú, intenta de nuevo después de este mensaje')
                     }
break

//--info bot 
case 'info':
case 'status':
case 'estado':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
const fgnum = "51940617554@s.whatsapp.net"
const botnum = "51988050859"
const ayudante = "5216221512187@s.whatsapp.net"
const unread = await Fg.loadAllUnreadMessages ();
const timestampp = speed();
const latensii = speed() - timestampp
                   let totalchat = await Fg.chats.all()
                   let i = []
                   let giid = []
                   for (let mem of totalchat){ 
                   i.push(mem.jid)
                   }
                   for (let id of i){
                   if (id && id.includes('g.us')){
                   giid.push(id)
                    }
                    }
                   inifernazer = `_*<INFORMACIÓN DEL BOT/>*_

• 式 ⃟⃟🤖 _*Nombre* : ${Fg.user.name}_
• 式 ⃟⃟🤖 _*Numero* : wa.me/${botnum.split("@")[0]}_
• 式 ⃟🤖 _*Prefijo* : ${prefix}_
• 式 ⃟🤖 _*Version del bot* : 4.0.0_
• 式 ⃟⃟🤖 _*Total Hits* : ${totalhit}_
• 式 ⃟⃟🤖 _*Usuarios registrados* : ${_user.length}_
• 式 ⃟⃟🤖 _*Tiempo activa* : ${runtime(process.uptime())}_
• 式 ⃟⃟🤖 _*Velocidad* : ${latensii.toFixed(4)} Segundos_
• 式 ⃟⃟🤖 _*Navegador* : ${Fg.browserDescription[1]}_
• 式 ⃟⃟🤖 _*Versión del navegador* : ${Fg.browserDescription[2]}_
• 式 ⃟⃟🤖 _*Vercion del Wpp* : ${wa_version}_

_*<INFORMACIÓN DE CHATS/>*_

• 式 ⃟⃟💬 _*Chats grupales* : ${giid.length}_
• 式 ⃟⃟💬 _*Chats privados* : ${totalchat.length - giid.length}_
• 式 ⃟⃟💬 _*Total de chats* : ${totalchat.length}_
• 式 ⃟⃟💬 _*No leido* : ${unread.length} mensajes_

_*<INFORMACIÓN DEL ANDROID/>*_

• 式 ⃟⃟📲 _*Marca* : ${device_manufacturer}_
• 式 ⃟⃟📲 _*Modelo* : ${device_model}_
• 式 ⃟⃟📲 _*Vercion* : ${os_version}_
• 式 ⃟⃟📲 _*Ram* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB_
• 式 ⃟⃟📲 _*MCC* : ${mcc}_
• 式 ⃟⃟📲 _*MNC* : ${mnc}_

 _*<AGRADECIMIENTOS/>*_

• 式 ⃟⃟🐱 _*Gatito :* @${fgnum.split("@s.whatsapp.net")[0]}_
_*Diseñador del bot*_

• 式 ⃟⃟🌀 _*Edgar :* @${ayudante.split("@s.whatsapp.net")[0]}_
_*Ayuda en algunos comandos*_`
Fg.sendMessage(from, inifernazer, text, { quoted: mek, contextInfo: { externalAdReply:{title: `式⃟🐱INFORMACIÓNES🐱⃟式`,body: `• Fecha : ${fecha2}\n• Hora : ${hora2}`, previewType:"PHOTO",thumbnail: gatylogo, sourceUrl:``}, "mentionedJid": [fgnum, ayudante, botnum]}})
             
           break

             //---activar Android World
case '_rulesgp':
				if (!isOwner) return
			
					if (args.length < 1) return reply(`✳️ on  - off`)
					if ((args[0]) === 'on') {
						if (isAw) return reply('✳️ ya está activo')
						awgp.push(from)
						fs.writeFileSync('./database/awgp.json', JSON.stringify(awgp))
						reply(`✅ Activado`)
					} else if ((args[0]) === 'off') {
						if (!isAw) return reply('✳️ Ya está desactivado')
						awgp.splice(from, 1)
						fs.writeFileSync('./database/awgp.json', JSON.stringify(awgp))
						reply(`✅ Desactivado`)
					} else {
						reply(`on - off`)
					}
					break
             //---Reglas del grupo Android World
             
             case '_reglasgp':
             case '_reglasgrupo':
              if (!isAw) return
            if (!isGroup) return reply(group())
            bbaw = ` *📲💻ANDROID WORLD🎬🎮*

                 🔷Te ofrece🔶

➢ Todo para tu celular android! 📱
➢Juegos de todo tipo🎮👾
➢🛠 Herramientas para personalizar tu celular 🔧🔩
➢ Aplicaciones⚙🕋🎮
➢ Juegos PPSSPP
➢ Libros🗃📚
➢ Todo tipo de archivos apk
➢ Ayuda y aplicaciones para usuarios root 📱
➢ Fondos📱🖼
➢ Programas para pc
➢ Videos🎞🎥 (leer reglas) 
➢ Películas📽🍿
➢ Música 🎵🎶🎧
➢ Y mucho más ✅

💠Envía y descarga juegos, aplicaciones, herramientas y todo lo relacionado para tu android 
💠 si tienes problemas en tu android, cuéntanos y entre todos nos ayudaremos 

❢◥ ▬▬▬▬▬▬ ◆ ▬▬▬▬▬▬ ◤❢

                 ❌ *REGLAS* ❌


🚫 ➭ *ADMINISTRADORES NO ANULAR EL LINK DEL GRUPO* (importante!). 
🚫 ➭No  enviar links de otros grupos, no importa el contenido del grupo. (pueden enviar links de otras redes sociales menos de WhatsApp y Telegram) 
🚫 ➭ No xxx, gore, filias o material explícito. 
🚫 ➭ No  incitar, crear o seguir peleas entre usuarios.
🚫 ➭ No pedir rango de administrador.
🚫 ➭ No hacer  spam.
🚫 ➭ No spamear con stickers
🚫 ➭ No pedir cosas sin pedir el favor.
🚫 ➭ No enviar cadenas molestas.
🚫 ➭ *No pedir sin aportar antes, muy importante.* 
🚫 ➭ No ser irrespetuoso con los miembros del grupo.
🚫 ➭ *Intercambiar, está totalmente prohibido.* 
🚫 ➭ No enviar aplicaciones maliciosas (virus, o con un fin no bueno para quien lo instala).

ツ📦Sólo se tomará como aporte los archivos que pesen 10 MB o más 
🚷 La gente inactiva se elimina cada vez que se llena el grupo o esta inactivo, siempre asegúrate tener más de 30 mensajes✍.
💠si envías música deberás mencionar su género, nombre y artista. 

    *Link del grupo -  Android World*
https://chat.whatsapp.com/Ly4I2LObSvW8VgOnJjofgA

*Grupo Telegram*
 http://t.me/AndroidWorldfg

🚷 si  eres eliminado puedes apelar tu eliminación aquí:
https://chat.whatsapp.com/Hcvn72lEw9Y0nYqyR6TcBC

Para pedir desban deberás mostrar una captura del momento de tu eliminación y de la razón que fuiste eliminado 🚷 Si no fuiste eliminado del grupo y entras al de pedir desban, serás eliminado de ambos grupos. ❌

👨🏻‍💻 Siempre y cuando necesites ayuda pide en el grupo, los administradores y usuarios te ayudarán en lo que necesites. 

¡Gracias por ser parte de nuestra comunidad!. 

*Creado el 1 de Marzo de 2018.* `
reply(bbaw) 
             break 
             
//----  Reglas bot
case 'rules':
case 'reglas':
case 'reglasbot':
if(!isVerify) return isUser()
	reglasbot = `---------------- » «» « ----------------

*▢≽ No envíe spam al bot.*
 Penalización: *ADVERTENCIA Y BLOQUEO TEMPORAL*
 
*▢≽ No llame o textee al bot*
Penalización: *BLOQUEO TEMPORAL*

*▢≽ No abuse del bot.*
Penalización: *BLOQUEO PERMANENTE*
 
*▢≽ No agrege a grupos al bot.*
Penalización: *BLOQUEO PERMANENTE*

---------------- » «» « ----------------

🤖El bot no esta activo las 24 horas, por lo que depende de si el propietario esta alli cuando el bot tambien esta encendido.`
Fg.sendMessage(from, reglasbot, text, { quoted: mek, contextInfo: { externalAdReply:{title: `式⃟🐱REGLAS DEL BOT🐱⃟式`,body:"마시엘리", previewType:"PHOTO",thumbnail: gatylogo, sourceUrl:``}}})
break

case 'help':
case 'ayuda':
if(!isVerify) return isUser()
	reglasbot = `───────────────────
*¿Cómo puedo subir de nivel?*

Para subir de nivel primeramente tiene que estar activado la ${prefix}nivelacion en el grupo.

Subes de nivel cada ves que envíes mensajes al grupo
───────────────────
_*PRONTO SE AGREGARAN MAS AYUDAS*_
───────────────────`
Fg.sendMessage(from, reglasbot, text, { quoted: mek, contextInfo: { externalAdReply:{title: `式⃟🐱AYUDA/HELP🐱⃟式`,body:"• preguntas frecuentes", previewType:"PHOTO",thumbnail: gatylogo, sourceUrl:``}}})
break


case '_groupgaty':
case '_grupogaty':
case '_gpgaty':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
thumb = fs.readFileSync(`./image/fg.jpg`)
respon = `Grupo WhatsApp Official`
sendButLok(from, respon, `Grupo Bot WhatsApp, Click para obtener el link`, thumb, [
          {
            buttonId: `${prefix}soporte`,
            buttonText: {
              displayText: `Gaty-Bot`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}grupo2`,
            buttonText: {
              displayText: `Android World`,
            },
            type: 1,
          },
        ], {quoted: mek});
        break;


case '_grupo2':
  reply('*➤ ፝͡ॢॎॕ❰🏜MINECRAFT▪︎BEDROCK🏜❱ ፝͡ॢॎॕ࿐*\nhttps://chat.whatsapp.com/GSZcY5bEKyq4NknFuT3jVr')
  break
case '_soporte':
case '_support':
 if(!isVerify) return isUser()
     gaty = `📌 *Grupo soporte del Bot*\n\n${soportefg}`
      reply(gaty) 
   break
   
//--- verificación  api funciona
case 'verify':
case 'reg':
case 'verificar':
case 'register':
case 'daftar':
if (isBanned) return reply(banf())
			if (isVerify) return reply('*✳️ Tu cuenta ya esta verificada*')
					const seriTod = bikinSerial(10)
					
				try {
				ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i.ibb.co/FX6pMj0/profile.png'
				}
				fgfoto = 'https://i.ibb.co/JxxPcm2/verify.jpg' //cambia como quieras, puedes subirlo a imgbb.com
				veri = sender
				_user.push(sender)
				fs.writeFileSync('./database/verify.json', JSON.stringify(_user))
				adduserUser(sender, pushname, fecha2, hora2, seriTod)
				console.log(color('[GATYBOT]','magenta'), color(`Verificacion exitosa`));

			capt = `「 *VERIFICACIÓN EXITOSA* 」
╭──────────────────✾
├ *Nombre:* @${sender.split("@")[0]}
├ *Fecha:* ${fecha2}
├ *Hora:* ${hora2}
├ *Usuarios Verificados:* ${_user.length}
╰──────────────────✾`

let reuser = await getBuffer(ppimg)//--sólo foto

  py =  await Fg.prepareMessage(from, reuser, image)
gbutsan = [
{buttonId: `${prefix}menu`, buttonText: {displayText: '⦙☰ MENU'}, type: 1},
{buttonId: `${prefix}reglas`, buttonText: {displayText: '📜 REGLAS'}, type: 1}
]
gbuttonan = {
imageMessage: py.message.imageMessage,
contentText: capt,
footerText: `*Click para ver el menu o las reglas del bot*`,
buttons: gbutsan,
headerType: 4
}
await Fg.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {contextInfo: {  mentionedJid: [sender]}, quoted:mek})
break

//-- Simsimi
case 'simi':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  try {
  simiimg = fs.readFileSync(`./almacenamiento/imagenes/simi_0.jpg`)
  simitext = `🐤Hola *@${sender.split("@")[0]}* quieres charlar un rato con la inteligencia artificial de simsimi?

Responde con *${prefix}simi* _tu mensaje_

*📌Ejemplo:* ${prefix}simi hola`
if (args.length < 1) return Fg.sendMessage(from, simiimg, image, {caption: simitext, quoted: mek, contextInfo: {"mentionedJid": [sender]}})
                     texto = args.join(' ')
                     anu = await fetchJson(`https://api.simsimi.net/v2/?text=${texto}&lc=es`, {method: 'GET'})
                     simfg = (`${anu.success} 🐤`)      
                     reply(simfg)
                     } catch (e) {
                     	console.log(`Error :`, color(e,'red'))
                         reply('❎ La API de simsimi esta en mantenimiento por lo tanto no podría funcionar bien')
                     }
                     break
                     
case '__simi2':
case '__bot2':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  try {
		 simiimg2 = fs.readFileSync(`./almacenamiento/imagenes/simi_0.jpg`)
  simitext2 = `🐤Hola *@${sender.split("@")[0]}* quieres charlar un rato con la inteligencia artificial de simsimi?

Responde con *${prefix}simi2* _tu mensaje_

*📌Ejemplo:* ${prefix}simi2 hola`
if (args.length < 1) return Fg.sendMessage(from, simiimg2, image, {caption: simitext2, quoted: mek, contextInfo: {"mentionedJid": [sender]}})
                     texto2 = args.join(' ')
                     anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${texto2}&lang=es`, {method: 'GET'})
                     simfg = (`${anu.success} 🐤`) 
                     reply(simfg)
                     } catch (e) {
                     	console.log(`Error :`, color(e,'red'))
                         reply('❎ La API de simsimi esta en mantenimiento por lo tanto no podría funcionar bien')
                     }
                     break
                     
case 'simi2':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  try {
		 simiimg3 = fs.readFileSync(`./almacenamiento/imagenes/simi_0.jpg`)
  simitext3 = `🐤Hola *@${sender.split("@")[0]}* quieres charlar un rato con la inteligencia artificial de simsimi?

Responde con *${prefix}simi3* _tu mensaje_

*📌Ejemplo:* ${prefix}simi3 hola`
if (args.length < 1) return Fg.sendMessage(from, simiimg3, image, {caption: simitext3, quoted: mek, contextInfo: {"mentionedJid": [sender]}})
                     texto3 = args.join(' ')
                     anu = await fetchJson(`https://st4rz.herokuapp.com/api/simsimi?kata=${texto3}`)
                     simfg = (`${anu.result} 🐤`) 
                     reply(simfg)
                     } catch (e) {
                     	console.log(`Error :`, color(e,'red'))
                         reply('❎ La API de simsimi esta en mantenimiento por lo tanto no podría funcionar bien')
                     }
                     break
                    
case '_sc': 
case '_script':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  scfg = `📌 Repositorio de este Bot : 
 https://github.com/FG98F/fgv4
       ──────────
⭐ Quieres un Bot editable? prueba este Bot
https://github.com/FG98F/fgbotv4`
reply(scfg)
break

//-- Dueño del bot
case 'owner':
case 'creator':
case 'creador': 
case 'developer':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
Fg.sendMessage(from, {displayname: "jeff", vcard: vcard1}, MessageType.contact, { quoted: mek})
//Fg.sendMessage(from, {displayname: "jeff", vcard: vcard2}, MessageType.contact, { quoted: mek})
                    .then((res) => Fg.sendMessage(from, `✅ Este es el numero de mi creador >_<, no molestar plis.`, text, {quoted: res}))
 break

//--- Pedidos solicitud
case 'pedido':
case 'solicitud':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  yoi = q
  if (args.length < 1) return reply('✳️ Ingrese las funciones que desee en *Gatybot*')
  if (yoi.length > 200 ) return reply('El texto supera el límite, su solicitud es rechazada!')
  _solicitud.push(yoi)
  fs.writeFileSync('./result/reportes/solicitud.json', JSON.stringify(_solicitud))
  pedii = `✅ Gracias *@${sender.split("@")[0]}*, Su solicitud ha sido almacenada en la base de datos.`
Fg.sendMessage(from, pedii, text, {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
	break

//--- informes - bugs 

case 'informe':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  yoi = q
  if (args.length < 1) return reply('✳️ Ingrese el nombre de la función de error que ocurre cuando la prueba')
  if (yoi.length > 200) return reply('El texto supera el límite, su solicitud es rechazada!')
  _informe.push(yoi)
  fs.writeFileSync('./result/reportes/informe.json', JSON.stringify(_informe))
  inforr = `✅ Gracias *@${sender.split("@")[0]}*, Su informe se ha almacenado en la base de datos`
Fg.sendMessage(from, inforr, text, {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
	break

//-- lista de informes 
case 'verinformes':
case 'informes':
			if (!isOwner) return reply(ownerB())
				teks = ` ≡ *INFORMES*\nLa siguiente es una lista de informes recibidos en la fecha *${fecha2}* con la cantidad de informes *${_informe.length}*\n\n╭────ꕥ *Lista* ꕥ─────────✾\n`
				for (let lap of _informe) {
					teks += `├╼ ${lap}\n`
				}
				teks  += `╰──────────────────✾`
				reply(teks.trim())
				break

//-- lista de solicitudes
case 'versolicitudes':
case 'solicitudes':
			if (!isOwner) return reply(ownerB())
				teks = ` ≡ *SOLICITUDES*\nLa siguiente es una lista de solicitudes recibidas en la fecha *${fecha2}* con la cantidad de solicitudes *${_solicitud.length}*\n\n╭────ꕥ *Lista* ꕥ─────────✾\n`
				for (let req of _solicitud) {
					teks += `├╼ ${req}\n`
				}
				teks  += `╰──────────────────✾`
				reply(teks.trim())
				break
				
				//-- Reportes
case 'report':
case 'reporte':
case 'reportes':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
report = `≡ *INFORMACION*
Solicite e informe las funciones de error en el bot, asegúrese de proporcionar un informe correcto y claro!

「 *REPORTES* 」
╭──────────────────✾
├ *${prefix}Solicitud (Texto)*
├ *${prefix}Informe (Texto)*
╰──────────────────✾

*Total*
Solicitudes : ${_solicitud.length}
Informes : ${_informe.length}

✆ o puede ponerse en contacto con el propietario para obtener más información.`
reply(report)
break

case 'grupobot':
case 'gpbot':
				if(!isVerify) return isUser()
				if (isBanned) return reply(banf())
					var nomorr = mek.participant
					teks1 = `✳️ No responda a este mensaje por que será bloqueado automáticamente\n\n${grupomc}`
					var options = {
					text: teks1,
					contextInfo: {mentionedJid: [nomorr]},
					}
					Fg.sendMessage(`${nomorr.split("@s.whatsapp.net")[0]}@s.whatsapp.net`, options, text, {quoted: mek})
					setTimeout( () => {
                  Fg.modifyChat(`${nomorr.split("@s.whatsapp.net")[0]}@s.whatsapp.net`, ChatModification.delete)
                  }, 10000)
					reply('✅ El grupo se envió a tu chat privado')
					break

//-- Clona un perfil para el bot
case 'clone':
case 'clonar':
        if (!isOwner) return reply(ownerB())
		if (!isGroup) return reply(group())
		if (args.length < 1) return reply('✳️ Menciona a quien quieres que clone su perfil 😁')
		if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Menciona a quiere quieres que clone su perfil 😁')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
					let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
					try {
						pp = await Fg.getProfilePicture(id)
						buffer = await getBuffer(pp)
						Fg.updateProfilePicture(botNumber, buffer)
						mentions(`✅ Foto de perfil actualizada correctamente usando la foto de perfil de : @${id.split('@')[0]}`, [jid], true)
					} catch (e) {
						reply('❎ Lo siento ocurrio un error')
					}
		break
		
case 'actualizar':
case 'update':
if (!isOwner) return reply(ownerB())
reply(`✳️ Espere un momento la bot se está actualizando`)
exec(`bash update.sh`, (err, stdout) => {
if (err) return reply(err)
if (stdout) reply(`✅ *Informe de la actualización:*\n\n${stdout}`)
})
break

//https://api.zeks.me/api/magernulis?apikey=WRhywqyYC0doYNeqTZymcB2SjrT&nama=gatybot&kelas=6-08&text=${q}&tinta=6
case 'nulis':
	case 'tulis':
		case 'escribe':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
				if (args.length < 1) return reply(`📝 Que escribo? Ejemplo : *${prefix + command}* Hola puercos`)
				reply('✅ Espere, Lo estoy escribiendo :3')
				buff = `https://ferdiz-afk.my.id/api/tulis?nama=gatybot&no=750&kelas=by%20gatito&text=${q}`
					voss = await fetch(buff)
					ftype = require('file-type')
					vuss = await ftype.fromStream(voss.body)
					Fg.sendMessage(from, await getBuffer(buff), image, {quoted: mek, caption: '✅ Es mejor de lo que escribes tú 7w7'})
					.catch((err) => {
						reply(`❎ Error, intente de nuevo mas tarde`); 
						})
					break

//---Verdad o reto
case "vor":
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
      sendButMessage(from, `Verdad o Reto`, `Elija uno`, [
          {
            buttonId: `${prefix}verdad`,
            buttonText: {
              displayText: `Verdad`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}reto`,
            buttonText: {
              displayText: `Reto`,
            },
            type: 1,
          },
        ]);
        break;

//-- verdad y reto
case 'verdad':
		if(!isVerify) return isUser()
  if (!isGroup) return reply(group())
  if (isBanned) return reply(banf())
                const trut =['¿Alguna vez te ha gustado alguien? ¿cuánto tiempo?','¿cuál es tu mayor miedo?','¿Alguna vez le gustó alguien?','¿Cómo se llama la ex novia de tu amigo que solía gustarle en secreto?','¿Alguna vez le as robado el dinero a tu madre o padre? ¿La razón?','¿Qué te hace feliz cuando estás triste?','¿Alguna vez has estado en aventura con otra persona?','¿qué es lo que más temes?','¿Quién es la persona más influyente en tu vida?','¿Quién es la persona que puede hacerte muy feliz?','¿Quién te ha hecho muy feliz?','¿Con quién te gusta jugar?','¿Alguna vez rechazaste a la gente? ¿Cuál fue la razón?','Nombra un incidente que te hizo sentir herido y que aún recuerdas','¿Qué has logrado este año?','¿Cuál fue tu peor hábito en la escuela?']
		const ttrth = trut[Math.floor(Math.random() * trut.length)]
		Fg.sendMessage(from, `*🔹VERDAD*\n\n${ttrth}`, text, { quoted: mek })
		break
		
		case 'reto':
		if(!isVerify) return isUser()
  if (!isGroup) return reply(group())
  if (isBanned) return reply(banf())
		const dare =['Envía un mensaje a tu ex y dile "Todavía me gustas"','Dile "Eres tan hermoso/a" a alguien del grupo','Suelta el emote "🦄" cada vez que escribes en el grupo durante 5 horas','Envía una nota de voz diciendo "¿puedo llamarte bebé?"','Use la foto de "kanna kamui" durante 1 día','Escribe en el idioma local durante una hora','cambiate el nombre a "Soy un hijo de lucinta luna" durante 7 horas','Dile a tu primera @ "Te amo"','bromea con tu ex y dile "te amo, por favor regresa"','Envía un audio diciendo "baby girl"','Envíale un mensaje a tu crush diciendo "estoy enamorado de ti, ¿quiero ser mi novia?"','Menciona que tipo de persona te gusta','Envía una foto de novio/a','grita incoherentemente y envía el audio aquí','Grita "anjimm gabutt anjimmm" frente a tu casa','cambiate el nombre a "BOWO" por 24 horas']
		const der = dare[Math.floor(Math.random() * dare.length)]
		Fg.sendMessage(from, `*🔸RETO*\n\n${der}`, text, { quoted: mek })
		break

//-- link whatsapp
case 'wame':
case 'wa.me':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
					reply(`*Link WhatsApp:* wa.me/${sender.split('@')[0]}\n*O*\napi.whatsapp.com/send?phone=${sender.split('@')[0]}`)
			break

//-- say
case 'say':
    if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
sendMess(from, q)
break

//-- Escanea el texto de una imagen----- Reconocimiento de texto
case 'ocr':
case 'rt':
     if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			const media = await Fg.downloadAndSaveMediaMessage(encmedia)
			
			reply(wait())
						await recognize(media, {lang: 'eng+es', oem: 1, psm: 3})
							.then(teks => {
								reply(teks.trim())
								fs.unlinkSync(media)
							})
							  limitAdd(sender, limit)
							.catch(err => {
								reply(err(prefix))
								fs.unlinkSync(media)
							})
					} else {
						reply(`📇 RECONOCIMIENTO DE TEXTO\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✳️ Envia una imagen con *${prefix + command}* o etiqueta una imagen que se haya enviado\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n*Alias del comando*\n${prefix}ocr\n${prefix}rt`)
					}
					
		break
		
		 //chat leer más 
  case 'leermas':
    if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
Fg.updatePresence(from, Presence.composing)
if (args.length < 1) return reply(`*TEXTO LEER MÁS\n\nEjem : ${prefix + command} hola | que hacen`)
tels = q
var teks1 = tels.split("|")[0];
var teks2 = tels.split("|")[1];
hasil = `${teks1}͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏${teks2}`
Fg.sendMessage(from, hasil, text, { quoted: mek})
break 

//--- texto a voz
case 'tts':
case 'voz': 
                if(!isVerify) return isUser()
                if (isBanned) return reply(banf())
                try {
					if (args.length < 1) return Fg.sendMessage(from, `❎ Ingrese el código de idioma y el texto\n\n*Ejemplo* : ${prefix}tts es Hola puercos`, text, {quoted: mek})
					const gtts = require('./libreria/gtts')(args[0])
					if (args.length < 2) return Fg.sendMessage(from, `❎ Ingrese el código de idioma y el texto\n\n*Ejemplo* : ${prefix}tts es Hola puercos`, text, {quoted: mek})
					dtt = body.slice(9)
					ranm = getRandom('.mp3')
					dtt.length > 600
					? reply('❎ El texto es demasiado largo, tampoco te voy a leer la Biblia')
					: gtts.save(ranm, dtt, function() {
						Fg.sendMessage(from, fs.readFileSync(ranm), audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
						fs.unlinkSync(ranm)
					})
					} catch (e) {
                     	console.log(`Error :`, color(e,'red'))
                         reply('❎ Error, inténtelo más tarde')
                     }
					break

//******************** 》 MAKER 《 ********************\\

//https://docs-jojo.herokuapp.com/api/galaxywp?text=Jojo
//https://docs-jojo.herokuapp.com/api/phblogo?text1=JOJO&text2=APIs
case 'phlogo':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            pll = body.slice(8);
            plo = pll.split("|")[0];
			      plo2 = pll.split("|")[1];
            const preffk = `✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* Texto|Texto2`
					  if (args.length < 1) return reply(preffk)
            rakz = await getBuffer(`https://ferdiz-afk.my.id/api/maker/pornhub?text=${plo}&text2=${plo2}`)
            reply(wait())
            Fg.sendMessage(from, rakz, image, {quoted: mek, caption: `${isPremium ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n✅ Listo : *${plo} ${plo2}*`})
            .catch((err) => {
            reply(`❎ Error, intente más tarde`); 
            })
            limitAdd(sender, limit)
             break;

case 'retroneon':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            pll = body.slice(11);
            plo = pll.split("|")[0];
			  plo2 = pll.split("|")[1];
			    plo3 = pll.split("|")[2];
            const preffk2 = `✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* Texto|Texto2|Texto3`
					  if (args.length < 1) return reply(preffk2)   
            rakz = await getBuffer(`https://docs-jojo.herokuapp.com/api/neon?text1=${plo}&text2=${plo2}&text3=${plo3}`)
            reply(wait())
            Fg.sendMessage(from, rakz, image, {quoted: mek, caption: `${isPremium ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n✅ Listo : *${plo} ${plo2} ${plo3}*`})
            .catch((err) => {
            reply(`❎ Error, intente más tarde`); 
            })
            limitAdd(sender, limit)
             break;

case 'glich':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            pll = body.slice(7);
            plo = pll.split("|")[0];
			      plo2 = pll.split("|")[1];
            const preffk3 = `✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* Texto|Texto2`
					  if (args.length < 1) return reply(preffk3)   
            rakz = await getBuffer(`https://docs-jojo.herokuapp.com/api/ttlogo?text1=${plo}&text2=${plo2}`)
            reply(wait())
            Fg.sendMessage(from, rakz, image, {quoted: mek, caption: `${isPremium ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n✅ Listo : *${plo} ${plo2}*`})
            .catch((err) => {
            reply(`❎ Error, intente más tarde`); 
            })
            limitAdd(sender, limit)
             break;

case 'blackpink':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo : *${prefix + command}* Texto`)
reply(wait())
bp = args.join(" ")
bp = await getBuffer(`https://docs-jojo.herokuapp.com/api/blackpink?text=${bp}`)
reply(wait())
Fg.sendMessage(from, bp, image, {quoted: mek, caption: `${isPremium ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n✅ Listo : *${bp}*`})
.catch((err) => {
            reply(`❎ Error, intente más tarde`); 
            })
limitAdd(sender, limit)
break

case '3d':
				if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
				if (args.length < 1) return reply(`✳️ Ingrese el texto\n📌 Ejemplo : ${prefix + command} Texto`)
			    defg = q
                data = await await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${defg}`)
                
                	reply(wait())
                Fg.sendMessage(from, data, image, {quoted: mek, caption: `${isPremium ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n✅ Listo : *${defg}*`})
                .catch((err) => {
            reply(`❎ Error, intente más tarde`); 
            })
                limitAdd(sender, limit)
                break
                
case 'luzneon':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
				if (args.length < 1) return reply(`✳️ Ingrese el texto\n📌 Ejemplo : ${prefix + command} Texto`)
			    defg = q
                data = await await getBuffer(`https://docs-jojo.herokuapp.com/api/neon_light?text=${defg}`)
                
                	reply(wait())
                Fg.sendMessage(from, data, image, {quoted: mek, caption: `${isPremium ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n✅ Listo : *${defg}*`})
                .catch((err) => {
            reply(`❎ Error, intente más tarde`); 
            })
                limitAdd(sender, limit)
                break
                
                
case 'gaming':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
				if (args.length < 1) return reply(`✳️ Ingrese el texto\n📌 Ejemplo : ${prefix + command} Texto`)
			    defg = q
                data = await await getBuffer(`https://docs-jojo.herokuapp.com/api/gaming?text=${defg}`)
                	reply(wait())
                Fg.sendMessage(from, data, image, {quoted: mek, caption: `${isPremium ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n✅ Listo : *${defg}*`})
                .catch((err) => {
            reply(`❎ Error, intente más tarde`); 
            })
                limitAdd(sender, limit)
                break
                
 ///++++---------=============================+++++++
                 

                    
                    case 'sinfondo':
   if(!isVerify) return isUser()
 if (isBanned) return reply(banf())
 if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if ((isMedia || isQuotedImage)) {
const encmedianb = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const median = await Fg.downloadAndSaveMediaMessage(encmedianb)
reply(wait())
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
ranp = getRandom('.png')
await removeBackgroundFromImageFile({path: median, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
fs.unlinkSync(median)
let buffer = Buffer.from(res.base64img, 'base64')
Fg.sendMessage(from, buffer, image, {quoted: mek, caption: '✅ Listo'})
fs.unlinkSync(buffer)
})
}
limitAdd(sender, limit)
break
//--------𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗖𝗢𝗠𝗔𝗡𝗗O--------
case 'addcmd': 
case 'setcmd':
case 'stickcmd':
if (!isOwner && !isMods) return reply(modsB())
if (isQuotedSticker) {
if (!q) return reply(`✳️ Responde a un sticker con *${prefix + command}* _${prefix}comando_\n\n📌 Ejemplo *${prefix + command}* ${prefix}menu`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
reply("✅ Comando guardado")
} else {
reply(`✅ Responde a un sticker con *${prefix + command}* _${prefix}comando_\n\n📌 Ejemplo *${prefix + command}* ${prefix}menu`)
}
break
case 'delcmd':
case 'delstickcmd':
if (!isOwner && !isMods) return reply(modsB())
if (!isQuotedSticker) return reply(`✳️ Responde al sticker comando para eliminar\n\n📌 Uso del comamdo : ${prefix + command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/stickcmd.json', JSON.stringify(_scommand))
reply("✅ Comando eliminado")
break
case 'listcmd':
case 'liststickcmd':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
let teksnyee = `「 *LISTA DE STICKER CMD* 」`
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `

❉─────────────────────❉ 
*?? ID :* ${i.id}
*🛡️ Comando :* ${i.chats}
❉─────────────────────❉`
}
reply(teksnyee)
break

case 'getstik': 
case 'getstikcmd': 
case 'getcmd':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if(!q)return reply(`📌Ejemplo : ${prefix + command} menu`)
try {
ga = fs.readFileSync(`./src/stickcmd/${q}.webp`)
Fg.sendMessage(from, ga, sticker,{quoted:mek})
} catch {
reply(`✳️El Sticker comando no esta registrado o  el Sticker comando usa un prefijo!\n\n📌 Para ver la lista de stickcmd escriba *${prefix}liststickcmd*`)
}
break

//--borrar chats del bot
case 'clearchat':
case 'clearall':
{
if (!isOwner)return reply(ownerB()) 
let chiit = await Fg.chats.all()
for (let i of chiit){
Fg.modifyChat(i.jid, 'delete', {
includeStarred: false
  })
}
reply(`😔 borre todos mis chats`)
  }
break

case 'setprefix':
if (!isOwner)return reply(ownerB())
if (args.length < 1) return reply(`*✳️Formato del comando!*\n\n*📌 Ejemplo :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} # (Personalizado!)`)
if((args[0]) == 'multi'){
if(multi)return reply('_✳️ El Prefijo actual es multi prefijo!_')
multi = true
nopref = false
single = false
reply(`✅ Se cambio el prefijo a *multiprefijo*`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_✳️ ya está sin prefijo!_')
multi = false
single = false
nopref = true
reply(`✅ Se cambió de prefijo a *noprefix*\n\n📌Ya no necesitas un prefijo para usar los comandos`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${q}`
reply(`✅ Prefijo cambiado a : *${q}*`)
}
break

// Lista de Grupos 
case 'listgroup': 
case 'grouplist': 
case 'listgp':
case 'listagp':
case 'listagrupos':
if (!isOwner && !isMods) return reply(modsB())
const txs = Fg.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`
❉─────────────────────❉
• *🔖Nombre* : ${Fg.getName(v.jid)}
• *🛡️ID de Grupo : ${v.jid}*
• *🏮Estado* : ${v.read_only ? 'noUnido' : 'Unido'}
❉─────────────────────❉`).join`\n\n`
reply('≡ *LISTA DE GRUPOS*\n\n' + txs)
break

case 'antidelete':
if (!isOwner) return reply(ownerB()) 
if (args.length < 1) return reply(`✳️ Anti mensajes eliminados\n\n📌 Para activar Escriba *${prefix +command} on* \nPara desactivar *${prefix +command} off*`)
if (args[0] === "on") {
if(antidel)return reply('✳️ Ya ha sido activado antes!')
antidel = true
reply(`✅ Se actico Anti - Delete`)
} else if (args[0] === "off") {
if(!antidel)return reply('✳️ Ya ha sido desactivado antes!')
antidel = false
reply(`✅ Se desactivo Anti - Delete`)
} else {
reply(`✳️ Anti mensajes eliminados\n\n📌 Para activar Escriba *${prefix +command} on* \nPara desactivar *${prefix +command} off*`)
}
break
                
case 'bc':
case 'tx':
if (!isOwner && !isMods)return reply(modsB()) 
if (args.length < 1) return reply('✳️ Que quieres transmitir?')
bcc = await Fg.chats.all()
if (isMedia && !mek.message.imageMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await Fg.downloadMediaMessage(encmedia)
for (let i of bcc){
Fg.sendMessage(i.jid, media, image, {caption: `*TRANSMISIÓN ┃ STAFF*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n${q}`})
}
reply(`*✅ Transmision realizada*`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await Fg.downloadMediaMessage(encmedia)
for (let _ of bcc) {
Fg.sendMessage(_.jid, bc, video, {caption: `*TRANSMISIÓN ┃ STAFF*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n${q}`})
}
reply('*✅ Transmision realizada* ')
}	else {
for (let _ of bcc) {
sendMess(_.jid, `*TRANSMISIÓN ┃ STAFF*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n${q}`)
	}
reply(`✅ Transmision realizada *Total chats ${totalchat.length}*`)
		}
break

case 'ms':
case 'mensaje':
					if(!isVerify) return isUser()
					if (isBanned) return reply(banf())
					if (args.length < 1) return reply('✳️ Que mensaje quieres enviar?')
					if (q.length > 10000) return reply('❎ El mensaje el demasiado largo!')
					if (sender.includes("9568604")) return reply(`❎ No puedes enviar un mensaje`);
					if (budy.includes(".com")) return reply(`❎ No puedes enviar enlaces a través de mensajes.`);
					anu = await Fg.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await Fg.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Fg.sendMessage(_.jid, buff, image, {caption: `📩「 *Mensaje enviado* 」📩\n\n• *Grupo :* ${groupName}\n• *De :* @${sender.split("@")[0]}\n\n${q}`}, text, { contextInfo: {mentionedJid: [sender] } } )
						}
					} else {
						for (let _ of anu) {
						Fg.sendMessage(_.jid, `📩「 *Mensaje enviado* 」📩\n\n• *Grupo :* ${groupName}\n• *De :* @${sender.split("@")[0]}\n\n${q}`, text, { contextInfo: {mentionedJid: [sender] } } )
						}
					}
					
					break

case 'ban':
				if (!isOwner && !isMods) return reply(modsB())
				if (args.length < 1) return reply(`✳️ A quien quieres que banee?`)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					ban.push(bnnd)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					
					if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
					} else {
						mentions(`✅ @${mentioned[0].split('@')[0]} ha sido baneado!\n\nEste usuario no podrá volver a usar mis comandos`, mentioned, true)
					}
					
					break
				
		        case 'unban':
				if (!isOwner && !isMods) return reply(modsB())
				if (args.length < 1) return reply(`✳️ Menciona al usuario para desbanear!`)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				//bnnd = body.slice(8)
				ban.splice(`${args[0].replace('@')}@s.whatsapp.net`, 1)
				fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
				
				if (mentioned.length > 1) {
						teks = ''
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
					} else {
						mentions(`✅ @${mentioned[0].split('@')[0]} ha sido Desbaneado`, mentioned, true)
					}
					break 

//-- Lista de baneados por el bot
case 'banlist':
  if(!isVerify) return isUser()
      teks = ` ≡ *BANEADOS*\nLos siguientes números son una lista de números baneados por infringir las reglas o enviar spam al Bot\n\n*Total* : ${ban.length}\n╭─────❐ *Lista* ❐────────✾\n`
	    for (let baned of ban) {
	    teks += `├╼ @${baned.split('@')[0]}\n`
					}
	    teks += `╰──────────────────✾`
	    Fg.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": ban}})
					break
					
					
//---
case 'listonline':
case 'online':
case 'enlinea':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (!isGroup) return reply(group())
        		let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
    
			    let online = [...Object.keys(Fg.chats.get(ido).presences), Fg.user.jid]
			    Fg.sendMessage(from, '☰ *LISTA DE USUARIOS EN LÍNEA*\n╭──────────────────✾\n' + online.map(v => '├╼ @' + v.replace(/@.+/, '')).join`\n` + `\n╰──────────────────✾`, text, { quoted: mek,
  			  contextInfo: { mentionedJid: online }
			    })
				break

case 'sider':
case 'read':
case 'leido':
case 'leído':
case 'leidos':
case 'leídos':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroupAdmins && !isOwner)return reply(admin())
if (!isGroup) return reply(group())
if (!isQuotedMsg)return reply('✳️Responde a un mensaje mío')
infom = await Fg.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `▢ *Mensaje Leído por* :\n\n`
for(let i of infom.reads){
teks += '❏'+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `⬡ ⌚ *Hora* : ` + moment(`${i.t}` * 1000).tz('America/La_Paz').format('HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
       
case 'getsider':
case 'noleidos':
case 'noleido':
try {
	if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group()) 
if (!isQuotedMsg) return reply('✳️ Responde a un mensaje mío')      
infom = await Fg.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
hemm = infom.reads
hemms = infom.deliveries
readon = hemms.map(v => v.jid)
readdin = hemm.map(v => v.jid)
stamp = hemm.map(v => v.t)
      
function toTime(UNIXtimestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIXtimestamp);
if (ribuan) {
a = new Date(UNIXtimestamp * 1000);
} 	
// ambil pecahan waktu masing-masing
var hour = a.getHours();
var min = a.getMinutes();
var sec = a.getSeconds();
// gabungkan ke dalam variable time
var time = `${hour}:${min}:${sec}` ;
return time;
}

function toBulan(UNIXtimestamp, ribuan){
ribuan = (typeof ribuan == 'undefined') ? false : true;

let a = new Date(UNIXtimestamp);
if (ribuan) {
a = new Date(UNIXtimestamp * 1000);
}
//buat index bulan
var months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var myDays = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
// fecha
var day = a.getDate()
bulanee = a.getMonth()
var thisDay = a.getDay(),
thisDay = myDays[thisDay];
var yy = a.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
var bul = `${thisDay}, ${day} - ${months[bulanee]} - ${year}` ;
return bul;
}
teksx = `▢ *Mensaje Leído por*\n\n`
for (let i of hemm) {
teksx += `📌 *Nombre* : @${i.jid.split('@')[0]}\n ⌚ *Hora* : ${toTime(i.t, true)}\n *📆 Fecha* : ${toBulan(i.t, true)}\n\n`
}
teksx1 = `▢ *Mensaje no Leído*\n\n`
for (let i of hemms){
teksx1 += ` 📌 *Nombre* : @${i.jid.split('@')[0]}\n`
teksx1 += ` ⌚ *Hora* : ${toTime(i.t, true)}\n *📆 Fecha* : ${toBulan(i.t, true)}\n\n`
}
Fg.sendMessage(from, teksx, text, { sendEphemeral: false, quoted: mek, thumbnail: false, contextInfo: { forwardingScore:999, isForwarded: false, mentionedJid: readdin }})
Fg.sendMessage(from, teksx1, text, { sendEphemeral: false, quoted: mek, thumbnail: false, contextInfo: { forwardingScore:999, isForwarded: false, mentionedJid: readon }})
} catch(e) {
reply('✳️ Responde a un mensaje mío')
reply(e)
console.log(e)
}
break

                  case 'hoy':
                   case 'hora':
                   case 'fecha':
                   if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                   const timx = moment.tz('America/Mexico_City').format('HH:mm:ss')
                   const argt = moment.tz('America/Argentina/Salta').format('HH:mm:ss')
                   tpf = `*${fecha2}*
Hora : *${hora2}*
   ─────────────
México : *${timx}*
Argentina : *${argt}*
    ─────────────`     
  reply(tpf)
                   break
                  
                  //-----𝗘𝗗𝗨𝗖𝗔𝗖𝗜𝗢́𝗡 

case 'translate':
		case 'tl':
		case 'trad':
		case 'traducir':
		   if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
				   if (args.length < 1) return reply(`✳️ Ingrese el texto para traducir\n\n📌 Ejemplo : ${prefix + command} es Hi bro`)
                    idioma = args[0]
                    args.shift()
                    textra = args.join(' ')
				anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/translate?lang=${idioma}&text=${textra}&apikey=${hunterkey}`, {method: 'get'})
				teks = anu.text
reply(teks)
limitAdd(sender, limit)
break

case 'calc':
case 'calculadora':
case 'cal':
case 'calcu':
if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ Ingrese la ecuación\n\nsímbolos compatibles -, +, *, /, ×, ÷, π, e, (, )`)
global.math = global.math ? global.math : {}
let ed = from
if (ed in global.math) {
clearTimeout(global.math[ed][3])
delete global.math[ed]
reply(`✳️ Ingrese la ecuación\n\nsímbolos compatibles -, +, *, /, ×, ÷, π, e, (, )`)
}
let val = q
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(` 「 *CALCULADORA* 」
╭━━━━━━━━━━━━━━━━━━╮
│ ${format} =
├──────────────────┤
│ ${result}
╰━━━━━━━━━━━━━━━━━━╯`)

} catch (e) {
if (e == undefined) throw '?'
throw 'Formato incorrecto, solo 0-9 y símbolo -, +, *, /, ×, ÷, π, e, (, ) son compatibles'
}

break

case 'playstore':
					if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            if(!q) return reply(`✳️ Ingrese nombre de la aplicación\n\n📌Ejemplo *${prefix + command}* WhatsApp`)
            let play = await hx.playstore(q)
            reply(wait()) 
            let store = '「 *BÚSQUEDA EN PLAY STORE* 」\n\n❉─────────────────────❉'
            for (let i of play){
            store += `\n*📌Nombre* : ${i.name}
*🔗 Link* : ${i.link}
*👨🏻‍💻 Dev* : ${i.developer}
*🔗 Link Dev* : ${i.link_dev}
❉─────────────────────❉`
            }
            reply(store)
            limitAdd(sender, limit)
            break
      
      case 'google':
if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Que quieres buscar en Google?`)
teks = args.join(' ')
reply(wait())
resgofg = await googlefg({'query' : `${teks}`})
kant = `「 *BUSQUEDA EN GOOGLE* 」\n\n`
for (let i of resgofg) {
kant += `❉─────────────────────❉
*📌 Título* : ${i.title}
*🔗 Link* : ${i.link}
*🧾 Info* : ${i.snippet}
❉─────────────────────❉\n\n`
}
var akhir = kant.trim()
reply(akhir)
limitAdd(sender, limit)
break

case 'wiki':
case 'wikipedia':
if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ingrese el texto\n\n📌 Ejemplo *${prefix + command}* Lil Peep`)
teks = args.join(' ')
reswiki = await wikiSearch(teks).catch(e => {
return reply('_❎ No encontré ningún resultado_') 
}) 
result = `「 *BUSQUEDA EN WIKIPEDIA* 」\n\n
❉─────────────────────❉
*📌 Título :* ${reswiki[0].judul}
*📰 Wiki :* ${reswiki[0].wiki}
❉─────────────────────❉\n\n`

Fg.sendMessage(reswiki[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
limitAdd(sender, limit)
break
//----

//---Acortar enlaces
				case 'tinyurl':
				 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
				if (args.length < 1) return reply(`✳️ Ingrese el link para acortar`)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
limitAdd(sender, limit)
break

case 'ssweb': 
case 'screenshot': 
case 'captura': 
case 'screen':
               if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
                   if (args.length < 1) return reply(`✳️ Ejemplo :\n*${prefix + command} https://github.com/g4tito*`)                  
                   reply(wait())
                   anu = await getBuffer(`http://anu-team.herokuapp.com/api/ssweb?url=${q}`)
                   Fg.sendMessage(from, anu, image, {caption: `✅ Screenshot de la página`, quoted: mek})
                   .catch((err) => {
            reply(`❎ Error, intente de nuevo mas tarde`); 
            })
                   limitAdd(sender, limit)
                   break

case 'tagme':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
mentions(`@${sender.split("@")[0]} Hola :)`, [sender], true)
break

case 'mention':
case 'mención':
case 'mencion':
case 'faketag':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if(!q)return reply('✳️ Ingrese un número')
mentions(`@${q.split("@")[0]}`, [`${q}@s.whatsapp.net`], false)
break
//-----
                   
      case 'kick':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins) return reply(admin())
if(!q)return reply(`✳️ Menciona a alguien\n\n📌Ejemplo : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return reply(Badmin())
y = q.split('@')[1] + '@s.whatsapp.net'
Fg.groupRemove(from, [y])
reply(`✅ Ordenes recibidas, emitidas`)
break

case 'okick':
			 if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins) return reply(admin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('✳️ Responde a un mensaje!')
			kick = mek.message.extendedTextMessage.contextInfo.participant
		    Fg.groupRemove(from, [kick])
						reply('✅ Ordenes recibidas, emitidas')
                    break

      case 'add':
if(!isVerify) return isUser()
if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins) return reply(admin())
					if (args.length < 1) return reply('Yang mau di add siapa??')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
					try {
						Fg.groupAdd(from, `${args[0]}@s.whatsapp.net`)
					} catch (e) {
						console.log('Error :', e)
						reply('❎ Error al añadir al usuario')
					}
        break
 
      //--- abrir y cerrar grupo
case 'gp2':
case 'grupo2':
case 'group2':
					 if(!isVerify) return isUser()
                    if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
if (args.length < 1) return reply(`✳️ Para abrir grupo : *${prefix + command}* open\npara cerrar grupo : *${prefix + command}* close`)
if (args[0] === 'open') {
 reply('✅ Grupo abierto ahora *todos los participantes* pueden escribir')
Fg.groupSettingChange(from, GroupSettingChange.messageSend, false)
	} else if (args[0] === 'close') {
reply('✅ Grupo cerrado ahora *solo los admin* pueden escribir')
Fg.groupSettingChange(from, GroupSettingChange.messageSend, true)
	} else {
reply(` 🗂️ (${args[0]}) No disponible\n*${prefix + command}* open\npara cerrar grupo : *${prefix + command}* close`)
}
break

case 'gp':
case 'grupo':
case 'group':
if(!isVerify) return isUser()
if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
        sendButMessage(from, `Quiere serrar o abrir el grupo`, `Elija un modo`, [
          {
            buttonId: `${prefix}grupo2 close`,
            buttonText: {
              displayText: `⚫ Cerrar`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}grupo2 open`,
            buttonText: {
              displayText: `🟢 Abrir`,
            },
            type: 1,
          },
        ]);
        break;

case 'closetime':
if(!isVerify) return isUser()
if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
                    if (args[1]=="s") {var timer = args[0]+"000"
				    } else if (args[1]=="m") {var timer = args[0]+"0000"
				    } else if (args[1]=="h") {var timer = args[0]+"00000"
				    } else {return reply("Use assim:\ns: segundos\nm: minutos\nh: horas\nex: +closetime 30 s")}
				    setTimeout( () => {
					var nomor = mek.participant
					const close = {
					text: `Cerrando grupo a pedido de @${nomor.split("@s.whatsapp.net")[0]}`,
					contextInfo: { mentionedJid: [nomor] }
					}
					Fg.groupSettingChange (from, GroupSettingChange.messageSend, true);
					reply(close)
				    }, timer)
				    break
				
case 'opentime':
if(!isVerify) return isUser()
if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply(Badmin())
                    if (args[1]=="s") {var timer = args[0]+"000"
				    } else if (args[1]=="m") {var timer = args[0]+"0000"
				    } else if (args[1]=="h") {var timer = args[0]+"00000"
				    } else {return reply("*Use assim:\ns: segundos\nm: minutos\nh: horas\nex: +opentime 30 s")}
				    setTimeout( () => {
					var nomor = mek.participant
					const open = {
					text: `Abriendo grupo a pedido de @${nomor.split("@s.whatsapp.net")[0]}`,
					contextInfo: { mentionedJid: [nomor] }
					}
					Fg.groupSettingChange (from, GroupSettingChange.messageSend, false);
					reply(open)
				    }, timer)
				    break

//--- Cambiar descripción del grupo
case 'setdesc': 
case'setdescgp':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isOwner && !isGroupAdmins) return reply(admin())
if(!q)return reply(`❇️ Ingrese la nueva descripción del grupo`)
if (!isBotGroupAdmins) return reply(Badmin())
if (!isGroup) return reply(group())
Fg.groupUpdateDescription(from, `${q}`)
Fg.sendMessage(from, '✅ Se cambió la descripción del grupo', text, {quoted:mek})
break

//--- Cambiar nombre del grupo
case 'setname': 
case 'setnamegp':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isOwner && !isGroupAdmins) return reply(admin())
if(!q)return reply('❇️ Cuál será el nuevo nombre del grupo?')
if (!isBotGroupAdmins) return reply(Badmin())
if (!isGroup) return reply(group())
Fg.groupUpdateSubject(from, `${q}`)
Fg.sendMessage(from, '✅ Nombre de grupo cambiado', text, {quoted:mek})
break

case 'resetlink': 
case 'revokelink': 
case 'anularlink':
if (isAw) return reply('⚠️ Está prohibido anular el link de este grupo❗')
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isBotGroupAdmins) return reply (Badmin())
Fg.query({ json: ['action', 'inviteReset', from], expect200: true })
linkgp = await Fg.groupInviteCode(from)
fgxd = `✅ Enlace del grupo anulado

📌 Nuevo enlace : 
https://chat.whatsapp.com/${linkgp}`
Fg.sendMessage(from, fgxd, text, {quoted: mek})
break

//-- Bot sale del grupo
case 'leave':
case 'salir':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if(!isGroup)return reply(group())
if(!isGroupAdmins && !isOwner)return reply(admin())
sendMess(from,`😔 Adios  grupo *${groupName}*`)
setTimeout(() => {
Fg.groupLeave(from)
}, 2000);
break

//--- Lista de administradores del grupo
case 'adminlist':
case 'listadmin':
case 'staff':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					teks = `▢ *STAFF DEL GRUPO* _${groupMetadata.subject}_\nTotal : ${groupAdmins.length}\n\n╭──────────────────✾\n`
			
					for (let admin of groupAdmins) {
						teks += `├╼ @${admin.split('@')[0]}\n`
					}
					teks += `╰──────────────────✾`
					mentions(teks, groupAdmins, true)
					break

//------
case 'serbot':
case 'jadibot':
   if (isYo) return reply(`❎ No puedes ser bot en un bot ??`)
   if(!isPremium)return reply(premi())
if(!isVerify) return isUser()
                    if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
    jadibot(reply,Fg,from)
    limitAdd(sender, limit)
    break
    
    case 'stopbot':
    case 'stopjadibot':
  if (!isYo) return reply(`✳️Disponible solo para los bots Temporales`) 
    stopjadibot(reply)
    break
    
    case 'listbot':
    case 'listabot':
    case 'listabots':
    case 'listbots':
   if(!isVerify) return isUser()
   if (isBanned) return reply(banf())
    let tekss = '⦙☰ Lista de Bots\n'
    for(let i of listjadibot) {
    	
    tekss += `*#️⃣ Numero* : ${i.jid.split('@')[0]}
*🔮 Nombre* : ${i.name}
*📱 Dispositivo* : ${i.phone.device_manufacturer}
*📇 Modelo* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break


      case "mode":
      case "modo":
        if (!isOwner)return reply(ownerB()) 
        sendButMessage(from, `🛡️ Bot MODO Privado/Publico`, `Elija un modo`, [
          {
            buttonId: `${prefix}privado`,
            buttonText: {
              displayText: `🛡️Privado`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}publico`,
            buttonText: {
              displayText: `🌍 Publico`,
            },
            type: 1,
          },
        ]);
        break;
       
       //--- preguntas
case 'pregunta':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
respuesta = ['Si', 'No', 'Tal vez', 'Puede ser', 'Puede que no', 'Yo que se', 'mmmm🤔.... Dejame lo pienso un poco', 'Puede que si']
answer = respuesta[Math.floor(Math.random() * respuesta.length)]
if (!q) return reply(`✳️ *Ejemplo* : ${prefix + command} soy feo?`)
reply(answer)
break

//--- pareja al azar 
case 'shipping':
    if(!isVerify) return isUser()
  if (isBanned) return reply(banf()) 
    if (!isGroup) return reply(group())
    if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
					jds = []
					jdii = groupMembers
					koss = groupMembers
					akuu = jdii[Math.floor(Math.random() * jdii.length)]
				 diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `*La pareja del dia* 
					
●❯────────────────❮●
@${akuu.jid.split('@')[0]}
❤️
@${diaa.jid.split('@')[0]}
●❯────────────────❮●`
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					gameAdd(sender, glimit)
					break	
					
					case 'random':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group())
					jds = []
					 jdii = groupMembers
					 diaa = jdii[Math.floor(Math.random() * jdii.length)]
					teks = `✅ El usuario elegido al azar es @${diaa.jid.split('@')[0]}`
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
case 'exif':
if (!isOwner)return reply(ownerB())
if (args.length < 1) return reply(`✳️ Uso del comamdo \n\n📌 ${prefix + command} nombre|autor`)
if (!arg.split('|')) return reply(`✳️ Uso del comamdo \n\n📌 ${prefix + command} nombre|autor`)
exif.create(arg.split('|')[0], arg.split('|')[1])
reply(`✅ Nombre y autor guardado`)
break
	        
case 'stickfg':
case 'fgstick':
if (!isOwner)return reply(ownerB())
if (!isQuotedSticker) return reply(`✳️Responde a un sticker *${prefix + command}*`)
const encmediia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const meidia = await Fg.downloadAndSaveMediaMessage(encmediia, `./sticker/${sender}`)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('error')
Fg.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
break

//-----

   case  'trigger': 
       case 'triggered':
					case 'ger':
					case 'motivado':
					case 'motivada':
					 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					limitAdd(sender, limit)
					} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break
					
		case  'imggay':
		case  'imagegay':
		if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
gay = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
reply(wait())
owgig = await Fg.downloadMediaMessage(gay)
await fs.writeFileSync(`./stickgay.jpeg`, owgig)
var imgbb2 = require('imgbb-uploader')
anug = await imgbb2("20a14861e4f7591f3dc52649cb07ae02", './stickgay.jpeg')
txtg = `${anug.display_url}`
sgay = await getBuffer(`https://pecundang.herokuapp.com/api/gay?url=${txtg}`)
Fg.sendMessage(from, sgay, image, {quoted: mek, caption: `${isPremium && isOwner ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n• *Link* : ${txtg}\n\n✅ Aqui tienes *0.0*`})
limitAdd(sender, limit)
} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break

case 'gtav':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  reply(wait())
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
owgi = await Fg.downloadAndSaveMediaMessage(ger)
anu = await imgbb("9d7a1bd760e2e3360dbfd40cec4d7ad7", owgi)
imgtrg = `${anu.display_url}`
anu1 = await fetchJson(`https://api-gdr2.herokuapp.com/api/photooxy/gtav?url=${imgtrg}`)
if (anu1.error) return reply("Error")
nobg = await getBuffer(anu1.result.url)
Fg.sendMessage(from, nobg, image, {
quoted: mek
})
} else {
reply(`✳️ Envia o responde a una imagen`)
}
break

					case 'imgrip':
					case 'imagerip':
					if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
rip = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
reply(wait())
owgir = await Fg.downloadMediaMessage(rip)
await fs.writeFileSync(`./stickrip.jpeg`, owgir)
var imgbb2r = require('imgbb-uploader')
anur = await imgbb2r("20a14861e4f7591f3dc52649cb07ae02", './stickrip.jpeg')
txtr = `${anur.display_url}`
srip = await getBuffer(`https://pecundang.herokuapp.com/api/rip?url=${txtr}`)
Fg.sendMessage(from, srip, image, {quoted: mek, caption: `${isPremium && isOwner ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n✅ Aqui tienes *xd*`})
limitAdd(sender, limit)
} else {
reply('✳️ *Envia una imagen con el comando o etiqueta una imagen que se haya enviado*')
}
break

case 'imgrip2':
					case 'imagerip2':
					if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
rip = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
reply(wait())
owgir = await Fg.downloadMediaMessage(rip)
await fs.writeFileSync(`./stickrip.jpeg`, owgir)
var imgbb2rr = require('imgbb-uploader')
anur = await imgbb2rr("20a14861e4f7591f3dc52649cb07ae02", './stickrip.jpeg')
txtr = `${anur.display_url}`
srip = await getBuffer(`breakhttps://ferdiz-afk.my.id/api/maker/rip?picurl=${txtr}`)
Fg.sendMessage(from, srip, image, {quoted: mek, caption: `${isPremium && isOwner ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n✅ Aqui tienes *xd*`})
limitAdd(sender, limit)
} else {
reply('✳️ *Envia una imagen con el comando o etiqueta una imagen que se haya enviado*')
}
break

case 'wanted':
					case 'imagerip2':
					if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
rip = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
reply(wait())
owgir = await Fg.downloadMediaMessage(rip)
await fs.writeFileSync(`./stickrip.jpeg`, owgir)
var imgbb2rrr = require('imgbb-uploader')
anur = await imgbb2rrr("20a14861e4f7591f3dc52649cb07ae02", './stickrip.jpeg')
txtr = `${anur.display_url}`
srip = await getBuffer(`https://api.dhamzxploit.my.id/api/canvas/wanted?url=${txtr}`)
Fg.sendMessage(from, srip, image, {quoted: mek, caption: `${isPremium && isOwner ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n✅ Aqui tienes *:3*`})
limitAdd(sender, limit)
} else {
reply('✳️ *Envia una imagen con el comando o etiqueta una imagen que se haya enviado*')
}
break

		case  'passed':
		case  'aprobado':
		if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					limitAdd(sender, limit)
					} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break
					
		case  'jail':
		case  'scelda':
		case  'celda':
		case  'carcel':
		case 'scarcel':
		if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (((isMedia && !mek.message.videoMessage) || isQuotedImage) && args.length == 0) {
rej = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek;
reply(wait())
owgir = await Fg.downloadMediaMessage(rej)
await fs.writeFileSync(`./stickc.jpeg`, owgir)
var imgbb2c = require('imgbb-uploader')
anuc = await imgbb2c("20a14861e4f7591f3dc52649cb07ae02", './stickc.jpeg')
txtc = `${anuc.display_url}`
sc = await getBuffer(`https://pecundang.herokuapp.com/api/jail?url=${txtc}`)
const bas642c = `data:image/jpeg;base64,${sc.toString('base64')}`
var mantap2c = await convertSticker(bas642c, `🐱gatybot🤖`, `「gatitoツ」`)
var imageBuffer2c = new Buffer.from(mantap2c, 'base64');
Fg.sendMessage(from, imageBuffer2c, sticker, {quoted: mek})
fs.unlinkSync('./stickc.jpeg')
limitAdd(sender, limit)
} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break
		
		case  'wasted':
		case  'desperdiciado':
		case  'desperdiciada':
		if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					reply(wait())
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('✅ Descargando sticker...'))
					owgi = await  Fg.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("3b8594f4cb11895f4084291bc655e510", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					Fg.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color(moment.tz('America/La_Paz').format('HH:mm:ss'), "gold"), color('📤 Enviando sticker...'))
					fs.unlinkSync(rano)
					})
					limitAdd(sender, limit)
					} else {
					reply('✳️ Envia o responde a una imagen')
					}
					break 
					
case 'stickmeme':
case 'smeme':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isQuotedSticker) return reply(`✳️Responde a un sticker con el comando\n📌Ejemplo ${prefix + command} text|text2`)
smeme = q
var tex1 = smeme.split('|')[0]
var tex2 = smeme.split('|')[1]
if (!tex2) return reply(`✳️Responde a un sticker con el comando\n📌Ejemplo ${prefix + command} text|text2`)
if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(wait())
owgi = await Fg.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen2?teks1=${tex1}&teks2=${tex2}&img_url=${teks}`, mek)
fs.unlinkSync('./stickmeme.jpeg')
}
limitAdd(sender, limit)
break

case 'stickmeme2':
case 'smeme2':	
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())						
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if(!q) return reply(`✳️Responde a un sticker con el comando\n📌Ejemplo ${prefix + command} jsjs`)
if (mek.message.extendedTextMessage != undefined || mek.message.extendedTextMessage != null) {
ger = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
reply(wait())
owgi = await Fg.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen3?teks=${q}&img_url=${teks}`, mek)
fs.unlinkSync('./stickmeme.jpeg')
}
limitAdd(sender, limit)
break
        
      case "grupo":
      if(!isVerify) return isUser()
       if (isBanned) return reply(banf())
        if (!isOwner &&!isGroupAdmins) return reply(admin())
        if (!isGroup) return reply(group())
        sendButMessage(from, `*✳️ Configuración de grupo de abrir o serrar el grupo*\n\nSi no ves los botones pon ${prefix}grupo2`, `Elija una opción`, [
          {
            buttonId: `${prefix}group open`,
            buttonText: {
              displayText: `ABRIR`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}group close`,
            buttonText: {
              displayText: `CERRAR`,
            },
            type: 1,
          },
        ]);
        break;


//-- mencionar a todos los miembros
case 'mentionall': 
case 'tagall':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
		  if (!isGroup) return reply(group())
			if (!isGroupAdmins && !isOwner) return reply(admin())
					members_id = []
		teks = `▢ *Grupo* : ${groupName}\n▢ *Miembros* : ${groupMembers.length}\n▢ *Mensaje* : ${q}\n╭─────❐ *Menciones* ❐──────✾\n`
			for (let mem of groupMembers) {
				teks += `├╼ @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
		teks += `╰──────────────────✾`
			mentions(teks, members_id, true)
			break
			
			case 'hidetag': 
case 'here':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner)return reply(admin())

var group = await Fg.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: q,
contextInfo: { mentionedJid: mem },
quoted: mek
}
Fg.sendMessage(from, options, text)
break

//-- Notification al grupo
case 'notificar':
case 'notify':
if (!isGroup) return reply(group())
    if (!isGroupAdmins && !isOwner) return reply(admin())
   if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
    if (args.length < 1) return reply(`✳️ Cual es el mensaje?`)
teks = `Recibes un mensaje de notificación de @${sender.split("@")[0]}\n\n*Mensaje* : ${q}`
group = await Fg.groupMetadata(from);
member = group['participants']
jids = [];
member.map(async adm => {
  jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
  text: teks,
  contextInfo: {
mentionedJid: jids
  },
  quoted: mek
}
await Fg.sendMessage(from, options, text)
break
;

//-------(𝗗𝗘𝗦𝗖𝗔𝗥𝗚A𝗦 -  𝗦𝗧𝗔𝗟𝗞𝗦) 𝗜𝗡𝗦𝗧𝗔 - 𝗧𝗜𝗞𝗧𝗢𝗞------
      case 'tiktok':
      if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  if (args.length < 1) return reply(`✳️ Ingrese el link de un video`)
 		if (!args[0].includes('tiktok.com')) return reply(mess.link)
 		
 		reply(wait())
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `✅ Aquí tienes`
		Fg.sendMessage(from,{url:`${nowm}`},video,{mimetype:'video/mp4',quoted:mek,caption:me})
		})
		})
		
     		.catch(e => console.log(e))
     limitAdd(sender, limit)
     		break
     case 'tiktokaudio':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
 		if (!args[0].includes('tiktok.com')) return reply(mess.link)
 		if (args.length < 1) return reply(`✳️ Ingrese el link de un video`)
 		reply(wait())
 		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    	
    		const { audiotk} = result
            sendMediaURL(from,audiotk,'')
    		})
     		.catch(e => console.log(e))
     limitAdd(sender, limit)
     		break
        
      case 'ytmp3':
			  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (args.length < 1) return reply(`✳️ Use en comando más el link de YouTube\n\n📌 Ejemplo: *${prefix + command}* https://www.youtube.com/watch?v=_aelrhBsIRE`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(err(prefix))
				try {
				reply(wait()) 
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
					
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `
*✅ Descarga Completa*

‣ *📌Título* : ${title}
‣ *📟 Ext* : mp3
‣ *⚖️Tamaño* : ${filesizeF}
‣ *🔗 Link* : ${a.data}

_📤 La música se está enviando, si no llega descargue por el link_`)
				const captions = `
*✅ Descarga Completa*

‣ *📌Título* : ${title}
‣ *📟 Ext* : mp3
‣ *⚖️Tamaño* : ${filesizeF}
‣ *🔗 Link* : ${a.data}

_📤 La música se está enviando, si no llega descargue por el link_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				limitAdd(sender, limit)
				})
				})
				} catch (err) {
				reply(mess.error.api)}
				break
				
 		case 'ytmp4':
			  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (args.length < 1) return reply(`✳️ Use en comando más el link de YouTube\n\n📌 Ejemplo: *${prefix + command}* https://www.youtube.com/watch?v=_aelrhBsIRE`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(err(prefix))
				try {
				reply(wait()) 
				ytv(args[0])
				.then((res) => {
					
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 90000) return sendMediaURL(from, thumb, `
*✅ Descarga Completa*

‣ *📌Título* : ${title}
‣ *📟 Ext* : mp4
‣ *⚖️Tamaño* : ${filesizeF}
‣ *🔗 Link* : ${a.data}

_📤 El video se está enviando, si no llega descargue por el link_`)
				const captionsYtmp4 = `
*✅ Descarga Completa*

‣ *📌Título* : ${title}
‣ *?? Ext* : mp4
‣ *⚖️Tamaño* : ${filesizeF}
‣ *🔗 Link* : ${a.data}

_📤 El video se está enviando, si no llega descargue por el link_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				limitAdd(sender, limit)
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
				

      case 'igfoto':       
                 case 'igvideo':    
                    case 'ig':
                    case 'instagram':
         if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
        if (!args[0].includes("instagram.com")) return reply(mess.link);
       if (args.length < 1) return reply(`✳️ Ingrese un link de una foto o video de Instagram`)
        reply(wait());
        hx.igdl(args[0]).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              Fg.sendMessage(from, link, video, {
                quoted: mek,
                caption: `✅ Aquí está`,
              });
            } else {
              let link = await getBuffer(i.url);
              Fg.sendMessage(from, link, image, {
                quoted: mek,
                caption: `✅ Aquí tienes`,
              });
            }
          }
        });
          limitAdd(sender, limit)
        break;
      //******************** 》 SEARCH 《 ********************\\
case 'ytsearch':
case 'ytbuscar':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Ejemplo : ${prefix + command} Lil Peep`)
                    reply(wait())
				var srch = args.join('');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await Fg.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *BUSQUEDA EN YOUTUBE* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '*📌 Título* : ' + video.title + '\n'
		            ytresult += '*🔗 Link* : ' + video.url + '\n'
		            ytresult += '*⏳ Duración* : ' + video.timestamp + '\n'
		            ytresult += '*📤 Publicado* : ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '─── GatyBot ───'
		    		
		            Fg.sendMessage(from, tbuff, image, {quoted: mek, caption: ytresult})
		            limitAdd(sender, limit)
					break
					
					case 'ytstalk':
					if(!isVerify) return isUser()
                     if (isBanned) return reply(banf())
                     if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
                     if (args.length < 1) return reply(`✳️ Ingrese un nombre del canal \n\n📌 Ejemplo : *${prefix + command}* Lil Peep`)  
                     reply(wait())
					ytk = q
					anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`, {method: 'get'})
					cari = '•••••••••••••••••••••••••\n'
					for (let search of anu.result) {
					cari += `*Canal* : ${search.channel_name}\n*Acerca de* : ${search.channel_about}\n*Creado* : ${search.channel_created}\n*Link* : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
					}
					reply(cari.trim())
					limitAdd(sender, limit)
					break
				
//==========================================================//
      

				//-- link del grupo
case 'linkgroup': 
case 'linkgp':
case 'link':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isBotGroupAdmins) return reply(Badmin())
linkgp = await Fg.groupInviteCode(from)
fgxd = `https://chat.whatsapp.com/${linkgp}`
Fg.sendMessage(from, fgxd, text, {quoted: mek})
break
				
case 'igstalk':
case 'stalking':
   if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            if (args.length < 1) return reply(`✳️ Escriba un Nombre de Usuario\n\n📌Ejemplo : *${prefix + command}* Texto`)
                   reply(wait()) 
           ig.fetchUser(`${args.join(' ')}`).then(Y => {
   //         console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `┌──「 *STALKING* 」
▢ *🆔 ID :* ${Y.profile_id}
▢ *🔖 Username* : ${args.join('')}
▢ *🔖 Nombre Completo* : ${Y.full_name}
▢ *📌 Bio :* ${Y.biography}
▢ *🫂 Siguiendo* : ${Y.followers}
▢ *👥 Seguidores* : ${Y.following}
▢ *🔐 Privado* : ${Y.is_private}
▢ *✅ Verificado* : ${Y.is_verified}

▢ *🔗 Link* : https://instagram.com/${q}
└──────────────`
            sendMediaURL(from,ten,teks) 
            })     
              limitAdd(sender, limit)
            break
        
      case "githubstalk":
        if(!isVerify) return isUser() 
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
        if (!q) return reply(`✳️Ingrese Username de Github`);
        reply(wait())
        const oi = await fetchJson(
          `https://api.dhnjing.xyz/stalk/github?user=${q}`
        );
        const mm = `┌──「 *GITHUB STALK* 」
▢ *🔖 Username* : ${oi.result.username}
▢ *🔖 Nombre Completo* : ${oi.result.name}
▢ *📌 Bio :* ${oi.result.user_bio}
▢ *🗂️ Repositorios :* ${oi.result.user_repo}
▢ *🫂 Siguiendo* : ${oi.result.user_following}
▢ *👥 Seguidores* : ${oi.result.user_followers}
└──────────────`;
        reply(mm);
          limitAdd(sender, limit)
        break;
    
      case "igstory":
      case "ighistoria":
                if(!isVerify) return isUser() 
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
        if (!q) return reply(`✳️Ingrese el nombre de usuario\n\n📌Ejemplo : ${prefix + command} auronplay`);
        reply(wait())
        hx.igstory(q).then(async (result) => {
          for (let i of result.medias) {
            if (i.url.includes("mp4")) {
              let link = await getBuffer(i.url);
              Fg.sendMessage(from, link, video, {
                quoted: mek,
                caption: `✅ De nada`,
              });
            } else {
              let link = await getBuffer(i.url);
              Fg.sendMessage(from, link, image, {
                quoted: mek,
                caption: `✅ Descargando`,
              });
            }
          }
        });
        limitAdd(sender, limit)
        break;
        
case 'buscarmensaje':
case 'buscarmsg':
case 'searchmsg':
      if (!isOwner && !isMods) return reply(modsB())
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (args.length < 1) return reply(`✳️ Ingrese el mensaje para buscar\n\n*📌 Ejemplo :*\n • ${prefix + command} hola`)
        let v = await Fg.searchMessages(q, from, 10, 1);
        let s = v.messages;
        let el = s.filter((v) => v.message);
        el.shift();
        try {
          if (el[0].message.conversation == undefined) return;
          reply(`✅ ${el.length} Mensajes encontrados`);
          await sleep(3000);
          for (let i = 0; i < el.length; i++) {
            await Fg.sendMessage(from, "🔍 Mensaje", text, {
              quoted: el[i],
            });
          }
        } catch (e) {
          reply("❎ Mensaje no encontrado!");
        }
        break;

     case 'covid':
case 'covid19':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!q) return reply(`✳️ Nombre de un país \n\n📌 Ejemplo : ${prefix + command} Argentina`)
cvd = await fetchJson(`http://zekais-api.herokuapp.com/corona?country=${q}`)
if (cvd.error) return reply(`❎ El país ${q} no se encontró`)
copid = `❒ *「 Covid ${q} 」* ❒ 

‣ *Total de casos :* _${cvd.result.total_case}_
‣ *Muertos :* _${cvd.result.total_deaths}_
‣ *Recuperados :* _${cvd.result.total_tests}_
‣ *Casos de hoy :* _${cvd.result.today_cases}_
‣ *Muertos de hoy :* _${cvd.result.today_deaths}_
‣ *Total tratados :* _${cvd.result.total_active}_`
reply(copid)
.catch((err) => {
            reply(`❎ Error, intente más tarde`); 
            })
limitAdd(sender, limit)
break

      case "pinterest":
        if(!isVerify) return isUser()
        if (isBanned) return reply(banf())
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
        if (!q) return reply(`❎ Que imagen quieres que busque?`);
        reply(wait())
        try {
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
        await Fg.sendMessage(from, di, image, { quoted: mek, caption: `${isPremium && isOwner ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n✅ Pinterest : *${q}*` });
        } catch (e) {
    console.log(`Error :`, color(e,'red'))
	reply('❎ Error, inténtelo más tarde')
	giveLimit(sender, 1, limit)
	}
        limitAdd(sender, limit)
        break;
        
   
   case 'image':
   case 'imagen':
   case 'img':
   if(!isVerify) return isUser()
     if (isBanned) return reply(banf())
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
        try {
        	if (budy.includes(".com")) return reply('❎ No se puede buscar un link');
              if (args.length < 1) return reply('✳️ Que imagen quieres que busque?')
              reply(wait())
              teks = args.join(' ')
              res = await gis(teks, google)
              function google(error, result){
              if (error){ return reply('❎ Error, inténtelo más tarde')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `${isPremium && isOwner ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n✅ Imagen : *${teks}*`})
            }
      }
} catch (e) {
    console.log(`Error :`, color(e,'red'))
	reply('❎ Error, inténtelo más tarde')
	giveLimit(sender, 1, limit)
	}
            limitAdd(sender, limit)
             break

case 'woman':
case 'girl':
case 'mujer':
  reply(`_❎ Comando en mantenimiento_`)
        break
        
      case 'man':
                    case 'hombre':
          reply(`_❎ Comando en mantenimiento_`)
        break
        
      case "wallpaper":
      case "wp":
      case "wallpapers":
   if(!isVerify) return isUser()
     if (isBanned) return reply(banf())
        if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
        try {
        	if (budy.includes(".com")) return reply('❎ No se puede buscar un link');
              if (args.length < 1) return reply('✳️ Que wallpaper busco?')
              reply(wait())
              teks = args.join(' ')
              res = await gis(`wallpaper hd ${teks}`, google)
              function google(error, result){
              if (error){ return reply('❎ Error, inténtelo más tarde')}
              else {
              gugIm = result
              random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
              sendFileFromUrl(random, image, {quoted: mek, caption: `${isPremium && isOwner ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n✅ Wallpaper : *${teks}*`})
            }
      }
} catch (e) {
    console.log(`Error :`, color(e,'red'))
	reply('❎ Error, inténtelo más tarde')
	giveLimit(sender, 1, limit)
	}
            limitAdd(sender, limit)
             break
        
        case 'gura':
       case 'gawgura':
              if(!isVerify) return isUser()
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  if (isBanned) return reply(banf())
  reply(wait()) 
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              Fg.sendMessage(from, pjr)
}
)
              break
              
              
        //https://media.publit.io/file/Twintails/145.jpg
        //https://nekos.life/api/v2/img/keta
case 'loli':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
      reply(wait()) 
let loliz = loli[Math.floor(Math.random() * loli.length)]
      lolix = await getBuffer(loliz)
Fg.sendMessage(from, lolix, image, {quoted: mek, caption: `${isPremium && isOwner ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n• *Link* : ${loliz}\n\n✅ Aqui tienes *Onii chan*`})
.catch((err) => {
            reply(`❎ Error, intente de nuevo mas tarde`); 
            giveLimit(sender, 1, limit)
            })
            limitAdd(sender, limit)
          break
     
        case 'nsfw_loli':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (!isNsfw) return reply(fgnsfw())
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
      reply(wait()) 
let nsfw_loliz = nsfw_loli[Math.floor(Math.random() * nsfw_loli.length)]
      nsfw_lolix = await getBuffer(nsfw_loliz)
Fg.sendMessage(from, nsfw_lolix, image, {quoted: mek, caption: `${isPremium && isOwner ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n• *Link* : ${nsfw_loliz}\n\n✅ Aqui tienes *7u7*`})
.catch((err) => {
            reply(`❎ Error, intente de nuevo mas tarde`); 
            giveLimit(sender, 1, limit)
            })
            limitAdd(sender, limit)
          break
          
        case 'nsfw_waifu':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (!isNsfw) return reply(fgnsfw())
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
      reply(wait()) 
let nsfw_waifuz = nsfw_waifu[Math.floor(Math.random() * nsfw_waifu.length)]
      nsfw_waifux = await getBuffer(nsfw_waifuz)
Fg.sendMessage(from, nsfw_waifux, image, {quoted: mek, caption: `${isPremium && isOwner ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n• *Link* : ${nsfw_waifuz}\n\n✅ Aqui tienes *Onii chan*`})
.catch((err) => {
            reply(`❎ Error, intente de nuevo mas tarde`); 
            giveLimit(sender, 1, limit)
            })
            limitAdd(sender, limit)
          break
        
        //https://nekos.life/api/v2/img/kemonomimi
        //https://nekos.life/api/v2/img/neko
        //https://nekos.life/api/v2/img/fox_girl
        //https://nekos.life/api/v2/img/ngif  //gif
        case 'neko':
 reply(`_❎ Comando en mantenimiento_`)
        break
        
        //https://waifu.pics/api/sfw/waifu
        case 'waifu':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
      reply(wait()) 
let waifuz = waifu[Math.floor(Math.random() * waifu.length)]
      waifux = await getBuffer(waifuz)
Fg.sendMessage(from, waifux, image, {quoted: mek, caption: `${isPremium && isOwner ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n• *Link* : ${waifuz}\n\n✅ Aqui tienes *Onii chan*`})
.catch((err) => {
            reply(`❎ Error, intente de nuevo mas tarde`); 
            giveLimit(sender, 1, limit)
            })
            limitAdd(sender, limit)
          break
        
        //--image
case 'rip':
					case 'f':
					if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if(!isVerify) return isUser()
  if (isBanned) return reply(banf()) 
            var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
           ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           reply(wait())
         owgi = await Fg.downloadAndSaveMediaMessage(ger)
anu = await imgbb('8e27e77ca275519f8f7f8d76307e0d93', owgi)
ojan = await getBuffer(`https://janbot-api.herokuapp.com/api/imgedit/petimati?url=${anu.display_url}`)
Fg.sendMessage(from, ojan, image, {quoted: mek})
} else {
reply('✳️ *Envia una imagen con el comando o etiqueta una imagen que se haya enviado*')
}
limitAdd(sender, limit)
break

//----𝗔𝗦𝗨𝗣𝗔𝗡 
case 'asupan':
 if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if(!isGroup)return reply(group())
po1 = Fg.prepareMessageFromContent(from, {
  "listMessage":  {
"title": "*Lista Comandos*",
"description": `Elija uno a continuación`,
"buttonText": "Click Aqui",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": "Indo 😏!",
"rowId": `${prefix}+62`
},
{
"title": "Indo 2 😏!",
"rowId": `${prefix}indo2`
},
{
"title": "Indo 3 😏",
"rowId": `${prefix}asulol`
}
//--
]}]}}, {})
Fg.relayWAMessage(po1, {waitForAck: true})
limitAdd(sender, limit)
break
case '+62':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
reply(wait())
sendMediaURL(from,`https://itsmevall.herokuapp.com/api/asupan?apikey=${valkey}`, `✅ Aquí tienes señor!`)
limitAdd(sender, limit)
 break
 case 'indo2':
    if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            reply(wait())
                    url = `https://megayaa.herokuapp.com/api/asupan`
                    asupan = await getBuffer(url)
                   Fg.sendMessage(from, asupan, MessageType.video, {mimetype: 'video/mp4', filename: `asupan.mp4`, quoted: mek, caption: '✅ Aquí tienes señor'})
                   limitAdd(sender, limit)
                break
 case 'asulol':
			   if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            reply(wait())
                    get_result = await fetchJson(`http://api.lolhuman.xyz/api/asupan?apikey=${lolkey}`)
                    buffer = await getBuffer(get_result.result)
                    
                   Fg.sendMessage(from, buffer, video, { quoted: mek})
                   limitAdd(sender, limit)
                    break
  
      case 'contag':
                    if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
                 //   if (!isGroupAdmins && !isOwner) return reply(admin())
                    if (!isGroup) return reply(group())
                    if (args.length < 1) return reply(`✳️ Usu del comando *${prefix + command }* nombre|número\n\n📌 Ejemplo : ${prefix + command} Gatybot|19199992616`)
                    
                    const pepek = q
                    const adan = pepek.split("|")[0]
                    const nuahh = pepek.split("|")[1]
                    const trot = 
                    'BEGIN:VCARD\n' +
                    'VERSION:3.0\n' +
                    'FN:' + adan + '\n' +
                    'ORG:Kontak\n' +
                    'TEL;type=CELL;type=VOICE;waid=' + nuahh + ':+' + nuahh + '\n' +
                    'END:VCARD'
                    let taih = await Fg.groupMetadata(from)
                    let setan = taih.participants
                    let bruy = []
                    for (let go of setan){
                    bruy.push(go.jid)
                    }
                    Fg.sendMessage(from, {displayname: adan, vcard: trot}, MessageType.contact, {contextInfo: {"mentionedJid": bruy}})
                    limitAdd(sender, limit)
                    break
                   
case 'tagsticker':
case 'sticktag':
case 'stickertag':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
                   if (!isGroup) return reply(group())
		        //   if (!isGroupAdmins && !isOwner) return reply(admin())
                    if ((isMedia && !MythicXbot.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Fg.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        teks = args.join(" ")
                        gc = await Fg.groupMetadata(from)
                        member = gc['participants']
                        jids = []
                        member.map(async adm => {
                            jids.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        
                        var options = {
                            contextInfo: { mentionedJid: jids },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        Fg.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`✳️ Responde a un sticker`)
                    }
                      limitAdd(sender, limit)
                    break
                    
                   case 'imgtag':
                   case 'imagentag':
                          if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
                   if (!isGroup) return reply(group())
		        //   if (!isGroupAdmins && !isOwner) return reply(admin())
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await Fg.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        teks = args.join(" ")
                        gc = await Fg.groupMetadata(from)
                        member = gc['participants']
                        jids = []
                        member.map(async adm => {
                            jids.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        
                        var options = {
                            contextInfo: { mentionedJid: jids },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        Fg.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`✳️ Envia o responde a una imagen`)
                    }
                    limitAdd(sender, limit)
                    break
                   
        
      case "totag":
      case "tag":
        if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
                   if (!isGroup) return reply(group())
		         if (!isGroupAdmins && !isOwner) return reply(admin())
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await Fg.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await Fg.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          Fg.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await Fg.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await Fg.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          Fg.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await Fg.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await Fg.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          Fg.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await Fg.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await Fg.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          Fg.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(`✳️ Responde a *imagen/sticker/audio/video* con el comando ${prefix + command}` );
        }
        break;
        
                   //--fake reply
case 'fitnah':
case 'fake':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ *Uso del comamdo* :\n${prefix}fake @tag|msj|msjbot\n\n📌 *Ejemplo* : \n${prefix + command} @taguser|hola|hola que hace`)
        var gh = q
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        Fg.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
limitAdd(sender, limit)
        break;
     
      case 'take':
         case 'takestick':
         case 'robar':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isQuotedSticker) return reply(`✳️ Responde a un sticker\n\n*USO DEL COMAMDO*\n*${prefix + command}* Nombre|Autor\n\n📌Ejemplo *${prefix + command}* gatybot|gatito`);
const encmediats = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var kls = q
var pack = kls.split("|")[0];
var author2 = kls.split("|")[1];
if (!q) return reply('*Y el nombre de autor y paquete?*')
if (!pack) return reply(`*Porfavor escribe bien el formato: ${prefix + command} nombre|autor*`)
if (!author2) return reply(`*Porfavor escribe bien el formato: ${prefix + command} nombre|autor*`)
const dlfile = await Fg.downloadMediaMessage(encmediats)
reply(wait())
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');
Fg.sendMessage(from, imageBuffer, sticker, { quoted: mek, contextInfo: { externalAdReply:{title: `Gatybot by 「gatitoツ」`,body:"", previewType:"PHOTO",thumbnail: gatylogo, sourceUrl:`${grupomc}`}}})
.catch((err) => {
            reply(`❎ Error, intente más tarde`); 
            })
break
        
      //////𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗔𝗞𝗘𝗥 𝗦𝗪𝗠 𝗻𝗼𝗺𝗯𝗿𝗲 | 𝗮𝘂𝘁𝗼𝗿
    case 'stiker2': 
	case 'sticker2':
    case 'swm': 
    case 'stickergif2':
    case 's2':
    case 'sgif2': 
         if (!isVerify) return reply(userB(prefix))
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
if (!q.includes('|')) return reply(`✳️Envia una imagen con *${prefix + command}* Nombre|Autor`)
if(!q)return reply(`✳️Envia una imagen con *${prefix + command}* Nombre|Autor`)
let media = await Fg.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = q.split('|')[0]
var author = q.split('|')[1]
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
Fg.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
	} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
var pembawm = args.join('')
let media = await Fg.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
var packname = pembawm.split('|')[0]
var author = pembawm.split('|')[1]
reply(wait())
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error)
})
.on('end', function () {
console.log('Finish')
exif.create(packname, author, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply('Error')
Fg.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), MessageType.sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else  {
reply(`  *STICKER MAKER*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n✳️ Envia una imagen con *${prefix + command}* Nombre | Autor \o etiqueta una imagen que se haya enviado, *Videos 1-9 segundos*\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n*ALIAS DEL COMAMDO*\n\n${prefix}s2\n${prefix}sticker2\n${prefix}stickergif2\n${prefix}swm`)
}
limitAdd(sender, limit)
break

      case "fdeface":
        if(!isOwner) return reply(ownerB())
        ge = args.join("");
        var pe = ge.split("|")[0];
        var pen = ge.split("|")[1];
        var pn = ge.split("|")[2];
        var be = ge.split("|")[3];
        const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`;
        if (args.length < 1) return reply(fde);
        const dipes =
          isQuotedSticker || isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
        const tipes = await Fg.downloadAndSaveMediaMessage(dipes);
        const bufer = fs.readFileSync(tipes);
        const desc = `${pn}`;
        const title = `${pen}`;
        const url = `${pe}`;
        const buu = `https://${be}`;
        var anu = {
          detectLinks: false,
        };
        var mat = await Fg.generateLinkPreview(url);
        mat.title = title;
        mat.description = desc;
        mat.jpegThumbnail = bufer;
        mat.canonicalUrl = buu;
        Fg.sendMessage(from, mat, MessageType.extendedText, anu);
        break;
        
case 'public':
case 'publico':
      if (!isOwner)return reply(ownerB()) 
        if (banChats === false)  return;
        banChats = false;
        reply(`*🌍 Bot Modo* : Publico`);
        break
        
    case 'self':
case 'privado':
case 'private':
if (!isOwner)return reply(ownerB()) 
        if (banChats === true) return;
        banChats = true;
        reply(  `*🛡️Bot Modo* : privado`);
        break;
       
	
	case 'topgay':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (!isGroup) return reply(group())
member = []
top5 = args.join(' ')
const v1 = groupMembers
const v2 = groupMembers
const v3 = groupMembers
const v4 = groupMembers
const v5 = groupMembers
const v6 = groupMembers
const v7 = groupMembers
const v8 = groupMembers
const v9 = groupMembers
const v10 = groupMembers
const b1 = v1[Math.floor(Math.random() * v1.length)]
const b2 = v2[Math.floor(Math.random() * v2.length)]
const b3 = v3[Math.floor(Math.random() * v3.length)]
const b4 = v4[Math.floor(Math.random() * v4.length)]
const b5 = v5[Math.floor(Math.random() * v5.length)]
const b6 = v6[Math.floor(Math.random() * v6.length)]
const b7 = v7[Math.floor(Math.random() * v7.length)]
const b8 = v8[Math.floor(Math.random() * v8.length)]
const b9 = v9[Math.floor(Math.random() * v9.length)]
const b10 = v10[Math.floor(Math.random() * v10.length)]
teks = `≡ 🏳️‍🌈 *TOP 10 GAYS*
Está es una lista de los más gays del grupo
╭──────────────────✾
├╼ @${b1.jid.split('@')[0]}
├╼ @${b2.jid.split('@')[0]}
├╼ @${b3.jid.split('@')[0]}
├╼ @${b4.jid.split('@')[0]}
├╼ @${b5.jid.split('@')[0]}
├╼ @${b6.jid.split('@')[0]}
├╼ @${b7.jid.split('@')[0]}
├╼ @${b8.jid.split('@')[0]}
├╼ @${b9.jid.split('@')[0]}
├╼ @${b10.jid.split('@')[0]}
╰──────────────────✾` 
member.push(b1.jid)
member.push(b2.jid)
member.push(b3.jid)
member.push(b4.jid)
member.push(b5.jid)
member.push(b6.jid)
member.push(b7.jid)
member.push(b8.jid)
member.push(b9.jid)
member.push(b10.jid)
mentions(teks, member, true)
break
				
case 'dueñogrupo':
  case 'dueñogp':
 case 'ownergroup':
		case 'creadorgrupo':
		case 'ownergp':
				if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
				Fg.updatePresence(from, Presence.composing)
				cfg = `${from.split("-")[0]}@s.whatsapp.net`
				cgp = `✅ El creador del grupo es : @${cfg.split("@")[0]}`
				Fg.sendMessage(from, cgp, text, { contextInfo: {  mentionedJid: [cfg]},quoted: mek } )  
				break
				 
				// Nivel
				
case 'level':
case 'nivel':
case 'lvl':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group()) 
                if (!isLevelingOn) return reply(leveloff())
                try {
				ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@c.us`)
				} catch {
				ppimg = 'https://i.ibb.co/FX6pMj0/profile.png'
				}
				nivelrs = await getBuffer(ppimg)
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                sem = sender.replace('@s.whatsapp.net','')
                resul = `👋Hola @${sender.split("@")[0]}

「 *TU NIVEL* 」
╭──────────────────✾
├ *✨Exp:* ${userXp}/${requiredXp}
├ *📚Nivel:* ${userLevel}
├ *🏅Rango:* ${role}
╰──────────────────✾

*Nota: puedes ganar exp enviando mensajes o jugando mini juegos*`
               Fg.sendMessage(from, resul, text, { quoted: mek, contextInfo: { externalAdReply:{title: `${per}`,body:"porsentaje del nivel", previewType:"PHOTO",thumbnail: nivelrs, sourceUrl:``}, "mentionedJid": [sender]}})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`❎ Ocurrió un Error!\n${err}`)
                    })
            break

		    case 'ranks':
            case 'rangos':
            case 'rango':
            if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group())
            const usernivel = getLevelingLevel(sender)
            
           fgranks = `▢ *Nombre* : @${sender.split("@")[0]}
▢ *Nivel* : ${usernivel}
▢ *Rango* : ${role}

「 *LISTA DE RANGOS* 」
╭──────────────────✾
│ 02 = *Hierro I*
│ 04 = *Hierro II*
│ 06 = *Hierro III*
│ 08 = *Hierro IV*
│ 10 = *Hierro V*
│ 12 = *Bronce I*
│ 14 = *Bronce II*
│ 16 = *Bronce III*
│ 18 = *Bronce IV*
│ 20 = *Bronce V*
│ 22 = *Plata I*
│ 24 = *Plata II*
│ 26 = *Plata III*
│ 28 = *Plata IV*
│ 30 = *Plata V*
│ 33 = *Oro I*
│ 34 = *Oro II*
│ 36 = *Oro III*
│ 38 = *Oro IV*
│ 40 = *Oro V*
│ 42 = *Diamante I*
│ 44 = *Diamante II*
│ 46 = *Diamante III*
│ 48 = *Diamante IV*
│ 50 = *Diamante V*
╰──────────────────✾

*📌NOTA* : _Alcanzas un rango al subir de nivel_`
Fg.sendMessage(from, fgranks, text, { quoted: mek, contextInfo: {mentionedJid: [sender] }})
           break
				
			
  
//Leveling 

case 'leveling':
case 'nivelación':
    if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
                if (!isGroup) return reply(group()) 
               if (!isGroupAdmins && !isOwner) return reply(admin())
                if (args.length < 1) return reply(`✳️ *NIVELACION*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
                if (args[0] === 'on') {
                    if (isLevelingOn) return reply('✳️ *Ya está activado*')
                    _leveling.push(from)
                    fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                   reply('✅ Nivelacion habilitada en el grupo')
                } else if (args[0] === 'off') {
                    _leveling.splice(from, 1)
                    fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
                     reply('✅ Nivelacion deshabilita')
                } else {
                    reply(`✳️ *NIVELACION*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
                }
                
            break
                  
//--- Bienvenida on/off
case 'welcome':
case 'bv':
case 'bienvenidas':
case 'bienvenida':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
		if (!isGroup) return reply(group())
		if (!isGroupAdmins && !isOwner) return reply(admin())
		if (args.length < 1) return reply(`✳️ *BIENVENIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
		if ((args[0]) === 'on') {
		if (isWelcom) return reply('✳️ El mensaje de *Bienvenida* ya esta activa')
						_welcom.push(from)
						fs.writeFileSync('./database/welcom.json', JSON.stringify(_welcom))
						reply(`✅ La función de bienvenida se activo en el grupo *${groupMetadata.subject}*`)
		} else if ((args[0]) === 'off') {
		if (!isWelcom) return reply('✳️ Bienvenida ya esta desactivada')
						_welcom.splice(from, 1)
						fs.writeFileSync('./database/welcom.json', JSON.stringify(_welcom))
						reply(`✅ La función de Bienvenida se desactivo en el grupo *${groupMetadata.subject}*`)
					} else {
						reply(`✳️ *BIENVENIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					}
		break

case 'leave':
case 'left':
case 'goodbye':
case 'adios':
case 'salidas':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isGroup) return reply(group())
if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isWelcom) return reply('✳️ Para usar este comando, debe activar primero las *Bienvenidas*')
if (args.length < 1) return reply(`✳️ *DESPEDIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
if ((args[0]) === 'on') {
	if (isLeft) return reply('✳️ El mensaje de *Despedida* ya esta activa ')
	_left.push(from)
	fs.writeFileSync('./database/left.json', JSON.stringify(_left))
	reply(`✅ El mensaje de *Despedida* se activo en el grupo *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
	if (!isLeft) return reply('✳️ Se desactivo antes')
	_left.splice(from, 1)
	fs.writeFileSync('./database/left.json', JSON.stringify(_left))
reply(`✅ El mensaje de *Despedida* se desactivo en el grupo *${groupMetadata.subject}*`)
} else {
reply(`✳️ *DESPEDIDAS*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
}
break

//--- on/off antilink WhatsApp 
				case 'antilink':
				case 'antienlace':
				case 'antilinkwha':
				case 'antilinkwhatsapp':
				if(!isVerify) return isUser()
				if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`✳️ *ANTILINK WHATSAPP*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					if ((args[0]) === 'on') {
						if (isAntilink) return reply('✳️ Antilink ya está activo')
						_antilink.push(from)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
						reply(`✅ Se activo el *Antilink WhatsApp* en este grupo`)
					} else if ((args[0]) === 'off') {
						if (!isAntilink) return reply('✳️ Antilink ya está desactivado')
						_antilink.splice(from, 1)
						fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
						reply(`✅ Se desactivo el *Antilink WhatsApp* en este grupo`)
					} else {
						reply(`✳️ *ANTILINK WHATSAPP*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					}
					break
					
				case 'antivirtual':
				case 'antinumerovirtual':
				case 'antiestrangero':
				case 'antifake':
				if(!isVerify) return isUser()
				if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`✳️ *ANTI NUMERO VIRTUAL*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					if ((args[0]) === 'on') {
						if (isAntivirtual) return reply('✳️ Anti numero virtual ya está activo')
						_antivirtual.push(from)
						fs.writeFileSync('./database/antivirtual.json', JSON.stringify(_antivirtual))
						reply(`✅ Se activo el *Anti numero virtual* en este grupo`)
					} else if ((args[0]) === 'off') {
						if (!isAntivirtual) return reply('✳️ Anti numero virtual ya está desactivado')
						_antivirtual.splice(from, 1)
						fs.writeFileSync('./database/antivirtual.json', JSON.stringify(_antivirtual))
						reply(`✅ Se desactivo el *Anti numero virtual* en este grupo`)
					} else {
						reply(`✳️ *ANTI NUMERO VIRTUAL*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					}
					break

                case 'antiviewonce':
				case 'antirvo':
				if(!isVerify) return isUser()
				if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`✳️ *ANTIVIEW ONCE*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					if ((args[0]) === 'on') {
						if (isAntiviewOnce) return reply('✳️ AntiviewOnce ya está activo')
						_antiviewonce.push(from)
						fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(_antilink))
						reply(`✅ Se activo el *AntiviewOnce* en este grupo`)
					} else if ((args[0]) === 'off') {
						if (!isAntiviewOnce) return reply('✳️ AntiviewOnce ya está desactivado')
						_antiviewonce.splice(from, 1)
						fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(_antiviewonce))
						reply(`✅ Se desactivo el *AntiviewOnce* en este grupo`)
					} else {
						reply(`✳️ *ANTIVIEW ONCE*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					}
					break

//--- on/off simisimi
case 'simih':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins) return reply(admin())
					if (args.length < 1) return reply(`✳️ *SIMSIMI*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					if ((args[0]) === 'on') {
						if (isSimi) return reply('✳️ Simsimi ya está activo')
						_samih.push(from)
						fs.writeFileSync('./database/simi.json', JSON.stringify(_samih))
						reply(`✅ Se activo el *Simsimi* en este grupo`)
					} else if ((args[0]) === 'off') {
						if (!isSimi) return reply('✳️ Simsimi ya está desactivado')
						_samih.splice(from, 1)
						fs.writeFileSync('./database/simi.json', JSON.stringify(_samih))
						reply(`✅ Se desactivo el *Simsimi* en este grupo`)
					} else {
						reply(`✳️ *SIMSIMI*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					}
					break

					//---  antilink Telegram
				
case 'antilinktelegram':
case 'antilinktele':
				if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`✳️ *ANTILINK TELEGRAM*\n\n*${prefix + command} 1* para activar\n*${prefix + command} 0* para desactivar`)
					if ((args[0]) === '1') {
						if (isAntiTele) return reply('✳️ Antilink Telegram ya está activo')
						_antilinkte.push(from)
						fs.writeFileSync('./database/antilinkte.json', JSON.stringify(_antilinkte))
						reply(`✅ Se activo el *Antilink Telegram* en el grupo *${groupMetadata.subject}*`)
					} else if ((args[0]) === '0') {
						if (!isAntiTele) return reply('✳️ Antilink Telegram ya está desactivado')
						_antilinkte.splice(from, 1)
						fs.writeFileSync('./database/antilinkte.json', JSON.stringify(_antilinkte))
						reply(`✅ Se desactivo el *Antilink Telegram* en el grupo *${groupMetadata.subject}*`)
					} else {
						reply(`✳️ *ANTILINK TELEGRAM*\n\n*${prefix + command} 1* para activar\n*${prefix + command} 0* para desactivar`)
					}
					break
					
					//---  antilink Discord 
				
case 'antilinkdiscord':
case 'antilinkdis':
case 'antilinkdi':
				if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (args.length < 1) return reply(`✳️ *ANTILINK DISCORD*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					if ((args[0]) === 'on') {
						if (isAntiDis) return reply('✳️ Antilink Discord ya está activo')
						_antilinkdi.push(from)
						fs.writeFileSync('./database/antilinkdi.json', JSON.stringify(_antilinkdi))
						reply(`✅ Se activo el *Antilink Discord* en el grupo *${groupMetadata.subject}*`)
					} else if ((args[0]) === 'off') {
						if (!isAntiDis) return reply('✳️ Antilink Discord ya está desactivado')
						_antilinkdi.splice(from, 1)
						fs.writeFileSync('./database/antilinkdi.json', JSON.stringify(_antilinkdi))
						reply(`✅ Se desactivo el *Antilink Discord* en el grupo *${groupMetadata.subject}*`)
					} else {
						reply(`✳️ *ANTILINK DISCORD*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					}
					break
					
					
	  case "modechat":
      case "modochat":
      case "chatmodo":
      case "chatmode":
      if (!isGroup) return reply(group())
        if (!isOwner)return reply(ownerB()) 
        sendButMessage(from, `Quiere silenciar el grupo?\n\n✳️Si no te aparecen pon el comando:\n🔇Para mutear el grupo\n• ${prefix}banchat\n🔊Para desmutear el grupo\n\n• ${prefix}unbanchat`, `Elija una opción`, [
          {
            buttonId: `${prefix}banchat`,
            buttonText: {
              displayText: `🔇 Mutear`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}unbanchat`,
            buttonText: {
              displayText: `🔊 Desmutear`,
            },
            type: 1,
          },
        ]);
        break;


case 'banchat':
if (!isGroup) return reply(group())
if (!isOwner && !isMods) return reply(modsB())
//if (!isBotGroupAdmins) return reply(Badmin())
if (isBanchat) return reply(`✳️ Este grupo ya está silenciado`)
_bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(_bancht))
reply(`✅ *Grupo Silenciado*\n\n⏯️ El bot ha sido silenciado en este chat. No responderá ningún comando`)
break

case 'unbanchat':
if (!isOwner && !isMods) return reply(modsB())
if (!isBanchat) return reply(`✳️El grupo no estaba silenciado`)
let ubc = _bancht.indexOf(from)
_bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(_bancht))
reply(`✅ *Grupo desmuteado*\n\n ▶️ Ahora ya pueden usar los comandos`)
break

case 'listbanchat': 
case 'listbc':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
 teks = `▢ *Grupos silenciados!*\n▢ _Total : ${_bancht.length}_\n\n`
for(let i of _bancht){
met = await Fg.groupMetadata(i)
teks += '🛡️ Id : ' + i + '\n'
teks += '📌 Nombre : ' + met.subject + '\n\n'
}
reply(teks)
break

case 'detectorinfo':
       case 'detecinfo':
        case 'infodetec':
detec = `「 *DETECTOR INFO* 」
╭──────────────────✾
│⎔ *🚫Antidelete* : ${antidel_}
│⎔ *📮Bienvenida* : ${Welcome_}
│⎔ *🫂Despedida* : ${Adios_}
│⎔ *🚨AntiLink* : ${AntiLink_}
│⎔ *🔞Nsfw* : ${Nsfw_}
│⎔ *🆙Leveling* : ${Leveling_}
╰──────────────────✾`
reply(detec) 
break

case 'infogp':
case 'groupinfo':
case 'infogrupo':
case 'grupoinfo':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())  
Fg.updatePresence(from, Presence.composing)
if (!isGroup) return reply(group())
  try {
	ppUrl = await Fg.getProfilePicture(from)
		} catch {
	ppUrl = 'https://i.ibb.co/FX6pMj0/profile.png'
  	}
  reply(wait())
  
infogp = `「 *INFO DE GRUPO* 」
╭──────────────────✾
│⎔ *🐱Nombre* : ${groupName}
│⎔ *🪀Se creó el* : ${moment(`${groupMetadata.creation}` * 1000).tz('America/La_Paz').format('DD/MM/YYYY HH:mm:ss')}
│⎔ *👥Miembros* : ${groupMembers.length}
│⎔ *🕵🏻‍♂️Admins* : ${groupAdmins.length}
│⎔ *📮Bienvenida* : ${Welcome_}
│⎔ *🫂Despedida* : ${Adios_}
│⎔ *🚨AntiLink* : ${AntiLink_}
│⎔ *🔞Nsfw* : ${Nsfw_}
│⎔ *🆙Nivelación* : ${Leveling_}
╰──────────────────✾
▢ *📌Descripción del grupo* :
${groupDesc}`
buffer = await getBuffer(ppUrl)
Fg.sendMessage(from, buffer, image, {quoted: mek, caption: infogp })
break

//-- Dar admin 
case 'promote':
case 'promover':
case 'rol':
case '+adm':
				  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('✳️ Mencione o responde al mensaje del usuario para promoverlo a administrador')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '✅ Ahora es un admin del grupo:\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						Fg.groupMakeAdmin(from, mentioned)
						mentions(teks, mentioned, true)
						
					} else {
						mentions(`✅ Ahora @${mentioned[0].split('@')[0]} Es un admin del grupo *${groupMetadata.subject}*`, mentioned, true)
						Fg.groupMakeAdmin(from, mentioned)
					}
					break
					
					



//-- Bajar posiciones - quitar admin
case 'demote':
case 'degradar':
case 'delrol':
case '-adm':
			    if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
					if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (!isBotGroupAdmins) return reply(Badmin())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Menciona o responde al mensaje del usuario para degradarlo')
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = '✅ Admin degradado :\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						Fg.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`✅ Admin degradado : @${mentioned[0].split('@')[0]} Se convierte en miembro, Lo sentimos 😔`, mentioned, true)
						Fg.groupDemoteAdmin(from, mentioned)
					}
		break
					
//--ver estado info usuarios
case 'verbio':
case 'verinfo': 
case 'getbio':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
var p = await Fg.getStatus(`${mentioned}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("❎ Nose encontro la información del usuario")
  } 
} else {
reply('✳️ Responde a un mensaje o etiqueta al usuario')
}
break
				
				//ver perfil a un usuario
case 'getpic':
case 'perfil+':
case 'profile+':
case 'getperfil':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
	try {
	pic = await Fg.getProfilePicture(mentioned[0])
	} catch {
	pic = 'https://i.ibb.co/FX6pMj0/profile.png'
	}
thumb = await getBuffer(pic)
Fg.sendMessage(from, thumb,image,{quoted : mek})
} else {
reply('✳️ Responde a un mensaje o etiqueta al usuario')
}
limitAdd(sender, limit)
break
				
//mi perfil 
case 'profile':
					case 'perfil':
					case 'itsme':
					   if(!isVerify) return isUser()
                       if (isBanned) return reply(banf())  
					Fg.updatePresence(from, Presence.composing)
    				try {
					ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@c.us`)
					} catch {
					ppimg = 'https://i.ibb.co/FX6pMj0/profile.png'

					}
					const lvl = getLevelingLevel(sender)
					let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
                    const prmm = isPremium ? `${cekprm.days} *_días_* ${cekprm.hours} *_horas_* ${cekprm.minutes} _*minutos*_ ${cekprm.seconds} *_segundos_* `:'No Premium'

					infost = await Fg.getStatus(`${sender.split('@')[0]}@c.us`)
				    infost = infost.status == 401 ? '' : infost.status
				    num = await fetchJson(`https://api.telnyx.com/anonymous/v2/number_lookup/${senderNumber}`, {method: 'get'})

					 profile = `「 *PERFIL* 」
╭──────────────────✾
│⎔ *🔖Nombre* : ${pushname}
│⎔ *🔮Tag* : @${sender.split("@")[0]}
│⎔ *#️⃣Numero* : wa.me/${sender.split("@")[0]}
│⎔ *📇Info* : ${infost}
│⎔ *📮Info Número* : ${num.data.country_code} - ${num.data.carrier.type} - ${num.data.carrier.name}
│⎔ *🥇Rango* : ${role}
│⎔ *⭐Premium* : ${prem_}
│⎔ *🕐Expira* : ${isPremium ? 'Ilimitado' : `${prmm}`}
│⎔ *🆙Nivel* : ${lvl}
│⎔ *💎Diamantes* : ${isPremium ? 'Ilimitado' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}
│⎔ *🎰GameCoins* : ${isPremium ? 'Ilimitado' : `${cekGLimit(sender, gcount, glimit)}/${gcount}`}
│⎔ *💰BotCoin* : ${isPremium ? 'Ilimitado' : `${getBalance(sender, balance)}`}
╰──────────────────✾`

					buffer = await getBuffer(ppimg)
					
					Fg.sendMessage(from, buffer, image, {contextInfo: {  mentionedJid: [sender]}, quoted: mek, caption: profile})
					.catch((err) => {
            reply(`❎ Error, intente de nuevo mas tarde`); 
            })
break
  
//-- Eliminar mensaje del bot
case 'delete':
case 'del':
case 'd':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
   if (!isGroup)return reply(group())
	if (!isGroupAdmins && !isOwner) return reply(admin())
try{
if(!isQuotedMsg)return reply('✳️ Responde a un mensaje mío para que lo elimine!')
pp = {id:mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true}
Fg.deleteMessage(from,pp)
} catch(e) {
reply('✳️ Responde a un mensaje mío para que lo elimine!')
reply(e)
console.log(e)
}
break
//----
    case 'play':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
	        if (args.length < 1) return reply(`✳️ *Ingresa el nombre de una música*\n\n📌Ejemplo: *${prefix}play* Lil Peep broken smile`)
                playz = q
                reply(wait()) 
  pl = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=WRhywqyYC0doYNeqTZymcB2SjrT&q=${playz}`)
  judul = pl.result.title
  lagu = pl.result.url_audio
  size = pl.result.size
  foto = pl.result.thumbnail
  durasi = pl.result.duration
  link = pl.result.source
  capt = `*🎶Musica encontrada*
  
‣ *📌Título* : ${judul}
‣ *📂Archivo* : Mp3
‣ *⚖️Tamaño* : ${size}
‣ *🔗 Link* : ${link}

El archivo se esta enviando espere`
  if(Number(size.split(' MB')[0]) >= 5.00) return reply('❎ El archivo pesa más de 5 mb')
  thumb = await getBuffer(foto)
  Fg.sendMessage(from, thumb, image, {quoted: mek, caption: capt})
  mp3 = await getBuffer(lagu)
  Fg.sendMessage(from, mp3, document, {mimetype: 'audio/mp4', filename: `${judul}.mp3`, quoted: mek})
  .catch((err) => {
            reply(`❎ Error, intente más tarde`); 
            })
  break
      
//--- sin api
case 'mp3fg':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
try {
reply(wait())
let yut = await yts(q)
yta(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*P L A Y  M P 3*\n\n Title : ${title}\nExt : MP3\nFilesize : ${filesizeF}\nUpload : ${yut.videos[0].ago}\n Views : ${yut.videos[0].views}\nDuration : ${yut.videos[0].timestamp}\nLink : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)

const captionis = `*P L A Y  M P 3*\n\nTitle : ${title}\n Size : ${filesizeF}\nViews: ${yut.videos[0].views}\n Duration : ${yut.videos[0].timestamp}\nURL : ${yut.videos[0].url}\n\n*_Permintaan Anda Sedang Di Prosess!_*`
//sendMediaURL(from, thumb, captionis)
sendMediaURL(from, dl_link, '')

})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
console.log(color('[PlayMp3]', 'red'), err)
reply(mess.error.api)
}
break
//--con api
   case 'mp3fg2':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
reply(wait())
  pl = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=WRhywqyYC0doYNeqTZymcB2SjrT&q=${q}`)
  judul = pl.result.title
  lagu = pl.result.url_audio
  size = pl.result.size
  foto = pl.result.thumbnail
  durasi = pl.result.duration
  capt = `≡ *PLAY*
▢ *Título* : ${judul}
▢ *Peso* : ${size}
▢ *Duracion* : ${durasi}`
  if(Number(size.split(' MB')[0]) >= 40.00) return reply(`✳️ El archivo es demasiado grande, la reproducción de música se canceló, el tamaño máximo del archivo es de 40 mb`)
  thumb = await getBuffer(foto)
  //-Fg.sendMessage(from, thumb, image, {quoted: mek, caption: capt})
  mp3 = await getBuffer(lagu)
  Fg.sendMessage(from, mp3, document, {mimetype: 'audio/mp4', filename: `${judul}.mp3`, quoted: mek})
  break

case 'mp4fg' :
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
try {
reply(wait())
let yut = await yts(q)
ytv(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*P L A Y  M P 4*\n\n • Judul : ${title}\n • Size : ${filesizeF}\n • Upload : ${yut.videos[0].ago}\n • Ditonton : ${yut.videos[0].views}\n • Duration : ${yut.videos[0].timestamp}\n • Link : ${a.data}\n\n_Ukuran File Terlalu besar, anda bisa download sendiri lewat Link Diatas!!_`)
                       
const mp4 = `
*PLAY VIDEO\n\n Judul : ${title}\n\n Size : ${filesizeF}\n\n Upload : ${yut.videos[0].ago}\n\n Ditonton : ${yut.videos[0].views}\n\n Duration : ${yut.videos[0].timestamp}\n\n Url : ${yut.videos[0].url}`
//sendMediaURL(from, thumb, mp4)
sendMediaURL(from, dl_link)
limitAdd(sender, limit)
})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(owner, 'PlayMp4 Error : ' + err)
console.log(color('[PlayMp4]', 'red'), err)
reply(mess.error)
}
break
        
 case 'play2':
			if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
       if(!isPremium)return reply(premi()) 
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  if (args.length < 1) return reply(`✳️ *Ingresa el título de una canción*\n\n📌Ejemplo *${prefix + command}* Lil Peep broken smile`)
  reply(wait())
            var srch = args.join('')
    		ytfg = await yts(srch);
    		aramat = ytfg.all 
   			var mulaikah = aramat[0].url							
                  try {
                  	
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `
*🎶Musica encontrada*

‣ *📌Título* : ${title}
‣ *📟 Ext* : mp3
‣ *⚖️Tamaño* : ${filesizeF}
‣ *🎈Subido* : ${ytfg.videos[0].ago}
‣ *⏱️Duración* : ${ytfg.videos[0].timestamp}
‣ *🔗 Link* : ${a.data}

_📤 Enviando, espere si el audio no aparece, descargue por el link_`)
                        const captions = `
*🎶Musica encontrada*

‣ *📌Título* : ${title}
‣ *📟 Ext* : mp3
‣ *⚖️Tamaño* : ${filesizeF}
‣ *🎈Subido* : ${ytfg.videos[0].ago}
‣ *⏱️Duración* : ${ytfg.videos[0].timestamp}
‣ *?? Link* : ${a.data}

_📤 Enviando, espere si el audio no aparece, descargue por el link_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        limitAdd(sender, limit)
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api) }
                   break
   case 'play3':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ *Ingresa el título de una canción*\n\n📌Ejemplo *${prefix + command}* Lil Peep broken smile`)
reply(wait())
  pl = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?apikey=WRhywqyYC0doYNeqTZymcB2SjrT&q=${q}`)
  judul = pl.result.title
  lagu = pl.result.url_audio
  size = pl.result.size
  foto = pl.result.thumbnail
  durasi = pl.result.duration
  capt = `≡ *PLAY*
▢ *Título* : ${judul}
▢ *Peso* : ${size}
▢ *Duracion* : ${durasi}`
  if(Number(size.split(' MB')[0]) >= 6.00) return reply(`✳️ El archivo es demasiado grande, la reproducción de música se canceló, el tamaño máximo del archivo es de 6 mb`)
  thumb = await getBuffer(foto)
  Fg.sendMessage(from, thumb, image, {quoted: mek, caption: capt})
  mp3 = await getBuffer(lagu)
  Fg.sendMessage(from, mp3, document, {mimetype: 'audio/mp4', filename: `${judul}.mp3`, quoted: mek})
  break
 
 //---apokey
case 'play4':
			if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ *Ingresa el título de una canción*\n\n📌Ejemplo *${prefix + command}* Lil Peep broken smile`)
reply(wait())

                playfg = q
                anu = await fetchJson(`https://api.zeks.me/api/ytplaymp3?q=${playfg}&apikey=hamilton49`)
                if (anu.error) return reply(anu.error)
                infomp3 = `
*🎶Musica encontrada*

‣ *📌Título* : ${anu.result.title}
‣ *🔮 Fuente :* ${anu.result.source}
‣ *⚖️Tamaño* : ${anu.result.size}
‣ *🔗 Link* : ${anu.result.url_audio}

_📤 Enviando, espere si el audio no aparece, descargue por el link_`

                buffer = await getBuffer(anu.result.thumbnail)
                lagu = await getBuffer(anu.result.url_audio)
                Fg.sendMessage(from, buffer, image, {quoted: mek, caption: infomp3})
                Fg.sendMessage(from, lagu, document, {mimetype: 'audio/mp4', filename: `${anu.title}.mp3`, quoted: mek})
                limitAdd(sender, limit)
                break
        
      case 'video':
				case 'playvideo':
				case 'playvid':
				case 'playmp4':
				if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
           if (args.length < 1) return reply(`✳️ *Ingresa el título de un video*\n\n📌Ejemplo *${prefix + command}* Lil Peep broken smile`)
           reply(wait())
        var srch = args.join("");
        vidfg = await yts(srch);
        aramat = vidfg.all;
        var mulaikah = aramat[0].url;
        try {
          ytv(mulaikah).then((res) => {
            const { dl_link, thumb, title, filesizeF, filesize } = res;
            axios
              .get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
              .then(async (a) => {
                if(Number(filesizeF.split(' MB')[0]) >= 90.00) return reply('❎ El archivo es demasiado grande, la reproducción de video se canceló')
                capt = `≡ *🎥 PLAY VIDEO*

‣ *📌Título* : ${title}
‣ *📟 Ext* : mp4
‣ *⚖️ Tamaño* : ${filesizeF}

_📤 Enviando, espere si el video no aparece, descargue por el link_`
                
                sendMediaURL(from, thumb, capt);
                await sendMediaURL(from, dl_link).catch(() => reply("error"));
              });
          });
        } catch (err) {
          reply(mess.error.api);
        }
        limitAdd(sender, limit)
        break;
        
      //𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗔𝗞𝗘𝗥
case 'stiker': 
case 's': 
case 'stikergif':
case 'sticker': 
case 'stickergif': 
case 'sgif':  
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
  try {
  	ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@c.us`)
  } catch {
  	ppimg = 'https://i.ibb.co/rksd9bC/gaty-2.jpg'
  }
  reusesr = await getBuffer(ppimg)
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Fg.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply('❎ Error al crear el sticker')
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('gatybot', 'gatito')} ${ran} -o ${ran}`, async (error) => {
									 if (error) {
											 reply('❎ Error al crear el sticker')
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									Fg.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek, contextInfo: { externalAdReply:{title: `${pushname}`,body:"", previewType:"PHOTO",thumbnail: reusesr, sourceUrl:`${soportefg}`}}})
									reply(`${isPremium ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}`)
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await Fg.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply('❎ Error al crear el stickergif')
							})
							.on('end', function () {
								console.log('Finish')
								exec(`webpmux -set exif ${addMetadata('gatybot', 'gatito')} ${ran} -o ${ran}`, async (error) => {
									if (error) {
											 reply('❎ Error al crear el stickergif')
											 fs.unlinkSync(media)	
											 fs.unlinkSync(ran)
											 }
									Fg.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek, contextInfo: { externalAdReply:{title: `${pushname}`,body:"", previewType:"PHOTO",thumbnail: reusesr, sourceUrl:`${soportefg}`}}})
									reply(`${isPremium ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}`)
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else {
						reply(`✳️ Etiqueta un *imagen/video/gif* con el comando ${prefix + command}\n\n*📌Nota* :\nEl video no tiene que pasar los 9 segundos`)
					}
				    limitAdd(sender, limit)
					break
					
      case 'toimage': 
case 'toimg':
case 'aimg':
case 'aimagen':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isQuotedSticker) return reply(`STICKER a IMAGEN\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n✳️ Responde a un sticker con el comando\n\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n*ALIAS DEL COMAMDO*\n\n${prefix}toimg\n${prefix}aimg`)
					reply(wait())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Fg.downloadAndSaveMediaMessage(encmedia)
					ran= getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply(' ❎ Error al convertir Sticker a imagen ')
						buffer = fs.readFileSync(ran)
						Fg.sendMessage(from, buffer, image, {quoted: mek, caption: '✅ Aqui tienes'})
						fs.unlinkSync(ran)
					})
limitAdd(sender, limit)
break

case 'rvo':
case 'readviewonce':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
               if (mek.message[Object.keys(mek.message)[0]].contextInfo.quotedMessage.viewOnceMessage) return reply('❎ Etiqueta un mensaje viewOnce!')
	           let message = { ...mek }
	           message.message = message.message.extendedTextMessage.contextInfo.quotedMessage.viewOnceMessage.message
	           message.message[Object.keys(message.message)[0]].viewOnce = false
	           Fg.forwardMessage(from, message)
              break

case 'emoji_app':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`*✳️ Ejemplo de uso del comando*\n\n${prefix + command} ❤️`)
reply(wait()) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[0].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
            reply('❎ Por favor ingrese solo un emoji'); 
            })
limitAdd(sender, limit)
break

case 'emoji_mi':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`*✳️ Ejemplo de uso del comando*\n\n${prefix + command} ❤️`)
reply(wait()) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[3].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
            reply('❎ Por favor ingrese solo un emoji'); 
            })
limitAdd(sender, limit)
break

case 'emoji_wa':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`*✳️ Ejemplo de uso del comando*\n\n${prefix + command} ❤️`)
reply(wait()) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
            reply('❎ Por favor ingrese solo un emoji'); 
            })
limitAdd(sender, limit)
break

case 'emoji_fb':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`*✳️ Ejemplo de uso del comando*\n\n${prefix + command} ❤️`)
reply(wait()) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[6].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
            reply('❎ Por favor ingrese solo un emoji'); 
            })
limitAdd(sender, limit)
break

case 'emoji_go':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`*✳️ Ejemplo de uso del comando*\n\n${prefix + command} ❤️`)
reply(wait()) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[1].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
            reply('❎ Por favor ingrese solo un emoji'); 
            })
limitAdd(sender, limit)
break

case 'emoji_lg':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`*✳️ Ejemplo de uso del comando*\n\n${prefix + command} ❤️`)
reply(wait()) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[11].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
            reply('❎ Por favor ingrese solo un emoji'); 
            })
limitAdd(sender, limit)
break

case 'emoji_ht':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`*✳️ Ejemplo de uso del comando*\n\n${prefix + command} ❤️`)
reply(wait()) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[12].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
            reply('❎ Por favor ingrese solo un emoji'); 
            })
limitAdd(sender, limit)
break

case 'emoji_mo':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`*✳️ Ejemplo de uso del comando*\n\n${prefix + command} ❤️`)
reply(wait()) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[14].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
            reply('❎ Por favor ingrese solo un emoji'); 
            })
limitAdd(sender, limit)
break

case 'emoji_tw':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`*✳️ Ejemplo de uso del comando*\n\n${prefix + command} ❤️`)
reply(wait()) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[5].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
            reply('❎ Por favor ingrese solo un emoji'); 
            })
limitAdd(sender, limit)
break

case 'emoji_sa':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`*✳️ Ejemplo de uso del comando*\n\n${prefix + command} ❤️`)
reply(wait()) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[2].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
            reply('❎ Por favor ingrese solo un emoji'); 
            })
limitAdd(sender, limit)
break

case 'emoji_pi':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`*✳️ Ejemplo de uso del comando*\n\n${prefix + command} ❤️`)
reply(wait()) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[7].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
            reply('❎ Por favor ingrese solo un emoji'); 
            })
limitAdd(sender, limit)
break

case 'emoji_op':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`*✳️ Ejemplo de uso del comando*\n\n${prefix + command} ❤️`)
reply(wait()) 
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[8].url}`
sendStickerFromUrl(from,`${teks}`)	
console.log('  ✅ emoji a sticker ' )
})
.catch((err) => {
            reply('❎ Por favor ingrese solo un emoji'); 
            })
limitAdd(sender, limit)
break

      case "term":
      case "termux":
        if(!isOwner) return ('Fitur ini khusus owner')
        if (!q) return reply(mess.wrongFormat);
        exec(q, (err, stdout) => {
          if (err) return reply(`[GATYBOT]:~ ${err}`);
          if (stdout) {
            reply(stdout);
          }
        });
        break;
        
              case "eval":
        if (!isOwner) return;
        Fg.sendMessage(
          from,
          JSON.stringify(eval(budy.slice(5)), null, "\t"),
          text,
          { quoted: mek }
        );
        break;
       
       
case 'join2':
case 'entrabot2':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply(`✳️ Envie el link de tu Grupo  sin el *https://*\n\n📌 Ejemplo *${prefix + command}* chat.whatsapp.com/GSZcY5bEKyq4NknFuT3jVr`)
if (!q.includes('chat.whatsapp.com')) return reply(`❎ asegúrese de que el enlace sea correcto!\n\n📌 Para aprender a usar el comando Escriba *${prefix + command}*`)
if (!args[0].includes('chat.whatsapp.com')) return reply(mess.link)
let code = args[0].replace('chat.whatsapp.com/', '')
Fg.acceptInvite(code)
.then((res) => {
Fg.sendMessage(res.gid,`🎈 Hola soy *${Fg.user.name}*\n_🛡️ Fui invitado por @${sender.split("@")[0]} para unirme al grupo_\n📌 Escriba *${prefix}help* para ver el Menu del bot\📃 *${prefix}reglas*`,text,{contextInfo:{mentionedJid:[sender]}, quoted : estadofake})
reply(`✅ Me uní correctamente al grupo`)
})
.catch((err) => reply(err))
limitAdd(sender, limit)
break

  
  case 'join':
  case 'entrabot':
    if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if(!isPremium)return reply(premi())
    if(!args) return reply(`✳️Ingrese el link de tu Grupo`) 
    join = args.join('https://chat.whatsapp.com/')[1]
    await Fg.acceptInvite(join).then((res) => {
      Fg.sendMessage(res.gid,`🎈 Hola soy *${Fg.user.name}*\n\n_🛡️ Fui invitado por @${sender.split("@")[0]} para unirme al grupo_\n\n📌 Escriba *${prefix}help* para ver el Menu del bot`, text, {contextInfo:{mentionedJid:[sender]}})
      reply(`✅ Me uní correctamente al grupo`)
      })
      .catch((err) => m.reply("‣ "+jsonformat(err)))
    break

case 'runtime':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
uptime = process.uptime()
reply(`🟢 *Tiempo encendido* : ${runtime(uptime)}`)
break

      case 'speed':
case 'ping': 
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
const timestamp = speed();
const latensi = speed() - timestamp
uptime = process.uptime()
reply(`🟢 *Velocidad de la bot* : ${latensi.toFixed(4)} _Segundos_`)
break

case 'tovn': 
case 'toav':
case 'toaudio':
if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isQuotedAudio && !isQuotedVideo) return reply(`✳️ Responde a un audio o vídeo`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Fg.downloadAndSaveMediaMessage(encmedia)
hah = fs.readFileSync(media)
Fg.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true,quoted : mek})
fs.unlinkSync(media)
limitAdd(sender, limit)
break

case 'tomp3': 
case 'amp3':
if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
Fg.updatePresence(from, Presence.composing)
if (!isQuotedVideo && !isQuotedAudio) return reply(`MP4 a MP3\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\n\n🎥 Envia un video con el comando *${prefix + command}* o etiqueta un video  que se haya enviado`)
reply(wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Fg.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(errofg(prefix))
buffer = fs.readFileSync(ran)
Fg.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
limitAdd(sender, limit)
break

      case 'tovid':
case 'tomp4':
case 'amp4': 
case 'tovideo':
if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
	reply(wait())
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await Fg.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            	
            sendMediaURL(from,res.result,'✅ Aquí tienes')
            })
            }else {
            reply('✳️ Responde a un sticker animado')
            }
            fs.unlinkSync(owgi)
            
limitAdd(sender, limit)
break
						 
case 'togif':
case 'agif':
if(!isVerify) return isUser()
if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!isQuotedSticker) return reply('✳️ Responde a un sticker')
reply(wait())
if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated == true)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await Fg.downloadAndSaveMediaMessage(encmedia)
memek = await webp2gifFile(media)

console.log(memek)
anu = await getBuffer(memek.result)
Fg.sendMessage(from, anu, video, {mimetype: 'video/gif', caption: '✅ Aquí tienes', quoted: mek})
limitAdd(sender, limit)
break

case 'tourl':
case 'aurl':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var media = await  Fg.downloadAndSaveMediaMessage(encmedia)
var imgbb = require('imgbb-uploader')
imgbb('e4bb5222011a8521cc60ce61a2aa1f98', media)
.then(data => {
var caps = `❒ 「 *IMAGEN A URL* 」

➸ *ID :* ${data.id}
➸ *Tipo :* ${data.image.mime}
➸ *Extension :* ${data.image.extension}
➸ *URL :* ${data.display_url}`
			ibb = fs.readFileSync(media)
Fg.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
})
.catch(err => {
throw err 
})
limitAdd(sender, limit)
break

case 'tourl2':
case 'aurl2':
if(!isVerify) return isUser()
                   if (isBanned) return reply(banf())
                   if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await Fg.downloadMediaMessage(boij)
            fgurl = await upload(owgi)
            reply(fgurl)
            limitAdd(sender, limit)
            } else {
            reply('✳️Responde a un video o imagen')
            }
            break
            
case 'urltoimg':
case 'urlaimg':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (!q)return reply('✳️ Ingrese un link de una imagen junto al comando')
reply(wait())
sendMediaURL(from,`${q}`)
limitAdd(sender, limit)
break
//-----------------------------ATTP - TTP----------------------------

//https://api.xteam.xyz/attp?file&text=hola
case 'ttp':
  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix + command}* Texto`)
					colorf = ["red","yellow","white","magenta","lime","aqua"]
                   ttpfg = colorf[Math.floor(Math.random() * colorf.length)]
                   
buffer = `https://pecundang.herokuapp.com/api/ttpcolor?teks=${encodeUrl(body.slice(5))}&color=${ttpfg}`
reply(wait())
sendStickerUrl(from, buffer)
.catch((err) => {
						reply(`❎ Error, intente de nuevo mas tarde`); 
						giveLimit(sender, 1, limit)
						})
limitAdd(sender, limit)
break 
						case 'ttp2':  
             if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix + command}* Texto`)
                    reply(wait())
                    F = q
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/ttp3?apikey=${lolkey}&text=${encodeUrl(F)}`)
                    Fg.sendMessage(from, anu1, sticker, {quoted: mek})
                    .catch((err) => {
						reply(`❎ Error, intente de nuevo mas tarde`); 
						giveLimit(sender, 1, limit)
						})
                    limitAdd(sender, limit)
                    break
                    

	case 'attp':
	              if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix + command}* Texto`)
					  reply(wait())
					var teks = encodeURIComponent(args.join(' '))
					const attp = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeUrl(teks)}`)
					Fg.sendMessage(from, attp, sticker, {quoted: mek})
					.catch((err) => {
						reply(`❎ Error, intente de nuevo mas tarde`); 
						giveLimit(sender, 1, limit)
						})
					  limitAdd(sender, limit)
break
					
					case 'attp2':  
                  if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix + command}* Texto`)
                    reply(wait())
                    F = q
                    anu1 = await getBuffer(`https://lolhuman.herokuapp.com/api/attp?apikey=${lolkey}&text=${encodeUrl(F)}`)
                    Fg.sendMessage(from, anu1, sticker, {quoted: mek})
                    .catch((err) => {
						reply(`❎ Error, intente de nuevo mas tarde`); 
						giveLimit(sender, 1, limit)
						})
                    limitAdd(sender, limit)
                    break
                   
	
case 'attp3':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
  if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
					if (args.length < 1) return reply(`✳️ _Envie el texto_\n\n📌Ejemplo *${prefix + command}* Texto`)
buffer = `https://pecundang.herokuapp.com/api/attp?teks=${encodeUrl(q)}`
reply(wait())
sendStickerUrl(from, buffer)
.catch((err) => {
						reply(`❎ Error, intente de nuevo mas tarde`); 
						giveLimit(sender, 1, limit)
						})
limitAdd(sender, limit)
break

//******************** 》Owner Prem《 ********************\\

case 'prem':
case 'premiun':
case 'premium':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
premz = `_Este menú esta en proceso_`
reply(premz)
break

case 'addprem':
case 'addpremium':
if (!isOwner)return reply(ownerB()) 
if (!q)return reply(`✳️ *Uso del comamdo!*\n\n*📌Ejemplo :*\n• *${prefix + command} @tag 10d*\n\n*Nota :*\n• s : segundos\n• m : minutos\n• h : horas\n• d : dias*`)
expired = q.split(" ")[1]
const pnom = {id: `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`,expired: Date.now() + toMs(expired) }
premium.push(pnom) 
fs.writeFileSync('./database/premium.json',JSON.stringify(premium))
reply(`✅ *Premium añadido*`)
break

case 'delprem':
case 'delpremium':
  if(!isOwner) return reply(ownerB())
user = q.split('@')[1] + '@s.whatsapp.net'
for(let i=0; i<premium.length; i++){
if(user.includes(premium[i].id)){
let del = premium.indexOf(premium[i])
premium.splice(del, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
mentions(`✅Se eliminó  premium de @${user.split("@")[0]}`,[user],true)
}
}
break

case 'listprem':
case 'listapremium':
case 'listpremiem':
case 'premiumlist':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())

Fg.updatePresence(from, Presence.composing)
let txt = `≡ *USUARIOS PREMIUM 💎*\n\n*Total* : ${premium.length}\n────⊷ *LISTA* ⊶\n`
let men = [];
for (let i of premium){
men.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `▢ *🏷️Nombre :* @${i.id.split("@")[0]}\n*⏳Expira :* ${cekvip.days} *_días_* ${cekvip.hours} *_horas_* ${cekvip.minutes} *_minutos_* ${cekvip.seconds} *_segundos_*\n\n`
  }
mentions(txt, men, true)
break

case 'checkprem': 
case 'checkpremium':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isPremium) return reply(`❎ No eres un usuario premium`)
let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let premiumnya = `${cekvip.days} *_días_* ${cekvip.hours} *_horas_* ${cekvip.minutes} *_minutos_* ${cekvip.seconds} *_segundos_`
try {
ppimg = await Fg.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i.ibb.co/FX6pMj0/profile.png'
}
teks = `❒ *「 Usuario Premium 」* ❒ 
  
 *🏷️Nombre* : ${pushname}
 *🔮Tag* : @${sender.split("@")[0]}
 *⏳Expira* : ${premiumnya}*`
its = await getBuffer (ppimg)
Fg.sendMessage(from, its, image, {contextInfo: { forwardingScore: 9999, isForwarded: false, mentionedJid: [sender]},quoted: mek, caption: teks
})
break

//******************** 》DIAMANTES《 ********************\\

case 'transferdiamond':
case 'dardiamante':
case 'transferirdiamante':
if (!isVerify) return isUser()
if (isBanned) return reply(banf())
if (q.includes('-')) return reply(`❎ No use  -`)
const useradddi = `51940617554@s.whatsapp.net`
if (!q) return reply(`✳️ Uso del comando *${prefix +  command}* @tag|cantidad\n\n*📌Ejemplo :* ${prefix + command} @${useradddi.split("@s.whatsapp.net")[0]} 5000`)
lim = q.split(" ")
limm = q.split(" ")[1]
if (isNaN(limm)) return await reply(`*❎ Error de transferencia*\n\n*📌Ejemplo :* ${prefix + command} @${useradddi.split("@s.whatsapp.net")[0]}|5000`)
if (limm < 50 ) return reply(`✳️ La transferencia mínima es de *50 💎Diamantes*`)
if (getBalance(sender, balance) < limm) return reply(`❎ No tienes suficientes *💎Diamantes* para realizar la transferencia`)
const tagadd1 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
//giveLimit(tag1, limm, limit)
adddiamond = `「 *TRANSFERENCIA EXITOSA* 」
╭──────────────────✾
├ *🏦De* : @${sender.split("@")[0]}
├ *💱A* : @${tagadd1}
├ *💎Total* : +${tujuan} Diamantes
╰──────────────────✾

*📌Nota:* Puedes revisar tus *💎Diamantes* con el comando *${prefix}cartera*`
Fg.sendMessage(from, adddiamond, text, { quoted: mek, contextInfo: {mentionedJid: [sender, tagadd1] }})
break

case 'shop':
case 'tienda':
	 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
	shopfg = `「 *TIENDA* 」
╭──────────────────✾
├❏ *💎 1 Diamante* : ➜ *300* 💰
├❏ *🎰 1 GameCoin* : ➜ *100* 💰
╰──────────────────✾

*📌NOTA:*
Puedes comprar 💎Diamantes usando *${prefix}buy* 
Y para comprar 🎰GameCoins *${prefix}buygcoin*`
reply(shopfg)
	break
	
/*case 'topbalance':
case 'topbal':
case 'top':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if(!isGroup)return reply(group())
Fg.updatePresence(from, Presence.composing)
let txot = `*── 「 TOP BALANCE 」 ──*\n\n`
let mebn = [];
for (let i of balance){
mebn.push(i.id)
let bl = (i.balance)
txot += `*🏷️ID :* @${i.id.split("@")[0]}\n➸ *💰Coin* : ${bl}\n\n`
  }
mentions(txot, mebn, true)
break*/

case 'diamond':
case 'diamonds': 
case 'diamantes': 
case 'diamantes': 
case 'bal':
case 'balance':
case 'dinero':
case 'coins':
case 'coin':
case 'cartera':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
bal = `❏ *Nombre* : @${sender.split("@")[0]}

「 *BALANCE* 」
╭──────────────────✾
├ *💎Diamantes* : ${isPremium ? 'Ilimitado' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}
├ *🎰GameCoins* : ${isPremium ? 'Ilimitado' : `${cekGLimit(sender, gcount, glimit)}/${gcount}`}
├ *💰BotCoins* : ${isPremium ? 'Ilimitado' : `${getBalance(sender, balance)}`}
╰──────────────────✾
*📌NOTA:* 
Puedes comprar 💎Diamantes usando *${prefix}buy*
Y para comprar 🎰GameCoins *${prefix}buygcoin*`
Fg.sendMessage(from, bal, text, { quoted: mek, contextInfo: {mentionedJid: [sender] }})
break



case 'buy':
case 'buydiamond':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
{
if (!q) return reply(`✳️ Uso del comamdo *${prefix +  command}* cantidad\n📌Ejemplo ${prefix + command} 4\n\n💰Precio\n 💎 1 Diamante = 300 💰`)
if (q.includes('-')) return reply(`❎ No use  -`)
if (isNaN(q)) return reply(`✳️ Tiene que ser un número`)
let ane = Number(nebal(q) * 300) //---precio diamante
if (getBalance(sender, balance) < ane) return reply(`❎ Lo siento, no tienes suficientes Botcoins💰 para comprar *${q}* Diamantes💎`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)

diafg = `
「 *NOTA DE PAGO* 」
╭──────────────────✾
├ *🛒Compra nominal* : ${q}
├ *💰BotCoins restante* : ${getBalance(sender, balance)}
├ *💎Diamantes* : ${getLimit(sender, limitCount, limit)}/${limitCount}
╰──────────────────✾`
reply(diafg)
}
break


case 'buyglimit':
case 'buygcoin':
case 'buygamecoin':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
{
if(!q)return reply(`📌 Ejemplo : ${prefix + command} 10\n\n💰Precio\n 🎰1 glimit = 100💰`)
if (q.includes('-')) return reply(`❎ No use  -`)
if (isNaN(q)) return reply(`✳️ Tiene que ser un número`)
const koinPerlimit = 100
const total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`❎ Lo siento, no tienes suficientes Coins💰 para comprar *${q}* 🎰GameCoins`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
gcoi = `
「 *NOTA DE PAGO* 」
╭──────────────────✾
├ *🛒Compra nominal* : ${q}
├ *💰BotCoins restante* : ${getBalance(sender, balance)}
├ *🎰GameCoins* : ${cekGLimit(sender, gcount, glimit)}/${gcount}
╰──────────────────✾`
reply(gcoi)
  }
break

case 'giftlimit':
case 'adddiamond':
case 'adddiama':
case 'añadirdiamantes':
case 'añadirdiama':
  if(!isOwner) return reply(ownerB())
if (!q)return reply(`📌Ejemplo : ${prefix + command} @tag 10`)
lim = q.split(" ")[1]
const tag1 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
giveLimit(tag1, lim, limit)
reply('✅ Diamantes 💎 agregados al usuario')
break

//---añadir Game coin 
case 'addgcoin':
  if(!isOwner) return reply(ownerB())
if (!q)return reply(`📌Ejemplo : ${prefix + command} @tag 10`)
gco = q.split(" ")[1]
const tag2 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
givegame(tag2, gco, glimit)
reply(`✅ GameCoins 🎰 agregados al usuario`)
break


//******************** 》 GAME 《 ********************\\
case 'tictactoe': 
case 'ttc':
case 'ttt':
if (!isVerify) return isUser()
if (isBanned) return reply(banf())
if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
if (!isGroup) return reply(group())
if (!q)return reply(`📌Mensiona al usuario que deseas desafiar`) 
if (budy.includes("@51988050859")) return reply(`❎ No puedes desafiar a la bot`);
if (fs.existsSync(`./libreria/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `TICTACTOE GAME..
     
Hay una sesión de juego en este grupo.!!

Info : 
  Jugador1 ❎ : @${boardnow.X}
  Jugador2 ⭕ : @${boardnow.O}
     

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
     
Tu turno:  @${boardnow.turn == "X" ? boardnow.X : boardnow.O}
          
Escriba *rendirse* para dejar el juego..
Escriba ${prefix}delttc para eliminar la sesión de juego..`;
Fg.sendMessage(from, chatMove, MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [
  boardnow.X + "@s.whatsapp.net",
  boardnow.O + "@s.whatsapp.net",
  ],
  },
 });
return;
  }
if (argss.length === 1)
return reply(`✳️ Etiqueta a quien quiere ser tu oponente\n\n📌Uso  : *${prefix + command} @Tag*`
                         );
const boardnow = setGame(`${from}`);
console.log(color('[GATYBOT]','magenta'), color(`Juego iniciado en ${boardnow.session}`));
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
fs.writeFileSync(`./libreria/tictactoe/db/${from}.json`,JSON.stringify(boardnow, null, 2));
const strChat = `TICTACTOE GAME..

@${sender.replace("@s.whatsapp.net","")} desafía a ${argss[1]} para una partida de tictactoe
     
${argss[1]}  Escribe S/N 

Nota : 
  • N : rechazar el desafío.
  • S : acepta el desafío.`;
Fg.sendMessage(from, strChat, MessageType.text, {
quoted: mek,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
 },
});
gameAdd(sender, glimit)
break
                    
case  'delttc':
case  'delttt':
if(!isVerify) return isUser()
                                         if (isBanned) return reply(banf())
                                         //if (!isGroupAdmins && !isOwner) return reply(admin())
if (!isGroup) return reply(group())
if (fs.existsSync("./libreria/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./libreria/tictactoe/db/" + from + ".json");
reply(`✅ Sesión de juego reiniciado`);
  } else {
reply(`No hay sesión en curso, 🛡️ Para iniciar uno escribe ${prefix}ttc`);
  }
break

               //-----  𝗝𝘂𝗲𝗴𝗼𝘀 𝗽𝗮𝗿𝗮 𝗴𝗮𝗻𝗮𝗿 𝗕𝗼𝘁𝗖𝗼𝗶𝗻𝘀--         
case 'math':
case 'mate':
case 'mates':
case 'matemáticas':
if(!isVerify) return isUser()
if (isBanned) return reply(banf())
if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
if (!isGroup) return reply(group())
if (game.isMtk(from, mtk)) return reply(`❎ Todavía hay preguntas sin respuesta en este chat`)
if (!q) return reply(`*🧮 Dificultades disponibles :*\n1. noob\n2. fácil\n3. normal\n4. difícil\n5. extremo\n6. imposible\n\n_📌Ejemplo : ${prefix + command} normal_`)
					if (args[0] === 'noob' ) {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=very_easy`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
} else if (args[0] === 'fácil') {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=easy`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
} else if (args[0] === 'facil') {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=easy`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
					} else if (args[0] === 'normal') {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=medium`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
					} else if (args[0] === 'difícil') {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=hard`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
} else if (args[0] === 'dificil') {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=hard`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
} else if (args[0] === 'extremo') {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=extreme`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
} else if (args[0] === 'imposible') {
					  let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=impossible`)
reply(`_*Cuanto es :*_\n\n_${anu.data.nilai_1} ${anu.data.tanda} ${anu.data.nilai_2} =_\n*Tiempo* : ${GameTime} _Segundos_`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, GameTime, mtk)
					} else {
					  reply(`🗂️  *${args[0]}* No disponible!\n\n*🧮 Dificultades disponibles :*\n1. noob\n2. fácil\n3. normal\n4. difícil\n5. extremo\n6. imposible\n\n_📌Ejemplo : ${prefix + command} normal_`)
					}
					gameAdd(sender, glimit)
break


case 'dado':
                    if(!isVerify) return isUser()
                    if (isBanned) return reply(banf())
               if (!isGroup) return reply(group()) 
                if (!isLevelingOn) return reply(leveloff())
                 if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
                 try {
                    const ui5 =['01', '02', '03', '04', '05', '06']
                    xfjjs5 = ui5[Math.floor(Math.random() * ui5.length)]
                    dadoz = fs.readFileSync(`./almacenamiento/stickers/dado/${xfjjs5}.webp`);
                    Fg.sendMessage(from, dadoz, MessageType.sticker, {quoted: mek})
                    } catch (e) {
    console.log(`Error :`, color(e,'red'))
	reply('❎ Error, inténtelo más tarde')
	}
	gameAdd(sender, glimit)
                    break

case 'girar':
case 'slot':
            if(!isVerify) return isUser()
if (isBanned) return reply(banf())
               if (!isGroup) return reply(group()) 
                if (!isLevelingOn) return reply(leveloff())
                 if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
            const zomtoy = zotoy[Math.floor(Math.random() * (zotoy.length))]
            const zommtoy = zootoy[Math.floor(Math.random() * (zootoy.length))]
            const zommmtoy = zoootoy[Math.floor(Math.random() * (zoootoy.length))]
            ppg = Math.floor(Math.random() * (100000 - 50000 + 1) + 50000)
            addLevelingXp(sender, ppg)
            if ((zomtoy == '🥑 : 🥑 : 🥑') || (zomtoy == '🍉 : 🍉 : 🍉') || (zomtoy == '🍓 : 🍓 : 🍓') || (zomtoy == '🍎 : 🍎 : 🍎') || (zomtoy == '🍍 : 🍍 : 🍍') || (zomtoy == '🥝 : 🥝 : 🥝') || (zomtoy == '🍑 : 🍑 : 🍑') || (zomtoy == '🥥 : 🥥 : 🥥') || (zomtoy == '🍋 : 🍋 : 🍋') || (zomtoy == '🍐 : 🍐 : 🍐') || (zomtoy == '🍌 : 🍌 : 🍌') || (zomtoy == '🍒 : ?? : 🍒') || (zomtoy == '🔔 : 🔔 : 🔔') || (zomtoy == '🍊 : 🍊 : 🍊') || (zomtoy == '🍇 : 🍇 : 🍇')) {
            var vitr = "Usted ganó!!!"
            } else {
            var vitr = "Usted perdió..."
            }
            const slott = `*Consiga 3 iguales para ganar*

[ ✨│GIRO│🎰 ]
━╾────╼━
${zommtoy}
${zomtoy} *<—*
${zommmtoy}
━╾────╼━
[ 🎰│GIRO│✨ ]

*${vitr}*`
            if (vitr == "Usted ganó!!!") {
                 setTimeout(() => {
                 reply(`Ganasté ${ppg} de exp!!!`)
                 }, 1100)
            }
            Fg.sendMessage(from, slott, text, { quoted: mek })
            gameAdd(sender, glimit)
            break

case 'ppt':
            if(!isVerify) return isUser()
if (isBanned) return reply(banf())
               if (!isGroup) return reply(group()) 
                if (!isLevelingOn) return reply(leveloff())
                 if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
            if (args.length < 1) return reply(`✳️ Seleccione piedra/papel/tijera\n\nEjemplo : *${prefix}ppt* papel`)
                    ppt = ["piedra", "papel", "tijera"]
                    ppy = ppt[Math.floor(Math.random() * ppt.length)]
                    ppg = Math.floor(Math.random() * (100000 - 50000 + 1) + 50000)
                    addLevelingXp(sender, ppg)
                    pptb = ppy
                    pph = `*Usted ganó ${ppg} de Exp*`
                    if ((pptb == "piedra" && args == "papel") ||
                        (pptb == "papel" && args == "tijera") ||
                        (pptb == "tijera" && args == "piedra")) {
                        var vit = "vitoria"
                    } else if ((pptb == "piedra" && args == "tijera") ||
                        (pptb == "papel" && args == "piedra") ||
                        (pptb == "tijera" && args == "papel")) {
                        var vit = "derrota"
                    } else if ((pptb == "piedra" && args == "piedra") ||
                        (pptb == "papel" && args == "papel") ||
                        (pptb == "tijera" && args == "tijera")) {
                        var vit = "empate"
                    } else if (vit = "undefined") {
                        return reply(`✳️ Seleccione piedra/papel/tijera\n\nEjemplo : *${prefix}ppt* papel`)
                    }
                    if (vit == "vitoria") {
                        var tes = "🥳 victoria del jugador"
                    }
                    if (vit == "derrota") {
                        var tes = "🐱 victoria de gatybot"
                    }
                    if (vit == "empate") {
                        var tes = "El juego termino en empate"
                    }
                    reply(`*🤖gatybot:* ${pptb}\n*🏮jugador:* ${args}\n\n${tes}`)
                    if (tes == "🥳 victoria del jugador") {
                        reply(pph)
                    }
                    gameAdd(sender, glimit)
            break


case '_slot2':
case '_lucky':
if(!isVerify) return isUser()
if (isBanned) return reply(banf())
               if (!isGroup) return reply(group()) 
                if (!isLevelingOn) return reply(leveloff())
                 if (isGame(sender, isOwner, gcount, glimit)) return reply(gCoinF(prefix))
                 
                    const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : 🍇 : 🍇']
                    const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                    const somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                    const somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	
                    if (somtoyy  == '🍌 : 🍌 : 🍌') {
	     	        reply(` 🎰 | *SLOTS* \n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n 🎰 | GANASTE 🎉 *${pushname}* \n\nObtienes *+ 10000 XP*`)
                    addLevelingXp(sender, 10000)
	     	        } else if (somtoyy == '🍒 : 🍒 : 🍒') {
	     	        reply(` 🎰 | *SLOTS* \n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n 🎰 | GANASTE 🎉 *${pushname}*\n\nObtienes *+ 10000 XP*`)
                    addLevelingXp(sender, 10000)
	     	        } else if (somtoyy == '🔔 : 🔔 : 🔔') {
	     	        reply(` 🎰 | *SLOTS* \n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n 🎰 | GANASTE 🎉 *${pushname}*\n\nObtienes *+ 10000 XP*`)
                    addLevelingXp(sender, 10000)
	     	        } else if (somtoyy == '?? : 🍐 : 🍐') {
	     	        reply(` 🎰 | *SLOTS* \n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n 🎰 | GANASTE 🎉 *${pushname}* \n\nObtienes *+ 10000 XP*`)
                    addLevelingXp(sender, 10000)
	     	        } else if (somtoyy == '🍇 : 🍇 : 🍇') {
	     	        reply(` 🎰 | *SLOTS* \n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n 🎰 | GANASTE 🎉 *${pushname}*\n\nObtienes *+ 10000 XP*`)
                    addLevelingXp(sender, 10000)
	     	        } else {
	     	        reply(` ?? | *SLOTS* \n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n 🎰 | Perdiste *${pushname}*\n\n Se descontará - 998 de XP`)
                    addLevelingXp(sender, -998)
	     	        }
                    gameAdd(sender, glimit)
                    break

//----ENCODE Y DECODE---
case 'code':
case 'encode':
if(!isVerify) return isUser()
if (isBanned) return reply(banf())
if (!q) return reply(`✳️ *Ingresa un texto para codificar*`) 
texto = args.join(' ')
var rawStr = `${texto}`
var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
var base64 = CryptoJS.enc.Base64.stringify(wordArray);
reply(`${base64}`)
break

case 'decode':
if(!isVerify) return isUser()
if (isBanned) return reply(banf())       
if (!q) return reply(`✳️ *Que quieres que decodifique*`) 
texto = args.join(' ')
var parseWordArray = CryptoJS.enc.Base64.parse(`${texto}`);
var parsedStr = parseWordArray.toString(CryptoJS.enc.Utf8);
reply(`${parsedStr}`)
break



///===============NSFW ========

                case 'nsfw':
                case '+18':
				if(!isVerify) return isUser()
				if (isBanned) return reply(banf())
				if (!isGroup) return reply(group())
					if (!isGroupAdmins && !isOwner) return reply(admin())
					if (args.length < 1) return reply(`✳️ *CONTENIDO +18*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					if ((args[0]) === 'on') {
						if (isNsfw) return reply('✳️ Nsfw ya está activo')
						nsfw.push(from)
						fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
						reply(`✅ Se activo el *nsfw* en este grupo`)
					} else if ((args[0]) === 'off') {
						if (!isNsfw) return reply('✳️ Nsfw ya está desactivado')
						nsfw.splice(from, 1)
						fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
						reply(`✅ Se desactivo el *nsfw* en este grupo`)
					} else {
						reply(`✳️ *CONTENIDO +18*\n\n*${prefix + command} on* para activar\n*${prefix + command} off* para desactivar`)
					}
					break

///---------
case 'topnivel':
case 'toplevel':
case 'leveltop':
              if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
    if (!isGroup) return reply(group())
                if (!isLevelingOn) return reply(leveloff())
              const resp = _level
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
              let leaderboard =  '-----[ *TOP DE NIVELES* ]----\n\n'
              try {
              for (let i = 0; i < 10; i++) {
var role = 'HIERRO I'
        if (resp[i].level <= 2) {
            role = 'HIERRO I'
        } else if (resp[i].level <= 4) {
            role = 'HIERRO II'
        } else if (resp[i].level <= 6) {
            role = 'HIERRO III'
        } else if (resp[i].level <= 8) {
            role = 'HIERRO IV'
        } else if (resp[i].level <= 10) {
            role = 'HIERRO V'
        } else if (resp[i].level <= 12) {
            role = 'BRONCE I'
        } else if (resp[i].level <= 14) {
            role = 'BRONCE II'
        } else if (resp[i].level <= 16) {
            role = 'BRONCE III'
        } else if (resp[i].level <= 18) {
            role = 'BRONCE IV'
        } else if (resp[i].level <= 20) {
            role = 'BRONCE V'
        } else if (resp[i].level <= 22) {
            role = 'PLATA I'
        } else if (resp[i].level <= 24) {
            role = 'PLATA II'
        } else if (resp[i].level <= 26) {
            role = 'PLATA III'
        } else if (resp[i].level <= 28) {
            role = 'PLATA IV'
        } else if (resp[i].level <= 30) {
            role = 'PLATA V'
        } else if (resp[i].level <= 32) {
            role = 'ORO I'
        } else if (resp[i].level <= 34) {
            role = 'ORO II'
        } else if (resp[i].level <= 36) {
            role = 'ORO III'
        } else if (resp[i].level <= 38) {
            role = 'ORO IV'
        } else if (resp[i].level <= 40) {
            role = 'ORO V'
        } else if (resp[i].level <= 42) {
            role = 'DIAMANTE I'
        } else if (resp[i].level <= 44) {
            role = 'DIAMANTE II'
        } else if (resp[i].level <= 46) {
            role = 'DIAMANTE III'
        } else if (resp[i].level <= 48) {
            role = 'DIAMANTE IV'
        } else if (resp[i].level <= 50) {
            role = 'DIAMANTE V'
        } else if (resp[i].level <= 52) {
            role = 'NIVEL FINAL'
        } else if (resp[i].level <= 100000) {
            role = 'NIVEL FINAL'
		}

              leaderboard += `[${i + 1}]wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n◪ *Exp* : ${_level[i].xp}\n◪ *Nivel* : ${_level[i].level}\n◪ *Rango* : ${role}\n\n`
}
              reply(leaderboard)
              } catch (err) {
              console.error(err)
              reply('✴ mínimo 10 usuarios para mostrar la base de niveles!')
}
              break
 
 case 'mediafire':
 case 'mdfire':
 if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
    if(!isPremium)return reply(premi())
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
if (args.length < 1) return reply('y el link?? ')
if(!args[0].includes('mediafire')) return reply('Link invalido, el link debe ser de MediaFire')
reply(wait())
let ment = args.join(' ')
const resm = await mediafire(ment)
result = `  *「  Descarga de MediaFire 」*

• *Nombre:* ${resm[0].nombre}
• *Tamaño:* ${resm[0].size}
• *Enlace:* ${resm[0].link}

_*El archivo se esta enviando*_`
Fg.sendMessage(from, result, text, {quoted: mek})
sendFileFromUrl(resm[0].link, MessageType.document, {mimetype: resm[0].mime, filename: resm[0].nombre, quoted: mek })
.catch((err) => {
            reply(`❎ Error, intente de nuevo mas tarde`); 
            })
break
 
            case 'claim':
            case 'klaim':
            case 'reclamar':
            case 'daily':
            if(!isVerify) return isUser()
            if (isBanned) return reply(banf())
                    if (isClaimOn) return reply('❇ Ya reclamaste tu recompensa diaria! vuelve mañana')
                    const claimcoins = Math.floor(Math.random() * 50) + 700
                    addBalance(sender, claimcoins, balance)
                    const claimexp = Math.floor(Math.random() * 900) + 10000
                    addLevelingXp(sender, claimexp)
                    _claim.push(sender)
                    fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
                    reply(`*🎁 RECOMPENSA DIARIA 🎁*

▢ *Has recibido:*

*💰BotCoins* : ${isPremium ? 'Ilimitado' : `${claimcoins}`}
*✨Exp* : ${claimexp}`)
                    break

case 'contar':
	con = ["+","×","÷","-"]
	ty = con[Math.floor(Math.random() * con.length)]
	number1 = `${Math.floor(Math.random() * 100)}`
	number2 = `${Math.floor(Math.random() * 100)}`
	conta = `Cuanto és ${number1} ${ty} ${number2}?`
	reply(conta)
	break

case 'adv':
	conn = ["1", "2"]
	tyz = conn[Math.floor(Math.random() * conn.length)]
	const contaa = `${tyz}`
	_adv.push(contaa)
	fs.writeFileSync('./datajuego/adv.json', JSON.stringify(_adv))
	reply(`Adivina el numero de 1 - 2`)
	break

            case 'mcpez':
            if(!isVerify) return isUser()
            if (isBanned) return reply(banf())
                    Fg.sendMessage('./[ɢᴀᴛɪᴛᴏ] Minecraft PE 1.17.41.01 Official.apk', MessageType.document, { quoted: mek })
                    break

case 'mc':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
                   inifer = `*DESCARGA DANDO CLICK AQUI ARRIBA XD*`
             Fg.sendMessage(from, inifer, text, { quoted: mek, contextInfo: { externalAdReply:{title: `「 MINECRAFT PE 」`,body:"Vercion 1.17.40.06 oficial\nBy 「gatitoツ」", previewType:"PHOTO",thumbnail: minecraft, sourceUrl:`https://www.mediafire.com/file/812dusmbfgqp461/%255B%25C9%25A2%25E1%25B4%2580%25E1%25B4%259B%25C9%25AA%25E1%25B4%259B%25E1%25B4%258F%255D_Minecraft_PE_1.17.40.06_Oficial.apk/file`}, "mentionedJid": [sender]}})
           break

case 'memes':
case 'meme':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
    if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(fdiama(prefix))
      reply(wait()) 
let memez = meme[Math.floor(Math.random() * meme.length)]
      memex = await getBuffer(memez)
Fg.sendMessage(from, memex, image, {quoted: mek, caption: `${isPremium && isOwner ? '💎No se te descontará ningún Diamante' : `💎-1 Diamante por utilizar esta función`}\n\n• *Link* : ${memez}\n\n✅ Aqui tienes :v`})
.catch((err) => {
            reply(`❎ Error, intente de nuevo mas tarde`); 
            giveLimit(sender, 1, limit)
            })
            limitAdd(sender, limit)
          break
          
case 'hbd':
case 'zodiak':
case 'zodiac':
let textus = args.join(" ")
if (!q) return reply(`Example : ${prefix + command} 2003 01 24`)
const zodiak = [
    ["Capricorn",   new Date(1970, 0, 1)],
    ["Aquarius",    new Date(1970, 0, 20)],
    ["Pisces",      new Date(1970, 1, 19)],
    ["Aries",       new Date(1970, 2, 21)],
    ["Taurus",      new Date(1970, 3, 21)],
    ["Gemini",      new Date(1970, 4, 21)],
    ["Cancer",      new Date(1970, 5, 22)],
    ["Leo",         new Date(1970, 6, 23)],
    ["Virgo",       new Date(1970, 7, 23)],
    ["Libra",       new Date(1970, 8, 23)],
    ["Scorpio",     new Date(1970, 9, 23)],
    ["Sagittarius", new Date(1970, 10, 22)],
    ["Capricorn",   new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const okbg = new Date(textus)
if (okbg == 'Invalid Date') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [okbg.getFullYear(), okbg.getMonth() + 1, okbg.getDate()]
    
const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiak : ${zodiac}
`.trim()
reply(teksh)
break

case 'wts':
                 const wtss = "0@s.whatsapp.net"
                 wts = `@${wtss.split("@s.whatsapp.net")[0]}`
                 Fg.sendMessage(from, wts, text, {quoted: mek, contextInfo: {"mentionedJid": [wtss]}})
                 break

case 'buggc':
if(!isVerify) return isUser()
  if (isBanned) return reply(banf())
if (!isOwner) return reply(ownerB()) 
po = Fg.prepareMessageFromContent(from, { "protocolMessage": {
         "key": {
            "remoteJid": `${from}`,
            "fromMe": false
            
         },
         "type": "EPHEMERAL_SETTING",
         "ephemeralExpiration": 0
      }
   }, {}) 
            Fg.relayWAMessage(po, {waitForAck: true})
break

case 'menupv':
Sendbutdocument(from, `menu de prueva`, "by gatito", fs.readFileSync('./gatybot_0.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./almacenamiento/imagenes/gaty_2.jpg'), filename:`𝖌𝖆𝖙𝖞𝖇𝖔𝖙 𝖇𝖞 𝖌𝖆𝖙𝖎𝖙𝖔.pdf`, pageCount: 9999999 }, [{buttonId:`!000`,buttonText:{displayText:'Hola'},type:1}], {quoted: fvid, contextInfo: { mentionedJid: [sender], forwardingScore: 508, isForwarded: true, externalAdReply:{title:`Hola ${pushname}`,mediaType:"2",thumbnail: gatylogo,mediaUrl:`https://youtu.be/x-O0WHkv3uc`}}})
break

case 'gamemode':
			if (args.length == 0) return reply(from, 'Você esqueceu de colocar se quer ativado [1  ou c ou creative], ou desativado [0 ou s ou survival].', id)
			if (args[0] == '1' || args[0] == 'c' || args[0] == 'creative') {
				Fg.sendMessage(from, `El modo de juego de @${sender.split("@")[0]} se cambio a creativo`, text, {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
			} else if (args[0] == '0' || args[0] == 's' || args[0] == 'survival') {
				Fg.sendMessage(from, `El modo de juego de @${sender.split("@")[0]} se cambio a supervivencia`, text, {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
			} else {
				reply(from, 'Você esqueceu de colocar se quer ativado [1  ou c ou creative], ou desativado [0 ou s ou survival].', id)
			}
            break

//--------------------------------------
      default:
 
 //====================================================================================================//

//>> Anti ViewOnce
 if (isGroup && type == 'viewOnceMessage'){
 	if (isBanned) return
     if (!isAntiviewOnce) return
 
var msg = {...mek}

let typenya = msg.message.viewOnceMessage.message["videoMessage"] ?
msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage
        
typenya["viewOnce"] = false
            
typenya["caption"] = `*🍃「 ViewOnce Detectado 」🍃*\n\n• *De* : @${sender.split("@")[0]}\n• *Hora* : ${hora2}\n• *Texto* : ${(typenya.caption === '') ? '_Sin texto_' : typenya.caption}`
            
let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :  { key: { fromMe: false, participant: sender, id: mek.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }
            
let pe = await Fg.prepareMessageFromContent(from, msg.message.viewOnceMessage.message, {quoted: peq, contextInfo: {"mentionedJid": [sender]}})
            
await Fg.relayWAMessage(pe)
console.log(color('[GATYBOT]','magenta'), color(`ViewOnce Detectado`,'red'));
}
//====================================================================================================//

//>> Detector de mensajes en especifico
                  if (isCmd) {
                        aing = `Hola @${sender.split("@")[0]} el comando *${prefix + command}* no esta en mi menú`
Fg.sendMessage(from, aing, text, {quoted: mek, contextInfo: {"mentionedJid": [sender]}})
				  }
                  if (budy.includes(`___Gracias bot`)) {
                  reply(`De nada 😊 estoy para ayudarte`)
                  }
                  if (budy.includes(`♦️ CREADOR`)) {
                  reply(`mensaje de prueba`)
                  }
                  
                  
				//>> audios
                  if (budy.startsWith(`__Buenos días`)) {
        const aufg = fs.readFileSync('./src/mp3/2.mp3');
		Fg.sendMessage(from, aufg, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy.startsWith(`__Buenas tardes`)) {
        const aufg = fs.readFileSync('./src/mp3/3.mp3');
		Fg.sendMessage(from, aufg, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                  if (budy.startsWith(`__Buenas noches`)) {
        const aufg = fs.readFileSync('./src/mp3/4.mp3');
		Fg.sendMessage(from, aufg, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
                  }
                 
                 
                 //>> audios
                  if (budy.includes('ika')) {
                  if (isBanned) return
                  ika = fs.readFileSync('./almacenamiento/audios/pikachu.mp3')
                  Fg.sendMessage(from, ika, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true, duration: 2})
                  }
                  if (budy.includes('adios')) {
                  if (isBanned) return
                  masturbar = fs.readFileSync('./almacenamiento/audios/masturvar.mp3')
                  Fg.sendMessage(from, masturbar, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true, duration: 2})
                  setTimeout( () => {
                  hola = fs.readFileSync('./almacenamiento/audios/holi.mp3')
                  Fg.sendMessage(from, hola, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true, duration: 2})
                  }, 50000)
                  }
                  if (budy.includes('jaja')) {
                  if (isBanned) return
                  gracioso = fs.readFileSync('./almacenamiento/audios/gracioso.mp3')
                  Fg.sendMessage(from, gracioso, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true, duration: 4})
                  }
                  if (budy.includes('vto bot')) {
                  if (isBanned) return
                  pvto = fs.readFileSync('./almacenamiento/audios/insultarme.mp3')
                  Fg.sendMessage(from, pvto, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true, duration: 3})
                  }
                  if (budy.includes('ame tu poto')) {
                  poto = fs.readFileSync('./almacenamiento/audios/poto.mp3')
                  Fg.sendMessage(from, poto, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true, duration: 3})
                  }
                  if (budy.includes('👀')) {
                  if (isBanned) return
                  potoz = fs.readFileSync('./almacenamiento/audios/poto2.mp3')
                  Fg.sendMessage(from, potoz, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true, duration: 4})
                  }
                  if (budy.includes(':3')) {
                  if (isBanned) return
                  quiero = fs.readFileSync('./almacenamiento/audios/quiero.mp3')
                  Fg.sendMessage(from, quiero, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true, duration: 1})
                  }
                  if (budy.includes('entai')) {
                  if (isBanned) return
                  hentai = fs.readFileSync('./almacenamiento/audios/sexuales.mp3')
                  Fg.sendMessage(from, hentai, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true, duration: 2})
                  }
                  if (budy.includes('ot te amo')) {
                  if (isBanned) return
                  amo = fs.readFileSync('./almacenamiento/audios/teamo.mp3')
                  Fg.sendMessage(from, amo, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true, duration: 3})
                  }
                  if (budy.includes('e amo bot')) {
                  if (isBanned) return
                  amoz = fs.readFileSync('./almacenamiento/audios/teamo.mp3')
                  Fg.sendMessage(from, amoz, audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true, duration: 3})
                  }
                  
                  //>> Mensajes
                  if (budy.includes("Gracias bot") || (budy.includes("gracias bot") || (budy.includes("Gracias gatybot") || (budy.includes("gracias gatybot"))))){
                  if (isBanned) return
                  reply(`De nada, estoy para ayudarte :3`)
                  }
                  if (budy.includes("Arigato") || (budy.includes("arigato") || (budy.includes("Arigatu") || (budy.includes("arigatu"))))){
                  if (isBanned) return
                  reply(`nya~`)
                  }
                  if (budy.startsWith("Te elimino") || (budy.startsWith("Te eliminó") || (budy.startsWith("te eliminó") || (budy.startsWith("te elimino"))))){
                  if (isBanned) return
                  reply(`De su corazón`)
                  }
                  if (budy.includes('tengo hermana')) {
                  if (isBanned) return
                  reply(`Bueno en ese caso el tuyo 7w7`)
                  }
                  if (budy.includes('@51988050859')) {
                  if (isBanned) return
                  reply(`Holi, en que le puedo ayudar? para ver mis comandos pon *+menu*`)
                  }
                  if (budy.includes('Gay bot')) {
                  if (isBanned) return
                  reply(`😒`)
                  }
                 
                 if (budy.includes('🚮')) {
                 if (isBanned) return reply()
                 if (!isGroup) return reply()
                 if (!isGroupAdmins) return reply()
                 if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply()
                 kick = mek.message.extendedTextMessage.contextInfo.participant
                 Fg.groupRemove(from, [kick])
                 }
                 
                  //gif con sonido 
                  if (budy.startsWith(`__Linda noche`)) {
        const gfso = fs.readFileSync('./src/mp4/1.mp4');
		Fg.sendMessage(from, gfso, MessageType.video, {mimetype: Mimetype.gif,quoted : mek})
		setTimeout( () => {
		reply('_La leyenda dice que si le das_ *doble click* _al gif escucharas la voz del tipo en tu mente._')
		}, 1000)
                  }
                  if (budy.startsWith(`__linda noche`)) {
        const none = fs.readFileSync('./src/mp4/1.mp4');
		Fg.sendMessage(from, none, MessageType.video, {mimetype: Mimetype.gif,quoted : mek})
		setTimeout( () => {
		reply('_La leyenda dice que si le das_ *doble click* _al gif escucharas la voz del tipo en tu mente._')
		}, 1000)
                  }

//====================================================================================================//

//>> Comandos especiales
        if (isOwner && budy.startsWith(">")) {
          try {
            return Fg.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }
  
  if (isOwner && budy.startsWith("$")) {
				const cmd = budy.slice(2)
				Fg.sendMessage(from, `✳️ El comando *${cmd}* se está ejecutando espere un momento`, text, { quoted: mek })
				exec(cmd, (err, stdout) => {
					if (err) return Fg.sendMessage(from, `${err}`, text, { quoted: mek })
					if (stdout) {
					Fg.sendMessage(from, stdout, text, { quoted: mek })
				}
				})
				}

//====================================================================================================//

//>> Anti número virtual
  	if (sender.startsWith("994") || (sender.startsWith("48") || (sender.startsWith("1") || (sender.startsWith("48")) || (sender.startsWith("91")) || (sender.startsWith("44"))))){
  	if (!isAntivirtual) return
    reply('❎ En este grupo no se permiten los números virtuales, adios')
    console.log(color('[GATYBOT]','magenta'), color(`Numero virtual detectado`));
    setTimeout( () => {
                  var virtual = `${sender.split("@")[0]}@s.whatsapp.net`
                  Fg.groupRemove(from, [virtual]);
                  }, 10000)
  }
  
//====================================================================================================//

//>> Simi sin comando 
  if (isGroup && isSimi && budy != undefined) {
  	try {
           await Fg.updatePresence(from, Presence.composing)
           simi = await fetchJson(`https://api.simsimi.net/v2/?text=${budy}&lc=es`, {method: 'GET'})
               reply(simi.success)
               } catch {
               	return 
               }
               }
  
//====================================================================================================//

//>> Privado auto bloqueo y mas
    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[CHAT]", "red"),
        "PRIVADO",
        color(sender.split("@")[0])
      );
      reply('❎ Esta prohibido hablar al privado del bot, seras bloqueado automáticamente')
      setTimeout( () => {
      	Fg.blockUser(sender, 'add') 
                  }, 5000)
      setTimeout( () => {
                  Fg.modifyChat(from, ChatModification.delete)
                  }, 10000)
                  
    }
} catch (e) { 
    e = String(e);
	if (!e.includes("this.isZero") && !e.includes("jid is not defined") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("no such file or directory")) {
      console.log("Message : %s", color(e, "red"));
    }
  }
};
