import Bill from "../model/bill.js";
import Item from "../model/item.js";
import User from "../model/user.js";
import { errorHandler } from './../utils/error.js';

export const createBillItem = async (req, res, next) => {
  const { productName, productQty, productRate } = req.body;
  if (!productName || !productQty || !productRate) {
    return next(errorHandler(403, "Please provide all required feilds."));
  }
  try {
    const item = await Item.create({
      productName,
      productQty,
      productRate,
    });

    await item.save;

    res.status(200).json({ message: "item created", item });
  } catch (error) {
    next(error);
  }
};
export const getBillItem = async (req, res, next) => {

  try {
    const items = await Item.find({});

    res.status(200).json({ message: "all Items", items });
  } catch (error) {
    next(error);
  }
};

export const deleteItemsInBill= async (req, res, next) => {

  try {
    const items = await Item.deleteMany({});

    res.status(200).json({ message: "deleted all Items", items });
  } catch (error) {
    next(error);
  }
};


export const createBill = async (req, res, next) => {
  try {
    const { id } = req.params;
    const items = await Item.find({});
    const user = await User.findById(id);
    const total = items.reduce((acc, item) => item.productTotal + acc, 0);
    const bill = await Bill.create({
      items,
      user,
      total,
    });

    await bill.save;

    

    res.status(200).json({ message: "bill created", bill });

  } catch (error) {
    next(error);
  }
};
