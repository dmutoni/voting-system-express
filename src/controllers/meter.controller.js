import Token from '../models/token.model.js';

const getToken = async (req, res) => {
    try {
        const validMoney = validateMoney(req.body.money);
        if (!validMoney) {
            return res.status(400).json({
                message: 'Invalid money',
                success: false
            });
        }
        if (req.body.meterNumber.length != 6) {
            return res.status(400).json({
                message: 'Meter is invalid',
                success: false
            });
        }
        const token = generateRandomToken();
        const days = assignRemainingDaysAccordingToMoney(req.body.money);

        const newToken = await Token.create({
            token: token,
            lastActiveDate: days
        });
        const savedToken = await newToken.save();
        if (savedToken) {
            return res.status(201).json({
                success: true,
                message: 'Token generated successfully',
                data: savedToken
            })
        }
        const saveMeter = await Meter.create({meterNumber: req.body.meterNumber});
    } catch (err) {
        return res.status(400).json({
            message: 'Error occurred',
            error: err.message
        })
    }
}
const validateMoney = (money) => {
    if (money < 0) {
        return false;
    } else if (money % 100 != 0) {
        return false;
    } else if (money > 182, 500) {
        return false;
    }
    return true;
}

const generateRandomToken = () => {
    const token = Math.floor(Math.random() * 1000000);
    return token;
}

const assignRemainingDaysAccordingToMoney = (money) => {
    const days = money / 100;
    return days;
}

export { getToken };