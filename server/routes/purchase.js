const express = require('express');
let router = express.Router();

const { users, purchase, clothes } = require('../models')

router.get('/', (req, res, next) => {
    let userId = req.user.id
    let page = req.query.page || 0
    let limit = 5 // 한페이지에 출력하는 갯수

    purchase.findAndCountAll({
        raw: true,
        limit: limit,
        offset: page * limit,
        include: [ // Join
            { model: users },
            { model: clothes },
        ],
        where: { userId: userId }
    }).then((result) => {
        res.json({
            totalCount: result.count,
            purchase: result.rows,
            limit: limit,
            currentPage: page
        })
    }, err => {
        console.log(err)
    })
})

router.post('/', (req, res, next) => {
    console.log(req.user)
    if (!req.user) { // 세션 정보 유/무 판단
        return res.status(200).json({ msg: '로그인 하지 않았습니다.' })
    }

    let userId = req.user.id
    let { clothId, price } = req.body

    let leftPrice = 0

    users.findByPk(userId, {
        raw: true
    }).then((result) => {
        if (result['price'] >= price) { // 유저가 가지고 있는 돈 검사
            leftPrice = result['price'] - price // 제품 가격만큼 차감
            return purchase.create({ userId: userId, clotheId: clothId })
        } else {
            res.status(204).json({})
        }
    }).then((result) => {
        return users.update( // 제품 가격만큼 차감
            { price: leftPrice }, { where: { id: userId } }
        )
    }).spread((affectedCount, affectedRows) => {
        res.status(201).json({})
    })
})

module.exports = router;