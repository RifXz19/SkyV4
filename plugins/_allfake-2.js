import fetch from 'node-fetch'
import moment from 'moment-timezone'

export async function before(m, { conn }) {
let name = await conn.getName(m.sender)
let sapa = ['Hai', 'Ohayo', 'Kyaa', 'Halo', 'Nyann'].getRandom()
let pp = 'https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg'

global.miku = 'https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg'

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
    message: `Miku Punya Gweh !! :v\nBy ArifzynXD`, 
    orderTitle: ``,
    thumbnail: await (await fetch('https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg')).buffer(), 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }

let ftokoo = {
			key: {
				participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
	   	productMessage: {
			product: {
			productImage: {
			mimetype: 'image/jpeg',
			jpegThumbnail: await (await fetch('https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg')).buffer(), 
			},
			title: ' Bot WhatsApp By ' + nameown1,
			description: botdate,
			currencyCode: 'IDR',
			priceAmount1000: fsizedoc,
			retailerId: 'Ghost',
			productImageCount: 1
			},
			businessOwnerJid: '0@s.whatsapp.net'
			}
		  }
	    }

let fvnn = {
			key: {
		  participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
			audioMessage: {
			mimetype: 'audio/ogg; codecs=opus',
			seconds: fsizedoc,
			ptt: true,
      jpegThumbnail: await (await fetch('https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg')).buffer()
			}
			}
	  	}
	  	
let fvidd = {
			key: {
			participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
			videoMessage: {
			title: author,
			h: 'Hmm',
			seconds: fsizedoc,
			caption: ucapan(),
			jpegThumbnail: await (await fetch('https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg')).buffer()
			}
			}
	  	}

let fLoc = {
			key: {
			participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
			liveLocationMessage: {
			caption: 'Bot WhatsApp By ' + nameown1,
			h: botdate,
	  	jpegThumbnail: await (await fetch('https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg')).buffer()
			}
			}
	  	}

let fdoc = {
			key: {
			participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
		  documentMessage: {
			title: author,
			jpegThumbnail: await (await fetch('https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg')).buffer()
			}
			}
		  }
		
let fgiff = {
			key: {
			participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
			},
			message: {
			videoMessage: {
			title: 'Bot WhatsApp By ' + nameown1,
			h: 'Hmm',
			seconds: fsizedoc,
			gifPlayback: true,
			caption: botdate,
			jpegThumbnail: await (await fetch('https://telegra.ph/file/2362fdd0ac773d5733bc5.jpg')).buffer()
			}
			}
	  	}

let _fek = [ftrolii, ftokoo, fvnn, fvidd, fLoc, fdoc, fgiff].getRandom()
global.fakes = _fek

}

function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    let res = "Selamat malam 🌙"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang ☀️"
    }
    if (time >= 15) {
        res = "Selamat sore 🌅"
    }
    if (time >= 18) {
        res = "Selamat malam 🌙"
    }
    return res
}