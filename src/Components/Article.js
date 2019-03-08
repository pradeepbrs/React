import React from "react";
class Article extends React.Component {
  constructor() {
    super();
    const tit1 = {
      title: "Angels & Demons",
      author: "Dan Brown",
      publisher: "PRH",
      price: 409,
      productid: 2012
    };
    const tit2 = {
      title: "Norse Mythology",
      author: "Neil Gaiman",
      publisher: "BP",
      price: 300,
      productid: 2019
    };
    this.titArr = [tit1, tit2];
  }
  createCard(tit) {
    var note = null;
    if (tit.price < 400) {
      note = <span className="text-info"> - Best Seller</span>;
    }

    return (
      <div key={tit.productid} className="card" style={{ width: 220 }}>
        <div className="card-body">
          <h5 className="card-title text-center">{tit.title}</h5>
          <p className="card-text">
            <span>
              Author: <b>{tit.author}</b>
            </span>
            <br />
            <span>
              Publisher: <b>{tit.publisher}</b>
            </span>
            <br />
            <span>
              Price: <b>{tit.price}</b>
            </span>
            {note}
            <br />
            <br />
            <br />
            <span>Product Id: {tit.productid}</span>
          </p>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3 className="text-center text-primary">Featured Titles</h3>
        {this.titArr.map(tit => {
          return this.createCard(tit);
        })}
      </div>
    );
  }
}
export default Article;
