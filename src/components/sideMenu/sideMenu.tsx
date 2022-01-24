import Link from 'next/link';

export default function SideMenu() {
  return (
    <aside className="absolute z-50 backdrop-blur left-0 h-screen shadow-2xl p-4 flex flex-col items-start justify-start text-grey-900 dark:text-grey-200 transition duration-500 w-1/6">
      <section className="mb-8 w-full text-center flex flex-row items-center h-10">
        <svg
          className="h-7 w-7 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <h1 className="font-bold text-xl flex-1">windot</h1>
      </section>
      <Link href={'/home'}>home</Link>
      <Link href={'/graph'}>graph</Link>
      <Link href={'/cv'}>cv</Link>
      <Link href={'/skills'}>skills</Link>
      <Link href={'/projects'}>projects</Link>
      <Link href={'/settings'}>settings</Link>
    </aside>
  );
}
