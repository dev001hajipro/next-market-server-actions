import Image from "next/image";
import Link from "next/link";
import { itemReadSingle } from "../../../utils/itemReadSingle";


// todo: Is correct the context type?
const ReadSingleItem = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<JSX.Element> => {
  const id = (await params).id;
  const item = await itemReadSingle(id);
  return (
    <div className="grid-container-si">
      <title>{item.title}</title>
      <meta name="description" content={item.description} />
      <div>
        <Image src={item.image} alt={item.title} width={750} height={500} />
      </div>
      <div>
        <h1>{item.title}</h1>
        <h2>&yen;{item.price}</h2>
        <hr />
        <p>{item.description}</p>
        <div>
          <Link href={`/item/update/${item._id}`}>更新</Link>
          <Link href={`/item/delete/${item._id}`}>削除</Link>
        </div>
      </div>
    </div>
  );
};



export default ReadSingleItem;
