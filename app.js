
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
// แปลงข้อความที่รับมาให้เป็นตัวเลข
let highlightDays = highlightInput.split(",").map(Number);

// เก็บกิจกรรมในแต่ละวันที่ไฮไลต์
let activities = {};
highlightDays.forEach(day => {
let activity = prompt("กิจกรรมสำหรับวันที่ " + day + ":");
activities[day] = activity;
});

document.write('<br><br><table><tr><th colspan=7>' + mth[mm] + '&nbsp;&nbsp;&nbsp;' + yth + '</th></tr>' +
'<tr>' +
'<th>อา</th>' +    
'<th>จ</th>' +  
'<th>อ</th>' + 
'<th>พ</th>' + 
'<th>พฤ</th>' + 
'<th>ศ</th>' + 
'<th>ส</th>' + 
'</tr>')

for (let r = 0; r < maxday; r++) {
document.write('<tr>')

for (let sp = 0; sp < space; sp++) document.write('<td class="empty">&nbsp;</td>')

for (let l = 1; l<=7-space; l++) {
 r++
 if (r > maxday)
     document.write('<td class="empty">&nbsp;</td>')
 else if (r == dd)
     document.write('<td class="today">' + r + '</td>') // ไฮไลต์วันที่ปัจจุบัน
 else if (highlightDays.includes(r))
     document.write('<td class="highlighted" onclick="alert(\'บันทึกวันที่ ' + r + ': ' + activities[r] + '\')">' + r + '</td>') // ไฮไลต์วันที่ผู้ใช้เลือก พร้อมแสดงกิจกรรม
 else
     document.write('<td>' + r + '</td>')
}
r--
space = 0
document.write('</tr>')
}
document.write('</table>')
