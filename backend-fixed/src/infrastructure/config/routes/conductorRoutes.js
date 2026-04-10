import { Router } from "express";

export default function conductorRoutes(controller) {
  const router = Router();

  router.post  ("/conductores",     (req, res) => controller.create(req, res));
  router.get   ("/conductores",     (req, res) => controller.getAll(req, res));
  router.delete("/conductores/:id", (req, res) => controller.delete(req, res));

  return router;
}
