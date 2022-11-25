const cooldown = 3600000

let handler = async (m, { conn, text, usedPrefix, command }) => {
let dapat = (Math.floor(Math.random() * 100000))
let healtu = (Math.floor(Math.random() * 100))
let nomors = m.sender
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'ᴛᴀɢ ꜱᴀʟᴀʜ ꜱᴀᴛᴜ ʟᴀʜ'
  if (typeof db.data.users[who] == 'undefined') throw 'Pengguna tidak ada didalam data base'
  let user = db.data.users[m.sender]
  if (new Date - user.lastbunuh <= cooldown) return m.reply(`ᴀɴᴅᴀ ꜱᴜᴅᴀʜ ᴍᴇᴍʙᴜɴᴜʜ ᴏʀᴀɴɢ ᴅᴀɴ ʙᴇʀʜᴀꜱɪʟ ꜱᴇᴍʙᴜɴʏɪ , ᴛᴜɴɢɢᴜ ⏳${((user.lasthunt + cooldown) - new Date()).toTimeString()} ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴜɴᴜʜɴʏᴀ ʟᴀɢɪ`)
   if (10 > db.data.users[who].health) throw 'ᴛᴀʀɢᴇᴛ ꜱᴜᴅᴀʜ ᴛɪᴅᴀᴋ ᴍᴇᴍɪʟɪᴋɪ ʜᴇᴀʟᴛʜ💉'
   if (100 > db.data.users[who].money) throw '💠ᴛᴀʀɢᴇᴛ ᴛɪᴅᴀᴋ ᴍᴇᴍɪʟɪᴋɪ ᴀᴘᴀᴘᴜɴ :(💠'
  user.health -= healtu * 1
  user.money -= dapat * 1
  user.money += dapat * 1
  global.db.data.users[m.sender].lastbunuh = new Date * 1
  m.reply(`ᴛᴀʀɢᴇᴛ ʙᴇʀʜᴀꜱɪʟ ᴅɪ ʙᴜɴᴜʜ ᴅᴀɴ ᴋᴀᴍᴜ ᴍᴇɴɢᴀᴍʙɪʟ ᴍᴏɴᴇʏ ᴛᴀʀɢᴇᴛ ꜱᴇʙᴇꜱᴀʀ\n💰${dapat} ᴍᴏɴᴇʏ\nᴅᴀʀᴀʜ ᴛᴀʀɢᴇᴛ ʙᴇʀᴋᴜʀᴀɴɢ -${healtu} ʜᴇᴀʟᴛʜ❤`)
}
handler.help = ['membunuh *@tag*']
handler.tags = ['rpg']
handler.command = /^membunuh$/
handler.limit = true
handler.group = true

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}