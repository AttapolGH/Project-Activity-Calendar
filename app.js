let mth = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", 
    "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"]

let today = new Date()
let d = today.getDay()
let dd = today.getDate()
let mm = today.getMonth()
let y = today.getFullYear()
let yth = y + 543
let space = new Date(y, mm, 1).getDay()
let maxday = new Date(y, mm + 1, 0).getDate()

// รับข้อมูลจากผู้ใช้ให้กรอกวันที่ที่ต้องการไฮไลต์
let highlightInput = prompt("กรอกวันที่ที่ต้องการไฮไลต์ (คั่นด้วยเครื่องหมายจุลภาค เช่น 5,10,15):");
// แปลงข้อความที่รับมาให้เป็นอาเรย์ของตัวเลข
let highlightDays = highlightInput.split(",").map(Number);

// สร้างออบเจกต์เพื่อเก็บกิจกรรมในแต่ละวันที่ไฮไลต์
let activities = {};
highlightDays.forEach(day => {
let activity = prompt("กิจกรรมสำหรับวันที่ " + day + ":");
activities[day] = activity;
});

document.write('<br><br><table  width=500 height=500 align=center border=0 border-color=red><tr><th colspan=7>' + mth[mm] + '&nbsp;&nbsp;&nbsp;' + yth + '</th></tr>' +
'<tr>' +
'<th style=background:red>อา</th>' +    
'<th style=background:yellow>จ</th>' +  
'<th style=background:#ff0099>อ</th>' + 
'<th style=background:#00cc00>พ</th>' + 
'<th style=background:orange>พฤ</th>' + 
'<th style=background:#0099ff>ศ</th>' + 
'<th style=background:#9900cc>ส</th>' + 
'</tr>')

for (let r = 0; r < maxday; r++) {
document.write('<tr>')

for (let sp = 0; sp < space; sp++) document.write('<td width=30 align=center>&nbsp;</td>')

for (let l = 1; l<=7-space; l++) {
 r++
 if (r > maxday)
     document.write('<td width=30 align=center>&nbsp;</td>')
 else if (r == dd)
     document.write('<td style="background:orange;color" width=30 align=center><b>' + r + '</b></td>') // ไฮไลต์วันที่ปัจจุบัน
 else if (highlightDays.includes(r))
     document.write('<td style="background:cyan;color" width=30 align=center onclick="alert(\'คุณคลิกวันที่ ' + r + ': ' + activities[r] + '\')"><b>' + r + '</b></td>') // ไฮไลต์วันที่ผู้ใช้เลือก พร้อมแสดงกิจกรรม
 else
     document.write('<td width=30 align=center>' + r + '</td>')
}

r--
space = 0
document.write('</tr>')
}

document.write('</table>')
