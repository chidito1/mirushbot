
let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
let qrcode = require('qrcode')
const fs = require('fs')

listjadibot = [];

const jadibot = async(reply,Fg,id) => {
	conn = new WAConnection()
    conn.logger.level = 'warn'
    conn.version = [2, 2140, 12]
    conn.browserDescription = [ 'jadibot', '', '3.0' ]
    conn.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
       	bot = await Fg.sendMessage(id,buffer,MessageType.image,{caption:`Escanea este QR para convertirte en un bot temporal!\n\n1. Haga click en los tres puntos en la esquina superior derecha.\n2. Toque Dispositivos vinculados\n3. Escanea este QR\n\n*Nota:*\nEl codigo  QR se cambiara cada 30 segundos`})
    	setTimeout(() => {
       	Fg.deleteMessage(id, bot.key)
       },30000)
    })
    conn.on('connecting', () => {
    })
    conn.on('open', () => {
    	reply(`Se convierte en Bot\n\nDispositivo*:\n\n ${JSON.stringify(conn.user,null,2)}`)
    })
    await conn.connect({timeoutMs: 30 * 1000})
    listjadibot.push(conn.user)
    conn.on('chat-update', async (message) => {
        require('../gatybot.js')(conn, message)
    })
}

const stopjadibot = (reply) => {
	conn = new WAConnection();
	conn.close()
	reply(`Bien, dejaste de ser un Bot`)
}

module.exports = {
	jadibot,
	stopjadibot,
	listjadibot
}
