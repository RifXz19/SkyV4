import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `Masukan Query\n*Example:* ${usedPrefix + command} miku`
  let res = await fetch(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${global.lolkey}&query=${text}`)
  let res2 = await res.json()
  let array = []
  for (let i of res2.result) {
      array.push({
      title: i.title_english,
      rowld: usedPrefix + 'nhentai ' + i.id,
      description: `ID : ${i.id} || Native : ${json.title_native} || Page : ${i.page}`
      })
  	}
  const sections = [
      {
        title: `━ ━ ━ ━ 『 Nhentai Search 』 ━ ━ ━ ━`,
        rows: array
      }
    ]
    const listMessage = {
      text: `*${htki} Nhentai Search ${htka}*\n\n𝐑𝐞𝐪𝐮𝐞𝐬𝐭 𝐁𝐲 : ${name}\n𝐑𝐞𝐬𝐮𝐥𝐭 𝐅𝐫𝗼𝗺 : ${text}\n\n*𝐂𝐡𝗼𝗼𝐬𝐞 𝐘𝗼𝐮𝐓𝐮𝐛𝐞 𝐒𝐞𝐚𝐫𝐜𝐡* `,
      footer: global.author,
      buttonText: `List Search 🎫`,
      sections
    }
    await conn.sendMessage(m.chat, listMessage, { quoted : m })
}
handler.help = ['nhentaisearch']
handler.tags = ['nsfw']
handler.command = /^nhentais(earch)$/i

handler.limit = true 

export default handler