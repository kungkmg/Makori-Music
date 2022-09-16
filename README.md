## Update Setting

## 📄 โปรดอ่าน

*ลิขสิทธิ์ Apache License 2.0 จาก Adivise/NanoSpacePlus* [กดเพื่ออ่าน](https://github.com/KCCHDEV/Makori-Music/blob/main/LICENSE)

*Prefix Commands!* | **[NanoSpace](https://github.com/Adivise/NanoSpace)**

## 📑 ระบบแบบย่อๆ
- [x] Music System
- [x] Playlists System
- [x] Premium System
- [x] Setup Request System
- [x] Multi Language
- [x] SlashCommand
- [x] ContextMenus
- [x] Custom Filters
- [x] Easy to use

## 🎶 รับลองการเล่นจาก
- [x] Youtube
- [x] SoundCloud
- [x] Spotify
- [x] Deezer
- [x] Facebook 
- [x] Twitch
- [x] Apple
- [x] Bandcamp
- [x] Vimeo
- [x] Https (Radio)

<details><summary>📎 Requirements [กดเพื่อดู]</summary>
<p>

## 📎 Requirements

- Node.js Version 16.6.0+ **[Download](https://nodejs.org/en/download/)**
- Discord Bot Token **[Guide](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)**
- LavaLink **[Guide](https://github.com/freyacodes/lavalink)** (*Dev Version!* **[Download](https://ci.fredboat.com/repository/downloadAll/Lavalink_Build/9311:id/artifacts.zip)** )
- MongoDB **[Download](https://www.mongodb.com/try/download/community)** (Download & install = Finish!)

## 🛑 Super Requirements 

- Java 11-13 **[Download JDK13](http://www.mediafire.com/file/m6gk7aoq96db8g0/file)** (i use this version) for LAVALINK!

</p>
</details>

## 📚 ขั้นตอนการติดตั้ง

```
git clone https://github.com/Adivise/NanoSpacePlus
cd NanoSpacePlus
npm install
```

## 📚 วิธีการรัน

```
npm start
npm run dev
```

<details><summary>📄 Configuration [กดเพื่อดู]</summary>
<p>

## 📄 Configuration

เปลี่ยนชื่อ `.env.example` เป็น `.env` และทำการใส่ข้อมูลให้ครบ:

```.env
# Bot
TOKEN=REPLACE_HERE
NP_REALTIME=false
LEAVE_TIMEOUT=120000
LANGUAGE=en
EMBED_COLOR=#000001

# Dev
OWNER_ID=REPLACE_HERE

# Database
MONGO_URI=mongodb://127.0.0.1:27017/nanospace
LIMIT_TRACK=50
LIMIT_PLAYLIST=10

# Nodes
NODE_HOST=localhost
NODE_PORT=5555
NODE_PASSWORD=123456
```
หล้งจากใส่ข้อมูลเสร็จแล้วและ npm i เสร็จแล้ววิธีรัน npm start หรือถ้าใช้ Windows สามารถใช้ Start.bat

</p>
</details>

<details><summary>🔩 Features & Commands [CLICK ME]</summary>
<p>

## 🔩 Features & Commands

> Note: prefix เริ่มต้นคือ '#'

🎶 **Music Commands!** 

- Play (/music play [song/url])
- Nowplaying (/music nowplaying)
- Queue (/music queue [page])
- Repeat (/music loop type [current, all])
- Loopqueue (/music loopall)
- Shuffle (/music shuffle)
- Volume control (/music volume [10 - 100])
- Pause (/music pause)
- Resume (/music resume)
- Skip (/music skip)
- Skipto (/music skipto [position])
- Clear (/musicclear)
- Join (/music join)
- Leave (/music leave)
- Forward (/music forward [second])
- Seek (/music seek [second])
- Rewind (/music rewind [second])
- Replay (/music replay)
- Search (/music search [songname])
- 247 (/music 247)
- Previous (/music previous)
- Autoplay (/music autoplay)

⏺ **Filter Commands!**
- Bass (/filter bass)
- Superbass (/filter superbass)
- Pop (/filter pop)
- Treblebass (/filter treblebass)
- Soft (/filter soft)
- Earrape (/filter earrape)
- Equalizer (/filter equalizer [14 bands])
- Speed (/filter speed [amount])
- Picth (/filter pitch [amount])
- Vaporwave (/filter vaporwave)
- Nightcore (/filter nightcore)
- Bassboost (/filter bassboost [-10 - 10])
- Rate (/filter rate)
- Reset (/filter reset)
- 3d (/filter 3d)
- China (/filter china)
- Chipmunk (/filter chipmunk)
- Darthvader (/filter darthvader)
- DoubleTime (/filter doubletime)
- SlowMotion (/filter slowmotion)
- Tremolo (/filter tremolo)
- Vibrate (/filter vibrate)
- Vibrato (/filter vibrato)
- Daycore (/filter daycore)
- Television (/filter Television)
	
📦 **Playlist Commands!**
- Create (/playlist create [name])
- Add (/playlist add [name] [link])
- Private (/playlist private [name])
- Public (/playlist public [name])
- Delete (/playlist delete [name])
- Import (/playlist import [name])
- Detail (/playlist detail [name])
- Remove (/playlist remove [name] [position])
- Savequeu (/playlist savequeue [name])
- View (/playlist view)
	
💎 **Premium Commands!**
- Premium (/premium premium [plan] [user id])
- Generate (/premium generate [plan] [amount]) // (OWNER ONLY)
- Redeem (/premium redeem [code])
- Setup (/premium setup type [create/delete])
	
📑 **Utilities Commands!**
- Restart (/utilitie restart) // (OWNER ONLY)
- Language (/utilitie language input: [language] ) // Example: en, th

</p>
</details>
