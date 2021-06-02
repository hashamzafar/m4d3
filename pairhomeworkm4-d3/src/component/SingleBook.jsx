
import Card from 'react-bootstrap/Card'

import { card} from 'react-bootstrap'


const SingleBook = (props)=>{
    return(
        <div className='container'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        
        </Card.Body>
      </Card>
      </div>
    )

}
export default SingleBook