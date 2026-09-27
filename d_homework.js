const team = [
  { name: "ฟ้า", role: "PO", tasksDone: 5 },
  { name: "ต้น", role: "Dev", tasksDone: 8 },
  { name: "มายด์", role: "SM", tasksDone: 3 },
  { name: "เจ", role: "Dev", tasksDone: 6 },
];

// (1) map รายชื่อ "ชื่อ (บทบาท)"
const teamNamesWithRole = team.map((member) => `${member.name} (${member.role})`);

// (2) filter เฉพาะ Dev
const devOnly = team.filter((member) => member.role === "Dev");

// (3) reduce รวม tasksDone ทั้งทีม
const totalTasksAll = team.reduce((sum, member) => sum + member.tasksDone, 0);

// (4) ต่อท่า (chain): รวม tasksDone เฉพาะ Dev
const totalTasksDevOnly = team
  .filter((member) => member.role === "Dev")
  .reduce((sum, member) => sum + member.tasksDone, 0);

console.log("1. สมาชิกพร้อมบทบาท:", teamNamesWithRole);
console.log("2. เฉพาะสาย Dev:", devOnly);
console.log("3. งานที่ทำเสร็จทั้งทีม:", totalTasksAll); // 22
console.log("4. งานที่ทำเสร็จเฉพาะ Dev:", totalTasksDevOnly); // 14