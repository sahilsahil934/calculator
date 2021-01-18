import React from 'react';
import './structure.css'

class Structure extends React.Component {

    state = {
        data: [1, 2, 3, 'X', 5, '='],
        result: 0,
        oldResult: 0
    };


    historyRecord = () => {
        
        let result = "";
        var iterator = this.state.data.values()
        
        for (let element of iterator) { 
            result = result + String(element) + "  "
        } 

        return result
    }
    render() {

        return (
            <div>
                <div class="container">
                <div class="card">
                    <h1 class="card-header">Calculator</h1>
                    <div class="screen">
                        <p class="card-title">{this.historyRecord()}</p>
                        <h2 class="card-title">10 + 15</h2>
                    </div>
                </div>
                <table class="table">
                    <tbody>
                        <tr>
                        <th>C</th>
                        <td>+/-</td>
                        <td>%</td>
                        <td>/</td>
                        </tr>
                        <tr>
                        <th scope="row">7</th>
                        <td>8</td>
                        <td>9</td>
                        <td>X</td>
                        </tr>
                        <tr>
                        <th>4</th>
                        <td>5</td>
                        <td>6</td>
                        <td>-</td>
                        </tr>
                        <tr>
                        <th>1</th>
                        <td>2</td>
                        <td>3</td>
                        <td>+</td>
                        </tr>
                        <tr>
                        <th>0</th>
                        <td ></td>
                        <td>.</td>
                        <td>=</td>
                        </tr>
                    </tbody>
                    </table>
                </div>                 
            </div>
        );
    }

}

export default Structure;
