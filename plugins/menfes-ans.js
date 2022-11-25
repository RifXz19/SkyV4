let handler = async (m, { conn }) => {
conn.menfess = conn.menfess ? conn.menfess : {}
if (conn.menfess[m.sender].id != 0) {
conn.reply("🚩 Reply pesan menfess yang dikirim bot untuk membalas menfess.")
} else return conn.reply('🚩 Kamu sedang tidak menerima pesan menfess.')
}
handler.command = /^(balasmenfess)$/i

export default handler