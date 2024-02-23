require('dotenv').config()
const app = require('./app');
const connectDB=require('./database')

async function main(){
    await connectDB()
    await app.listen(app.get('port'))
    console.log('El servidor se está ejecutando en el puerto ',app.get('port'));
}

main();