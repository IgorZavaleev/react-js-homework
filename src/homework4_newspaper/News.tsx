import React from "react";
import { NewsPresentation } from "./NewsPresentation";
import fetch from "node-fetch";

type NewsProps = {
  id: number;
};

type NewsState = {
  title?: string;
  body?: string;
  img?: string;
  isLoaded: boolean;
  error?: string;
};

const getImg = (): string => {
  const id = Math.floor(Math.random() * 200);
  return `https://picsum.photos/id/${id}/100`;
};

export class News extends React.Component<NewsProps, NewsState> {
  intervalID?: NodeJS.Timer;

  constructor(props: NewsProps) {
    super(props);

    this.state = {
      isLoaded: false,
    };

    this.getNews = this.getNews.bind(this);
    this.setNewImage = this.setNewImage.bind(this);
  }

  getNews(): void {
    this.setState({
      ...this.state,
      isLoaded: false,
    });
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            ...this.state,
            isLoaded: true,
            title: result.title,
            body: result.body,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  setNewImage() {
    this.setState({
      ...this.state,
      img: getImg(),
    });
  }

  componentWillUnmount() {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
  }

  componentDidMount(): void {
    this.intervalID = setInterval(this.setNewImage, 10000);
    this.setNewImage();
    this.getNews();
  }

  shouldComponentUpdate(nextProps: Readonly<NewsProps>): boolean {
    return nextProps.id % 2 === 0;
  }

  componentDidUpdate(prevProps: Readonly<NewsProps>): void {
    if (prevProps.id !== this.props.id) {
      this.getNews();
    }
  }

  componentWillUnmout(): void {
    if (this.intervalID) {
      clearInterval(this.intervalID);
    }
  }

  render(): JSX.Element {
    return (
      <NewsPresentation
        isLoaded={this.state.isLoaded}
        id={this.props.id}
        title={this.state.title}
        img={this.state.img}
        body={this.state.body}
      />
    );
  }
}
