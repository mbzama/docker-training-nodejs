"use strict";

/**
 * @swagger
 *  definitions:
 *      User:
 *        properties:
 *          name:
 *            type: string
 *          email:
 *            type: string
 *            description: Email for the user, needs to be unique.
 * 
 */
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

module.exports = User;
