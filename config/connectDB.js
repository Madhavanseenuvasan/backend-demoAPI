const mongoose=require('mongoose');

const connectDataBase=()=>{
  mongoose.connect(process.env.DB_URL).then((con)=>{
    console.log('DataBase is connected to the '+con.connection.host);
  })
}
module.exports=connectDataBase;