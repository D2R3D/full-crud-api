const users = require('../data')


  const getUsers = (req, res) => {
      res.status(200).send(users)
  };

  const getUserByParam = (req, res) => {
    const {id} = req.query;
    const foundUser = users.filter((user) => {
        if (user.id === +id) return user;
    })

    res.status(200).send(foundUser[0])
  }



   const getUserByQuery =(req, res) => {
        const {id} = req.params;
        for(let i= 0; i <users.length; i++) {
            if(user[i].id === +id) {
                res.status(200).send(users[i])
            }
        }
    }

    const createNewUser = (req, res) => {
        const newUser = {
            id: users.length +1,
            first_name:  req.body.first_name || " ",
            last_name:  req.body.last_name || " ",
            email:  req.body.email || " ",
            hobbies: req.body.hobbies || [],
            laptop: req.body.laptop || {}
        }
    }
    
    const updateUser = (req,res) => {
        const {id} = req.params

        for(let i=0; i<users.length; i++){
        if(users[i].id === +id){
        users[i].first_name ='kyle'
        }
    }
    res.status(200).send(users)
}

    
const deleteUser = (req,res) => {
    const {id} = req.params;
    users = users.filter((user) => {
        if(user.id !== +id) return user
    })
    res.status(200).send(users);
}



  module.export = {
      getUsers,
      getUserByParam,
      getUserByQuery,
      createNewUser,
      updateUser,
      deleteUser
  }