//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "osun, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagTGyuI1rcotBW2mn3p";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagTGyuI1rcotBW2mn3p";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348142909904";
global.sudo = process.env.SUDO || "2348142909904";
global.owner = process.env.OWNER_NUMBER || "2348142909904";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "typing,recoding";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkZGQVRENXhkbDhjY25JQmo2aGo0RFo0UnNjT09hcENFS01sRDZYNGNHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2g0NXBiYzl5bDJ5QjJ2SDExQWJSWHZQZTlLbWVmOGswbnJnUHZ0cDlWOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRkt0dXNZOFVXSFh5VEdJR1IwZnRHWFdLdUhJYkpNTGR4anBWcWJkZm1rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIbzhXeGFDMjZNR3dqTndKdUdPWGJlRW1XbUZoMEE1K3M5T0pKVmtiWEE0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBJQUdpNmw1UDc0enJyRjV3eHFEK1poRG83d2dOOStvU2o2S2htckxERjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY2bklQM24wckE2SUM3VlpNdThEelluZTV6Y3QzU2xWamlUb0FYT1RnbDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU95UjBKQUtFWHYxZ09oaG5nRHBNRkNhdC8vSFBnVGNtc2lTd2ZGZG9scz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUDNHZjUzYWZMZi84eXJGVXFMZmxPTDc3THY1b3VDMjZCY1BrZHZGWmRobz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImkrekhsRGFFRFdLd0NmcDZPY0I5NmZmOHZrbUdrQytMUHlQMUh0VEtVbVc2c25NSGwvY2ZuTklsR0dGWW00OTVoRFY0ejd0STZNdU52dHovNnZPb0F3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYxLCJhZHZTZWNyZXRLZXkiOiJyWG9WM0xRdDlLNEkvaVFyNWVSZkJrcWpLSHgxaW9ZZVVVQ2dEWVI2RCtrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMywiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLV2tXb3VJdlFtU0FJTEdmVUxNMzZBIiwicGhvbmVJZCI6ImRhMTc1N2Y1LTM0OTYtNGY5ZC05Yzk2LWE2MWJkMWEwMWFjYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLcDdqTDdjOWVySi9JOXpsb1piZnNpYk9hbVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGllZXVyNjJ5dzZTang5VDN5bnJGeVJtdFJZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJMOEtTWEdBIiwibWUiOnsiaWQiOiIyMzQ4MTQyOTA5OTA0Ojk4QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMQ2xvZ0lRa3JmTHVBWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJld05CeFUwZ0ZMUzF1dVNFaS9zSWFtUGhSZXFkek93bmJMSmlHK1NzS3dNPSIsImFjY291bnRTaWduYXR1cmUiOiIrNS80M2RPSFliV1hLT203V2pkUXplZmhtS0IrbHNtbVhuTndSL1c0TGhFRG0wZCtjaVRNbE9wbXFmM1FEdHJCaHZyNHBNTjF1WTBmY0dXa1NWK3BoZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQkJMOHE5Sk9WMTBiejN1RHlhdDhvY09ETDJyc3VtL2hCZUFZaEZrSlIvTGlOTDNxeXZ3MVhtaW5JNUpEZzN1S1RHbHMzYmw5NFJXUU9vVWM0d2p3REE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTQyOTA5OTA0Ojk4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhzRFFjVk5JQlMwdGJya2hJdjdDR3BqNFVYcW5jenNKMnl5WWh2a3JDc0QifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTI4OTEyMH0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`KING_RICHY™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "KING_RICHY",
  ownername: process.env.OWNER_NAME || "RICHY",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "R I C H Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
