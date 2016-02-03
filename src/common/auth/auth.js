import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@inject(HttpClient)
export class Auth {
    clientId = '';

    constructor(http) {
        this.http = http;
    }

    isAuthenticated() {
        let access_token = window.localStorage.getItem('access_token');

        if (access_token == null) {
            return false;
        } else {
          return this.verifyToken(access_token);
        }
    }

    login(identity, password) {

    }

    logout() {
        localStorage.removeItem('access_token');
        localStorage.removeItem('client_token');
    }

    setClientId(id) {
        this.clientId = id;
    }

    getClientId() {
        return this.clientId;
    }

    requestToken(token) {
        this.http.fetch('http://localhost/api/token', {
            method: 'POST',
            body: {
                client_token: token
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data) {
                window.localStorage.setItem('access_token', data.access_token);
                window.localStorage.setItem('client_token', data.client_token);

                return true;
            } else {
                return false;
            }
        })
        .catch(err => {
            throw new Error(err);
        });
    }

    verifyToken(token) {
        this.http.fetch('http://localhost/api/verifyToken', {
            method: 'POST',
            body: {
                access_token: token
            }
        })
        .then(response => response.text())
        .then(body => {
            if (body) {
                return true;
            } else {
                let clientToken = window.localStorage.getItem('client_token');

                if (clientToken == null) {
                    throw new Error('No client side access token was found.');
                    return false;
                } else {
                    this.requestToken(clientToken);
                }
            }
        })
        .catch(err => {
            let clientToken = window.localStorage.getItem('client_token');

            if (clientToken == null) {
                return false;
            } else {
                this.requestToken(clientToken)
            }
        });
    }

}
