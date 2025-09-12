import { Router } from "express";
import { createProducts } from "./handlers/product";

const router = Router()

router.get("/", (req, res) => {
    res.send("Estas en la pagina principal")
})
router.post("/", createProducts)

export default router