import { v4 as uuidv4 } from "uuid";
import dbConfig from "../config/database.js";

const con = dbConfig.connection;

export const createUser = (req, res) => {
  const { firstName, lastName, age } = req.body;
  const id = uuidv4();
  const sql = `INSERT INTO users (id, firstName, lastName, age) VALUES (?, ?, ?, ?)`;
  con.query(sql, [id, firstName, lastName, age], function (err, result) {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
      return;
    }
    res.send(
      `User with the name ${firstName} ${lastName} added to the database!`
    );
  });
};

export const getUsers = (req, res) => {
  const sql = `SELECT * FROM users;`;
  con.query(sql, function (err, result) {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
      return;
    }
    res.send(result);
  });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM users WHERE id = ?";
  con.query(sql, [id], function (err, result) {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
      return;
    }
    if (result.length === 0) {
      res.status(404).send("User not found");
      return;
    }
    res.send(result[0]);
  });
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM users WHERE id = ?";
  con.query(sql, [id], function (err, result) {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send("User not found");
      return;
    }
    res.send(`User with the id ${id} deleted from the database.`);
  });
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const sql = `UPDATE users SET firstName = ?, lastName = ?, age = ? WHERE id = ?`;
  con.query(sql, [firstName, lastName, age, id], function (err, result) {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send("User not found");
      return;
    }
    res.send(`User with the id ${id} updated in the database.`);
  });
};
