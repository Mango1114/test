
const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({ dest: 'uploads/',limits: { fileSize: 10 * 1024 * 1024 },}); 

//添加body内容解析器
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.post("/*", (req, res) => {
    
//     var value = "Basic " + Buffer.from("weihu" + ":" + "123456").toString('base64');

//     req.headers['Authorization']=value;
//     delete req.headers['content-length'];
//     const data = req.body;

//     fetch('http://api.metavans.net:6090'+req.url,{
//         method: 'POST',
//         headers:req.headers,
//         body:data
//     })
//     .then(response => response.json())
//     .then(json => {
//        // console.log(json);
//         res.send(json);
//     }).catch(error => console.error('Error:', error));
// });


app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file) {
        console.log(req.file);
        res.send('File uploaded successfully.');
      } else {
        console.log('No file received.');
        res.send('No file received.');
    }
  });




module.exports = app;
