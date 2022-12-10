const mongoose = require("mongoose");

const app = require("./app");

const { DB_HOST, PORT = 3000 } = process.env;

//   "mongodb+srv://Sergey:seRUpLhCSgVQE3of@cluster0.bbbmgc6.mongodb.net/db-contacts?retryWrites=true&w=majority";
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        "Server running. Use our API on port: 3000!!! Database success"
      );
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// ***

// password - seRUpLhCSgVQE3of;
