"use client";
import { userLogin } from "@/app/actions/userLogin";
import { useActionState } from "react";

const initialState = {
  message: "",
};
const Login = () => {
  const [state, formAction, isPending] = useActionState(userLogin, initialState);

  return (
    <div>
      <title>ログイン</title>
      <meta name="description" content="ログインページ" />

      <h1 className="page-title">ログイン</h1>
      <form action={formAction}>
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="パスワード"
          required
        />
        {state && <h3>{state.message}</h3>}
        <button>{isPending ? "処理中..." : "ログイン"}</button>
      </form>
    </div>
  );
};
export default Login;
