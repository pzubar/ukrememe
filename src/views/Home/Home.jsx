import React, {Component} from 'react';
import {convertToRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import draftToMarkdown from 'draftjs-to-markdown';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {Button, Card, CardBody, CardHeader, Col, Row} from "reactstrap";

class EditorConvertToMarkdown extends Component {
  state = {
    editorState: undefined,
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const {editorState} = this.state;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                Card title
              </CardHeader>
              <CardBody>
                <Editor
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  onEditorStateChange={this.onEditorStateChange}
                />
                <textarea
                  disabled
                  value={editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
                />
              </CardBody>
            </Card>
            <Col col="6" sm="4" md="2" xl className="mb-3 mb-xl-0">
              <Button block color="primary" onClick={() => {
                debugger;
                const a = this.state;

              }}>Save</Button>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditorConvertToMarkdown;
