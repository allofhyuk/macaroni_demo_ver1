import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Section1({ltTitle ="", rtTitle =""}) {
    return(
        <>
            <div>
                <Image 
                src="/image/landing.png"
                alt="landing image"
                layout='fill'                
                className={styles.bg_image}
                priority
                />
                <div>
                    <h1>{ltTitle}</h1>
                    <h1>{rtTitle}</h1>
                </div>
            </div>
        </>
    );
}