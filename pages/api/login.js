import fs from "fs";
import jwt from "jsonwebtoken";
import axios from "axios";

const SECRET_KEY = "mysecretkey"; // JWT 시크릿 키

export default function postJWTToken(req, res) {
  if (req.method === "POST") {
    const { id, password } = req.body;
    const rawdata = fs.readFileSync("login.json");
    const data = JSON.parse(rawdata);

    const user = data.users.find(
      (user) => user.id === id && user.password === password
    );

    if (user) {
      const { id, grade } = user;
      const token = jwt.sign({ id, grade }, SECRET_KEY);
      res.status(200).json({ token });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
