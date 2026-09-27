// แบบที่เราเขียนคาบ 3 (ES5)
let ngv1 = {
    name : "ngv1"
    route : "route 01"
    late : false,
    mile : 5678,
} ;
let ngv 2 ={
    name : "ngv2"
    route : "route 02"
    late : true,
    mile : 3000,
} ;
let ngv 3 ={
    name : "ngv3"
    route : "route 03"
    late true,
}
const buses = [ngv1,ngv2,ngv3]
const lateRoutes = [];
for (let i = 0; i < buses.length; i++) {
  if (buses[i].late === true) {
    lateRoutes.push(buses[i].route);
  }
}
console.log(lateRoutes);
// ["NGV-2", "NGV-3"]
