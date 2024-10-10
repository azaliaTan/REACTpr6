import { products } from '../../data/data'
import { Card } from '../Card/Card'
import style from './Katalog.module.css'



export function Katalog(){
    return(
        
        
           <div className={style.katalog}>
            <h5>Каталог товаров</h5>

            <div className={style.kateg}>
                <p>Категории</p>
                <button className={style.kk}>Все товары</button>
                <button className={style.k}>Шины\колеса</button>
                <button className={style.k}>Масла</button>
                <button className={style.k}>Ароматизаторы</button>
            </div>

            <div className={style.list}>

               {
                products.map((product)=>{
                    return(
                        <Card image={product.img} name={product.name} price={product.price} opis={product.opis} id={product.id} />
                    )
                })
               }
               


            </div>

            <div className={style.qq}>
             
             <button className={style.more}>Загрузить еще товары</button></div>

           </div>



      
       
    )
}