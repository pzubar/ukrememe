import React, {useState, useEffect} from 'react'
import {Card, CardBody, CardHeader, Col, Row} from "reactstrap";
import ArticleComponent from "../Article/ArticleComponent";
import db from "../../models/db";

export default ({match}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [articlesList, setArticlesList] = useState([]);
  const {params} = match;
  const {name} = params;

  useEffect(() => {
    const articlesRef = db.collection("articles").where("categories", "array-contains", name);
    setIsLoaded(false);
    articlesRef.get()
      .then(function (querySnapshot) {
        const result = [];
        querySnapshot.forEach(function (doc) {
          result.push({title: doc.id, ...doc.data()})
        });
        debugger;
        setArticlesList(result);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
    setIsLoaded(true)
  }, [name]);

  return (
    <Row>
      <Col>
        <Card>
          <CardHeader>
            Статті категорії <strong>{name}</strong>
          </CardHeader>
          <CardBody>
            {!isLoaded && "Завантаження..."}
            {isLoaded && !articlesList.length && "Матеріалів такої категорії поки немає..."}
            <div className="card-columns">
              {articlesList.map(article => (
                <ArticleComponent
                  {...article}
                />
              ))}
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}
