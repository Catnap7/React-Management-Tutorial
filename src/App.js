import React, {Component} from 'react';
import './App.css';
import Customer from "./components/Customer";

const customers = [
    {
    'id':1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍길동',
    'birthday': '962122',
    'gender': '남자',
    'job': '대학생'
    },
    {
        'id':2,
        'image': 'https://placeimg.com/64/64/2',
        'name': '이순신',
        'birthday': '921219',
        'gender': '여자',
        'job': '암살자'
    },
    {
        'id':3,
        'image': 'https://placeimg.com/64/64/3',
        'name': '이재용',
        'birthday': '860123',
        'gender': '남자',
        'job': '기업인'
    }
]

class App extends Component{
 render(){
   return(
       <div>
           {
               customers.map(c =>{
                   return(
                       <Customer
                           key={c.id}
                           id={c.id}
                           image={c.image}
                           name={c.name}
                           birthday={c.birthday}
                           gender={c.gender}
                           job={c.job}
                       />
                   )
               })
           }
       </div>
   );
  }
}

export default App;
