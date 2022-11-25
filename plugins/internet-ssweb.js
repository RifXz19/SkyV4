import fetch from 'node-fetch'
import xa from 'xfarr-api'

let handler = async (m, { conn, command, usedPrefix, text }) => {
if (command == 'ssweb') {
if (!text) throw `Masukan link`
let cap = `Hai @${m.sender.split(`@`)[0]}
Silahkan Pilih Type ssweb Di Bawah !!`
conn.sendButton(m.chat, cap, author, [
['Phone', usedPrefix + 'sswebhp ' + text], 
['Desktop', usedPrefix + 'sswebdesktop ' + text],
['Tablet', usedPrefix + 'sswebtablet ' + text]
], m, { mentions: await conn.parseMention(cap) } )}

if (command == 'sswebhp') {
if (!text) throw `Masukan url di mulai dengan https:// | http://`
let res = await xa.tools.ssweb(text, 'phone')
conn.sendFile(m.chat, res.result, 'ssweb.jpg', text, m)}

if (command == 'sswebdesktop') {
if (!text) throw `Masukan url di mulai dengan https:// | http://`
let res = await xa.tools.ssweb(text, 'desktop')
conn.sendFile(m.chat, res.result, 'ssweb.jpg', text, m)}

if (command == 'sswebtablet') {
if (!text) throw `Masukan url di mulai dengan https:// | http://`
let res = await xa.tools.ssweb(text, 'tablet')
conn.sendFile(m.chat, res.result, 'ssweb.jpg', text, m)}
}
handler.command = handler.help = ['ssweb', 'sswebhp', 'sswebdesktop', 'sswebtablet']
handler.tags = ['tools']

export default handler