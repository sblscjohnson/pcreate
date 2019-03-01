const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const {email, password, pic_link} = req.body;
    const {session} = req;
    const db = req.app.get('db');
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = await db.user.register({email: email, hash: hash, pic_link: pic_link})
    session.user = {...newUser}
    res.status(201).send(session.user)
  },
  login: async (req,res) => {
    console.log('login hit', req.body)
    const {email, password} = req.body;
    const {session} = req
    const db = req.app.get('db')
    let user = await db.user.login({email: email})
    user = user[0]
    console.log({user})
    const foundItem = bcrypt.compareSync(password, user.hash);
    if(foundItem) {
      delete user.password
      session.user = user
      console.log('sesh usr', session.user)
      res.status(200).send(session.user)
    } else {
      res.sendStatus(401)
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
  updatePic: async (req, res) => {
    const {email, pic_link} = req.body
    const userID = req.params.id
    console.log(email, pic_link, userID)
    const db = req.app.get('db')
    await db.user.
    res.status(200).send('hit')
  }
}