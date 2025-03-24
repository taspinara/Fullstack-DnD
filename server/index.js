import express from "express";
import { config } from "dotenv";
import { Sequelize, DataTypes } from "sequelize";
import corse from "cors";
import db from "./db.js";
config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(corse());

const sequelize = new Sequelize(process.env.DATABASE_URL);

const POST = sequelize.define(
  "POST",
  {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    }
  },
  {
    tableName: "posts",
    timestamps: false,
  }
);

sequelize.sync();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

app.get('/posts', async (req, res) => {
  try {
    const posts = await POST.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const post = await POST.findByPk(id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/posts', async (req, res) => {
  const { author, title, content, cover, date } = req.body;
  try {
    const post = await POST.create({ author, title, content, cover, date });
    res.send({message: 'Post successfully created', post});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/posts/:id', async (req, res) => {
  const { id } = req.params;
  const { author, title, content, cover, date } = req.body;
  try {
    const post = await POST.update(
      { author, title, content, cover, date },
      { where: { id } }
    );
    res.send({ message: 'Post updated' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/posts/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const post = await POST.destroy({ where: { id } });
    res.send({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
