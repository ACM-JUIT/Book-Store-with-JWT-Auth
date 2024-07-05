import Listing from "../models/listing.js";

export const addListing = async (req, res, next) => {
  const { booktitle, price, bookdescription, authorname, bookdisplayphoto } =
    req.body;
  const owner = req.user._id;
  if (
    !booktitle ||
    !authorname ||
    !bookdisplayphoto ||
    booktitle.trim() === "" ||
    authorname.trim() === "" ||
    bookdisplayphoto.trim() === ""
  ) {
    return res.status(400).json({ message: "Fill all the required Field" });
  }

  const newListing = new Listing({
    booktitle,
    price,
    bookdescription,
    authorname,
    bookdisplayphoto,
    owner,
  });

  try {
    await newListing.save();
    return res.status(201).json({ message: "Listing added successfully" });
  } catch (error) {
    return next(error);
  }
};
