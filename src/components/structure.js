import React from 'react';
import './structure.css'

class Structure extends React.Component {

    state = {
        data: [],
        result: 0,     
        number: '',
        operation: '',
        mode: true
    };


    historyRecord = () => {
        
        let result = "";
        var iterator = this.state.data.values()
        
        for (let element of iterator) { 
            result = result + String(element) + "  "
        } 

        return result
    }

    clickedButton = (value) => {

        let num = this.state.number
        if (Number.isInteger(value) || value === '.')
        {
            num = num + String(value)
            this.setState({ number: num, operation: ''})
        }
        else
        {
            if (value === '+' || value === '*' || value === '-' || value === '/' || value === '%')
            {
                let operation = this.state.operation
                if (num !== '')
                {
                    if (operation === '-' || operation === '+' || operation === '/' || operation === '*')
                    {
                        let arr = this.state.data
                        arr.pop()
                        arr.push(num)
                        arr.push(operation)
                        this.setState({data: arr
                            , number: '', operation: value, mode: true})
                    }
                    else
                    {
                        this.setState({data: [...this.state.data, num, value]
                        , number: '', operation: value, mode: true})
                    }
                }  
                else
                {
                    if (operation === '-' || operation === '+' || operation === '/' || operation === '*')
                    {
                        let arr = this.state.data
                        arr.pop()
                        arr.push(value)
                        this.setState({data: arr
                            , number: '', operation: value, mode: true})
                    }
                    else
                    {
                        this.setState({data: [...this.state.data, value]
                        , number: '', operation: value, mode: true})
                    }
                    
                }
               
            }
            
            else if (value === 'C')
            {
                this.setState({data: [], number: '', operation: '', result: 0, mode: true})
            }

            else if (value === '=')
            {
                
                if (num !== '')
                {
                    var result = this.calculateResult(num)
                    this.setState({data: [],  number: String(result), operation: '', result: result, mode: true})
                                        
                }
              
            }

            else if (value === 'm')
            {
                let num = this.state.number
                if (this.state.mode === true)
                {
                    num = '-' + num
                    this.setState({number: num, mode: false})
                }
                else
                {
                    num = num.slice(1); 
                    this.setState({number: num, mode: true})
                }
                
            }
  
        }

    }

    calculateResult = (num) => {

        let result = 0
        var val = this.state.data
        val.push(num)
        var iterator = val.values()
        
        let op = '+'
        for (let element of iterator) { 
            
            if (!isNaN(element))
            {
                if (op === '+')
                {
                    result = result + parseFloat(element);
                }
                else if (op === '-')
                {
                    result = result - parseFloat(element)
                }
                else if (op === '/')
                {
                    result = result / parseFloat(element)
                }
                else if (op === '*')
                {
                    result = result * parseFloat(element)
                }
                else if (op === '%')
                {
                    result = result % parseFloat(element)
                }
            }
            else
            {
                op = element
            }
        } 
       return result
    }


    render() {
        
        return (
            
            <div className="container">
                <div className="card">
                    <h1 className="card-header">Calculator</h1>
                    <div className="screen">
                        <p className="card-title">{this.historyRecord()}</p>
                        <h2 className="card-title">{(this.state.operation === '=') ? this.state.result : this.state.number}</h2>
                    </div>
                </div>
                <table className="table">
                    <tbody>
                        <tr>
                        <th style={{backgroundColor: "lightgrey"}} onClick={() => this.clickedButton('C')}>C</th>
                        <td style={{backgroundColor: "lightgrey"}} onClick={() => this.clickedButton('m')}>+/-</td>
                        <td style={{backgroundColor: "lightgrey"}} onClick={() => this.clickedButton('%')}>%</td>
                        <td style={{backgroundColor: "rgb(91, 98, 106)"}} onClick={() => this.clickedButton('/')}>÷</td>
                        </tr>
                        <tr>
                        <th onClick={() => this.clickedButton(7)}>7</th>
                        <td onClick={() => this.clickedButton(8)}>8</td>
                        <td onClick={() => this.clickedButton(9)}>9</td>
                        <td style={{backgroundColor: "rgb(91, 98, 106)"}} onClick={() => this.clickedButton('*')}>X</td>
                        </tr>
                        <tr>
                        <th onClick={() => this.clickedButton(4)}>4</th>
                        <td onClick={() => this.clickedButton(5)}>5</td>
                        <td onClick={() => this.clickedButton(6)}>6</td>
                        <td style={{backgroundColor: "rgb(91, 98, 106)"}} onClick={() => this.clickedButton('-')}>-</td>
                        </tr>
                        <tr>
                        <th onClick={() => this.clickedButton(1)}>1</th>
                        <td onClick={() => this.clickedButton(2)}>2</td>
                        <td onClick={() => this.clickedButton(3)}>3</td>
                        <td style={{backgroundColor: "rgb(91, 98, 106)"}} onClick={() => this.clickedButton('+')}>+</td>
                        </tr>
                        <tr>
                        <th onClick={() => this.clickedButton(0)}>0</th>
                        <td></td>
                        <td onClick={() => this.clickedButton('.')}>.</td>
                        <td style={{backgroundColor: "yellow"}}onClick={() => this.clickedButton('=')}>=</td>
                        </tr>
                    </tbody>
                    </table>
                </div>                 
        );
    }

}

export default Structure;
