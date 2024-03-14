const fs = require('fs');

let data = "Name: MAB \n Age: 21 \n Address: India";

fs.writeFileSync('StudentData.txt', data);