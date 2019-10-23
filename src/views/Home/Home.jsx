import React, {Component, useState, useEffect} from 'react';
import {Card, CardBody, Col, Row} from "reactstrap";
import db from '../../models/db.js'
import { Link } from 'react-router-dom';

const Home = (props) => {
  const [articlesNumber, setArticlesNumber] = useState(0);
  const [categoriesNumber, setCategoriesNumber] = useState(0);
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    // db.collection("articles").get().then(function(querySnapshot) {
    //   const result = [];
    //   debugger;
    //   querySnapshot.forEach(function(doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     // console.log(doc.id, " => ", doc.data());
    //     result.push({title: doc.id, data: doc.data()})
    //   });
    //   setArticlesList(result);
    // });
  }, []);

  return (
    <div className="animated fadeIn">
      <Row style={{marginTop: 20}}>
        <Col xs="12" sm="6" lg="6">
          <Card className="text-white bg-info">
            <CardBody>
              <div className="text-value">{articlesList.length}</div>
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
      <Row>
        <div>
        {articlesList.map(article => <div><Link to={`/article/${article.title}`}>{article.title}</Link></div>)}
        </div>
      </Row>
    </div>
  );
};

export default Home;
