import { userRegister } from "@/app/actions/userRegister";

export const metadata = {
    title: "ユーザー登録",
    description: "ユーザー登録",
}

const Register = () => {
    return (
        <div>
            <h1 className="page-title">ユーザー登録</h1>
            <form action={userRegister}>
                <input type="text" name="name" placeholder="名前" required />
                <input type="email" name="email" placeholder="メールアドレス" required />
                <input type="password" name="password" placeholder="パスワード" required />
                <button>登録</button>
            </form>
        </div>
    )
}
export default Register
