import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactMarkdown from 'react-markdown';
 
class App extends React.Component {
  constructor(props) {
    super(props); 
      this.state = {
        text: '# Hello there! Welcome to the Syntaxinator! \n\n## You\'re guaranteed to find every nifty markdown gadget you need here.\n\n### So here\'s just a few fun tricks to get you started.\n\\\n[This cat rockin\' out](https://rb.gy/u2dx7) Look at him **go**!\n\nJust up here is an example of a link code, and **bold** text, for making your point.\nAnd who doesn\'t want that guy on their website\'s front page right?\n\n\\\nI therefore present to you, inline code!! Observe here:\n\n`<p> ⬇ Embed link for a cool cat found below ⬇ </p>`\n\n\\\nAlong with its older brother, the code block!!\n\n    <html>\n\n        <iframe src="https://giphy.com/embed/GeimqsH0TLDt4tScGw">\n\n        </iframe>\n\n        <p>Success!</p>\n\n    </html>\n\n\\\nAll of these elements can be very useful for:\n* Presenting all your data in a concise fashion\n* Including different forms of media\n\n> Thanks to the list items above, and this blockquote here now, we can learn a lot about the uses of html syntax!\n\n\\\nAnd finally, speaking of **different media**...\n\nObserve this magnificent fella...\n![Cool cat with sunglasses](https://c1.wallpaperflare.com/preview/56/76/921/kitten-cat-feline-pets.jpg)\n\n## Thanks for checking this out, and be sure to give a try on your own time!',
      };
      this.handleChange = this.handleChange.bind(this);
  };
  handleChange(event) {
    this.setState({
      text: event.target.value,
    })
  }
  render() {
  return (
    <div className="App">

      <h1>Text Editor and Markdown :D!</h1>

      <div className="top-bottom">

        <TextEditor text={this.state.text} handleChange={this.handleChange} keyDown={this.keyDown}/>
        <Preview text={this.state.text} />

      </div>

    </div>
  );
  }
}

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const text = this.props.text;
    const handleChange = this.props.handleChange;
    const keyDown = this.props.keyDown;
    return (
      <textarea id="editor" rows='10' value={text} onChange={handleChange} onKeyDown={keyDown}></textarea>
    )
  }
};

class Preview extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className='previewWrap'>
        <ReactMarkdown id='preview'>{this.props.text}</ReactMarkdown>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();