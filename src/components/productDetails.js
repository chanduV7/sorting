import "../styles/productDetails.scss"
import { v4 as uuid} from "uuid";
export default function ProductDetails({data}){
    console.log(data)
    console.log(uuid())
    return(
        <div className="productDetails-container">
          {
            data &&  data.map((e) => {
                return(
                    <div className="product-card" key ={uuid().split("-")[0]}>
                        <img src={`https://ogami-react.vercel.app/${e.images[1]}`} alt="noimg"/>
                        <p style={{fontSize:"0.3rem"}}>{e.category}</p>
                        <h3 style={{fontSize:"0.3rem"}}>{e.name}</h3>
                        <p style={{fontSize:"0.3rem"}}>{e.price}{`$`}</p>
                    </div>
                )
            })
           }
        </div>
    )
}