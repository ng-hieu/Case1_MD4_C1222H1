import express from 'express';
import bodyParser from "body-parser";
import mongoose from "mongoose";
import session from 'express-session';
const app = express();
import router from "./src/router/router";
//Tạo URL kết nối
const DB_URL = 'mongodb://127.0.0.1:27017/CaseStudy1_MD4';

//Kết nối MongoDb
mongoose.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));

//Cấu hình và thiết lập template engine để render các view
app.set('views', './src/view');
app.set('view engine', 'ejs');

//===Cấu hình và cài đặt middleware (phần mềm trung gian) cho ứng dụng===
//Cho phép ứng dụng truy cập các tài nguyên tĩnh
app.use(express.static('./public'));
//Dùng để chạy session
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'Hiu',
    cookie: { maxAge: 60000 }}));
//Đọc các thông tin từ request body và giải mã dữ liệu đó thành đối tượng JSON
app.use(bodyParser.json());
//Đọc dữ liệu từ request body trong một định dạng nhất định (ở đây là URL-encoded) và lưu dữ liệu đó vào một đối tượng JavaScript.
app.use(bodyParser.urlencoded({extended:true}));
app.use('', router)
app.listen(8010, ()=>{
    console.log('Server 8010 is running')
})