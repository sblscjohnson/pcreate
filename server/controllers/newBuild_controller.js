module.exports = {
  getcpus: async (req, res) => {
    await req.app.get('db').newBuild.getcpus().then((cpus) => {
      res.status(200).send(cpus)
    }).catch((err) => {
      res.status(500).send('get cpus fail', err)
    })
  },
  getmobos: async (req, res) => {
    const {chipset} = req.body;
    await req.app.get('db').newBuild.getmobos({chipset: chipset}).then((mobos) => {
      res.status(200).send(mobos)
    }).catch((err) => {
      res.status(500).send('get mobos fail', err)
    })
  }
}