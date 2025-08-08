const mongoose=require('mongoose');

// const connectDataBase=()=>{
//   mongoose.connect(process.env.DB_URL).then((con)=>{
//     console.log('DataBase is connected to the '+con.connection.host);
//   })
// }

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(' MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports=connectDataBase;