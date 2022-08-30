import Helmet from '../common/Helmet'
import HomeSlider from '../components/HomeSlider'
import homeSliderData from '../fake-data/home-slider'
import Policy from '../pages/Policy'
import policyCard from '../fake-data/policy-card'
import productData from '../fake-data/products'
import ProductCard from '../common/ProductCard'
import Banner from '../components/Banner'
import BackToTop from '../components/BackToTop'

export default function Home() {
    return (
        <Helmet title='Trang chủ'>
            <HomeSlider data={homeSliderData} control={true} autoRunSlide={true} />

            <div className='container'>
                <section className='policy'>
                    {policyCard.map((item, index) => {
                        return (
                            <Policy
                                name={item.name}
                                description={item.description}
                                icon={item.icon}
                                key={index}
                            />
                        )
                    })}
                </section>
            </div>

            <div className='container container--850'>
                <section className='product'>
                    <h3 className='product__heading product__heading--top'>
                        Top sản phẩm bán chạy trong tuần
                    </h3>
                    <div className='product-card'>
                        {productData.getProducts(4).map((product, index) => {
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
            </div>

            <div className='container container--850'>
                <section className='product mt-0'>
                    <h3 className='product__heading'>Sản phẩm mới</h3>
                    <div className='product-card'>
                        {productData.getProducts(8).map((product, index) => {
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
            </div>

            <div className='container'>
                <Banner />
            </div>

            <div className='container container--850'>
                <section className='product product--unset-border'>
                    <h3 className='product__heading'>Sản phẩm phổ biến</h3>
                    <div className='product-card'>
                        {productData.getProducts(12).map((product, index) => {
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
            </div>
            <BackToTop />
        </Helmet>
    )
}
