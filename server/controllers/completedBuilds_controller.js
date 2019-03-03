module.exports = {
    build: async (req, res) => {
        const {user_id} = req.body
        await req.app.get('db').completedBuild.getbuild({user_id: user_id})
        .then((builds) => {
            res.status(200).send(builds)
        })
    },
    delete: async (req, res) => {
        const {id} = req.params
        await req.app.get('db').completedBuild.deletebuild({id: id})
        .then(builds => {
            res.status(200).send(builds)
        })
    }
}