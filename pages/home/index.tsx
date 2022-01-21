import React from 'react';
import GraphButton from '../../src/components/graphButton/GraphButton';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className="z-10 rounded-l backdrop-blur p-8 box-border shadow-2xl flex flex-col items-center justify-start animate-popOut max-w-screen-sm bg-transparentBlack-0.2 dark:bg-transparentWhite-0.2 transition-all duration-500">
        <h1 className="text-2xl font-bold">Hello There!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          volutpat viverra velit, eu ultrices neque consectetur non. Sed
          commodo, nisi ut elementum tempor, felis elit imperdiet tellus, a
          volutpat libero libero sit amet purus. Suspendisse sagittis quam id
          libero pretium venenatis. Etiam ut augue ac augue fringilla
          scelerisque. Pellentesque ultricies ultrices magna sed auctor. Ut
          sodales tellus ac nisl lacinia, eu luctus risus semper. Fusce varius
          varius lectus, quis imperdiet nulla hendrerit vitae.
        </p>
      </div>
      <GraphButton />
    </main>
  );
}
