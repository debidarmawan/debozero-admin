import Image from 'next/image'
import styles from './rightbar.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src='/astronaut.png' alt='' fill className={styles.bg} />
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>🔥 Available Now</span>
                    <h3 className={styles.title}>How to use the new version of the admin dashboard ?</h3>
                    <span className={styles.subtitle}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        plain show hung ice sister bus easier lose dress tongue war practical thing were double twenty past won correctly story think whole additional fresh
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.text}>
                    <span className={styles.notification}>🚀 Coming Soon</span>
                    <h3 className={styles.title}>New server actions are available, partial pre-rendering is coming up</h3>
                    <span className={styles.subtitle}>Boost your productivity</span>
                    <p className={styles.desc}>
                        struck kill wall around has neighbor feathers stood disease sharp slow being according coast stand giving him circle himself building sitting impossible note equal
                    </p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar;