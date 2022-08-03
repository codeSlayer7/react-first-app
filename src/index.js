import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css"
import './index.css';
import App from './components/app/app';



// class WhoAmI extends Component{
//   constructor(props) {
//         super(props);
//         this.state = {
//           years:26
//         };
//         this.nextYear= this.nextYear.bind(this)
//     }
    
//       nextYear(){
//         this.setState(state =>({
//           years: ++state.years
//         }))
//       }

//       render() {
//        let {name, surname, link}=this.props;
//        let {years} = this.state
//        return(
//           <>
          
//          <h1> Name is {name}, surname is {surname} years old is {years} </h1>
//          <a href={link}> my profile</a>
//          <button onClick={this.nextYear}> + </button>

//            </>
//        )
//       }
//   }
  

//     // const WhoAmI = ({name, surname,link}) => {
//     //   return(
//     //     <Fragment>
//     //       <h1>My name is {name} second name {surname}</h1>
//     //         <a href={link}>My profile </a> 
//     //     </Fragment>
//     //   )
//     // }


//   const All=()=>{
//     return(
//       <>
//       <WhoAmI name="lol" surname="loli" link="facebook.com"/>
//       <WhoAmI name="Tonya" surname="loli" link="facebook.com"/>
//       <WhoAmI name="Diana" surname="loli" link="facebook.com"/>
//       </>
//     )
//   }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

