let handler = async (m, { conn, args }) => {
   if (!args[0]) return m.reply('Masukan jumlah Yang Mau Di Cheat !')
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes !*`, m)
        global.db.data.users[m.sender].money += args[0]
}
handler.command = /^(cheat)$/i

handler.mods = true

export default handler