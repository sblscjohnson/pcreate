module.exports = {
  cpus: async (req, res) => {
    await req.app.get('db').newBuild.getcpus().then((cpus) => {
      res.status(200).send(cpus)
    }).catch((err) => {
      res.status(500).send('get cpus fail', err)
    })
  },
  mobos: async (req, res) => {
    console.log(req.body)
    const {socket} = req.body;
    console.log(socket)
    await req.app.get('db').newBuild.getmobos({socket: socket}).then((mobos) => {
      console.log(mobos)
      res.status(200).send(mobos)
    }).catch((err) => {
      res.status(500).send('get mobos fail', err)
    })
  }
}