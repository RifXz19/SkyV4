let handler = async (m, { conn }) => {
conn.reply(m.chat, '*[ Group Bot ]*\n' + sgc, fkontak)
}
handler.help = ['gcbot']
handler.tags = ['info']
handler.command = ['gcbot']

export default handler