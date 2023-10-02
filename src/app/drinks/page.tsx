"use client";

import { BackIcon } from "@/components/icons/back-icon"
import styles from "./page.module.css"
import { Card } from "@/components/card"
import { useRouter } from "next/navigation";

interface DrinkPageProps {
    searchParams:  {
        search: string;
    }
}

export default function DrinkPage({ searchParams } : DrinkPageProps){
    const router = useRouter();

    const handleGoToHome = () => {
        router.push("/");
    }

    return(
        <main className={styles.main}>
            <header className={styles.header}>
                <button className={styles.backBtn} onClick={handleGoToHome}>
                    <BackIcon/>
                </button>
                <h1 className={styles.title}>{searchParams?.search}</h1> 
                <div></div>
            </header>
            <div className={styles.cardList}>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg" title="Caipirinha"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg" title="Caipirinha"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg" title="Caipirinha"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg" title="Caipirinha"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg" title="Caipirinha"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg" title="Caipirinha"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg" title="Caipirinha"/>
                <Card imageUrl="https://www.thecocktaildb.com/images/media/drink/twtbh51630406392.jpg" title="Caipirinha"/>
            </div>
        </main>
    )
}