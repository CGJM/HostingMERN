
const app = require('./server');

async function main(){
await app.listen(app.get('port'));
console.log('Sevicio en puerto',app.get('port'));
}
main();
