const User = require('../model/User')
const tokenService = require('../service/TokenService')
const bcrypt = require('bcrypt')

class AuthController {
    async login(req, res) {
        try {
            const { login, password } = req.body

            const user = await User.findOne({ login: login })
            if (!user) return res.status(400).json({ message: 'Пользователь не найден' })

            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) return res.status(400).json({ message: 'Неверный пароль' })

            const token = tokenService.generateToken(user.id, user.role)
            res.status(200).json({ message: 'Успешно', token: token })
        }

        catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Серверная ошибка' })
        }
    }

    async registration(req, res) {
        try {
            const { username, login, password, mail, phone } = req.body

            const candidate = await User.findOne({ login })
            if (candidate) return res.status(400).json({ message: 'Данный логин занят' })

            const hashedPassword = bcrypt.hashSync(password, 3)
            const user = new User({ username: username, login: login, password: hashedPassword, mail: mail, phone: phone })

            await user.save()
            res.status(200).json({ message: 'Пользователь создан', isSucsess: 'true' })
        }

        catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Серверная ошибка' })
        }
    }
}

module.exports = new AuthController()