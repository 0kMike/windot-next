import { ReactElement } from 'react';

export default function DarkModeToggle(): ReactElement {
  function toggleDarkMode(): void {
    document.documentElement.classList.contains('dark')
      ? document.documentElement.classList.remove('dark')
      : document.documentElement.classList.add('dark');
  }

  return (
    <button
      className="h-full w-full text-inherit bg-none font-medium text-sm p-2.5 text-center inline-flex items-center mr-2 text-grey-900 dark:text-grey-200 hover:scale-125 transition-transform duration-500"
      onClick={toggleDarkMode}>
      <svg className="h-6" viewBox="0 0 20 20" fill="currentColor">
        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
      </svg>
    </button>
  );
}
