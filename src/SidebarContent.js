import { useRecoilValue } from 'recoil'
import { drinkData } from './Util/Atoms'
import Button from 'react-bootstrap/Button'
import './SidebarContent.scss'
import { buildOrder } from './Util/Order'
import { SidebarOrderTable } from './SidebarOrderTable'

export const SidebarContent = ({onHandleLink, onHandleCheckout}) => {
    const drinks = useRecoilValue(drinkData)
    let {order, total} = buildOrder(drinks)

    const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
 
    return (
        <div className='SidebarContent'>
            <div className='SidebarContent_NavItem' onClick={() => onHandleLink("Home")}>
                <div>Home</div>
                <div><img width="20px" src="home-icon.png" alt="food" /></div>
            </div>
            <div className='SidebarContent_NavItem' onClick={() => onHandleLink("Drink")}>
                <div>Drink</div>
                <div><img width="20px" src="coffee-icon.jpg" alt="food" /></div>
            </div>
            <div className='SidebarContent_NavItem' onClick={() => onHandleLink("Food")}>
                <div>Food</div>
                <div><img width="20px" src="food-icon.png" alt="food" /></div>
            </div>
            <div className='SidebarContent_NavItem' onClick={() => onHandleLink("Dessert")}>
                <div>Dessert</div>
                <div><img width="30px" src="cake-icon.png" alt="food" /></div>
            </div>
            <hr />
            <div className='SidebarContent_NavItem' onClick={() => onHandleLink("Order History")}>
                <div>Order History</div>
                <div>$$$</div>
            </div>
            <hr />
            <div className='SidebarContent_Title'>
                Your Order
            </div>
            {
                total > 0 && 
                <>
                    <strong>Drinks</strong>
                    <SidebarOrderTable completeOrder={order}/>
                </>
            }
            {
                total === 0 && <> Your cart is empty. </>
            }
            <hr />
            <div className='SidebarContent_Total'>
                Total:<span>{ formatter.format(total)}</span>
            </div>
            <hr />
            <div className='SidebarContent_Checkout'>
                <Button variant="primary" onClick={() => onHandleCheckout(total, order)}>Checkout</Button>
            </div>
        </div>
    )
}