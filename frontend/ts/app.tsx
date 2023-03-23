import {render} from 'react-dom';
import * as React from 'react';

class App extends React.Component{
    render(){
        return(
            <h1>parcel</h1>
        )
    }
}

render(<App/>, document.getElementById("app"));