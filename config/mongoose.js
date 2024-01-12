const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://shivanshu:shivanshu@habitdata.qcumdov.mongodb.net/HabitTracker?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("connected"))
.catch((err) => console.log(err));


  