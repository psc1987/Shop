const express = require('express');
let router = express.Router();

const { clothes, users, purchase } = require('../models')
const file = require('../utils/fileUpload')


router.get('/clothes', (req, res) => {
    let page = req.query.page || 0 // 쿼리스트링에 page가 없으면 0을 사용
    let limit = 5 // 한번에 띄워줄 데이터의 개수

    clothes.findAndCountAll({
        raw: true,
        limit: limit,
        offset: page * limit
    }).then((result) => {
        res.json({
            totalCount: result.count,
            cloth: result.rows,
            limit: limit,
            currentPage: page
        })
    })
})


router.get('/users', (req, res) => {
    let page = req.query.page || 0
    let limit = 5

    users.findAndCountAll({
        raw: true,
        limit: limit,
        offset: page * limit
    }).then((result) => {
        res.json({
            totalCount: result.count,
            user: result.rows,
            limit: limit,
            currentPage: page
        })
    })
})


router.get('/purchase', (req, res) => {
    let page = req.query.page || 0
    let limit = 5

    purchase.findAndCountAll({
        raw: true,
        limit: limit,
        offset: page * limit,
        include: [
            { model: users },
            { model: clothes },
        ]
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







// 유저한테 받은 옷 데이터들을 저장
router.post('/clothes/registry', file.single('img'), (req, res, next) => {
    let { name, price, category } = req.body

    clothes.create({
        name: name,
        price: price,
        category: category,
        img: req.file.filename
    }).then((result) => {
        res.status(201).json({ message: 'succeess' })
    })
})

module.exports = router;