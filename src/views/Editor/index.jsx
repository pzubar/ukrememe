import React, {useState, useMemo, useEffect} from 'react';
import {convertToRaw, EditorState} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import {Button, Card, CardBody, CardHeader, Col, FormGroup, Input, Label, Row} from "reactstrap";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import ReactTags from 'react-tag-autocomplete'
import db from '../../models/db.js'

const ArticleEditor = (props) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [title, setTitle] = useState('');
  const [categoriesList, setCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const htmlContent = useMemo(() => draftToHtml(convertToRaw(editorState.getCurrentContent())), [editorState]);

  const onSaveButtonClick = () => {
    const categories = categoriesList.map(({id}) => id);

    // TODO: IMPLEMENT func to fetch to db OR create another container for editor (mb second is best)

    db.collection("articles").doc(title).set({
      text: htmlContent,
      categories: categoriesList.length ? categories : undefined
    })
      .then(function () {
        console.log("Document successfully written!");
        props.history.push('/home')
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  const onTitleChange = ({target}) => {
    setTitle(target.value);
  };

  useEffect(() => {
    db.collection("categories")
      .get()
      .then(function (querySnapshot) {
        const allCategories = [];
        querySnapshot.forEach(function (doc) {
          // console.log(doc.id, " => ", doc.data());
          allCategories.push({id: doc.id, name: doc.id})
        });
        setAllCategories(allCategories)
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }, []);

  const handleAddition = (tag) => {
    setCategories([...categoriesList, tag]);
  };

  const handleDelete = (i) => {
    setCategories(categoriesList.filter((tag, index) => index !== i))
  };

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" sm="6">
          <Card>
            <CardHeader>
              Редактор
            </CardHeader>
            <CardBody>
              <Row>
                <Col xs="12">
                  <FormGroup>
                    <Label htmlFor="name">Заголовок</Label>
                    <Input type="text" required value={title}
                           onChange={onTitleChange}/>
                  </FormGroup>
                </Col>
              </Row>
              <Editor
                wrapperClassName="demo-wrapper"
                editorClassName="article-editor"
                onEditorStateChange={setEditorState}
              />
              <div>
                <ReactTags
                  tags={categoriesList}
                  suggestions={allCategories}
                  handleDelete={handleDelete}
                  handleAddition={handleAddition}
                  autofocus={false}
                />
              </div>
            </CardBody>
            <Button block color="primary" disabled={!title || !editorState} onClick={onSaveButtonClick}>
              Зберегти
            </Button>
          </Card>
        </Col>
        <Col xs="12" sm="6">
          <Card>
            <CardHeader>
              Результат
            </CardHeader>
            <CardBody>
              <h1>{title}</h1>
              <div dangerouslySetInnerHTML={{__html: htmlContent}}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ArticleEditor
