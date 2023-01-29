//user name = hassan
// pass = seakingmawmaw2939

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const dbUrl = "mongodb+srv://sagor:sagor123@cluster0.gbb5ldr.mongodb.net/tshirt?retryWrites=true&w=majority"

mongoose.connect(dbUrl, 
    {
        //now they are not use
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false,
    // mongoDatabaseName: "studentLogin",
    
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error(err));