import React, { Component } from 'react';
import Card from './card';
import Filter from "./filter";
class Menu extends Component {
    state = {  }
    render() {
        return (
            <div>
                <div className="container-Fluid">
                    <div className='pb-2 border-bottom'>
                        <div id='sortBy'><h5>Sort By</h5></div>
                        <Filter active='true' name='Relevance' href='#' />
                        <Filter active='false' name='Popularity' href='#' />
                        <Filter active='false' name='Price--High to Low' href='#' />
                        <Filter active='false' name='Price--Low to High' href='#' />
                        <Filter active='false' name='Newest First' href='#' />
                    </div><hr></hr>
                    <div className="row">
                        <div className="col-2"><Card pic="https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s10-cardinal-red.jpg" title="Sam sung Galaxy " price="20000"/></div>
                        <div className="col-2"><Card pic="https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2019/03/19/source-img/20190319143430_95255.jpg_500x500.jpg" title="Redmi Note 7 Pro" price="18000"/></div>
                        <div className="col-2"><Card pic="https://static.digit.in/default/deb2162982e36fc9d2f43943d9292f538f73ecac.png?tr=w-1200" title="Oppo A5" price="10000"/></div>
                        <div className="col-2"><Card pic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTU-qXK9nvbysWmfDJsxmHKl4JBF6zcsqJxTQ&usqp=CAU" title="Apple iPhone SE" price="50000"/></div>
                        <div className="col-2"><Card pic="https://www.mobilepriceall.com/wp-content/uploads/2019/09/samsung-galaxy-j7-2017.jpg" title="Sam sung Galaxy" price="20000"/></div>
                        <div className="col-2"><Card pic="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-green-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1566956144838" title="iPhone 11" price="80000"/></div>
                    </div>

                    <div className="row mt-4">
                        <div className="col-2"><Card pic="https://static.digit.in/default/3454384eee5e9e79cc4aacfef58fe0d73a6fcdec.jpeg?tr=1200" title="Poco  X2" price="55000"/></div>

                        <div className="col-2"><Card pic="https://static.digit.in/default/e513b9bf88a289d1f474156c4c3723924dfc1af9.jpeg?tr=1200" title="Oppo A11K" price="13000"/></div>
                        <div className="col-2"><Card pic="https://cdn.techpilipinas.com/wp-content/uploads/2019/06/xiaomi-mi-9t-600x600.jpg" title="Xiaomi Mi 9T" price="90000"/></div>

                        <div className="col-2"><Card pic="https://cdn1.smartprix.com/rx-iz3nnCfxy-w1200-h1200/vivo-u3.jpg" title="Vivo u3" price="30000"/></div>
                        <div className="col-2"><Card pic="https://5.imimg.com/data5/LY/VK/ZG/SELLER-53877097/used-oppo-a3s-500x500.jpg" title="Oppo A3s" price="48000"/></div>
                        <div className="col-2"><Card pic="https://www.gizmochina.com/wp-content/uploads/2019/09/7t-9_1_1-473x473.png" title="One Plus 7T" price="35000"/></div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-2"><Card pic="https://mall365.com.my/wp-content/uploads/2019/08/v15-red-pro-red.jpg" title="Vivo V15" price="37000"/></div>
                        <div className="col-2"><Card pic="https://i01.appmifile.com/webfile/globalimg/in/cms/D05AB2D9-6A4E-0BE2-8B61-C2CC55B9B1C2.jpg" title="Redmi K20" price="21999"/></div>
                        <div className="col-2"><Card pic="https://i0.wp.com/www.mobilebd.co/wp-content/uploads/2020/05/Xiaomi-Poco-M2-Official-image-1-499x499.jpg" title="Poco M2" price="30000"/></div>
                        <div className="col-2"><Card pic="https://www.gizmochina.com/wp-content/uploads/2019/08/Realme-5-2.jpg" title="Realme 5" price="40000"/></div>
                        <div className="col-2"><Card pic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSoXaYGLbXigYaNEccS580mALnD-cI37fdNjQ&usqp=CAU" title="iPhone 7" price="65000"/></div>

                        <div className="col-2"><Card pic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQj01cpx-cgzjBZdrJrX6CjILw6LCLkQqtuCw&usqp=CAU" title="Vivo U1" price="23000"/></div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;