import User from '../model/user.model.js';

export const signUp = (request, response, next) => {
    let username = request.body.username;
    let password = request.body.password;
    let email = request.body.email;
    let contact = request.body.contact;

    let user = new User(null, username, password, email, contact);

    user.signUp()
        .then(result => {
            return response.status(200).json({ message: 'Signup success' });
        }).catch(err => {
            return response.status(500).json({ error: 'Internal Server Error',error:err });
        });
}

export const signIn = (request, response, next) => {
    let username = request.body.username;
    let password = request.body.password;

    let admin = new User(null, username, password);

    admin.signIn()
        .then(result => {
            console.log(result);
            if (result.length != 0)
                return response.status(200).json({ message: 'Sign in success', data: result[0] });
            return response.status(401).json({ error: 'Unauthorized user' });
        }).catch(err => {
            return response.status(500).json({ error: "Internal Server Error",error:err });
        });
}