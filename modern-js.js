function greet(name, faculty){
    return "สวัสดี" + name + "จากคณะ" + faculty + "!";
}

// เปลี่ยนจาก ' ' เป็น ` `
const greet_modern = (name, faculty) => `สวัสดี ${name} จากคณะ ${faculty}!`;
 
console.log(greet("Pong", "IT"));        // ออกมาเป็น: สวัสดีPongจากคณะIT!
console.log(greet_modern("Pong", "IT")); // ออกมาเป็น: สวัสดี Pong จากคณะ IT!

const student = { name: "ฟ้า", faculty: "CITU", year: 2 };
const { name, faculty } = student;          // ดึงค่าออกมาเป็นตัวแปร
const updated = { ...student, year: 3 };    // copy แล้วแก้บางค่า
console.log(name, faculty, updated);

const scores = [90,80,70,60,50]
const buses = [
  { route: "NGV-1", passengers: 45, late: false },
  { route: "NGV-2", passengers: 62, late: true },
  { route: "NGV-3", passengers: 38, late: true },
  { route: "NGV-4", passengers: 51, late: false },
];
// 1. map: สร้าง array ของข้อความ "NGV-1 มีผู้โดยสาร 45 คน"
const busDetails = buses.map(
  (bus) => `${bus.route} มีผู้โดยสาร ${bus.passengers} คน`
);
console.log("1. map:", busDetails);

// 2. filter: เอาเฉพาะสายที่มาสาย (late: true)
const lateBuses = buses.filter((bus) => bus.late);
console.log("2. filter:", lateBuses);

// 3. reduce: หาผู้โดยสารรวมทุกสาย (เฉลย: 196)
const totalPassengers = buses.reduce(
  (sum, bus) => sum + bus.passengers,
  0
);
console.log("3. reduce:", totalPassengers);

// 4. ต่อท่า (chain): หาผู้โดยสารรวมเฉพาะสายที่มาสาย (เฉลย: 100)
const latePassengersTotal = buses
  .filter((bus) => bus.late)
  .reduce((sum, bus) => sum + bus.passengers, 0);
console.log("4. chain (filter + reduce):", latePassengersTotal);