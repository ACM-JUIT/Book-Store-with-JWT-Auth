import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    booktitle: {
      type: String,
      required: true,
      maxLength: 100,
    },
    bookdescription: String,
    price: {
      type: Number,
      required: true,
    },
    authorname: {
      type: String,
      required: true,
    },
    bookdisplayphoto: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
