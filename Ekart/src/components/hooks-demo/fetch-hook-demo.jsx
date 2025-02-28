import { useFetch }  from "../../../src/custom_hooks/use-fetch";

export function FetchHookDemo() {
    let categories = useFetch("http://fakestoreapi.com/products/categories");
    return (
        <div>
            <h2>categories</h2>
            <ol>
                {
                   categories.map(category=><li key={category}>{category}</li>)
                }                
            </ol>
        </div>
    )
}