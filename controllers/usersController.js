const connection = require('./../config/connection');

module.exports = {
    getUsers: (req, res) => {
        const query = `SELECT * FROM users;`;
        connection.query(query, (err, stores) => {
            if (err) {
                // console.log(stores)
                return res.status(404).send(err);
            }
            res.json(stores);
        });
    },
    createUser: async(req, res) => {
        const { email } = req.body;

        // if the email already exists in db, don't assign a new hpoc account
        const find_email_query = `SELECT * FROM users WHERE email= ?;`;
        await connection.query(find_email_query, email, (err, response) => {
            if (err) {
                return res.status(404).send(err);
            }
            if (response.length > 0) {
                // console.log(response)
                res.json({
                    "message": "This user already has an hpoc assigned"
                })
            } else {
                // if email doesn't exist, find an unnassigned hpoc accounts left
                const find_unassigned_query = `SELECT * FROM users WHERE email= ? LIMIT 1;`;
                const value = 'unassigned'
                connection.query(find_unassigned_query, value, (err, response) => {
                    if (err) {
                        return res.status(404).send(err);
                    }
                    if (response.length < 0) {
                        res.json({
                            "message": "There are no unassigned hpoc accounts left"
                        })
                    } else {
                        // assign the email to an unassigned account
                        const update_query = `UPDATE users SET email= ? WHERE id= ?;`;
                        const update_values = [email, response[0].id]
                        connection.query(update_query, update_values, (err, inserted_user_resp) => {
                            if (err) {
                                return res.status(403).send(err);
                            }
                            // res.send(inserted_user_resp)
                            res.json({
                                "message": `New user has been assigned an hpoc with id ${response[0].id}`
                            })
                        });
                    }
                });
            }
        });
    }
};