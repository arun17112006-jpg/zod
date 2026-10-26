const express = require("express");
const { z } = require("zod");

const app = express();

app.use(express({ extended: true }));
app.use(express.json());

const loginSchema = z.object({
  name :z.string().trim().min(2 ,'name must be at least 2 chatrecter'),
  email: z.string() ("Enter valid email").trim().lowerCase(),
  password: z.string().min(6, "Password must be at least 6 characters")
});

app.get("/", (req, res) => {
  res.send(`
    <h2>Sign In</h2>
    <form method="POST" action="/login">
      <input type="email" name="email" placeholder="Email" required />
      <br><br>
      <input type="password" name="password" placeholder="Password" required />
      <br><br>
      <button type="submit">Login</button>
    </form>
  `);
});
