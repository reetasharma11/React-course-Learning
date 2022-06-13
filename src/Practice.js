import React from 'react';
import ReactDom from 'reat-dom';



 function Greeting() {
   return (
     <div>
	<h3>hello people</h3>
	<ul> 
	  <li> 
	   <a href='#'>hello world</a>
	  </li>
	</ul>
      </div>
      <div></div>	   
   );
 }

ReactDom.render(<greeing />, document.getElementById('root'));
