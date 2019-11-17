import React, {useEffect, useState} from 'react'
import db from '../../models/db.js'
import {Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row} from "reactstrap";
import ArticleComponent from "./ArticleComponent";

const Article = ({match}) => {
  const {params} = match;
  const {name} = params;
  const [text, setText] = useState('');
  const [data, setData] = useState(null);

  useEffect(() => {
    db.collection("articles")
      .doc(name)
      .get()
      .then(function (doc) {
        // debugger;
        if (doc.exists) {
          console.log("Document data:", doc.data());
          const data = doc.data();
          debugger
          setText(text);
          setData(data)
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
        <Col xs="12" sm="6" style={{margin: "0 auto"}}>
          {data &&
          <ArticleComponent
            title={name}
            {...data}/>
          }
        </Col>
      </Row>
    </div>
  )
};

export default Article;
