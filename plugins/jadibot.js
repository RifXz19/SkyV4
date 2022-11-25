import pkg from '@adiwajshing/baileys'
import { join, dirname } from 'path'
import WebSocket from 'ws'
import qrcode from 'qrcode'
import { makeWASocket }  from '../lib/simple.js'
import fs from 'fs'

const { DisconnectReason, MessageRetryMap, useSingleFileAuthState, fetchLatestBaileysVersion, toBuffer } = pkg

const isNumber = x => typeof x === 'number' && !isNaN(x)

global.tryConnect = []
if (global.conns instanceof Array) console.log()
else global.conns = []

let handler = async (m, { conn, args, usedPrefix, command, isOwner }) => {
	let conns = global.conn
	
if(conn.user.jid !== conns.user.jid) return m.reply('Tidak bisa membuat Bot pada user jadibot!')
	
//if (!global.users[m.sender].acc) return m.reply('Nomor kamu belum di Acc Owner, silahkan chat owner')

    let auth = false
    let authFile = 'plugins/jadibot/'+m.sender.split`@`[0]+'.data.json'
    let isInit = !fs.existsSync(authFile)
    let id = global.conns.length
    let { state, saveState} = useSingleFileAuthState(authFile)
    let { version } = await fetchLatestBaileysVersion()
    
const config = { 
    version: version, 
    printQRInTerminal: false,
    auth: state, 
    receivedPendingNotifications: false
    }
    conn = makeWASocket(config)
    let ev = conn.ev
    
    let date = new Date()
    let timestamp = date.getHours() + ':' + date.getMinutes() + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
    conn.timestamp = timestamp
    
    async function needUpdate(update) {
        const { connection, lastDisconnect, qr} = update
        date = new Date
        console.log(update) 
        timestamp = date.getHours() + ':' + date.getMinutes() + ' ' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear()
        conn.timestamp = timestamp
        if(qr) {
        	if (!isNumber(global.tryConnect[m.sender])) global.tryConnect[m.sender] = 0
        	if (global.tryConnect[m.sender] === 5) {
        	    global.tryConnect[m.sender] = 0
                return m.reply('Waktu scan qr kamu sudah habis!')
            }
            let scan = await conns.sendFile(
                m.chat, 
                await qrcode.toDataURL(qr, { scale: 8 }), 
                'qrcode.png', 
                'Scan QR ini untuk jadi bot sementara\n\n1. Klik titik tiga di pojok kanan atas\n2. Ketuk Whatsapp Web\n3. Scan QR ini\nQR Expired dalam 20 detik\nKalau Sudah Scan ketik lagi .jadibot sampai notif berhasil terhubung', 
                m
            )
            setTimeout(() => {
                conns.sendMessage(m.chat, { delete: scan.key } )
            }, 30000)
            global.tryConnect[m.sender] += 1
        }
        if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut && conn.ws.readyState !== WebSocket.CONNECTING) {
            global.tryConnect(true)
            m.reply('Connecting...')
        } else if(connection === 'open'){
        	conns.reply(m.chat, `Berhasil Tersambung dengan WhatsApp mu.\n*NOTE: Elu Cuma Numpang Akowkwow*\nNomor: ${conn.user.jid.split`@`[0]}\nJoin: ${timestamp}\n`, m)
            global.tryConnect[m.sender] = 0
            global.conns[m.sender] = conn
        } else if(connection === 'close'){
        	m.reply('koneksi terputus!! wait...') 
        } else {
        	m.reply('Report Owner! BugError: '+lastDisconnect.error.output)
        }
    }
    
}
handler.help = ['jadibot']
handler.tags = ['jadibot']
handler.command = /^jadibot$/i
handler.private = true
handler.premium = true
handler.group = false
export default handler