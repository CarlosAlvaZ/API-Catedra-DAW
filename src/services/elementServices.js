import Element from "../models/model.js"

export const elementServices = {
    getAll: (options) => {
        try {
            return Element.find({...options})
        }
        catch(error) {
            return error
        }
    },
    getUser: (options) => {
        try {
            return Element.find({...options})
        }
        catch(error) {
            return error
        }
    },
    getRoutines: (userId) => {
        try {
            return Element.find({ _id: userId })
        } catch (error) {
            return error
        }
    },
    store: (newElement) => {
        try {
            return Element.create(newElement)
        } catch (error){
            return error
        }
    },
    addRoutine: async (userId, newRoutine) => {
        try {
            const element = await Element.find({ _id : userId })
            const [{rutinas}] = element
            return Element.findByIdAndUpdate(
                userId,
                { rutinas : [ ...rutinas, newRoutine] },
                { new : true }
            )
        } catch (error) {
            return error
        }
    },    
    deleteRoutine: async (id, userId) => {
        try {
            const element = await Element.find({ _id : userId })
            const [{rutinas}] = element
            rutinas[id].isDeleted = true
            return Element.findByIdAndUpdate(
                userId,
                { rutinas : [...rutinas] },
                { new : true }
            )
        } catch (error) {
            return error
        }
    },
    updateAllRoutines: (id, elements) => {
        try {
            return Element.findByIdAndUpdate(
                id,
                { rutinas: elements },
                { new: true }
            )
        } catch (error) {
            return error
        }
    },
    updateRoutine: async (id, routine, elements) => {
        try {
            const element = await Element.find({ _id : id })
            const [{rutinas}] = element
            rutinas[routine].elementos = elements
            return Element.findByIdAndUpdate(
                id,
                { elmentos : [...rutinas] },
                { new : true }
            )
        } catch (error) {
            return error
        }
    },
    getRecord: async (id) => {
        const elements = await Element.find({ _id : id })
        const [{record}] = elements
        return record
    },
    addRecord: async (id, newElement) => {
        const elements = await Element.find({ _id: id })
        const [{record}] = elements
        return Element.findByIdAndUpdate(
            id,
            { record : [...record, newElement] },
            { new : true }
        )
    },
    setImc: (id, newImc) => {
        return Element.findByIdAndUpdate(
            id,
            { imc : newImc },
            { new : true }
        )
    },
    authUser: async (user, password) => {
        try{
            const userData = await Element.find({ usuario: user })
            return userData.password == password
        } catch (err) {
            return err
        }
    }
}
