import { Router } from "express";

export default function carroRoutes(controller) {
  const router = Router();

  router.post  ("/carros",     (req, res) => controller.create(req, res));
  router.get   ("/carros",     (req, res) => controller.getAll(req, res));
  router.delete("/carros/:id", (req, res) => controller.delete(req, res));

  return router;
}
