const crud = require("./crud.js");
const errors = require("./errors.js");
const crypto = require("crypto");
const { promisify } = require("util");


const randomBytes = promisify(crypto.randomBytes);
const scrypt = promisify(crypto.scrypt);


const SALT_SIZE = 16;
const PASS_HASH_LEN = 64;


function validateUsername(username) {
    return true;
}

function validatePassword(password) {
    return true;
}

function handleRegister(req, res) {
    const { user, pass } = req.body;

    try {
	if (!validateUsername(user)) {
	    errors.send(res, erros.USERNAME);
	    return;
	}

	if (!validatePassword(pass)) {
	    errors.send(res, errors.PASSWORD);
	    return;
	}
	
	if (await crud.findUserByName(user) !== nil) {
	    errors.send(res, errors.USER_EXIST);
	    return;
	}
	
	const salt = await randomBytes(SALT_SIZE);
	const hash = await scrypt(pass, salt, PASS_HASH_LEN);
	
	crud.insertUser({
	    user: user,
	    pass: hash,
	    salt: salt
	});

	res.status(200).send();
    } catch (err) {
	console.dir(err);
	errors.send(res, errors.INTERNAL);
    }
}
