import React, {useState, useEffect} from 'react';
import {Card, CardBody, CardHeader, Col, Row} from "reactstrap";
import {Link} from "react-router-dom";

export default ({title, text, categories}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSource, setImgSource] = useState('');
  const [html, setHtml] = useState('');

  useEffect(() => {
    const container = document.createElement('div');
    container.innerHTML = text;
    const images = container.getElementsByTagName('img');
    if (images.length && images[0].src) {
      const [image] = images;

      setImgSource(image.getAttribute('src'));
      image.parentNode.removeChild(image);
      setHtml(container.innerHTML)
    } else {
      setHtml(text)
    }
    // return span.textContent || span.innerText;
  }, [text]);

  return (
    <Card className={"article"}>
      {imgSource && <img className="card-img-top" src={imgSource} alt="Card cap"/>}
      <CardBody>
        <h1>{title}</h1>
        {categories.length && (<div>
          <b>Категорії:</b> {categories.map(cat => <span style={{paddingRight: 5}}>
        <Link to={`/categories/${cat}`}>#{cat}</Link></span>)}
        </div>)}
        <div dangerouslySetInnerHTML={{__html: html}}/>
      </CardBody>
    </Card>
  )
};
