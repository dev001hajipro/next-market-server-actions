import { itemCreate } from "@/app/actions/itemCreate";
import { getToken } from "@/app/utils/auth";

const CreateItem = async () => {
  const payload = await getToken();
  console.log("payload:", payload);

  // if acount is not login, will not allow to create item.
  if (!payload || !payload.email) {
    return (
      <div>
        <h1>ログインしてください</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="page-title">アイテム作成</h1>
      <form action={itemCreate}>
        <input type="text" name="title" placeholder="タイトル" required />
        <input type="text" name="price" placeholder="価格" required />
        <input type="text" name="image" placeholder="画像" required />
        <textarea
          name="description"
          placeholder="商品説明"
          rows={15}
          required
        />
        <input type="hidden" name="email" value={payload.email} />
        <button>作成</button>
      </form>
    </div>
  );
};

export default CreateItem;
