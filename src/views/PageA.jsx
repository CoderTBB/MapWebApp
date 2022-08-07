import React, { Component } from "react";

export class PageA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    this.getData();
  }

  getData() {
    let param = {
      page: 0,
      size: 10,
    };
    React.$http.pageAllEls(param).then((res) => {
      console.log(res);
      this.setState({
        list: res.data.content,
      });
    });
  }

  render() {
    return (
      <div>
        <p>PageA</p>
        {this.state.list.map((item, index) => {
          return <div key={index}>{item.companyName}</div>;
        })}
      </div>
    );
  }
}

export default PageA;
