const jwt = require('jsonwebtoken');

export const getToken = async (mobile) =>{

    const payload = { phone: mobile };
    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign(payload, secretKey);


    return token
}