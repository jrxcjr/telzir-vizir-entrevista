import React from 'react'
import{render,screen, fireEvent,act, getByDisplayValue, getByPlaceholderText} from '@testing-library/react'
import { MyFormFields } from './MyFormFields'; 
import handleSubmit from './MyFormMethods'
import SelectTypeComponent from './SelectTypeComponent';


const SuccessfulElements = {
    "callDestination": "011",
    "callOrigin": "016",
    "faleMaisPlan": "falemais60",
    "minutes": "200"
}
const SuccessfulElementsOutput = {
    callDestination: "011",
    callOrigin: "016",
    faleMaisPlan: "falemais60",
    minutes: "200"
}

const InvalidCombination = {
"callDestination": "011",
"callOrigin": "016",
"faleMaisPlan": "falemais60",
"minutes": "200"}


describe('submit button', () => {
    // previous tests
  
    it('calls handleSubmit with the correct values', () => {
  
      render(
        <MyFormFields onSubmit={handleSubmit} />
      );
  
      fireEvent.change(<SelectTypeComponent/>, {
        target: { value: '011' }
      });
  
      fireEvent.click(getByDisplayValue('Send the Data!'));
  
      expect(handleSubmit).toHaveBeenCalledWith({
        callOrigin:"011"
      });
    });
  });

//wasn't able to finish the implementation of the test function handleSubmit on time,
//crashing because of the event.preventdefault() function, wasn't able
//to properly pass the mock values to make the function execute as it does when the user is calling it.