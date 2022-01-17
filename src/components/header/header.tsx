import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex flex-row w-full bg-black">
      <Link href={'/home'}>
        <div>windot</div>
      </Link>
    </header>
  );
}
