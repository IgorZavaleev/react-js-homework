import React from "react";
import { News } from "./News";

type NewspaperProps = {
  newsOnPage: number;
};

type NewspaperState = {
  pageNumber: number;
};

export class Newspaper extends React.Component<NewspaperProps, NewspaperState> {
  constructor(props: NewspaperProps) {
    super(props);

    this.state = { pageNumber: 1 };
    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
  }

  nextPage() {
    this.setState({ pageNumber: this.state.pageNumber + 1 });
  }

  prevPage() {
    if (this.state.pageNumber > 1) {
      this.setState({ pageNumber: this.state.pageNumber - 1 });
    }
  }

  render() {
    return (
      <>
        {this.state.pageNumber > 1 && (
          <button onClick={this.prevPage} data-testid="prevPageBtn">
            Previous Page
          </button>
        )}
        <button onClick={this.nextPage} data-testid="nextPageBtn">
          Next Page
        </button>
        <h4>Страница {this.state.pageNumber}</h4>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {Array.from({ length: this.props.newsOnPage }, (v, k) => {
            const newsId =
              (this.state.pageNumber - 1) * this.props.newsOnPage + k + 1;
            return (
              <News
                data-testid={`news${newsId}`}
                id={newsId}
                key={`news${newsId}`}
              />
            );
          })}
        </div>
      </>
    );
  }
}
