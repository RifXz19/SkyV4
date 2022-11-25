import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix }) => {
  let name = await conn.getName(m.sender)
  let user = global.db.data.users[m.sender]
let pp = 'https://telegra.ph/file/c7cd3c7bd4e1a30167f14.jpg'
  const caption = `─────❑ 「 *B A N K* 」 ❑─────

📛 *Name :* ${name}
⚡ *Tags :* @${m.sender.split`@`[0]}
🏛️ *Bank :* ${user.atm}
💹 *Money :* ${user.money}`
await conn.sendButtonDoc(m.chat, caption, `${author} | ${usr} User`, 'Inventory', '.inv', fkontak, { mentions: [m.sender], 
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: '© 𝐒𝐤𝐲𝐁𝗼𝐭',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: '© 𝐒𝐤𝐲𝐁𝗼𝐭',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: 'Cek Bank By ' + wm 
				}
			}
})
}
handler.help = ['bank']
handler.tags = ['rpg']
handler.command = /^(bank)$/i

handler.register = false
export default handler