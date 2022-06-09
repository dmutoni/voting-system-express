import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    repeat_password: Joi.ref('password'),
    email: Joi.string().email({ minDomainSegments: 2, tlds: {allow: ['com','net']}}).required(),
    gender: Joi.string().valid('female', 'male')
})
export default schema;