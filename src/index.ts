import colors from "colors"
import server from "./server";
import db from "./config/db";
import router from "./router";

async function conection() {
    try {
        await  db.authenticate()
        db.sync()
        console.log(colors.blue("conexion exitosa"))
    } catch (error) {
        console.log(error)
    }
}

conection()

server.use("/", router)

const port = process.env.PORT || 4000

server.listen(port,() => {
    console.log(colors.cyan(`Iniciando en el puerto ${port}`))
})