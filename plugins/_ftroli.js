import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
let pp = fla.getRandom()
let imgr = pp + 'tes'
let imgg = await conn.resize(imgr, 150, 180)
let ftrolii = {
    key : {
    remoteJid: 'status@broadcast',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 999999,
    status: 404,
    surface : 404,
    message: `πΉπ°π½πΆπ°π½ ππΏπ°πΌ(β’Λ _ Λβ’)`, 
    orderTitle: ``,
    thumbnail: await (await fetch('https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg')).buffer(), 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
conn.reply(m.chat, ucapan, ftrolii)
}
handler.command = ['ftroli']

export default handler