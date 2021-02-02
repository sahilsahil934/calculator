import React from 'react'

class LowerStruct extends React.Component {

    clickedButton = (value) => {
        this.props.clickedButton(value);
    }

    render () {
        return (
            <table className="table">
                            <tbody>
                                <tr>
                                <td style={{backgroundColor: "#f5f5f5", color: "#757575"}} onClick={() => this.clickedButton('C')}>C</td>
                                <td style={{backgroundColor: "#f5f5f5", color: "#757575"}} onClick={() => this.clickedButton('m')}>+/-</td>
                                <td style={{backgroundColor: "#f5f5f5", color: "#757575"}} onClick={() => this.clickedButton('%')}>%</td>
                                <td style={{backgroundColor: "#3c4b5e", color: "white"}} onClick={() => this.clickedButton('/')}>÷</td>
                                </tr>
                                <tr>
                                <td style={{color: "#757575"}} onClick={() => this.clickedButton(7)}>7</td>
                                <td style={{color: "#757575"}} onClick={() => this.clickedButton(8)}>8</td>
                                <td style={{color: "#757575"}} onClick={() => this.clickedButton(9)}>9</td>
                                <td style={{backgroundColor: "#3c4b5e", color: "white"}} onClick={() => this.clickedButton('*')}>X</td>
                                </tr>
                                <tr>
                                <td style={{color: "#757575"}} onClick={() => this.clickedButton(4)}>4</td>
                                <td style={{color: "#757575"}} onClick={() => this.clickedButton(5)}>5</td>
                                <td style={{color: "#757575"}} onClick={() => this.clickedButton(6)}>6</td>
                                <td style={{backgroundColor: "#3c4b5e", color: "white"}} onClick={() => this.clickedButton('-')}>-</td>
                                </tr>
                                <tr>
                                <td style={{color: "#757575"}} onClick={() => this.clickedButton(1)}>1</td>
                                <td style={{color: "#757575"}} onClick={() => this.clickedButton(2)}>2</td>
                                <td style={{color: "#757575"}} onClick={() => this.clickedButton(3)}>3</td>
                                <td style={{backgroundColor: "#3c4b5e", color: "white"}} onClick={() => this.clickedButton('+')}>+</td>
                                </tr>
                                <tr>
                                <td style={{color: "#757575"}} onClick={() => this.clickedButton(0)}>0</td>
                                <td></td>
                                <td style={{color: "#757575"}}  onClick={() => this.clickedButton('.')}>.</td>
                                <td style={{backgroundColor: "#e7c313", color: "white"}}onClick={() => this.clickedButton('=')}>=</td>
                                </tr>
                            </tbody>
                            </table>
        );
    }
}

export default LowerStruct;