import { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } from '../lib/func_Addlist.js'
import fs from 'fs'

let handler = async (m, { conn, text, command }) => {
const db_respon_list = JSON.parse(fs.readFileSync('./data/db_addlist.json'))
let args1 = text.split("@")[0]
let args2 = text.split("@")[1]
if (!text.includes("@")) return m.reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
m.reply(`Berhasil menambah List menu : *${args1}*`)
}
handler.command = ['addlist']

export default handler