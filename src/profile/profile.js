
import PropTypes from "prop-types";



const HandleName=(props)=> {
    const {
        name  ,
        bio,
        profession 
    
    }=props ; 
    return (
    <div>
        {props.alertName('raed')}
        
        {props.children}
    </div> 
    ) 
}

HandleName.defaultProps = {
    bio : 'hard worker ' , 
    profession : 'student'

}
HandleName.propTypes ={
    bio : PropTypes.string.isRequired  , 
    profession : PropTypes.string.isRequired
}
export default HandleName 