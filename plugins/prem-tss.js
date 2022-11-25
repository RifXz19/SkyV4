let handler = async (m, { conn, isPrems }) => {
if (!isPrems) return conn.sendButton(m.chat, 'Khusus premium', author, [['Buy Premium']], m)
let cap = `Kontol Asu'
conn.reply(m.chat, cap, m)
}
handler.command = ['prem']

export default handler