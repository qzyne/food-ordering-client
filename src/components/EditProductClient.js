import {React, useEffect, useState} from 'react';
import {Modal, Button} from 'react-bootstrap';
import {editQuantity} from '../services/CartService';

const EditProductClient = (props) => {
    const {show, handleClose, dataProductEdit,} = props;
    const [quantity, setQuantity] = useState('');
    console.log(dataProductEdit);
    const handleEditQuantity = async (e) => {
        e.preventDefault();
        var res = await editQuantity(Number(window.localStorage.getItem('userId')), 
                                        Number(dataProductEdit.product.id), Number(quantity))
        if(res) {
            // console.log(res);
            window.location.reload()
        }
    }
    useEffect(() => {
        if (show === true) {
            setQuantity(dataProductEdit.quantity)
        }
    }, [dataProductEdit])
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Edit Quantity</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div class="form-group">
                            <label>Quantity</label>
                            <input class="form-control" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                        </div>
                    </form>                    
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} >
                    Close
                </Button>
                <Button variant="primary" onClick={handleEditQuantity}>
                    Confirm
                </Button>
                </Modal.Footer>
            </Modal>  
        </div>
    );
};

export default EditProductClient;