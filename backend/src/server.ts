import express from 'express'
import dotenv from 'dotenv'
import corsConfig from './configs/corsConfig';
import Error from './providers/ErrorProvider';

dotenv.config();

const PORT = process.env.PORT || 8081

const app = express();

app.use(express.json())
app.use(corsConfig);


console.log(Error.getError(400))

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})