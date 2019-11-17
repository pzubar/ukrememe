import React, {Component, useState, useEffect, useMemo} from 'react';
import {Card, CardBody, CardColumns, CardHeader, Col, Row} from "reactstrap";
import db from '../../models/db.js'
import {Link} from 'react-router-dom';
import {database} from "../../models/db";
import test from './test'
import Highcharts from 'highcharts';
import HighchartsReact from "highcharts-react-official";
import {Bar, Line} from "react-chartjs-2";
import {CustomTooltips} from "@coreui/coreui-plugin-chartjs-custom-tooltips";
import ArticleComponent from "../Article/ArticleComponent";
import Analytics from "./Analytics";

const Home = () => {
  const [articlesList, setArticlesList] = useState([]);
  const [randomArticle, setRandomArticle] = useState(null);
  const [categoriesList, setCategories] = useState({});
  const categoriesNumber = useMemo(() => Object.keys(categoriesList).length, [categoriesList]);
  const articlesNumber = useMemo(() => articlesList.length, [articlesList]);
  const persons = useMemo(() =>
      Object.entries(categoriesList).filter(([, {count, type}]) => count && type === "Персони"),
    [categoriesList]);
  const events = useMemo(() =>
      Object.entries(categoriesList).filter(([, {count, type}]) => count && type === "Події"),
    [categoriesList]);

  useEffect(() => {
    database.ref('/').once('value').then(function (snapshot) {
      const {articles, categories} = snapshot.val();
      const {titles, count} = articles;
      const titlesList = Object.keys(titles);
      const randomTitle = titlesList[Math.floor(Math.random() * titlesList.length)];

      db.collection("articles")
        .doc(randomTitle)
        .get()
        .then(function (doc) {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            const {text, categories} = doc.data();

            setRandomArticle({title: randomTitle, text, categories})
          } else {
            console.log("No such document!");
          }
        });
      setCategories(categories);
      setArticlesList(Object.keys(titles))
    });
    // const {articles, categories} = test;
    // debugger;
    // setArticlesList(Object.keys(articles.titles));
    // setCategories(categories);
    // const categories = {};
    // const result = [];
    // const articles = {};
    // db.collection("categories").get().then(querySnapshot => {
    //   querySnapshot.forEach(function(doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     // console.log(doc.id, " => ", doc.data());
    //     result.push({title: doc.id, data: doc.data()})
    //     categories[doc.id] = {};
    //     categories[doc.id].type = doc.data().type
    //     //doc.data();
    //
    //   });
    // });
    // db.collection("articles").get().then(function(querySnapshot) {
    //   const result = [];
    //   debugger;
    //   querySnapshot.forEach(function(doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     // console.log(doc.id, " => ", doc.data());
    //     result.push({title: doc.id, data: doc.data()});
    //     // if (doc.data().categories)categories
    //     articles[doc.id] = doc.data();
    //   });
    //   debugger;
    //   // let a = result.result
    //   let titles = {};
    //   result.forEach(({title}) => titles[title] = true);
    //   // const titles = result.map(({title}) => title);
    //   debugger;
    //   setArticlesList(result);
    // });
    // debugger;
  }, []);

  return (
    <div className="animated fadeIn">
      <Row style={{marginTop: 20}}>
        <Col xs="12">
          <p><b>Зараз на сайті:</b></p>
        </Col>
        <Col xs="12" sm="3" lg="3">
          <Card className="text-white bg-info">
            <CardBody>
              <div className="text-value">{articlesNumber}</div>
              <div>Статей про меми</div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="3" lg="3">
          <Card className="text-white bg-primary">
            <CardBody>
              <div className="text-value">{categoriesNumber}</div>
              <div>Категорій статей</div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="3" lg="3">
          <Card className="text-white bg-warning">
            <CardBody>
              <div className="text-value">{persons.length}</div>
              <div>Меметичних персон</div>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" sm="3" lg="3">
          <Card className="text-white bg-danger">
            <CardBody>
              <div className="text-value">{events.length}</div>
              <div>Мемних подій</div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      {randomArticle &&
      <Row>
          <p><b>Випадкова стаття</b></p>
        <Col xs="12" sm="6" style={{margin: "0 auto"}}>
          <ArticleComponent
            {...randomArticle}
          />
        </Col>
      </Row>
      }
      <Row>
        <Col>
          <Card>
            <CardHeader>
              Список статей:
            </CardHeader>
            <CardBody style={{columnCount: 3}}>
              {articlesList.map(article => <div className={"article-link"}><Link to={`/article/${article}`}>{article}</Link></div>)}
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Analytics
          categoriesList={categoriesList}
          persons={persons}
          events={events}
        />
      </Row>
    </div>
  );
};

export default Home;
