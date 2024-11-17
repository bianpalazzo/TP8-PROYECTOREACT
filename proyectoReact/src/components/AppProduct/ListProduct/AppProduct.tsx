
import { useState } from 'react'
import { FormProduct } from '../FormProduct/FormProduct'
import { Header } from '../Header/Header'
import { ListProducts } from './ListProducts';

interface ItemProduct {
    precio: number;
    imagen: string;
    nombre: string;
}
export const AppProduct = () => {
    const[products, setProdcuts] = useState<ItemProduct[]>([]);
    //console.log(products)//
    const handleAddProduct = (newItem: ItemProduct)=>{
    setProdcuts((prev)=>[... prev, newItem]);
    };
    
return (
    <div>
        <Header/>
        <h2 className='text-center'>Formularios</h2>
        <FormProduct handleAddProduct={handleAddProduct}/>
        <h2 className='text-center'>Productos</h2>
        {products.length >0 ? (
        <ListProducts arrItems={products}/> 
        ) :(
        <h3 className='text-center'> No hay productos</h3>
        )}
    </div>
);
};
