//====================================================================================================//

//>> Conexión a WhatsApp
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    rugaapi,
    GroupSettingChange
} = require('@adiwajshing/baileys')

//>> Modulos
const fs = require('fs')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const axios = require("axios")
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const speed = require('performance-now')

//>> Libreria
const { color, bgcolor } = require('./lib/color')
const { wait, pegatinas, musica, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson } = require('./lib/fetcher')

//>> Configuración
const NomerOwner = '51940617554@s.whatsapp.net'
prefix = '/'

//>> Hora
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}

//>> Conexión a WhatsApp
async function starts() {
	const Gaty = new WAConnection()
	Gaty.version = [2, 2140, 12]
        Gaty.logger.level = 'warn'
	console.log(banner.string)
	Gaty.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color('Escanea el codigo de arriba!'))
	})

	fs.existsSync('./session.json') && Gaty.loadAuthInfo('./session.json')
	Gaty.on('connecting', () => {
		start('2', 'Estas desconectado')
	})
	Gaty.on('open', () => {
		success('2', 'Conectado')
	})
	await Gaty.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(Gaty.base64EncodedAuthInfo(), null, '\t'))

//>> Actualización de chat
	Gaty.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = JSON.parse(JSON.stringify(mek)).messages[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			global.prefix
			global.blocked
			const content = JSON.stringify(mek.message)
			const apikey = setting.apikey
			const from = mek.key.remoteJid
			const type = Object.keys(mek.message)[0]
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Guayaquil').format('HH:mm:ss')
			const date = moment.tz('America/Guayaquil').format('DD/MM/YY')
			body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			let authorname = Gaty.contacts[from] != undefined ? Gaty.contacts[from].vname || Gaty.contacts[from].notify : undefined
			const isCmd = body.startsWith(prefix)

			
			const botNumber = Gaty.user.jid
			const ownerNumber = ["593997889284@s.whatsapp.net"]
			const nomorOwner = [ownerNumber]
	        const isGroup = from.endsWith('@g.us')
			const totalchat = await Loli.chats.all()
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await Gaty.groupMetadata(from) : ''
			const isBanned = ban.includes(sender)
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isOwner = ownerNumber.includes(sender)
            const isUser = user.includes(sender)
            const conts = mek.key.fromMe ? Gaty.user.jid : Gaty.contacts[sender] || { notify: jid.replace(/@.+/, '') }
            const pushname = mek.key.fromMe ? Gaty.user.name : conts.notify || conts.vname || conts.name || '-'
			
//>> tipo de mensaje
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const reply = (teks) => {
				Gaty.sendMessage(from, teks, text, {quoted:mek})
			}
			const sendMess = (hehe, teks) => {
				Gaty.sendMessage(hehe, teks, text)
			}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? Gaty.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : Gaty.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}

//>> Colores
    colors = ["red", "white", "black", "blue", "yellow", "green", "magenta", "cyan", "pink", "gold", "purple", "navy", "gray"];
   
//>> Tipo de mensaje
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mGATYBOT\x1b[1;37m]', time, color(command), 'de', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mGATYBOT\x1b[1;37m]', time, color('Message'), 'de', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mGATYBOT\x1b[1;37m]', time, color(command), 'de', color(sender.split('@')[0]), 'en', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mGATYBOT\x1b[1;37m]', time, color('Message'), 'de', color(sender.split('@')[0]), 'en', color(groupName), 'args :', color(args.length))
	    	if (!isGroup && isCmd) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]))
            if (isCmd && isGroup) console.log('\x1b[1;37m>', '[ \x1b[1;36mMensaje\x1b[1;37m ]', time, color(command), 'De', color(sender.split('@')[0]), 'En', color(groupName))

//====================================================================================================//

//>> comandos con prefijo
switch(command) {

case 'menu':
Gaty.sendMessage('✳️ Bot en creación 7u7')
break

case 'actualizar':
case 'update':
Gaty.sendMessage(`✳️ Espere un momento la bot se está actualizando`)
exec(`git pull`, (err, stdout) => {
if (err) return reply(err)
if (stdout) reply(`✅ *La bot se ah actualizado de forma satisfactoria*\nInforme de la actualización:\n\n${stdout}\n\n Los cambios serán reflejados la próxima vez que inicie el bot.`)
})
break

//====================================================================================================//

//>> comandos sin prefijo
default:


	if (isGroup && isSimi && budy != undefined) {
						console.log(budy)
						muehe = await simih(budy)
						console.log(muehe)
						reply(muehe)
					} else {
						console.log(color('[ERROR]','red'), 'comando no registrado de', color(sender.split('@')[0]))
					}
                           }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})
}
starts()
