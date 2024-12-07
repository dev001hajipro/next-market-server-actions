import connectDB from "./database";
import { ItemModel } from "./schemaModels";

export const itemReadSingle = async (id: string) => {
  await connectDB();
  const item = await ItemModel.findOne({ _id: id });
  return item;
};

export default itemReadSingle;
