import React from 'react';
import ChatBot from 'react-native-chatbot';
import {Text} from 'react-native';


export default class chatbot extends React.Component{
    
    render() {
      return ( 
        <ChatBot steps={steps} />    
    );
  }
}
const steps=[
    {
        id:'1',
        message: 'Hi! Welcome to Sri Lanka, would you like me to help you with getting to know our island?',
        trigger: 'aa'
      },
      {
        id: 'aa',
              options: [
                { value: 'Yes', label: 'Yes,Please', trigger: '2' },
                { value: 'No', label: 'No', trigger: '3' },
              ],
      },
      {
        id:'2',
        message: 'Glad to be of assistance, what would you be interested in?',
        trigger: 'bbb',
      },
      {
        id: 'bbb',
              options: [
                { value: 'h1', label: 'Heritage sites', trigger: '4' },
                { value: 'h2', label: 'Coastal locations', trigger: '5' },
                { value: 'h3', label: 'Scenic locations', trigger: '6' },
                { value: 'h4', label: 'Wildlife', trigger: '7' },
              ],
      },
      {
        id: '3',
        message: 'Thank you',
        end: true,
      },
      {
        id:'4',
        message: 'Would you like to know about',
        trigger: 'ccc',
      },
      {
        id: 'ccc',
        options: [
          { value: 'c1', label: 'Our Top 3 locations', trigger: '8' },
          { value: 'c2', label: 'Location of choice', trigger: '6' },
         
        ],
      },
      {
        id:'5',
        message: 'Would you like to know about',
        trigger: 'dd',
      },
      {
        id: 'dd',
        options: [
          { value: 'c1', label: 'Our Top 3 locations', trigger: '4' },
          { value: 'c2', label: 'Location of choice', trigger: '6' },
         
        ],
      },
      {
        id:'6',
        message: 'Would you like to know about',
        trigger: 'ee',
      },
      {
        id: 'ee',
        options: [
          { value: 'c1', label: 'Our Top 3 locations', trigger: '4' },
          { value: 'c2', label: 'Location of choice', trigger: '6' },
         
        ],
      },
      {
        id:'7',
        message: 'Would you like to know about',
        trigger: 'ff',
      },
      {
        id: 'ff',
        options: [
          { value: 'c1', label: 'Our Top 3 locations', trigger: '4' },
          { value: 'c2', label: 'Location of choice', trigger: '6' },
         
        ],
      },
      {
        id: '8',
        message: 'Thank you',
        end: true,
      },
    
]
