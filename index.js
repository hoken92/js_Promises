// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };

  // .then() version
  // try {
  //   // Creating the return object
  //   let userData = {};

  //   // Finds which db the id belongs to
  //   central(id).then((db) => {
  //     userData.id = id;
  //     // Runs the db method from the dbs object from the  central promise value
  //     dbs[db](id).then((info) => {
  //       // For in loop to iterate thru objects and inserts into userData object
  //       for (const item in info) {
  //         userData[item] = info[item];
  //       }

  //       // userData.username = info.username;
  //       // userData.website = info.website;
  //       // userData.company = info.company;
  //     });

  //     // Runs the vault function w/ the provided id
  //     vault(id).then((info) => {
  //       // For in loop to iterate thru objects and inserts into userData object
  //       for (const item in info) {
  //         userData[item] = info[item];
  //       }
  //       // userData.name = info.name;
  //       // userData.email = info.email;
  //       // userData.address = info.address;
  //       // userData.phone = info.phone;
  //       console.log(userData);
  //     });
  //   });
  //   // Catches any errors that happen above
  // } catch (err) {
  //   console.log(err);
  // }

  // Async/Await version
  async function getData(id) {
    try {
      let userData = {};
      const dbNumber = await central(id);

      const dbInfo = await dbs[dbNumber](id);

      for (const item in dbInfo) {
        userData[item] = dbInfo[item];
      }

      const vaultInfo = await vault(id);

      for (const item in vaultInfo) {
        userData[item] = vaultInfo[item];
      }

      console.log(userData);
    } catch (error) {
      console.log(error);
    }
  }

  getData(id);
}

getUserData(9);
