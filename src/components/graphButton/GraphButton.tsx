import Link from 'next/link';

export default function GraphButton() {
  return (
    <button className="absolute bottom-2 left-2 rounded-full bg-blue transition ease-in-out duration-500 p-1 text-grey-200 shadow-lg hover:bg-blue-400 dark:text-grey-900">
      <Link href={'/graph'}>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      </Link>
    </button>
  );
}
