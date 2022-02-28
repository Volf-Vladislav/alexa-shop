const jwt = require('jsonwebtoken')
const SECRET_KEY = 'I&CBCNoid9wd8'

class TokenService {
    getCookieToken(request) {
        let list = {}
        let requestCookie = request.headers.cookie
    
        requestCookie && requestCookie.split(';').forEach(function (cookie) {
            let parts = cookie.split('=')
            list[parts.shift().trim()] = decodeURI(parts.join('='))
        })
    
        return list.token
    }

    generateToken(id, role) {
        const payload = {
            id,
            role
        }

        return jwt.sign(payload, SECRET_KEY, {expiresIn: '72h'})
    }

    decodeToken(token) {
        const decodedToken = jwt.verify(token, SECRET_KEY)
        return decodedToken
    }
}

module.exports = new TokenService()