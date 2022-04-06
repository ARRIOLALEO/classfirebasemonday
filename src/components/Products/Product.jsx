import {useState,useContext} from 'react'
import {CartContext} from '../../contex/GeneralCart'
import * as actions from '../../contex/actions'
function Product({id,data}){
 
    const {dispachCart}= useContext(CartContext)
    const [qqt,setQtt] = useState(0)
    const hanlderAddToCard = () => {
        console.log("im here")
        dispachCart({type:actions.ADDTOCART,payload:{...data,productID:id,qqt:qqt}})
    }
    return(
        <div>
            <h2>{data.name}</h2>
            <img src={data.img}  width="150px"/>
            <h3>{data.price}</h3>
             <button  onClick={()=>setQtt(prev => prev+ 1)}>+</button><span>{qqt}</span><button onClick={()=>setQtt(prev => prev+ 1)} >-</button><button  onClick={()=> hanlderAddToCard()}>Add To Card</button>
        </div>
    )
}
export  default Product