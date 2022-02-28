const tokenService = require('../service/TokenService')

class ClientController {
    async main(req, res) {
        res.render('main')
    }

    async dashboard(req, res) {
        const token = tokenService.getCookieToken(req)

        if (token) {
            
            const tokenPayload = tokenService.decodeToken(token)
            if (tokenPayload.role == 'ADMIN') {
                res.render('dashboard')
            }
            else if (tokenPayload.role == 'USER') {
                res.render('userProfile')
            }
            else {
                res.redirect('/auth')
            }
        }
        else {
            res.redirect('/auth')
        }
    }

    async product(req, res) {
        const token = tokenService.getCookieToken(req)

        if (token) {
            const tokenPayload = tokenService.decodeToken(token)
            if (tokenPayload.role) {
                if (tokenPayload.role == 'ADMIN') {
                    res.render('createProduct')
                }
                else if (tokenPayload.role == 'USER') {
                    res.render('profile')
                }
                else {
                    res.redirect('/auth')
                }
            }
        }
        else {
            res.redirect('/auth')
        }
    }

    async profile(req, res) {
        res.render('profile')
    }

    async landing(req, res) {
        res.render('landing')
    }

    async authorization(req, res) {
        res.render('authrization')
    }

    async reg(req, res) {
        res.render('registration')
    }
}

module.exports = new ClientController()