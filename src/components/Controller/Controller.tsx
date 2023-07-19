import { useEffect, useState } from 'react'
import { Container, Menu, Option } from './styles'
import roupas from '../../assets/roupas.json'
import alimentos from '../../assets/alimentos.json'
import Grafic from '../Grafic/Grafic'

export default function Controller() {

    const [category, setCategory] = useState(alimentos)
    const [product, setProduct] = useState(alimentos.product_one)
    const [brand, setBrand] = useState(product.brand_one)


    useEffect(() => {
        setBrand(product.brand_one)
    }, [category, product])

    useEffect(() => {
        setProduct(category.product_one)
    }, [category])

    function handleCategory(e: React.FormEvent<HTMLSelectElement>) {
        const value = (e.target as HTMLInputElement).value
        value === 'roupas' ? setCategory(roupas) : setCategory(alimentos)
    }

    function handleProdut(e: React.FormEvent<HTMLSelectElement>) {
        const value = (e.target as HTMLInputElement).value
        value === 'product_one' ? setProduct(category.product_one) : setProduct(category.product_two)
    }

    function handleBrand(e: React.FormEvent<HTMLSelectElement>) {
        const value = (e.target as HTMLInputElement).value

        if (value === 'brand_one') {
            setBrand(product.brand_one)
        } else if (value === 'brand_two') {
            setBrand(product.brand_two)
        } else {
            setBrand(product.brand_three)
        }
    }

    return (
        <Container>

            <Menu>

                <Option>
                    <span>Categoria:</span>
                    <select name="category" id="category" onChange={handleCategory} placeholder='selecione'>
                        <option value={'alimentos'}>Alimentos</option>
                        <option value={'roupas'}>Roupas</option>
                    </select>
                </Option>

                <Option>
                    <span>Produto:</span>
                    <select name="product" id="product" onChange={handleProdut}>
                        <option value={'product_one'}>{category?.product_one?.title}</option>
                        <option value={'product_two'}>{category?.product_two?.title}</option>
                    </select>
                </Option>


                <Option>
                    <span>Marca:</span>
                    <select name="brand" id="brand" onChange={handleBrand}>
                        <option value={'brand_one'}>{product?.brand_one?.title}</option>
                        <option value={'brand_two'}>{product?.brand_two?.title}</option>
                        <option value={'brand_three'}>{product?.brand_three?.title}</option>
                    </select>
                </Option>

            </Menu>


            <Grafic january={brand.january}
                february={brand.february}
                march={brand.march}
                april={brand.april} />

        </Container>
    )
}