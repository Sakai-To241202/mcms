'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
// import cx from 'classnames';
import styles from './index.module.css';

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  // const open = () => setOpen(true);
  // const close = () => setOpen(false);
  const toggle = () => setOpen(!isOpen);

  return (
    <div>
       {/* <nav className={cx(styles.nav, isOpen && styles.open)}></nav> */}
       <nav className={styles.nav} id="navigation" aria-hidden={!isOpen}>
        <ul className={styles.items}>
          <li>
            <Link href="/banner">banner</Link>
          </li>
          <li>
            <Link href="/website">web site</Link>
          </li>
          <li>
            {/* <Link href="/contact">お問い合わせ</Link> */}
          </li>
        </ul>
        {/* <button className={cx(styles.button, styles.close)} onClick={close}>
          <Image
            src="/close.svg"
            alt="閉じる"
            width={24}
            height={24}
            priority
          />
        </button> */}
      </nav>
      {/* <button className={styles.button} onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} /> */}
      <button
        type="button"
        aria-controls="navigation"
        aria-expanded={isOpen}
        className={styles.button}
        onClick={toggle}
      >
        {isOpen ? (
          <Image src="/close.svg" alt="閉じる" width={24} height={24} />
        ) : (
          <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
        )}
      </button>
    </div>
  );
}
