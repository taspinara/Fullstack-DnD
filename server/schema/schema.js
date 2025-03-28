import { Sequelize, DataTypes } from "sequelize";
import { config } from "dotenv";

config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
});

const POST = sequelize.define(
  "POST",
  {
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Author is required",
        },
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Title is required",
        },
        len: {
          args: [1, 150],
          msg: "Title must be between 1 and 150 characters long",
        },
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Content is required",
        },
        len: {
          args: [1, 500],
          msg: "Content must be between 1 and 500 characters long",
        },
      },
    },
    cover: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Cover is required",
        },
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    tableName: "posts",
    timestamps: false,
  }
);

sequelize.sync();

export default POST;
