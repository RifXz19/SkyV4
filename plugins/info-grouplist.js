const handler = async(m, { conn, isOwner }) => {
let grup = Object.keys(await conn.groupFetchAllParticipating())
let lis = []
for (let i of grup) {
const data = await conn.groupMetadata(i)
let backwards = db.data.chats[i].expired - new Date() * 1
let expired = await msToDate(backwards)
let isMem = data.participants
let isAdmin = (isMem).filter(v => v.admin == 'admin')
let isPemilik = (isMem).filter(v => v.admin == 'superadmin')
lis.push({
title: data.subject, rowId: `.gcmetadata ${data.id}`, description: `${isMem.length} Member ( ${isAdmin.length + isPemilik.length} Admin ) || Expired : ${backwards != 0 ? expired : 'Tidak ada expired.'}`})
}
let sections = [{
title: "LIST CHAT GROUP BOT",
rows: lis
}]
let listMessage = {
text: "Berikut adalah list group chat pada bot",
buttonText: "LIST GRUP",
sections
}
conn.sendMessage(m.chat, listMessage, { quoted: m })
}
handler.help = ['listgroup', 'listgc']
handler.tags = ['info']
handler.command = /^(listgc|listgrup|listgroup|gruplist|grouplist|gclist)$/i

export default handler

function msToDate(ms) {
    let temp = ms
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Days " + hours + " House " + minutes + " Minutes ";
    // +minutes+":"+sec;
}