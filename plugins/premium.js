let handler = async (m, { conn }) => {
const prem = `➠ Pembayaran saat ini hanya tersedia via dana, gopay dan qris.

➠ Proses transaksi seperti pada umumnya, chat owner terlebih dahulu untuk menanyakan nomor tujuan transfer setelah itu screenshot bukti pembayaran.

➠ *Penting!* Simpan nomor owner dan gabung kedalam grup official : (https://chat.whatsapp.com/KS51Xw91eju8HTv5owtV1z), untuk mengetahui update nomor bot terbaru apabila ter-banned oleh pihak whatsapp.`

const sections = [
   {
	title: `✃ Daftar List`,
	rows: [
	    {title: "∫ Minimize «", rowId: '.minimize', description: '[ Harga : Rp 10.000 | Limit 1.000 | Money 100M ]' },
	    {title: "∫ Marvest «", rowId: '.marvest', description: '[ Harga : Rp 20.000 | Limit 2.000 | Money 500M ]' },
	    {title: "∫ Apa Itu Limit, money «", rowId: '#infolimm', description: '[ Penjelasan Terkait Limit, Money ]' },
        ]
        }, 
]

const listMessage = {
  text: prem,
  footer: author,
  title: null,
  buttonText: "Tap! ☁︎",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
}
handler.help = ['premium']
handler.tags = ['info']
handler.command = ['premium']

export default handler