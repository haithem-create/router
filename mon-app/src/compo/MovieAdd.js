import React, {useState} from 'react';
import { Modal,Button } from 'react-bootstrap';

const MovieAdd = ({add}) => {
    const [show, setShow] = useState(false);
    const [newMovie, setnewMovie] = useState([]);

    const handleChange =(e)=>{
        setnewMovie({...newMovie,[e.target.name]:e.target.value})
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button   variant="primary" onClick={handleShow}>
          Add a New Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{display:'flex', flexDirection:'column'}}>
                Title:<input name ='title' onChange={handleChange}/>
                Description:<input name ='description' onChange={handleChange}/>
                PosterUrl:<input name ='posterURL' onChange={handleChange}/>
                Rate:<input name = 'rate' onChange={handleChange}/>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>add(newMovie)}> 
            {/* arrow function () car on a attribut a ajouter */}
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default MovieAdd;