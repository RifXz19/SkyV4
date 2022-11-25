import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args }) => {
let url = 'https://telegra.ph/file/1759d54cf5192df1dc944.jpg'
let cap = `━━ꕥ〔 *𝚂𝙴𝚆𝙰 & 𝙿𝚁𝙴𝙼𝙸𝚄𝙼* 〕ꕥ━⬣

┏━ꕥ〔 𝙷𝙰𝚁𝙶𝙰 𝚂𝙴𝚆𝙰 〕
┃
┃✾ 7 ʜᴀʀɪ 7ᴋ / ɢʀᴏᴜᴘ ( 1 Group )
┃✾ 30 ʜᴀʀɪ 15ᴋ / ɢʀᴏᴜᴘ ( 1 Group )
┃✾ 60 ʜᴀʀɪ 25ᴋ / ɢʀᴏᴜᴘ ( 1 Group )
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 35ᴋ / ɢʀᴏᴜᴘ ( 1 Group )
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 𝙷𝙰𝚁𝙶𝙰 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 〕
┃
┃✾ 15 ʜᴀʀɪ 5ᴋ ( 1 Nomor + 10 JT )
┃✾ 30 ʜᴀʀɪ 10ᴋ ( 1 Nomor + 100 JT )
┃✾ 45 ʜᴀʀɪ 15ᴋ ( 1 Nomor + 10 M )
┃✾ 60 ʜᴀʀɪ 20ᴋ ( 1 Nomor + 100 M )
┃✾ ᴘᴇʀᴍᴀɴᴇɴ 30ᴋ ( 1 Nomor + 10 T )
┃
┗━━ꕥ *${author}* ꕥ━⬣

┏━ꕥ〔 ꜰɪᴛᴜʀ 500+ 〕
┃
┃✾ ᴡᴇʟᴄᴏᴍᴇ
┃✾ ᴋɪᴄᴋ
┃✾ ᴀɴᴛɪʟɪɴᴋ
┃✾ ꜱᴛɪᴋᴇʀ
┃✾ ꜱᴏᴜɴᴅ
┃✾ ᴀɴɪᴍᴇ
┃✾ ꜱᴇɴᴅ ᴠɪʀᴛᴇx
┃✾ ꜱᴇɴᴅ ʙᴜɢ
┃✾ ɢᴀᴍᴇ ʀᴘɢ
┃✾ ᴅʟʟ
┃
┗━━ꕥ *${author}* ꕥ━⬣
`
conn.sendButtonDoc(m.chat, cap, author, 'owner', usedPrefix + 'owner', m, {
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
    thumbnail: await(await fetch(url)).buffer(),
    thumbnailUrl: sgc,
    title: 'Sewa Bot && Up To Premium'
				}
			}
})
}
handler.command = /^(sewa)$/i

export default handler