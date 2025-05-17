import { Router } from "express";

import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller.js";
const router = Router();

// Define routes for user operations
router.route("/")
    .get(getAllUsers) // Get all users
    .post(createUser); // Create a new user
router.route("/:id")
    .get(getUserById) // Get a user by ID
    .put(updateUser) // Update a user by ID
    .delete(deleteUser); // Delete a user by ID
// Export the router
export default router;
// This code defines a router for user-related operations in an Express.js application.

