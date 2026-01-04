
export const Addition = (props) => {
  
  const num1=props.num1;
  const num2=props.num2;
  
  const res=num1+num2;
  return <>
  <div>
    <h1>Addition</h1>
    <h3>{res}</h3>
  </div>
  
  </>;
}

export default Addition