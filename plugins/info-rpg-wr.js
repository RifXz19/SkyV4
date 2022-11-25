let handler = async (m, { conn }) => {
conn.reply(m.chat, 'Winrate : 72%', fkontak)
}
handler.command = /^(wr|winrate)$/i

export default handler