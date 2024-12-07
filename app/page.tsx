import Link from "next/link";
import connectDB from "./utils/database";
import { ItemModel } from "./utils/schemaModels";
import Image from "next/image";
import { JSX } from "react";

export const dynamic = "force-dynamic"; // Force dynamic rendering.

const itemReadAll = async () => {
  await connectDB();
  const items = await ItemModel.find();
  return items;
};

const ReadAllItems: React.FC<JSX.Element> = async () => {
  const items = await itemReadAll();
  return (
    <div className="grid-container-in">
      {items?.map((item) => (
        <Link href={`item/readsingle/${item._id}`} key={item._id}>
          <Image src={item.image} alt={item.title} width={750} height={500} />
          <div key={item._id}>
            <h2>&yen;{item.price}</h2>
            <h3>{item.title}</h3>
            <p>{item.description.substring(0, 80)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ReadAllItems;
