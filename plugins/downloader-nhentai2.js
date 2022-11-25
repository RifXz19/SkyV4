import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
if (!text) throw 'Masukan kodenya....'
let res = await fetch(`https://api.lolhuman.xyz/api/nhentaipdf/${text}?apikey=365a960ccfd55e5a4489671a`)
let jso = await res.json()
m.reply('Sabar deck lagi loading')
conn.sendMessage(m.chat, { document: jso.result, mimetype: 'application/pdf', fileName: text }, { quoted: m })
}
handler.help = ['nhentai2']
handler.tags = ['downloader']
handler.command = /^(nhentai2)$/i

export default handler