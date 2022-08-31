import { getProductsBySlice } from '../../../store-data/products'
import ProductCard from '../../../common/ProductCard'

function ProductPopular() {
    return (
        <section className='product product--unset-border'>
            <h3 className='product__heading'>Sản phẩm phổ biến</h3>
            <div className='product-card'>
                {getProductsBySlice(6, 18).map((product, index) => {
                    return (
                        <ProductCard
                            className={'product-card__item'}
                            link={`/san-pham/${product.slug}`}
                            image={product.image01}
                            name={product.name}
                            price={product.price}
                            buttonTitle={'Xem chi tiết'}
                            key={index}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default ProductPopular