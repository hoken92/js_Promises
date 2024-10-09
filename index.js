// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };

  try {
    let userData = {};
    const dbInfo = central(id).then((db) => {
      userData.id = id;
      const getDBData = dbs[db](id).then((info) => {
        userData.username = info.username;
        userData.website = info.website;
        userData.company = info.company;
      });
      const getVaultData = vault(id).then((info) => {
        userData.name = info.name;
        userData.email = info.email;
        userData.address = info.address;
        userData.phone = info.phone;
        console.log(userData);
      });
    });
  } catch (err) {
    console.log(err);
  }
}

getUserData(6);
