const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req,res) => {
    res.send([
        {
            'id':1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '홍길동',
            'birthday': '962122',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id':2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '이순신',
            'birthday': '921219',
            'gender': '여자',
            'job': '암살자'
        },
        {
            'id':3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '이재용',
            'birthday': '860123',
            'gender': '남자',
            'job': '기업인'
        }
    ]);
});

app.get('/api/hello', (req, res) => {
    res.send({message: "Hello Express!"});
});

app.listen(port, () => console.log(`Listening on port ${port}`));