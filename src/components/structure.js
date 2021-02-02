import React from 'react';
import './structure.css'
import LowerStruct from './LowerStruct'
import UpperStructure from './UpperStructure'

class Structure extends React.Component {

    state = {
        data: [],
        result: 0,     
        number: '',
        operation: '',
        mode: true
    };

    // saving of numbers and operation in the array
    historyRecord = () => {
        
        let result = "";
        var iterator = this.state.data.values()
        
        for (let element of iterator) { 
            result = result + String(element) + "  "
        } 

        return result
    }

    // all operation on clickng the button
    clickedButton = (value) => {

        let num = this.state.number
        // if interger is inputed
        if (Number.isInteger(value) || value === '.')
        {
            num = num + String(value)
            this.setState({ number: num, operation: ''})
        }

        // other than interger is inputed
        else
        {
            if (value === '+' || value === '*' || value === '-' || value === '/' || value === '%')
            {
                let operation = this.state.operation
                if (num !== '')
                {
                    // if new operation is changed
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
                    // if new operation is changed
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
            
            // clearing all data
            else if (value === 'C')
            {
                this.setState({data: [], number: '', operation: '', result: 0, mode: true})
            }

            // on pressing equals
            else if (value === '=')
            {
                
                if (num !== '')
                {
                    var result = this.calculateResult(num)
                    this.setState({data: [],  number: String(result), operation: '', result: result, mode: true})
                                        
                }
              
            }

            // changing number of negative positive
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

    // calculating the result on pressing =
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
                    <UpperStructure state={this.state} historyRecord={this.historyRecord} />
                    <LowerStruct clickedButton={this.clickedButton} />
                </div>                 
        );
    }

}

export default Structure;
