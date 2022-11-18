import { elementServices } from '../services/elementServices.js'

const elementController = {
    getAll: async (req, res) => {
        const allElements = await elementServices.getAll()
        return res.status(200).json({
            status : 200,
            total : allElements.length,
            data : allElements
        })
    },
    getUser: async (req, res) => {
        const { id } = req.params
        const allElements = await elementServices.getAll({ _id : id })
        return res.status(200).json({
            status : 200,
            total : allElements.length,
            data : allElements
        })
    },
    getRoutines: async (req, res) => {
        const { id } = req.params
        const element = await elementServices.getRoutines(id)
        const [{rutinas}] = element
        const filtered = rutinas.filter(rutina=>rutina.isDeleted == false)
        return res.status(200).json({
            status: 200,
            data: filtered,
        })
    },
    store: async (req, res) => {
        const newElement = {
            usuario: req.body.usuario,
            registro: req.body.registro,
            record: req.body.record,
            rutinas: req.body.rutinas,
            imc: req.body.imc,
            password: req.body.password
        }
        const elementStored = await elementServices.store(newElement)
        return res.status(200).json({
            data: elementStored
        })
    },
    addRoutine: async (req, res) => {
        const { id } = req.params
        const newRoutine = {
            nombre_rutina: req.body.nombre_rutina,
            elementos: req.body.elementos,
            isDeleted: false
        }
        const storedRoutine = await elementServices.addRoutine( id, newRoutine )
        return res.status(200).json({
            data: storedRoutine
        })
    },
    deleteRoutine: async (req, res) => {
        const userId = req.params.id
        const id = req.body.id
        const response = await elementServices.deleteRoutine(id, userId)
        return res.status(200).json({
            data: response
        })
    },
    updateRoutine: async (req, res) => {
        const { id } = req.params
        const elements = req.body.elementos
        const routine = req.body.routineId
        const response = await elementServices.updateRoutine(id, routine, elements)
        return res.status(200).json({
            status: 200,
            data: response
        })
    },
    updateAllRoutines: async (req, res) => {
        const { id } = req.params
        const elements = req.body.rutinas
        const response = await elementServices.updateAllRoutines(id, elements)
        return res.status(200).json({
            data: response
        })
    },

    // Read and Add to user's record

    getRecord: async (req, res) => {
        const { id } = req.params
        const response = await elementServices.getRecord(id)
        return res.status(200).json({
            data: response
        })
    },
    addRecord: async (req, res) => {
        const { id } = req.params
        const newElement = {
            genero: req.body.genero,
            edad: req.body.edad,
            estatura: req.body.estatura,
            peso: req.body.peso
        }
        const response = await elementServices.addRecord(id, newElement)
        return res.status(200).json({
            data: response
        })
    },

    // Get and set users's imc

    getImc: async (req, res) => {
        const { id } = req.params
        const response = await elementServices.getUser(id)
        const [{imc}] = response 
        return res.status(200).json({
            data: imc
        })
    },
    setImc: async (req, res) => {
        const { id } = req.params
        const newImc = req.body.imc
        const response = await elementServices.setImc(id, newImc)
        return res.status(200).json({
            data: response
        })
    },
    authUser: async (req,res) => {
        const { name } = req.body
        const { password } = req.body
        const response = await elementServices.authUser(name, password)
        return res.status(200).json({
            data: response
        })
    }
}

export default elementController