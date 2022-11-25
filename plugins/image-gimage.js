import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    let cap =  `*${htki} IMAGE ${htka}*
    
🔎 *Result:* ${text}
🌎 *Source:* Google
🍟 *Fetching:* ${hing}`
await conn.sendButtonImg(m.chat, link, cap, author, 'Next', `.image ${text}`, m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image)$/i

export default handler