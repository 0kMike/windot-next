import styles from './header.module.css';
import Link from 'next/link';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';

export default function Header() {
  return (
    <header className="bg-black text-white h-16 flex flex-row justify-between items-center p-2 m-0">
      <section>
        <Link href={'/home'}>windot</Link>
      </section>
      <section></section>
      <section className="flex flex-row-reverse justify-start items-center m-0 p-0">
        <DarkModeToggle />
      </section>
    </header>
  );
}
