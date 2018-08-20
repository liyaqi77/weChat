import React from 'react';
import ReactMarkdown from 'react-markdown'
import '../scss/index.css'
export default class Index extends React.Component{
    constructor(){
        super()
        this.state={
          message: '留言板',
          content: '留言内容',
          input: '# This is a header\n\nAnd this is a paragraph'        
        }
   }
    render(){
        return <div><div className="container">
            <div className="textarea">
            <textarea  
           value={this.state.content}
           onChange={this.changeVal.bind(this)}
           ></textarea>
            </div>
           <div className="markdown">
               <img/>
           <ReactMarkdown dangerouslySetInnerHTML source={this.state.content} />
           </div>
        </div>
        <button onClick={this.downClick}>下载</button>
        </div>
    }
    changeVal(e){
     this.setState({
        content: e.target.value
     })
    }
    downClick(){
        window.location.href='http://localhost:8080/lib'
    }
}
