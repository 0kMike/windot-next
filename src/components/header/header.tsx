import Link from 'next/link';
import DarkModeToggle from '../darkModeToggle/DarkModeToggle';

export default function Header() {
  return (
    <header className="bg-none text-white h-16 w-screen flex flex-row justify-between items-center p-2 m-0 z-1">
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
