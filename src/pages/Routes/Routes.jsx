import { Routes, Route } from "react-router-dom"
import { About } from "../About/About"
import { Cart } from "../Cart/Cart"
import { Catalog } from "../Catalog/Catalog"
import { Favourite } from "../Favourite/Favourite"
import { Order } from "../Order/Order"
import { Profile } from "../Profile/Profile"
import {Home} from "../Home/Home"
import {Comments} from "../Comments/Comments"
import { Product } from "../Product/Product"

export const RoutesWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/catalog" element={<Catalog/>}/>
      <Route path="/comments" element={<Comments/>}/>
      <Route path="/favourite" element={<Favourite/>}/>
      <Route path="/order" element={<Order/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/product" element={<Product/>}/>
    </Routes>
  )
}
