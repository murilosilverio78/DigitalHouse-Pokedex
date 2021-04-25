// function validator(req, res, next) {
//     const { description } = req.body;

//     if (!description) { 
//         return res.status(400).json({error: "Description is required"});          
//     }
    
//     next(); 
// }

// module.exports = validator;

// const { body } = require('express-validator');

// const validationList = [
//     body('name', 'Name is required').notEmpty(),
//     body('type', 'Type is required').notEmpty(),
//     body('description', 'Description length must be greater than 10').isLength({min: 10})
// ];

// module.exports = validationList;
const { ValidationError } = require('yup');
const yup = require('yup');

function validator(req, res, next) {
    const schema = yup.object().shape({
        name: yup
            .string()
            .required('Preencha o campo do nome'),
        type: yup
            .string()
            .required('Preencha o campo do tipo'),
        description: yup
            .string()
            .required('Preencha o campo da descrição')
            .min(10, 'A descrição deve ter pelo menos 10 caracteres'),
        healthPoints: yup
            .number()
            .typeError('Health Points deve ser um número')
            .positive('Health Points deve ser um número positivo')
            .integer('Health Points deve ser um número inteiro'), 
        specialAttack: yup
            .number()
            .typeError('Special Attack deve ser um número')
            .positive('Special Attack deve ser um número positivo')
            .integer('Special Attack deve ser um número inteiro'), 
        defense: yup
            .number()
            .typeError('Defense deve ser um número')
            .positive('Defense deve ser um número positivo')
            .integer('Defense deve ser um número inteiro'), 
        attack: yup
            .number()
            .typeError('Attack deve ser um número')
            .positive('Attack deve ser um número positivo')
            .integer('Attack deve ser um número inteiro'), 
        experience: yup
            .number()
            .typeError('Experience deve ser um número')
            .positive('Experience deve ser um número positivo')
            .integer('Experience deve ser um número inteiro'), 
        specialDefense: yup
            .number()
            .typeError('Special Defense deve ser um número')
            .positive('Special Defense deve ser um número positivo')
            .integer('Special Defense deve ser um número inteiro')
    });

   
 
    if (!schema.isValidSync(req.body)) {
        try {
            schema.validateSync(req.body, {abortEarly: false})
        } catch (error) {
            res.send(error.errors)
        } 
        return    
    }
    
    next(); 
}

module.exports = validator;