import { cerpen } from '../lib/cerpen.js'

let handler = async (m, { conn, usedPrefix, command, args, text }) => {
let imgr = fla.getRandom()
let caption = `${htki} List Cerpen ${htka}

remaja
anak 
misteri 
cinta 
budaya
romantis 
galau
gokil
inspiratif 
kehidupan 
sastra 
jepang 
korea
keluarga 
persahabatan 
kristen 
ramadhan
liburan 
lingkungan 
mengharukan 
motivasi 
perjuangan 
nasihat
pendidikan 
petualangan

Contoh :
${usedPrefix + command} <Type>
${usedPrefix + command} remaja`
if (!args[0]) return conn.sendFile(m.chat, imgr + 'List Cerpen', 'cerpen.jpg', caption, m)
let res = await cerpen(args[0])
let p = res 
let cap = `☰ ━━━ ❨ Cerpen ❩ ━━┄┈ ☰

◈ *Title :* ${p.title}
◈ *Author:* ${p.author}
◈ *Kategori :* ${p.kategori}
◈ *Lolos :* ${p.lolos}

◎ *Cerpen :* 
    ➥ ${p.cerita}
`
await conn.sendButton(m.chat, cap, `Cerita Pendek ${args[0]}`, imgr + `Cerpen ${args[0]}`, [
          ['Back To Menu', '.menu']
], m)
}
handler.help = ['cerpen']
handler.tags = ['internet', 'random']
handler.command = /^(cerpen)$/i

export default handler