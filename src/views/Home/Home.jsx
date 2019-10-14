import React, {Component, useState, useEffect} from 'react';
import {Card, CardBody, Col, Row} from "reactstrap";

const Home = () => {
  const [articlesNumber, setArticlesNumber] = useState(0);
  const [categoriesNumber, setCategoriesNumber] = useState(0);

  return (
    <div className="animated fadeIn">
      <Row style={{marginTop: 20}}>
        <Col xs="12" sm="6" lg="6">
          <Card className="text-white bg-info">
            <CardBody>
              <div className="text-value">{articlesNumber}</div>
              <div>Статей</div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="6" lg="6">
          <Card className="text-white bg-primary">
            <CardBody>
              <div className="text-value">{categoriesNumber}</div>
              <div>Категорій</div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
