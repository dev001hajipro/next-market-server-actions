import { itemDelete } from "@/app/actions/itemDelete";
import { getToken } from "@/app/utils/auth";
import Image from "next/image";
import { itemReadSingle } from "@/app/utils/itemReadSingle";

const DeleteItem = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const item = await itemReadSingle(id);
  const itemDeleteWithId = itemDelete.bind(null, id);
  const payload = await getToken();

  if (item.email === payload?.email) {
    return (
      <div>
        <h1 className="page-title">アイテム削除</h1>
        <form action={itemDeleteWithId}>
          <h2>{item.title}</h2>
          <Image src={item.image} alt={item.title} width={750} height={500} />
          <h3>\{item.price}</h3>
          <p>{item.description}</p>
          <button>削除</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1>アイテム削除</h1>
        <p>このアイテムは削除できません</p>
      </div>
    );
  }
};
export default DeleteItem;
