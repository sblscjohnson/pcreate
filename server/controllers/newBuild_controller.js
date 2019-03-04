module.exports = {
  cpus: async (req, res) => {
    await req.app.get('db').newBuild.getcpus().then((cpus) => {
      res.status(200).send(cpus)
    }).catch((err) => {
      res.status(500).send('get cpus fail', err)
    })
  },
  mobos: async (req, res) => {
    const {socket} = req.body;
    await req.app.get('db').newBuild.getmobos({socket: socket}).then((mobos) => {
      res.status(200).send(mobos)
    }).catch((err) => {
      res.status(500).send('get mobos fail', err)
    })
  },
  ram: async (req, res) => {
    const {ram_slots} = req.body
    await req.app.get('db').newBuild.getram({ram_slots: ram_slots}).then((ram) => {
      res.status(200).send(ram)
    }).catch((err) => {
      res.status(500).send('get ram fail', err)
    })
  },
  case: async (req, res) => {
    const {mobo_type} = req.body
    await req.app.get('db').newBuild.getcase({mobo_type: mobo_type}).then((compcase) => {
      res.status(200).send(compcase)
    }).catch((err) => {
      res.status(500).send('get case fail', err)
    })
  },
  cooler: async (req, res) => {
    const {socket, max_aio, max_air} = req.body
    await req.app.get('db').newBuild.getcooler({socket: socket, max_aio: max_aio, max_air: max_air}).then((cooler) => {
      res.status(200).send(cooler)
    }).catch((err) => {
      res.status(500).send('get cooler fail', err)
    })
  },
  gpu: async (req, res) => {
    const {cpu_tier} = req.body
    await req.app.get('db').newBuild.getgpu({tier: cpu_tier}).then((gpu) => {
      res.status(200).send(gpu)
    }).catch((err) => {
      res.status(500).send('get gpu fail', err)
    })
  },
  psu: async (req, res) => {
    const {psu_size, cpu_tier} = req.body
    await req.app.get('db').newBuild.getpsu({psu_size, tier: cpu_tier}).then((psu) => {
      res.status(200).send(psu)
    }).catch((err) => {
      res.status(500).send('get psu fail', err)
    })
  },
  newBuild: async (req, res) => {
    const {user_id, cpu, mobo, cooler, ram, gpu, psu, pc_case, price, user_email} = req.body
    await req.app.get('db').newBuild.newbuild({user_id, cpu, mobo, cooler, ram, gpu, psu, pc_case, price, user_email}).then((build) => {
      res.status(200).send(build)
  })
  }
}