import { FC } from 'react'
import Image from 'next/image'

import styles from './Cards.module.scss'
import { IProductSingle } from '@/models'
import Link from 'next/link'

const Cards: FC<IProductSingle> = ({product}) => {
return <div className={styles.card}>
        <Link href={`/product/${product.id}`}>{product.title}</Link>
        <Image src={product.image} alt={product.title} width={300} height={350} />
        <p>{product.description}</p>
        <h3>{product.price}</h3>
    </div>
}

export default Cards;