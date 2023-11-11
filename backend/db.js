const mongoose = require('mongoose');
const mongoURL="mongodb+srv://ajinkyanangare1017:Ajinkya143@cluster0.yiojogt.mongodb.net/gofoodmern?retryWrites=true&w=majority"
main().catch(err => console.log(err));
async function main() {
   
    const response= await mongoose.connect(mongoURL,{ useNewUrlParser: true, useUnifiedTopology: true });
    
    if(response){
        console.log("connect")
        
    }
    if (mongoose.connection.readyState === 1) {
      // Connection is open, you can access collections
      const fetched_data = await  mongoose.connection.db.collection("food_items").find({}).toArray();
      const foodCategory = await  mongoose.connection.db.collection("foodCategory").find({}).toArray();
      
      // console.log(fetched_data)
      // Rest of your code here
      global.food_items=fetched_data
      global.foodCategory=foodCategory

    //  console.log(global.food_items)
    } else {
      console.error("MongoDB connection is not open.");
    }
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
const mongoDB=async()=>{
   

}
module.exports=main;