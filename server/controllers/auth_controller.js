module.exports = {
  register: (req, res) => {
    res.status(201).send('register')
  },
  login: (req, res) => {
    res.status(200).send('login')
  },
  logout: (req, res) => {
    res.status(200).send('logout')
  },
}