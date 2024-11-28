import { data } from "./data.js";
import fs from "fs";

// for (let i = 0; i < data.length; i++) {
//   data[i].rating_count = Number(Math.random() * 10000).toFixed(0);
// }

for (let i = 0; i < data.length; i++) {
  data[i].product_id = i;
}

fs.writeFileSync("data1.js", JSON.stringify(data));
