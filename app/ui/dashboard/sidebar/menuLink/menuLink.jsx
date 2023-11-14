'use client'

import Link from 'next/link'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'

const MenuLink = ({item}) => {
    const pathname = usePathname()
    let path = pathname.split('/')
    let active = false

    if (pathname === '/dashboard') {
        if (pathname === item.path) active = true
    } else {
        for (let i = 0; i < path.length; i++) {
            if (i > 1) {
                if ( '/dashboard/' + path[i] === item.path) {
                    active = true
                    break
                }
            }
        }
    }
    

    return (
        <Link href={item.path} className={`${styles.container} ${active ? styles.active : null}`}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default MenuLink