import React, {useEffect, useState} from 'react'
import {Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row} from "reactstrap";
import {Link} from "react-router-dom";

import db from '../../models/db.js'
import {database} from "../../models/db";

const Categories = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryType, setNewCategoryType] = useState('');

  useEffect(() => {
    // database.ref('/categories/').once('value').then((querySnapshot) => {
    //   debugger;
    //   const categories = {};
    //   querySnapshot.forEach(function (childSnapshot) {
    //     const name = childSnapshot.key;
    //     const {count = 0, type} = childSnapshot.val();
    //     const category = {name, count};
    //
    //     categories[type] = categories[type] ? [...categories[type], category] : [category];
    //   });
    //   debugger;
    //   setIsLoaded(true);
    //   setCategories(categories)
    // })
    //   .catch(function (error) {
    //     console.log("Error getting documents: ", error);
    //   });
  }, []);

  const onSaveButtonClick = () => {
    db.collection("categories")
      .doc(newCategoryName)
      .set({type: newCategoryType})
      .then(function () {
        const newCategories = {
          ...categories,
          [newCategoryType]: categories[newCategoryType]
            ? [...categories[newCategoryType], {name: newCategoryName, count: 0}]
            : [{name: newCategoryName, count: 0}]
        };
        setCategories(newCategories);
        setNewCategoryName('');
        setNewCategoryType('');
      })
      .catch(alert);
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <strong>Категорії</strong>
            </CardHeader>
            <CardBody>
              {!isLoaded && "Завантаження..."}
              {Object.keys(categories).map(type => (
                <div>
                  <h5>{type}:</h5>
                  <div className="">
                    {categories[type].map(({name, count}) => (
                      <>
                        <Link to={`/categories/${name}`}><b>{name}:</b> {count}</Link>
                        <br/>
                      </>
                    ))}
                  </div>
                </div>
              ))}
            </CardBody>
          </Card>
        </Col>
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
      </Row>
    </div>
  )
};

export default Categories;
