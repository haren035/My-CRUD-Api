import express, { Request, Response, NextFunction } from "express"
import taskRoutes from "./routes/tasks"

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json());
app.use('/tasks', taskRoutes);

//Routes
app.use('/', (req:Request, res:Response) => {
          res.send('Hello! This is your first TypeScript app!');
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong');
});

//Start Listening
app.listen(port, () =>{
          console.log(`The Server is running at port ${port}`)
})