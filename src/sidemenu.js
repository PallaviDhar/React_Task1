import React, { Component } from 'react';

class Sidemenu extends Component {
    state = {  }
    render() {
        return (
            <div>
                <h3 >Search</h3>
                <input class="form-control" type="text" placeholder="Search"></input>
                <button className="btn btn-sm btn-danger mt-2" >Search</button>
                <h3 className="mt-5">Select Tags</h3>
                <button className="btn btn-sm btn-primary">Realme</button>
                <button className="btn btn-sm btn-primary m-1">Oppo</button>
                <button className="btn btn-sm btn-primary m-1">Samsung</button>
                <button className="btn btn-sm btn-primary m-1">Apple</button>
                <button className="btn btn-sm btn-primary m-1">Redmi</button>
                <button className="btn btn-sm btn-primary m-1">Vivo</button>
                <button className="btn btn-sm btn-primary m-1">Poco</button>
               <div>
                   <h3 className="mt-5">
                       <label>Select Range</label>
                   </h3>
                   <input type="range" className="form-control-range"></input>
               </div>
            </div>
        );
    }
}

export default Sidemenu;