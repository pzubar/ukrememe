import React, {useEffect, useState} from 'react'
import db from '../../models/db.js'
import {Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row} from "reactstrap";
import {database} from "../../models/db";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');
  const [newCategoryType, setNewCategoryType] = useState('');

  useEffect(() => {
    // db.collection("categories")
    //   .get()
    database.ref('/categories/').once('value').then((querySnapshot) => {
      debugger;
      const categories = {};
      querySnapshot.forEach(function (childSnapshot) {
        const name = childSnapshot.key;
        const {count, type} = childSnapshot.val();
        const category = {name, count};
        // debugger;
        // if (count) {
        // if (allCategories[type])
        // debugger;
        if (categories.type)
          debugger;
        categories[type] = categories[type] ? [...categories[type], category] : category;
        // allCategories.push({name, count, ...rest})
        // }

      });
      debugger;
      // const categoriesCountMap = allCategories.reduce((acc, {type, count, name}) => {
      //   return {
      //     ...acc,
      //     [type]: acc[type] ? [...acc[type], `${name}: (${count})`] : [`${name}: (${count})`]
      //   }
      // }, {});
      // debugger;
      setCategories(categories)
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
        const newCategories = {
          ...categories,
          [newCategoryType]: categories[newCategoryType]
            ? [...categories[newCategoryType], {name: newCategoryName, count: 0}]
            : [{name: newCategoryName, count: 0}]
        };
        setCategories(newCategories);
        // setCategories([...categories, {type: newCategoryType, name: newCategoryName}]);
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
              {Object.keys(categories).map(type => (
                <div>
                  <h6>{type}:</h6>
                  <div className="">
                    {categories[type].map(({name, count}) => (
                      <span><b>{name}:</b> {count}</span>
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
