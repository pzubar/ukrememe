import React, {useEffect, useState} from 'react'
import db from '../../models/db.js'
import {Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row} from "reactstrap";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryType, setNewCategoryType] = useState('');

  useEffect(() => {
    db.collection("categories")
      .get()
      .then(function (querySnapshot) {
        const allCategories = [];
        querySnapshot.forEach(function (doc) {
          allCategories.push({name: doc.id, ...doc.data()})
        });
        setCategories(allCategories)
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const onSaveButtonClick = () => {
    db.collection("categories")
      .doc(newCategoryName)
      .set({type: newCategoryType})
      .then(function () {
        setCategories([...categories, {type: newCategoryType, name: newCategoryName}]);
        setNewCategoryName('');
        setNewCategoryType('');
      })
      .catch(alert);
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" sm="6">
          <Card>
            <CardHeader>
              <strong>Нова категорія</strong>
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name">Назва категорії</Label>
                    <Input type="text" id="name" value={newCategoryName} placeholder='' required
                           onChange={({target}) => setNewCategoryName(target.value)}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name">Назва категорії</Label>
                    <Input type="text" id="name" value={newCategoryType} placeholder='' required
                           onChange={({target}) => setNewCategoryType(target.value)}/>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Button block color="primary" disabled={!newCategoryName || !newCategoryType}
                        onClick={onSaveButtonClick}>
                  Зберегти
                </Button>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardHeader>
              <strong>Категорії</strong>
            </CardHeader>
            <CardBody>
              {categories.map(({name, type}) => (
                <div>
                  <b>{name}:</b> ({type})
                </div>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
};

export default Categories;
