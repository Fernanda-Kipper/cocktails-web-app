"use client";

import { useState } from 'react';
import styles from './page.module.css'
import { PrimaryInput } from '../components/primary-input'
import { ButtonPrimary } from '../components/button-primary';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleChange = (value: string) => {
    setSearch(value)
  }

  const handleNavigate = (value: string) => {
    router.push("/drinks?search=" + value);
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>What do you want to drink today?</h1>
      <PrimaryInput value={search} label="Search by your favorite ingredient" onChange={handleChange}/>
      <p className={styles.paragraph}>or</p>
      <ButtonPrimary label="get surprised!" onClick={() => handleNavigate("random")}/>
    </main>
  )
}
