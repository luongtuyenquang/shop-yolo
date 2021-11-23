import React, { useState } from "react"
import numberWithCommas from "../utils/numberWithCommas"
import { deleteCart, updateProductInCart } from "../actions"
import { connect } from "react-redux"
import { toastSuccess } from "../utils/toastify"

function CartItem(props) {
    const { cart, color, size } = props

    const quantityCart = props.quantityCart

    const [quantity, setQuantity] = useState(quantityCart)

    // const updateQuantity = (type) => {
    //     if (type === 'plus') setQuantity(quantity + 1)
    //     else setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)
    // }

    const showSubTotal = (price) => {
        return price * quantity
    }

    // useEffect(() => {
    //     const app = document.querySelector('.App')
    //     const btnDelete = document.querySelectorAll('.btn-delete')
    //     const btnUnDelete = document.querySelectorAll('.btn-unDelete')
    //     const divNotification = document.querySelectorAll('.cart__info__product__item__delete__notification')

    //     btnDelete.forEach((item1, index1) => {
    //         item1.addEventListener('click', (e) => {
    //             e.stopPropagation()
    //             divNotification.forEach((item2, index2) => {
    //                 if (index1 === index2)
    //                     item2.classList.add('show-notification')
    //             })
    //         })
    //     })

    //     app.addEventListener('click', (e) => {
    //         divNotification.forEach((item2, index2) => {
    //             item2.classList.remove('show-notification')
    //         })
    //     })
    //     btnUnDelete.forEach((item1, index1) => {
    //         item1.addEventListener('click', (e) => {
    //             e.stopPropagation()
    //             divNotification.forEach((item2, index2) => {
    //                 if (index1 === index2)
    //                     item2.classList.remove('show-notification')
    //             })
    //         })
    //     })
    // }, [])

    const handleDelete=(param)=>{
        props.onDeleteProductInCart(param)
        toastSuccess('Xóa thành công !', 2000)
    }

    const handleUpdateProductInCart = (cart, quantity) => {
        setQuantity(quantity)
        props.onUpdateProductInCart(cart, quantity)
    }

    return (
        <div className='cart__info__product__item'>
            <div className='cart__info__product__item__group'>
                <img src={cart.image01} alt='' />
                <div className='cart__info__product__item__group__info'>
                    <p>{cart.name}</p>
                    <span>Màu: {color} - Size: {size.toUpperCase()} </span>
                </div>
            </div>
            
            <div className='product-detail__info__group cart__info__product__heading__quantity'>
                <div className='product-detail__info__group__list'>
                    <button className='product-detail__info__group__list__btn btn-size' disabled={quantity === 1 ? 'disabled' : ''} onClick={() => handleUpdateProductInCart(cart, quantity - 1)}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <div className='product-detail__info__group__list__quatity text-size'>{quantity}</div>
                    <button className='product-detail__info__group__list__btn btn-size' onClick={() => handleUpdateProductInCart(cart, quantity + 1)}>
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <div className='cart__info__product__item__price cart__info__product__heading__price'>
                {numberWithCommas(showSubTotal(cart.price))}
                <span className='vnd'>đ</span>
            </div>
            <div className='cart__info__product__item__delete cart__info__product__heading__delete'>
                <span className='btn-delete' onClick={() => handleDelete(cart.id)}>Xóa
                     <div className='cart__info__product__item__delete__notification'>
                         <p>Bạn có chắc chắn muốn xóa</p>
                         {/* <div className='cart__info__product__item__delete__notification__group'>
                            <span className='cart__info__product__item__delete__notification__group__btn btn-unDelete'>Không</span>
                            <span className='cart__info__product__item__delete__notification__group__btn btn-yes' onClick={() => handleDelete(cart.id)}>Có</span>
                        </div> */}
                     </div>
                </span>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: id => {
            dispatch(deleteCart(id))
        },
        onUpdateProductInCart: (cart, quantity) => {
            dispatch(updateProductInCart(cart, quantity))
        }
        

    }
}

export default connect(null, mapDispatchToProps)(React.memo(CartItem))