// import React from "react";

// class App extends React.Component{
// render(){
//   return(
//     <div>
//      <h1>Hello World</h1>
//     </div>
//   )
// }



// }

// export default App;




// ==============================================================================



                    //  ======
                      //  OR
                    //  =======



// import React, {Component} from "react";

// class App extends Component{
// render(){
//   return(
//     <div>
//      <h1>Hello World</h1>
//     </div>
//   )
// }



// }

// export default App;

// ==============================================================================


                    //   ======
                    //     OR
                    //   ======




// import React, { Component } from "react";


// function App(){
// return(
//   <div>
//     <h1>Hello World</h1>
//   </div>
// )



// }
// export default App;


// ==============================================================================


   //                 =======
  //                     OR
  //                  =======



// import React from "react";

// class App extends React.Component{
// render(){
//   let todos = [{text:"ghous"},{text:"basit"}];
//   return(
//     <div>
//     <ul>
// <li>{todos[0].text}</li>
// <li>{todos[1].text}</li>



//       {/* {todos.map((item,index)=>{
//       return <li key = {index}>{item.text}</li>
//       })} */}
//     </ul>
//     </div>
//   )
// }



// }

// export default App;


// ==============================================================================





// import React, { Component } from "react";
// import './App.css'

// class Header extends Component {
//   render(){
//     return (
//      <div className="header">             
//         <h2>Header</h2>
        
//       </div>
//     )
  
//   }
// }


// class Footer extends Component {                 //idhr Footer ka "f" capital likha h ...werna chly ga nhi
//   render(){
//     return (
//       <div className="footer">
//         <h2>Footer</h2>
//       </div>
//     )
  
//   }
// }



// class App extends React.Component{
// render(){
 
//   return(
//     <div>
//    <Header />                    
  
// {/* <h1 style={{color:'red', fontSize: 18}}>Main Component</h1>  */}

// {/* OR */}

// <h1 style={{color:'red', fontSize: "18px"}}>Main Component</h1>

//    <Footer />               {/* ===> idhr   */}       
      
//      </div>
//   )
// }



// }

// export default App;




// ==============================================================================




import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import './App.css'



class App extends React.Component{
render(){
 
  return(
    <div>
        
    <Header />
        
<h1 style={{color:'red', fontSize: "18px"}}>Main Component</h1>   
      
     <Footer />

     </div>
  )
}



}

export default App;
