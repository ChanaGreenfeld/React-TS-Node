const UsersModels = require('../Models/usersModels')
//import UsersModels from '../Models/usersModels';
const jwt =require('jsonwebtoken')
//import jwt from "jsonwebtoken" ;

const GatAll = () => {
  return new Promise((resolve) => {
    UsersModels.find({}, function (err, data) {
      if (err) {
        console.log(err)
      } else {
        resolve(data)
      }
    })
  })
}

const GetUserById = (code) => {
  return new Promise((resolve) => {
    UsersModels.findById(code, function (err, dataUser) {
      if (err) console.log(err)
      else {
       // let result = dataUser.find((x) => x.code == code)
        //resolve(result)
        resolve(dataUser)
      }
    })
  })
}

// const AddUser = (newUser) => {
//   return new Promise(async (resolve,reject) => {
//     const allUsers =await GatAll().then(data=>{ return data})

//     const email = allUsers.find((us) => {  return us.email == newUser.email },
//       function (err, data) {
//         if (err) {
//           reject(err)
//         } else {
//           resolve(data)
//         }
//       },
//     )
//     if (!email) {
//       let user = new UsersModels({
//         firstName: newUser.firstName,
//         lastName: newUser.lastName,
//         phone: newUser.phone,
//         email: newUser.email,
//         password:newUser.password,
//         role:newUser.role,
//         address: newUser.address,
//       })

//       user.save(function (err) {
//         if (err) console.log(err)
//         else resolve('good')
//       })
//     } else {
//       reject('email is exsist')
//     }
//   })
// }

const AddUser = (newUser) => {
  return new Promise((resolve)=>{
    let use = new UsersModels({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      phone: newUser.phone,
      email: newUser.email,
      password:newUser.password,
      role:newUser.role,      
      address: newUser.address,
    })
    use.save( function (err) {
      if (err) console.log(err);
      else 
      resolve("good");
  });
});
};

const EditUser = (code, newUser) => {
  return new Promise((resolve) => {
    UsersModels.findByIdAndUpdate(
      code,
      {
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        phone: newUser.phone,
        email: newUser.email,
        password:newUser.password,
        role:newUser.role,
        address: newUser.address,
      },
      function (err) {
        if (err) console.log(err)
        else {
          console.log('good')
        }
      },
    )
  })
}

const DeleteUser = (code) => {
  return new Promise((resolve) => {
    UsersModels.findByIdAndDelete(code, function (err, dataUser) {
      if (err) console.log(err)
      else {
        resolve(dataUser)
      }
    })
  })
}

const Login=(email,password)=>{
    return new Promise(async (resolve,reject)=>
    {
      var users=await GatAll().then(data=>{ return data});
      const user= users.find(u=>{return u.email==email && u.password==password});
      if(user){
        const accessTokenSecret="somerandomaccesstoken";
        //const refreshTokenSecret="somerandomrefreshtoken";
        let refreshTokens=[];

        const accessToken=jwt.sign({email:user.email,role:user.role},accessTokenSecret)
        //const refreshToken=jwt.sign({email:user.email,role:user.role},refreshTokenSecret)

        refreshTokens.push(accessToken)
        resolve({
          accessToken,
          //refreshToken
        })
      }
      else{
        console.log("email or password incorrect");
        return;
      }
    })
}


module.exports = { GatAll, GetUserById, EditUser, AddUser, DeleteUser ,Login}
