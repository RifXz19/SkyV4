import fs from 'fs'

let handler = async (m, { conn, usedPrefix, command }) => {
let yuri = fs.readFileSync('./json/yuri.json')
let res = yuri[Math.floor(Math.random() * yuri.length)]
conn.sendButtonImg(m.chat, res, '❏  *Y U R I*\n\nTch, Dasar Sange', author, 'Next', usedPrefix + 'hentai', m)
}
handler.help = ['yuri']
handler.tags = ['nsfw']
handler.command = ['yuri']

export default handler