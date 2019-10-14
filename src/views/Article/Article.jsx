import React, {useEffect, useState} from 'react'
import db from '../../models/db.js'
import {Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row} from "reactstrap";

const Article = ({match}) => {
  const {params} = match;
  const {name} = params;
  const [text, setText] = useState('');

  useEffect(() => {
    debugger;
    db.collection("articles")
      .doc(name)
      .get()
      .then(function (doc) {
        // debugger;
        if (doc.exists) {
          console.log("Document data:", doc.data());
          const {text} = doc.data();
          setText(text)
        } else {
          // doc.data() will be undefined in this case
          // debugger;
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" sm="12">
          <Card>
            <CardHeader>
              <strong>{name}</strong>
            </CardHeader>
            <CardBody>
              <div dangerouslySetInnerHTML={{__html: text}}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
};

export default Article;
