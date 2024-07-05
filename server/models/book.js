import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    booktitle: {
      type: String,
      required: true,
      maxLength: 100,
    },
    authorname: {
      type: String,
      required: true,
    },
    genre: {
      type: Array,
    },
    bookdisplayphoto: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdDate",
      updatedAt: "updatedDate",
    },
  }
);

const Book = mongoose.model("Book", bookSchema);

export default Book;
