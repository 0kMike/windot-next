import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white h-16 flex flex-row justify-between items-center p-4 m-0">
      <Link href={'/home'}>
        <div>windot</div>
      </Link>
    </header>
  );
}
