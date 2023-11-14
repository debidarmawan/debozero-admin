import Link from 'next/link'
import Search from '../search/search'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import styles from '@/app/ui/dashboard/products/products.module.css'

const ProductsPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Search placeholder='Search Product' />
                <Link href='/dashboard/products/add'>
                    <button className={styles.addButton}>Add New Product</button>
                </Link>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Stock</td>
                        <td>Created At</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.product}>
                                <Image src='/noproduct.jpg' alt='' width={40} height={40} className={styles.productImage} />
                                iPhone 11 Pro Max 256GB
                            </div>
                        </td>
                        <td>coffee evening coming sky difficulty pony angry mix mail something space few thank loose cutting stone declared transportation driving industry will thing rush chosen</td>
                        <td>$879</td>
                        <td>96</td>
                        <td>8/3/2060</td>
                        <td>
                            <div className={styles.buttons}>
                                <Link href='/dashboard/products/testproduct'>
                                    <button className={`${styles.button} ${styles.view}`}>View</button>
                                </Link>
                                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default ProductsPage