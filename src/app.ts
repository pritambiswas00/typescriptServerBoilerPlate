import express, { Express, Request, Response } from 'express';
const app = express();

const port:number = Number(process.env.PORT) || 8080;

async function bootStrap(appModule:Express, port:number) {
      appModule.get("/", (req:Request, res:Response) => {
             res.send("Server is working fine")
      })

      appModule.listen(port, ()=> {
           console.log("app is started");
      })
}

bootStrap(app, port);