const bcrypt = require('bcryptjs')

module.exports = {
  register: (req, res) => {
    const {username, password} = req.body
    res.status(201).send('register')
  },
  login: (req, res) => {
    res.status(200).send('login')
  },
  logout: (req, res) => {
    res.status(200).send('logout')
  },
}