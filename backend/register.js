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

async function register({user, pass}) {
    if (!validateUsername(user)) {
	throw errors.USERNAME;
    }

    if (!validatePassword(pass)) {
	throw errors.PASSWORD;
    }

    if (await crud.getUserByName(user) !== null) {
	throw errors.USER_EXIST;
    }

    try {
	const salt = await randomBytes(SALT_SIZE);
	const hash = await scrypt(pass, salt, PASS_HASH_LEN);
	
	crud.insertUser({
	    user: user,
	    pass: hash,
	    salt: salt
	});
    } catch (err) {
	throw errors.INTERNAL;
    }
}

exports.handleRegister = function(req, res) {
    register(req.body)
	.then(_ => res.status(200).send())
	.catch(err => errors.send(res, err));
}
