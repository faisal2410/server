const bcrypt = require("bcrypt");

exports.hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (err, salt) => {
            if (err) {
                reject(err);
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    reject(err);
                }
                resolve(hash);
            });
        });
    });
};

exports.comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
};


/*
The bcrypt function genSalt is called with a salt round factor of 12. The salt round factor determines the complexity of the hashing algorithm and affects the time it takes to generate a hash. Higher values increase security but also increase the computational cost.

return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
        if (err) {
            reject(err);
        }
        // ...
    });
});



bcrypt.genSalt(12, (err, salt) => {
    if (err) {
        reject(err);
    }
    bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
            reject(err);
        }
        resolve(hash);
    });
});



*/ 