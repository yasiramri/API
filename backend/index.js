import  express  from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoutes.js";

const app = express ();

mongoose.connect('mongodb+srv://admin01:admin01@cluster0.falzvjf.mongodb.net/buku')

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('Database connected...'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);
 
app.listen(5000, ()=> console.log('Server up and Running...'));
