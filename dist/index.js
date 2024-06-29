"use strict";
//--------
// tuples
//--------
let person = ["Mario", 30, true];
//-----------------
// tuples examples
//-----------------
let hsla;
hsla = [200, "100%", "50%", 1];
let xy;
xy = [94.7, 20.1];
function useCoords() {
    // get coords
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
//--------------
// named tuples
//--------------
let user;
user = ["Peach", 25];
console.log(user[0]);
