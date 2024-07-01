import express from "express";
import {
  authenticateUser,
  userLogin,
  userLogout,
  userSignUp,
} from "../controllers/Auth.controllers.js";
import AppError from "../utils/appError.js";
import {
  addMembership,
  deleteUploads,
  getModerationProductsforAdmin,
  postProduct,
  uploads,
} from "../controllers/User.Controllers.js";
import { getPlans } from "../controllers/Membership.Controller.js";
import { createDonation } from "../controllers/Donation.Controller.js";
import upload from "../utils/upload.js";

const router = express.Router();

router.route("/login").post(userLogin);
router.route("/authenticate").get(authenticateUser, (req, res, next) => {
  try {
    res.status(200).json({ message: "Access granted to protected route" });
    console.log("Authenticated");
  } catch (err) {
    return next(new AppError("unauthorized", 401));
  }
});
router.route("/signup").post(userSignUp);
router.route("/logout").post(userLogout);

// for membership
router.route("/membership").post(authenticateUser, addMembership);
router.route("/plans").get(getPlans);

// for donation
router.route("/donation/create").post(createDonation);

//user routes

router.route("/addproduct").post(authenticateUser, postProduct);
router.route("/uploads").post(authenticateUser, upload.single("file"), uploads);
router.route("/uploads/:file").delete(authenticateUser, deleteUploads);

// for products
router
  .route("/moderation")
  .get(authenticateUser, getModerationProductsforAdmin);

export default router;
