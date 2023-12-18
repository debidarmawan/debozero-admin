import Link from 'next/link'
import Search from '../search/search'
import Image from 'next/image'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import styles from '@/app/ui/dashboard/products/products.module.css'
import { fetchProducts } from '@/app/lib/data'
import { deleteProduct } from '@/app/lib/actions'

const ProductsPage = async ({ searchParams }) => {
    const q = searchParams?.q || ''
    const page = searchParams?.page || 1
    const { count, products } = await fetchProducts(q, page)

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
                    {products.length !== 0 && (
                        products.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <div className={styles.product}>
                                        <Image src={product.img || '/noavatar.png'} alt='' width={40} height={40} className={styles.productImage} />
                                        {product.title}
                                    </div>
                                </td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>{product.createdAt?.toString().slice(4, 16)}</td>
                                <td>
                                    <div className={styles.buttons}>
                                        <Link href={`/dashboard/products/${product.id}`}>
                                            <button className={`${styles.button} ${styles.view}`}>
                                                View
                                            </button>
                                        </Link>
                                        <form action={deleteProduct}>
                                            <input type='hidden' name='id' value={(product.id)} />
                                            <button className={`${styles.button} ${styles.delete}`}>
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))
                    
                    )}
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}

export default ProductsPage