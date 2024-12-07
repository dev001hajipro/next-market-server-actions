import { itemUpdate } from "@/app/actions/itemUpdate";
import { getToken } from "@/app/utils/auth";
import { itemReadSingle } from "@/app/utils/itemReadSingle";
import { JSX } from "react";

const UpdateItem = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<JSX.Element> => {
  const id = (await params).id;
  const item = await itemReadSingle(id);
  const itemUpdateWithId = itemUpdate.bind(null, id);
  const payload = await getToken();
  if (item.email === payload?.email) {
    return (
      <div>
        <h1 className="page-title">アイテム更新</h1>
        {item.title}
        <form action={itemUpdateWithId}>
          <input
            defaultValue={item.title}
            type="text"
            name="title"
            placeholder="アイテム名"
            required
          />
          <input
            defaultValue={item.price}
            type="text"
            name="price"
            placeholder="価格"
            required
          />
          <input
            defaultValue={item.image}
            type="text"
            name="image"
            placeholder="画像"
            required
          />
          <textarea
            defaultValue={item.description}
            name="description"
            placeholder="商品説明"
            rows={15}
            required
          />
          <input type="hidden" name="email" value={item.email} />
          <button>更新</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h1>アイテム更新</h1>
        <p>このアイテムは更新できません</p>
      </div>
    );
  }
};

export default UpdateItem;
