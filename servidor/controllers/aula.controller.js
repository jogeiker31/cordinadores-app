const Aula = require('../models/aula');

const aulaCtrl = {}

aulaCtrl.getAulas = async(req, res) => {
    Aula.find()
        .then((aulas) => {
            res.json(aulas);
        })
        .catch((err) => {
            res.json({
                "error": err
            })
        })
}

aulaCtrl.getAula = async(req, res) => {
    Aula.findOne({ aula: req.param.id })
        .then((aula) => {
            res.json(aula);
        })
        .catch((err) => {
            res.json({
                "error": err
            })
            res.status(404)
        })
}

aulaCtrl.createAula = async(res, req) => {
    const aula = new Aula({
        aula: req.body.aula
            /* estado: req.body.estado,
            ocupada: req.body.ocupada, */
    })
    await aula.save()
        .then(() => {
            res.status(200)
            res.json({
                "status": "ok"
            })
        })
        .catch((err) => {
            console.log(err)
            res.json({
                "status": err
            })
        })
}

aulaCtrl.updateAula = async(res, req) => {
    let aula = {
        aula: req.body.aula
            /*   estado: req.body.estado,
              ocupada: req.body.ocupada, */
    }
    Aula.findOneAndUpdate({ aula: req.param.id }, { $set, aula })
        .then((aula) => {
            res.json(aula)
        })
        .catch((err) => {
            res.json({
                "status": err
            })
        })
}

aulaCtrl.deleteAula = async(res, req) => {
    let au = Aula.findOneAndDelete({ aula: req.param.id })
        .then(() => {
            res.json({ "status": true })
        })
        .catch((err) => {
            res.json({ "status": false })
        })
}

module.exports = aulaCtrl