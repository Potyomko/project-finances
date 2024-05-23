const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    const { username, password, email } = req.body
    const hashedPassword = bcrypt.hashSync(password, 10)
    const user = new User({ username, email, password: hashedPassword })
    const { password: userPassword, ...rest } = user._doc;

    try {

        await user.save()
        res.status(201).json({user: rest, redirectTo: '/login'})

    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyValue) {
            return res.status(400).json({ message: 'Цей email вже використовується' });
        } else {
            return res.status(500).json({ message: 'Не вдалось зареєструватись' });
        }
    }
}

const login = async (req, res) => {
    try {
        
        const { email, password } = req.body
        const user = await User.findOne({ email })

        if(!user){
            return res.status(400).json({
                message: 'Користувача не існує',
            })
        }

        if(password){
            const dbPassword = user.password;
            const validPassword = bcrypt.compareSync(password, dbPassword)
            if(!validPassword){
                return res.status(400).json({error: "Невірний пароль або email"})
            }
        }

        const token = jwt.sign({ id: user._id }, 'secret123')
        const { password: hashedPassword, ...rest } = user._doc;

        const oneMonthInMilliseconds = 1000 * 60 * 60 * 24 * 30;
        const expirationDate = new Date(Date.now() + oneMonthInMilliseconds);

        res.cookie('access_token', token, { httpOnly: true, expires: expirationDate }).status(200).json({
            user: rest,
            token,
            redirectTo: '/spendings'
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Не вдалось увіти',
        })
    }
}

const logout = (req, res) => {
    res.clearCookie('access_token').status(200).json('Вихід успішний');
  };

module.exports = {
    register,
    login,
    logout,
}