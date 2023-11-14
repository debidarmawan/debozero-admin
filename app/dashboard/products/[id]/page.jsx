import styles from '@/app/ui/dashboard/products/singleProduct/singleProduct.module.css'
import Image from 'next/image'

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src='/astronaut.png' alt='' fill />
                </div>
                iPhone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label>Title</label>
                    <input type="text" name='title' placeholder='iPhone' />
                    <label>Price</label>
                    <input type="number" name='price' placeholder='$419' />
                    <label>Stock</label>
                    <input type="number" name='stock' placeholder='32' />
                    <label>Color</label>
                    <input type="text" name='color' placeholder='Dark Grey' />
                    <label>Size</label>
                    <textarea type="text" name='size' placeholder='256Gb' />
                    <label>Category</label>
                    <select name="category" id="category">
                        <option value='kitchen'>Kitchen</option>
                        <option value='gadget'>Gadget</option>
                    </select>
                    <label>Description</label>
                    <textarea name="description" id="description" cols="30" rows="10" placeholder='term lips declared agree mass birds bill seen tie him round shinning zero movement there pride stiff coat automobile other surface magic office captured'></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage