let handler = async (m, { conn }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let user = db.data.users[who]
let bnk = `Bank : ${user.atm}
Money : ${user.money}
Balance : ${user.balance}`
m.reply(bnk)
}
handler.command = ['obank']

handler.owner = true 

export default handler