import React, { useState } from 'react';
import { Container ,Row, Col , Input, Button, ListGroup , ListGroupItem,Badge} from 'reactstrap';

export default function Home() {
    const [newItem, setNewItem] = useState('');
    const [todos,newTodo] = useState([]);

    const handleInput = (e) => {
        setNewItem(e.target.value);
        console.log(newItem);
    }

    const handleAdd = () => {
        if(newItem.length > 5) {
            let newKey = Math.floor(Math.random() * 100);
            newTodo(todos.concat({id:newKey,todo:newItem}));
            setNewItem('');
        }else{
            alert('character must higher than 5')
        }
        
    }

    const handleDelete = (id) =>{
        let newData = todos.filter(todo => todo.id !== id);
        newTodo(newData);
    }
    return (
        <Container>
            <h1 className='text-center'>Lists Todo </h1>
            <Row>    
                <Col md={{size:4,offset:3}}>
                <Input type="text" name="newItem"  placeholder="Add New Todo" onChange={handleInput} value={newItem} />
                </Col>
                <Col md={{size:2}}>
                <Button color="warning" onClick={handleAdd} className='btn btn-block'>Add Todo</Button>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col md={{size:6,offset:3}}>
                <ListGroup>
                    {todos.map(item => { 
                    return(
                        <ListGroupItem key={item.id}>{item.todo} <Badge onClick={()=> handleDelete(item.id)} className='pull-right' pill>X</Badge></ListGroupItem>
                        )          
                    }) }
                </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}
