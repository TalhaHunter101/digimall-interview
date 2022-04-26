// getting-started.js
const mongoose = require('mongoose');

main().then(console.log(' Database Connected successfully')).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://talha:  @cluster1.6xx0s.mongodb.net/Students?retryWrites=true&w=majority');
}