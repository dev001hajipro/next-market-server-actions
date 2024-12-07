import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div>
        <Link href="/">
          <Image src="/header.svg" alt="logo" width={1330} height={148} />
        </Link>
      </div>

      <nav>
        <ul>
            <li>
                <Link href="/user/login">ログイン</Link>
            </li>
            <li>
                <Link href="/user/register">ユーザー新規登録</Link>
            </li>
            <li>
              <Link href="/">ホーム</Link>
            </li>
          <li>
            <Link href="/">商品一覧</Link>
          </li>
          <li>
            <Link href="/item/create">商品登録</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
