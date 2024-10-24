//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "234901250075";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4,https://telegra.ph/file/a22200a780671e0e32383.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUtpamJOWW41aG1DZUJiNDIyQzFqRnMyZXZOS09mK3l4Uit5UWFuOWkzRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0J1QTgxTXBrSTNrU3d4b2RXRGRBZzhCb2ZwYzlpdVhiamxsMC9ZaXVoTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRnRHcUhzMktRZVR6NnpMU29xc0dUenplQWFJUUEzWTRDM0xLZnZXdVhjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyU3BTa3dJMXl3T2VBa3g0MHVDOGpFTEQxeWJrT2JhRnAxb1JaYUJrTWpVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlQOGpwbG96SjUzZTJqVjhmVzlnOWw3NHdtMTlWandRRHhwR2gzN1hLR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inh6NVk5MVFmYnl5WHEvbE5vdmdrY0J4RkxobXI3Vnp0c3lJVndmQ2hsVDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0NNc0RVUlVMcEV5Q2Nrc2FlMW4yV0ttVWJSKzlYSjhnRUF3Z1cxcjZtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjYvMUtvbWNQcnVhNDRZcnhic2FoQ0g4QnVPVVp3UkZMZFZqUTRaSzQxMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtpNVNrYmlXclJ6OFBsZG81SS9GMjIwN3pkTktyZ1A1TGV0TlZHUE5mcytKeDBGM1JSY3dJM1dWRHl0RFNlVkQ3UWNFekNyUXphdUpCNTJIRTZQaER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY0LCJhZHZTZWNyZXRLZXkiOiJEaWlzbjdYdm1vVC83c2JjNzg1NjVaT3RvUjJPQ0F2dkhQWHhwckJ0NENFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJuaV9kSVExTFRadUp5ZnhGa1JhbmRBIiwicGhvbmVJZCI6IjczYTE2YWQ3LTRlOGEtNGUwOC1iZjNhLThjZWJiYWYyMTVhMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWY2NZbFNWU2xHaDkvSXltYTUrUlNWTVMyYW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU56MFFjaklmRmhNN2cvNVVHQkQ1M2ZnYStjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik43RkhHMUE4IiwibWUiOnsiaWQiOiIyMzQ5MDEyNTAwMjc1OjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InByb2Zlc3NvciBPZ2J1amkifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0t2TWxZa0RFTzJtNnJnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZ5bnBXa3ZReXpwMTJZSC9vWWU2bmUxd2xzVGNEL1h1K3pLcXhNRml3RW89IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZXYnk5Tm56NTRkSGlFZWxtSmdpLytNbVpwWDFjWk1qc0ZOeksxT0RycXNjZWtXcjc3OUlWc0IxbnJMNFdwY2lKRVhubUN6MmFqMFB2NmRsVmVJZENBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkSTNqbk91OWg5akcyejgzb2xhNHU4Ni9IbktiYjM4RGtTOE9OcE9jenVRd1BDTzNvK0JrQ1h0aUJ3VzA0U1dvZTRXWVk1eWhpVFN2WFNaVGxTRitEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMTI1MDAyNzU6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWDhwNlZwTDBNczZkZG1CLzZHSHVwM3RjSmJFM0EvMTd2c3lxc1RCWXNCSyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTc5NDk0MH0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
