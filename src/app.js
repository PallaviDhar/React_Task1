import React, { Component } from 'react';
import Menu from './menu';
import Navbar from './navbar'
import Sidemenu from './sidemenu';

class App extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-3 border-right mt-3"><Sidemenu/></div>
                        <div className="col-9 border-bottom mt-3"><Menu/></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;