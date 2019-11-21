// const React = require('react');
// const ReactDOM = require('react-dom');
import UI from "./test/ui.jsx";

const list = [
  {
    picUrl:
      "//edu-image.nosdn.127.net/89a55f4107cf41ea80ca5d51591b8bc6.jpg?imageView&quality=100",
    linkUrl: "http://www.baidu.com"
  },
  {
    picUrl:
      "//edu-image.nosdn.127.net/3049c923b31a40018117dd72315946ba.jpg?imageView&quality=100",
    linkUrl: "http://www.163.com"
  }
];
ReactDOM.render(<UI list={list}></UI>, document.querySelector("#app"));

const contentNode = document.querySelector("#j-content");
contentNode.innerHTML = "hello world,brizer";
