import './Colorcard.css';

const Colorcard=(props) =>{
    return (
      <div className='back'
        style={{
         boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        width:'17%',
        padding:'5px',
        margin:'15px',        
          }}>
        <div  style={{
           
           height:'200px',
           backgroundColor:props.colorCode,        
             }} ></div>
        <h2>{props.colorCode}</h2>
        <span style={{
            fontSize:'20px',
            fontWeight:'500',
            color:props.colorName
        }}>{props.colorName}</span>
      </div>
    );
  }
  
  export default Colorcard;
