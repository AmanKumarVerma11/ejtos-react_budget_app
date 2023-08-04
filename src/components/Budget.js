import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    // eslint-disable-next-line
    const [budget, setBudget] = useState(props.budget);

    // eslint-disable-next-line
    const maxValue = 20000;
    const handleChange = (event) => {
        const value = event.target.value;
        const spending = this.props.spending;
      
        if (value < spending) {
          alert(`Budget cannot be lower than spending.`);
          return;
        }
      
        if (value > maxValue) {
          alert(`Budget cannot be greater than ${maxValue}.`);
          return;
        }
      
        this.props.onBudgetChange(value);
      };
      
      const increaseBudget = () => {
        const value = this.props.budget + 10;
        const spending = this.props.spending;
      
        if (value < spending) {
          alert(`Budget cannot be lower than spending.`);
          return;
        }
      
        if (value > maxValue) {
          alert(`Budget cannot be greater than ${maxValue}.`);
          return;
        }
      
        this.props.onBudgetChange(value);
      };
      
      const decreaseBudget = () => {
        const value = this.props.budget - 10;
    
        const spending = this.props.spending;
      
        if (value < spending) {
          alert(`Budget cannot be lower than spending.`);
          return;
        }
      
        if (value < 0) {
          alert(`Budget cannot be negative.`);
          return;
        }
      
        this.props.onBudgetChange(value);
      };
      
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £<input
            type="number"
            value={this.props.budget}
            onChange={handleChange}
            min="0"
            max={maxValue}
        /></span>
        <button onClick={increaseBudget}>Increase Budget</button>
        <button onClick={decreaseBudget}>Decrease Budget</button>
        </div>
    );
};
export default Budget;