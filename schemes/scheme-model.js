const db = require('../data/dbConfig');

function find() {
    return db('schemes')
}

function findById(id) {
    return db("schemes")
            .where({id})
            .first()
}

function findSteps(scheme_id) {
    return db('steps')
            .select("steps.*", "schemes.scheme_name" )
            .innerJoin("schemes", "schemes.id", "steps.scheme_id" )
            .where({scheme_id})
            // .groupBy('steps.step_number')
}

function add(scheme) {
    return db('schemes')
            .insert(scheme)
            .then(([id]) => findById(id))
}

function update(changes, id) {
    return db('schemes')
            .where({id})
            .update(changes)
            .then((ids)=>{
                if(ids>=1) {
                    return findById(id)
                }
            })
};

function remove(id) {
    return db('schemes')
            .where({id})
            .del()
};

function addStep(step, scheme_id) {
    const newStep = {...step,scheme_id}
    return db("'steps'")
            .insert(newStep)
            .then(()=> findSteps(scheme_id))
}

module.exports = {find, findById, findSteps, add, update, remove, addStep};