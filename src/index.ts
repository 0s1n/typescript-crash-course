//--------
// tuples
//--------

let person: [string, number, boolean] = ["Mario", 30, true];

//-----------------
// tuples examples
//-----------------

let hsla: [number, string, string, number];
hsla = [200, "100%", "50%", 1];

let xy: [number, number];
xy = [94.7, 20.1];

function useCoords(): [number, number] {
  // get coords
  const lat = 100;
  const long = 50;

  return [lat, long];
}

const [lat, long] = useCoords();

//--------------
// named tuples
//--------------

let user: [name: string, age: number];

user = ["Peach", 25];

console.log(user[0]);
