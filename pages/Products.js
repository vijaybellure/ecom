import Products from "@/components/Products"
import data from '../public/data.json'
function AllProducts(){
    return(
        <>
        <Products data={data["Products"]}/>
        </>
    )
}
export default  AllProducts