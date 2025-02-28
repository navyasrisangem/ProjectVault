import axios from "axios";
import { useEffect, useState } from "react";

export function Fakestore() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{ id: 0, title: '', price: 0, category: '', description: '', image: '', rating: { rate: 0, count: 0 } }]);
    const [cartitems, setCartitems] = useState([]);
    const [cartcount, setCartcount] = useState(cartitems.length);

    function LoadCategories() {
        axios.get(`https://fakestoreapi.com/products/categories`)
            .then(response => {
                response.data.unshift("All");
                setCategories(response.data);
            })
    }
    function LoadProducts(url) {
        axios.get(url)
            .then(response => {
                setProducts(response.data);
            })
    }

    useEffect(() => {
        LoadCategories();
        LoadProducts(`https://fakestoreapi.com/products`);
    }, [])

    function handleCategoryChange(e) {
        if (e.target.value === "All") {
            LoadProducts(`https://fakestoreapi.com/products`);
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }

    function handleAddtoCartclick(product) {
        cartitems.push(product);
        setCartcount(cartitems.length);
        alert(`${product.title}\nadded to cart`);
    }

    return (
        <div className="container-fluid">
            <header className="bg-light d-flex justify-content-between p-3 mt-3">
                <div><h3>Fakestore.</h3></div>
                <div className="d-none d-sm-block">
                    <span><a>Home</a></span>
                    <span className="mx-4"><a>Electronics</a></span>
                    <span><a>Jewellery</a></span>
                </div>
                <button className="btn bi bi-cart4 position-relative" data-bs-toggle="modal" data-bs-target="#cart">
                    <span className="badge rounded rounded-circle position-absolute bg-danger">{cartcount}</span>
                </button>
                <div className="modal fade" aria-hidden="true" id="cart">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Your cart items</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                            <div className="modal-body">
                                <table>
                                    <thead>
                                        <tr className="m-2">
                                            <th>Title</th>
                                            <th>Preview</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        cartitems.map(item=>
                                            <tr key={item.id}>
                                               <td>{item.title}</td>
                                               <td><img width='50' height='50'src={item.image}/></td>
                                            </tr>)
                                        }                                         
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="row mt-3">
                <nav className="col-2">
                    <label className="form-label">Select categories</label>
                    <select className="form-select" onChange={handleCategoryChange}>
                        {categories.map(category => <option value={category} key={category}>{category.toUpperCase()}</option>)}
                    </select>
                </nav>
                <main className="col-10 d-flex flex-wrap">
                    {
                        products.map(product =>
                            <div key={product.id} className="card m-3" style={{ width: '250px' }}>
                                <img src={product.image} className="card-img-top p-3" height='130' />
                                <div className="card-header">
                                    {product.title}
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rate</dt>
                                        <dd>{product.rating.rate}<span className="bi bi-star-fill text-success"></span></dd>
                                    </dl>
                                </div>
                                <div className="card-footer text-center">
                                    <button className="btn btn-warning" onClick={()=>handleAddtoCartclick(product)}><span className="bi bi-cart4"></span>Add to cart</button>
                                </div>
                            </div>
                        )
                    }
                </main>
            </section>
        </div>
    )
}