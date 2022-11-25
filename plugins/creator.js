let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;Arifzyn\nNICKNAME:👑 Owner Sky Bot\nORG:𝐀𝐫𝐢𝐟𝐳𝐲𝐧\nTITLE:soft\nitem1.TEL;waid=${nomorown}:+62 895-3471-98105\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://youtube.com/channel/UCbLk8Zd_85Kttqq6uIDqF5w\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:arifzyn19@gmail.com\nitem3.X-ABLabel:💌 Mail Owner SkyBot V2.1\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 13 January 2001\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner Saya kak`
await conn.reply(m.chat, caption, m, { quoted: tag_own, mentions: conn.parseMention(caption) })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler