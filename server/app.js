const express = require('express')
const app = new express()
var bodyParser = require('body-parser')
const User = require("./moudle/user")
const Goods = require("./moudle/goods")
const Goodskind = require("./moudle/goodskind")
const Car = require("./moudle/car")
    // parse application/json
app.use(bodyParser.json())
var multer = require("multer");
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads");
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + "-" + Date.now() + file.originalname);
    }
});

var upload = multer({ storage: storage });
app.use("/uploads", express.static("uploads"));

app.use(bodyParser.urlencoded({ extended: false }));
app.post('/user/login', function(req, res) {
    // req.session.token='加密算法生成随机token'
    // const data={"code":20000,"data":{"roles":["editor"],"token":req.session.token,"introduction":"I am a super administrator","avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif","name":"Super Admin"}}
    const data = {
        "code": 20000,
        "data": {
            "token": "asasasasas",
            "orangiseid": 'wwwwwwww',
            "introduction": "I am a super administrator",
            "avatar": "https://dgss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/res/r/image/2020-09-22/7afe3efb3e8fb391539e4e821e9ece28.jpg",
            "name": "Super Admin"
        }
    }
    res.json(data)
})
app.get('/user/info', function(req, res) {
    const data = {
        "code": 20000,
        "data": {
            "roles": ["admin"],
            "introduction": "I am a super administrator",
            "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            "name": "Super Admin"
        }
    }
    res.json(data)
})
app.post('/user/logout', function(req, res) {
    res.json({ "code": 20000, "message": "success" })
})
app.post('/uesrlogin', function(req, res) {
    const date = req.body;
    // console.log(date)
    res.json({
        code: 20000,
        msg: "数据添加成功"
    })
    const user = new User(date);
    user.save().then(mon => {
        if (mon) {
            res.json({
                code: 20000,
                msg: "数据添加成功"
            })
        }

    })
})
app.get('/userList', function(req, res) {
    User.find().then(mon => {
        if (mon) {
            res.json({
                code: 20000,
                msg: "数据查询成功",
                list: mon
            })
        }
    })
})
app.delete('/userDele/:id', function(req, res) {

    User.findByIdAndDelete(req.params.id).then(mon => {
        if (mon) {
            res.json({
                code: 20000,
                msg: '数据删除成功'
            })
        }
    })
})
app.get('/showdata/:id', function(req, res) {
    User.findById(req.params.id).then(mon => {
        if (mon) {
            res.json({
                code: 20000,
                msg: '数据查询成功',
                list: mon
            })
        }
    })
})
app.put('/uesruple/:id', function(req, res) {
    // console.log(req.params.id, req.body)
    User.findByIdAndUpdate(req.params.id, req.body).then(mon => {
        if (mon) {
            res.json({
                code: 20000,
                msg: "数据修改成功"
            })
        }
    })
})
app.post('/upload', upload.single('avatar'), function(req, res, next) {
    res.json({
        code: 20000,
        msg: '图片上传成功',
        path: req.file.path
    })
})
app.post('/goodsdata', function(req, res) {
    // console.log(req.body)
    const data = req.body;
    const goods = new Goods(data);
    goods.save().then(mon => {
        if (mon) {
            res.json({
                code: 20000,
                msg: "数据添加成功"
            })
        }
    })
})
app.get('/goods/data/:id', function(req, res) {
    const id = req.params.id;
    Goods.findById(id).then(mon => {
        // console.log(mon)
        if (mon) {
            res.json({
                code: 20000,
                msg: "数据查询成功",
                list: mon
            })
        }
    })
})
app.put('/goods/ecitdata/:id', function(req, res) {

    Goods.findByIdAndUpdate(req.params.id, req.body).then(mon => {
        if (mon) {
            res.json({
                code: 20000,
                msg: "数据修改成功"
            })
        }
    })
})
app.delete("/goods/:id", function(req, res) {

    Goods.findByIdAndDelete(req.params.id).then(mon => {
        if (mon) {
            res.json({
                msg: "数据删除成功"
            })
        }
    })
})
app.get('/getgoodslist', function(req, res) {
    Goods.find().then(mon => {
        // console.log(mon);
        if (mon) {
            res.json({
                code: 20000,
                list: mon,
                msg: '数据查询成功'
            })
        }
    })
})

app.post('/carsave', function(req, res) {
    const date = req.body;
    // console.log(date);
    const car = new Car(date);
    car.save().then(mon => {
        if (mon) {
            res.json({
                code: 20000,
                msg: "数据添加成功"
            })
        }

    })
})
app.get('/carList', function(req, res) {
    Car.find().then(mon => {
        if (mon) {
            res.json({
                code: 20000,
                msg: "数据查询成功",
                list: mon
            })
        }
    })
})
app.get('/carshowdata/:id', function(req, res) {
    console.log(req.params.id)
    Car.findById(req.params.id).then(mon => {
        console.log(mon)
        if (mon) {
            res.json({
                code: 20000,
                msg: '数据查询成功',
                list: mon
            })
        }
    })
})
app.put('/caruple/:id', function(req, res) {
    // console.log(req.params.id, req.body)
    Car.findByIdAndUpdate(req.params.id, req.body).then(mon => {
        if (mon) {
            res.json({
                code: 20000,
                msg: "数据修改成功"
            })
        }
    })
})
app.delete('/carDele/:id', function(req, res) {

    Car.findByIdAndDelete(req.params.id).then(mon => {
        if (mon) {
            res.json({
                code: 20000,
                msg: '数据删除成功'
            })
        }
    })
})
app.post('/loge', function(req, res) {
        User.find(req.body).then(mon => {
            if (mon.length > 0) {
                res.json({
                    code: 2000,
                    msg: '登录成功',
                    list: mon
                })
            } else {
                res.json({
                    msg: '用户名或密码错误'
                })
            }
        })
    })
    // app.post('/goodskind', function(req, res) {
    //         const date = req.body;
    //         console.log(date)
    //         res.json({
    //             code: 20000,
    //             msg: "数据添加成功"
    //         })
    //         const goodskind = new Goodskind(date);
    //         goodskind.save().then(mon => {
    //             if (mon) {
    //                 res.json({
    //                     code: 20000,
    //                     msg: "数据添加成功"
    //                 })
    //             }

//         })
//     })
// app.post('/city/data', function(req, res) {
//     const city = new City(req.body)
//     city.save().then(mon => {
//         if (mon) {
//             res.json({
//                 msg: "数据添加成功"
//             })
//         }

//     })
// })
// app.get('/city/list', async(req, res) => {
//     // console.log(req.query)
//     const pagesize = req.query.pagesize || 3;
//     const page = req.query.page || 1;
//     const stats = (Number(page) - 1) * Number(pagesize)
//     const num = Number(pagesize)
//     const total = await City.find()
//     const list = await City.find().skip(stats).limit(num)
//     res.json({
//         msg: "数据查询成功",
//         list: list,
//         total: total.length
//     })
// })
// app.delete("/city/:id", function(req, res) {

//     City.findByIdAndDelete(req.params.id).then(mon => {
//         if (mon) {
//             res.json({
//                 msg: "数据删除成功"
//             })
//         }
//     })
// })
// app.get('/city/onedata/:id', function(req, res) {
//     // console.log(req.params.id)
//     City.findById(req.params.id).then(mon => {
//         // console.log(mon)
//         if (mon) {
//             res.json({
//                 code: 20000,
//                 msg: "数据查询成功",
//                 list: mon
//             })
//         }
//     })
// })
// app.put('/city/ecitdata/:id', function(req, res) {

//     City.findByIdAndUpdate(req.params.id, req.body).then(mon => {
//         if (mon) {
//             res.json({
//                 code: 20000,
//                 msg: "数据修改成功"
//             })
//         }
//     })
// })
// app.post('/upload', upload.single('avatar'), function(req, res, next) {
//     res.json({
//         code: 20000,
//         msg: '图片上传成功',
//         path: req.file.path
//     })

// });
// app.get('/city/alldata', function(req, res) {
//     City.find().then(mon => {
//         // console.log(mon)
//         if (mon) {
//             res.json({
//                 code: 20000,
//                 list: mon
//             })
//         }
//     })
// })
// app.post("/movie/addata", function(req, res) {
//     var title = req.body.title;
//     var imgurl = req.body.imgurl;
//     var stars = req.body.stars;
//     var ratings = req.body.ratings;
//     var description = req.body.description;
//     var p = req.body.p
//     console.log(title, imgurl, stars, ratings, description, p)
//     const movie = new Movie({
//         title,
//         imgurl,
//         stars,
//         ratings,
//         description,
//         p
//     })
//     movie.save(req.body).then(mon => {
//         if (mon) {
//             res.json({
//                 code: 20000,
//                 msg: "数据添加成功"
//             })
//         }
//     })
// })
// app.get('/movie/datalist', function(req, res) {
//     Movie.find().then(mon => {
//         if (mon) {
//             res.json({
//                 code: 20000,
//                 msg: "数据查询成功",
//                 list: mon
//             })
//         }
//     })
// })
// app.delete("/movie/:id", function(req, res) {

//     Movie.findByIdAndDelete(req.params.id).then(mon => {
//         if (mon) {
//             res.json({
//                 msg: "数据删除成功"
//             })
//         }
//     })
// })
// app.get('/movie/list', async(req, res) => {
//     // console.log(req.query)
//     const pagesize = req.query.pagesize || 3;
//     const page = req.query.page || 1;
//     const stats = (Number(page) - 1) * Number(pagesize)
//     const num = Number(pagesize)
//     const total = await Movie.find()
//     const list = await Movie.find({}).populate('p').skip(stats).limit(num)
//     res.json({
//         msg: "数据查询成功",
//         list: list,
//         total: total.length
//     })
// })
// app.get('/movie/oneda/:id', function(req, res) {
//     console.log(req.params.id)
//     Movie.findById(req.params.id).then(mon => {
//         // console.log(mon)
//         if (mon) {
//             res.json({
//                 code: 20000,
//                 msg: "数据查询成功",
//                 list: mon
//             })
//         }
//     })
// })
// app.put('/movie/ecitdata/:id', function(req, res) {

//     Movie.findByIdAndUpdate(req.params.id, req.body).then(mon => {
//         if (mon) {
//             res.json({
//                 code: 20000,
//                 msg: "数据修改成功"
//             })
//         }
//     })
// })
app.listen(8888, '127.0.0.1')