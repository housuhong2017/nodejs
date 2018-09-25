
#!/url/bin/node

const fs = require("fs");
const  log = console.log;

const fileName=process.argv[2];
var buf = fs.readFileSync(fileName);
log('width：',buf.readInt32LE(18));
log('height:',buf.readUInt32LE(22));
log('dolor deapth',buf.readUInt16LE(28));
