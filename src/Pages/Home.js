
import React, { useEffect, useState } from 'react'
import "./Home.css"
import Header from '../Components/Header'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipies, searchRecipies } from '../Redux/recipieSlice';
import { addRecipies } from '../Redux/addRecipieSlice';
import { deleteRecipies } from '../Redux/deleteRecipieSlice';
import { editRecipies } from '../Redux/editRecipieSlice';
import Footer from '../Components/Footer';

function Home() {
  const [show, setShow] = useState(false);
  const [selectedRecipie, setSelectedRecipie] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newRecipie, setNewRecipie] = useState({
    recipie: '',
    cusine: '',
    image: '',
    ingredients: '',
    instruction: ''
  });

  const dispatch = useDispatch();

  const recipies = useSelector(state => state.recipie.allRecipies);
  const { loading, error } = useSelector(state => state.recipie);
  const recipieLoading = useSelector(state => state.add.loading);
  const recipieError = useSelector(state => state.add.error);

  const deleteLoading = useSelector(state => state.delete.loading);
  const deleteError = useSelector(state => state.delete.error);

  const editLoading = useSelector(state => state.edit.loading);
  const editError = useSelector(state => state.edit.error);


  const handleClose = () => {
    setShow(false);
    setEditMode(false);
    setSelectedRecipie(null);
    setNewRecipie({
      recipie: '',
      cusine: '',
      image: '',
      ingredients: '',
      instruction: ''
    });
  };

  const handleShow = () => setShow(true);

  const handleShowRecipie = (recipie) => {
    setSelectedRecipie(recipie);
    setShow(true);
    setEditMode(false);
  };

  const setDatas = (e) => {
    const { id, value } = e.target;
    setNewRecipie(prevState => ({ ...prevState, [id]: value }));
  };

  const saveRecipie = () => {
    if (!newRecipie.recipie || !newRecipie.cusine || !newRecipie.image || !newRecipie.ingredients || !newRecipie.instruction) {
      alert('Please fill all the fields.');
      return;
    }
    if(editMode){
      dispatch(editRecipies({ id: selectedRecipie.id, ...newRecipie })).then(() => {
        dispatch(fetchRecipies());
        handleClose();
      });
    } else {
      dispatch(addRecipies(newRecipie));
      dispatch(fetchRecipies());
      handleClose();
    }
  };

  const handleDeleteRecipie = (id) => {
    dispatch(deleteRecipies(id)).then(() => {
      dispatch(fetchRecipies());
      handleClose();
    });
  };

  const handleEditShow = () => {
    setEditMode(true);
    setNewRecipie({
      recipie: selectedRecipie.recipie,
      cusine: selectedRecipie.cusine,
      image: selectedRecipie.image,
      ingredients: selectedRecipie.ingredients,
      instruction: selectedRecipie.instruction
    });
  };

  useEffect(() => {
    dispatch(fetchRecipies());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#f5f5dc" }}>
        <Container>
          <Row>
            <Col lg={6} md={6} className='intro'>
              <h1>Welcome to Flavor<span>Folio</span></h1>
              <p style={{ fontSize: '19px', textAlign: "center" }} className='text-dark'>Flavor<span>Folio</span> is your ultimate recipe organizer. Whether you're a home cook or a professional chef, keep track of all your favorite recipes, ingredients, and culinary creations in one place. Explore new recipes, customize your collection, and enjoy the art of cooking like never before.</p>
              <button onClick={handleShow} className='add-btn'>Add your Recipie</button>
            </Col>
            <Col lg={6} md={6} className='intro-img'>
              <div className="diamond-grid my-5">
                <div className="diamond"><img src="https://i.postimg.cc/MHSk5dtV/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai.jpg" alt="Recipe 1" /></div>
                <div className="diamond"><img src="https://i.postimg.cc/DzRPbzPY/pasta-dish-restaurant-table.jpg" alt="Recipe 2" /></div>
                <div className="diamond"><img src="https://i.postimg.cc/L6H4M3FN/view-delicious-dumplings.jpg" alt="Recipe 3" /></div>
                <div className="diamond"><img src="https://i.postimg.cc/nrvhH33h/crispy-fried-chicken-plate-with-salad-carrot.jpg" alt="Recipe 4" /></div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          {editMode || !selectedRecipie ? (
            <>
              <FloatingLabel controlId="recipie" label="Recipie" className="mb-2">
                <Form.Control name='recipie' type="text" placeholder="Recipie" value={newRecipie.recipie} required onChange={setDatas} />
              </FloatingLabel>
              <FloatingLabel controlId="cusine" label="Cusine" className="mb-2">
                <Form.Control name='cusine' type="text" placeholder="Cusine" value={newRecipie.cusine} required onChange={setDatas} />
              </FloatingLabel>
              <FloatingLabel controlId="image" label="Image" className="mb-2">
                <Form.Control name='image' type="text" placeholder="Cover Image" value={newRecipie.image} required onChange={setDatas} />
              </FloatingLabel>
              <FloatingLabel controlId="ingredients" label="List Ingredients" className="mb-2">
                <Form.Control name='ingredients' as="textarea" placeholder="List ingredients" style={{ height: '100px' }} required value={newRecipie.ingredients} onChange={setDatas} />
              </FloatingLabel>
              <FloatingLabel controlId="instruction" label="List Method of Preparation" className="mb-2">
                <Form.Control name='instruction' as="textarea" placeholder="List Method of Preparation" style={{ height: '100px' }}  value={newRecipie.instruction} onChange={setDatas} />
              </FloatingLabel>
            </>
          ) : (
            <div>
              <Row>
                <Col lg={6}>
                  <img src={selectedRecipie.image} width='100%' alt={selectedRecipie.recipie} />
                  <h4 style={{ textTransform: 'uppercase', color: '#a43107' }} className='text-center mt-2'>{selectedRecipie.recipie}</h4>
                </Col>
                <Col lg={6}>
                  <p style={{ color: 'black', fontSize: '15px' }}>
                    <b>Ingredients</b><br />
                    {selectedRecipie.ingredients}
                  </p>
                </Col>
              </Row>
              <p style={{ color: 'black', fontSize: '15px' }}><b>Method of preparation</b><br />{selectedRecipie.instruction}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          {selectedRecipie && !editMode && (
            <>
              <Button variant="danger" onClick={() => handleDeleteRecipie(selectedRecipie.id)}>
                Delete
              </Button>
              <Button variant="dark" onClick={handleEditShow}>
                Edit
              </Button>
            </>
          )}
          {(editMode || !selectedRecipie) && (
            <Button variant="danger" onClick={saveRecipie}>
              {editMode ? 'Update' : 'Save'}
            </Button>
          )}
         
        </Modal.Footer>
      </Modal>

     

      <Container className='recipies-container'>
      <div>
         <h1 className='text-center my-4' style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>My recipies</h1>
         <div className='container w-50 mb-5' style={{textAlign:'center'}}><input type="text" className='form-control' onChange={(e)=>dispatch(searchRecipies(e.target.value))} placeholder='Search recipie...' /></div>
  </div>
		

      <Row className='m-3'>
           {recipies?.length > 0 && recipies.map(i => (
            <Col lg={3} md={4} sm={6} key={i.id}>
               <Card className='card my-3' style={{ width: '16rem' }}>
                 <Card.Img variant="top" src={i.image} height='180px' />
                <Card.Body>
                   <Card.Title className='text-center' style={{ textTransform: 'uppercase', letterSpacing: '2px', color: '#a43107' }}><b>{i.recipie}</b></Card.Title>
                   <Card.Text className='text-dark'>
                     <p className='text-dark text-center' style={{ fontSize: '17px', letterSpacing: '2px' }}>[{i.cusine}]</p>
                   </Card.Text>
                   <div className='text-center'><button onClick={() => handleShowRecipie(i)} className='card-button'>View recipie</button></div>
                 </Card.Body>
               </Card>
             </Col>
           ))
         
          
          }
         </Row>
      </Container>

      {recipieLoading && <div className='text-center'><i class="fa-solid fs-2 fa-utensils fa-flip"></i></div>}

{recipieError.length > 0 && <h2 className='text-center'>{error}</h2>}

{loading && <div className='text-center'><i class="fa-solid fa-utensils fs-1 fa-flip"></i></div>}
{error.length > 0 && <h2 className='text-center'>{error}</h2>}

<Footer></Footer>
    </div>
  )
}

export default Home;
