import Image from 'next/image'
import styles from './transaction.module.css'

const Transaction = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Last Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt='' width={40} height={40} className={styles.userImage} />
                                Ellen Hall
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>3/31/2106</td>
                        <td>$2.293</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt='' width={40} height={40} className={styles.userImage} />
                                Lizzie Owen
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td>7/31/2123</td>
                        <td>$126</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt='' width={40} height={40} className={styles.userImage} />
                                Carl Gray
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>6/29/2055</td>
                        <td>$8</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt='' width={40} height={40} className={styles.userImage} />
                                Loretta Davidson
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                        </td>
                        <td>4/14/2123</td>
                        <td>$767</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt='' width={40} height={40} className={styles.userImage} />
                                Marcus Brown
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>9/27/2023</td>
                        <td>$7.812</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transaction