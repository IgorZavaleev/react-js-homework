import React, { FC } from "react";

export type NewsPresentationProps = {
  isLoaded: boolean;
  id: number;
  title?: string;
  img?: string;
  body?: string;
};

export const NewsPresentation: FC<NewsPresentationProps> = ({
  id,
  img,
  title,
  body,
  isLoaded,
}) => {
  return (
    <div style={{ border: "thick double #32a1ce" }} data-testid={`news${id}`}>
      {isLoaded ? (
        <>
          <i>Новость №{id} (обновляются только четные ))</i>
          <br />
          <h1 data-testid="news_title">{title}</h1>
          <img
            data-testid="news_image"
            src={img}
            style={{
              margin: "7px",
              width: 100,
              height: 100,
            }}
          />
          <p data-testid="news_body">{body}</p>
        </>
      ) : (
        <i data-testid="news_is_loading">Loading...</i>
      )}
    </div>
  );
};
