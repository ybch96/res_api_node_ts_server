import { Router } from "express";

const router = Router()

router.get("/", (req, res) => {
    res.json("Hola desde router")
})

export default router