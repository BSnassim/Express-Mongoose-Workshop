const yup = require('yup');
const validate = async (req,res,next) => {
    try {
        const schema = yup.object().shape({
            name: yup.string().min(3).matches(/^[a-zA-Z]+\s*[a-zA-Z]+$/,"Must be letters only with no leading or trailing spaces").required(),
            email: yup.string().email().required(),
            cin: yup.number().required()
        });
        await schema.validate(req.body);
        next();
    } catch (error) {
        res.status(400).json({error: error.errors});
    }
}

module.exports = validate;