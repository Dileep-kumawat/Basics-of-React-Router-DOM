import { Link, Outlet } from "react-router-dom"

const Product = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center gap-8 p-4">
        <Link to="/product/men">Mens collection</Link>
        <Link to="/product/women">Womens collection</Link>
      </div>
      <h1>Product page</h1>
      <Outlet />
    </div>
  )
}

export default Product
