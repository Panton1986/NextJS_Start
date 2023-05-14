import { FC } from 'react'

import styles from './Cards.module.scss'

const Cards: FC = (product) => {
    console.log(product)
return <section className={styles.section}>
        <img src={product.image} alt={product.title} />
    </section>
}

export default Cards;