import React from 'react'
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <>
      <section
        className="product-single theme1 pt-60"
        style={{ boxSizing: "border-box", paddingTop: "60px" }}
      >
        <div
          className="container"
          style={{
            boxSizing: "border-box",
            width: "100%",
            paddingRight: "calc(1.5rem * .5)",
            paddingLeft: "calc(1.5rem * .5)",
            marginRight: "auto",
            marginLeft: "auto",
            maxWidth: "1320px",
          }}
        >
          <div
            className="row"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexWrap: "wrap",
              marginTop: "calc(-1 * 0)",
              marginRight: "calc(-.5 * 1.5rem)",
              marginLeft: "calc(-.5 * 1.5rem)",
            }}
          >
            <div
              className="col-lg-6 mb-5 mb-lg-0"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(1.5rem * .5)",
                paddingLeft: "calc(1.5rem * .5)",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "50%",
                marginBottom: "0px",
              }}
            >
              <div style={{ boxSizing: "border-box" }}>
                <div
                  className="position-relative"
                  style={{ boxSizing: "border-box", position: "relative" }}
                >
                  <span
                    className="badge badge-danger top-right"
                    style={{
                      boxSizing: "border-box",
                      whiteSpace: "nowrap",
                      borderRadius: "0.375rem",
                      display: "inline-block",
                      verticalAlign: "baseline",
                      padding: "5px",
                      position: "absolute",
                      textAlign: "center",
                      lineHeight: 1,
                      fontSize: "12px",
                      zIndex: 2,
                      fontWeight: 500,
                      textTransform: "capitalize",
                      top: "10px",
                      left: "auto",
                      right: "10px",
                      color: "rgb(255, 255, 255)",
                      backgroundColor: "rgb(107, 63, 79)",
                    }}
                  >
                    New
                  </span>
                </div>
                <div
                  className="product-sync-init mb-20 slick-initialized slick-slider"
                  style={{
                    position: "relative",
                    display: "block",
                    boxSizing: "border-box",
                    userSelect: "none",
                    touchAction: "pan-y",
                    WebkitTapHighlightColor: "transparent",
                    marginBottom: "20px",
                    background: "transparent",
                  }}
                >
                  <div
                    className="slick-list"
                    style={{
                      boxSizing: "border-box",
                      overflow: "hidden",
                      position: "relative",
                      display: "block",
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="slick-track"
                      style={{
                        boxSizing: "border-box",
                        position: "relative",
                        top: "0px",
                        left: "0px",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        transform: "translate3d(0px, 0px, 0px)",
                        opacity: 1,
                        width: "2544px",
                      }}
                    >
                      <div
                        className="single-product slick-slide slick-current slick-active"
                        aria-hidden="false"
                        tabIndex="0"
                        style={{
                          boxSizing: "border-box",
                          cssFloat: "left",
                          height: "450px",
                          minHeight: "1px",
                          display: "block",
                          width: "636px",
                          position: "relative",
                          left: "0px",
                          top: "0px",
                          zIndex: 999,
                          opacity: 1,
                        }}
                      >
                        <div
                          className="product-thumb"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            alt="product-thumb"
                            src="http://127.0.0.1:5500/assets/img/slider/thumb/1.jpg"
                            style={{
                              boxSizing: "border-box",
                              verticalAlign: "middle",
                              transition: "0.3s",
                              maxWidth: "100%",
                              margin: "0px auto",
                              width: "100%",
                              display: "block",
                              cursor:
                                'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABqdJREFUWEe91nlsk+cdB/Cv39N34mDHSQi5Dychh+OoEEEYdKRqu0Gp2lDopTJ1m8QgHNsYXbWOTZUmigqUgFZVrVY6SMcsgUjbUNIWEpLVrARi5yB3QprLcbAT38d7eGqkoU6a8kdt8f77vr/n93l+v+d9nkeCZZ7ddcXKvGT681ytx9Q2nPDy8Uarebnvf8g7yXJBr++qPFr/BHEoFHDgdIvmD8cabW/+kCTLxSwLOHuobOLZR5wZI3YKH9zQvHLqn9azDw3wWl2eboNJ7dhUKqC1O4TPe5jck409Yw8NcPjF4rwnjMxwVaYDrXdZfNmjTj9htk0/NMBrdUZdTYXg+LGRgKU/gsud9OooGXFJJeyvomJ04Oh527l4YP7vGti/01itVYT2VeZIn9tkcKJ3QoBlVDOVk8pqS3T3pU1WVWB8UVIaj5Y8APx6Z4GWpqQHVSyfn6sNbStJ4ah5vxSGTA4zLgIuP4O1RSyudIaxuToRzZ30VFNve5bZDCGWSkgOPl/xZOlK4QwZ9a/KTxZIKS1ikcqGTK6EQCqQpmSg9pfg2ngPXAu3xOoShihOFWGxr8LFdkf6iY9iWxeSt/etsWzbmLXWHxKhFZ3gORZQ+dBO/gwMb0fpGIFU0150Xj/FXx0zn/rT88GDviCLm/fUQotlIavhYvdUTBW4+Galf63WK2dJAr5JA3Q5mejytcP6IwtMng8h/H0B2Rk/R9S0G5cu34HJkAhNQiLauuyBbhefceajAWdMgL/uL7rx0mNP14hRN5zXh5FeVYVR91lckB7Gs4pmEPN9CAULkKXvRZe3CoRnEnqVD90TEsEyqqo5ae6yxAQ4+svic88Zk17gyAgiYQcYVgVVxgqQDAMuEAY13wOZOhl9XgNmx/qRIg9AoaQxbifRMaooONZoHY4JcGRXacOB2uk9oiiBkFgFn38RsrJHoUn7Cdy3fg/eCyhlLP5tG0dWMsBSwFA0A92FT4W/vG1O/Wx3x0JMgL3bjfV/3r74DkIeRJRGeHwu5NTWQpRuxEz7ewAnQQJlR9cEhWRiEmoViT5FBZqVRbzY9Gnm6dNdM7EB6ozFL24M9eUlOBFKXA/RNwMn64YgoZDGlkAioSEXJxBhUjE6PA4iOIdFQcFf+1rc8JdLAzH1/zv40kb0Tn3pF7s2eDYHkx5DNOiGIEYgggZLScBxPJhgD1YoJbjpqYbccR1NVtWVN/7W92QsM/9v7BLg8CvVbx3a6vttRGDA03pQJI2oLBm0MhXMrBkKGQmbuwQL33bC7pV7bo3AGI9t+EEF3n1jS0dd+fg6jYyDKEYRCEUxTD4OKhqEViPB4NAsIvZOpGcbMDYbEdusYf3bH9++H7cK7HmmsGqNMfOGqWiFTEqJIAgKA/fuo6wkHzMjdyCjIyBIGoJEhpB7Eh+2qXacNt+5EDfAdwM1vl7kzc9OUxKcA5pEDUQhCF3OOjiGroNgZCAJEnafHHkrnDjzGf/BH9/vfjVugCMbQVXWloWKCtLIYCAIFm4EpAY455ygZUpo1DzCc/0oLCkFvziClh5iYscRW1bcAIe2Fqo2r5d5HsmLYCqwCoGoAvbRISSlrESU5+B0eVFcvgqCyIBydeI+nw7ztYXC4xdsQ7Eilv6CfTtX67dUMfZ0TQhhtQkSQo75ERt0OQYQBAHX5ChYbQb6rDbUVGdgPqDApSuDe46dt56JC+A3L5VlV1fmjpkKaDR/8i88tbUG9wZHIddnYXF2Gjq9FkqNDuL0p/CxmdBIvbhsoS/vOdm9LS6AAzvLS7ZWuHrVKjXyEmbBZNeh+7YNianZ8C3MgWZkUGmSkUr3g426l3J+YqPcx6/2aFtbwceCWGrBgR3Gqldrw7eKUkQE/W4weS/jdkcrUvLKMD8xCJJmoElOR0pCGJSnExRF4moPgZY7zLrj/7B+HTOgfnv5pl2b+WsV6QKCfg+Y4r2w3mgGq9ZhYWYEikQ95HI5CirWIjTQgLsONfgQh49vqutPXehqiBmw+5nKLT8t9zSt1JPITfJCVv479H/zFQSeg3t+Gik5q7Ew9y1S8yvQ/00LkpQcrLPKke7JoKnh/IgnZsDeOqPOkCV8tT7fXzozzSGtcA04v3PpYup1zkEgSHC0FuGAB+nqKVhG5GO9E9HaeJwHD67lR7aY5KKOf2tDmfALrTxE+0IsRI4EJVVAQoSgV3gw5ZGKbTb6nGsxcuCE+a4rlpn/z2n4/YH276jIIiR4wbBSrFGrkQ2IhN9PTAxOEx08F22Mx+bz/Xz/AY6mxT/6gtKUAAAAAElFTkSuQmCC") 9 1, pointer',
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="single-product slick-slide"
                        aria-hidden="true"
                        tabIndex="-1"
                        style={{
                          boxSizing: "border-box",
                          cssFloat: "left",
                          height: "450px",
                          minHeight: "1px",
                          display: "block",
                          width: "636px",
                          position: "relative",
                          left: "-636px",
                          top: "0px",
                          zIndex: 998,
                          opacity: 0,
                        }}
                      >
                        <div
                          className="product-thumb"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            alt="product-thumb"
                            src="http://127.0.0.1:5500/assets/img/slider/thumb/2.jpg"
                            style={{
                              boxSizing: "border-box",
                              verticalAlign: "middle",
                              transition: "0.3s",
                              maxWidth: "100%",
                              margin: "0px auto",
                              width: "100%",
                              display: "block",
                              cursor:
                                'url("data:image/png;base64,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") 9 1, pointer',
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="single-product slick-slide"
                        aria-hidden="true"
                        tabIndex="-1"
                        style={{
                          boxSizing: "border-box",
                          cssFloat: "left",
                          height: "450px",
                          minHeight: "1px",
                          display: "block",
                          width: "636px",
                          position: "relative",
                          left: "-1272px",
                          top: "0px",
                          zIndex: 998,
                          opacity: 0,
                        }}
                      >
                        <div
                          className="product-thumb"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            alt="product-thumb"
                            src="http://127.0.0.1:5500/assets/img/slider/thumb/3.jpg"
                            style={{
                              boxSizing: "border-box",
                              verticalAlign: "middle",
                              transition: "0.3s",
                              maxWidth: "100%",
                              margin: "0px auto",
                              width: "100%",
                              display: "block",
                              cursor:
                                'url("data:image/png;base64,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") 9 1, pointer',
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="single-product slick-slide"
                        aria-hidden="true"
                        tabIndex="-1"
                        style={{
                          boxSizing: "border-box",
                          cssFloat: "left",
                          height: "450px",
                          minHeight: "1px",
                          display: "block",
                          width: "636px",
                          position: "relative",
                          left: "-1908px",
                          top: "0px",
                          zIndex: 998,
                          opacity: 0,
                        }}
                      >
                        <div
                          className="product-thumb"
                          style={{ boxSizing: "border-box" }}
                        >
                          <img
                            alt="product-thumb"
                            src="http://127.0.0.1:5500/assets/img/slider/thumb/4.jpg"
                            style={{
                              boxSizing: "border-box",
                              verticalAlign: "middle",
                              transition: "0.3s",
                              maxWidth: "100%",
                              margin: "0px auto",
                              width: "100%",
                              display: "block",
                              cursor:
                                'url("data:image/png;base64,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") 9 1, pointer',
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="product-sync-nav single-product slick-initialized slick-slider"
                style={{
                  position: "relative",
                  display: "block",
                  boxSizing: "border-box",
                  userSelect: "none",
                  touchAction: "pan-y",
                  WebkitTapHighlightColor: "transparent",
                  background: "transparent",
                  margin: "0px auto",
                }}
              >
                <div
                  className="slick-list"
                  style={{
                    boxSizing: "border-box",
                    overflow: "hidden",
                    position: "relative",
                    display: "block",
                    transform: "translate3d(0px, 0px, 0px)",
                  }}
                >
                  <div
                    className="slick-track"
                    style={{
                      boxSizing: "border-box",
                      position: "relative",
                      top: "0px",
                      left: "0px",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                      opacity: 1,
                      width: "636px",
                      transform: "translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="single-product slick-slide slick-current slick-active"
                      aria-hidden="false"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        cssFloat: "left",
                        height: "450px",
                        minHeight: "1px",
                        display: "block",
                        padding: "0px 5px",
                        width: "159px",
                      }}
                    >
                      <div
                        className="product-thumb"
                        style={{
                          boxSizing: "border-box",
                          border: "1px solid transparent",
                          borderColor: "rgb(107, 63, 79)",
                        }}
                      >
                        <a
                          href="/#"
                          tabIndex="0"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            color: "inherit",
                            transition: "0.3s",
                            cursor:
                              'url("data:image/png;base64,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") 9 1, pointer',
                          }}
                        >
                          <img
                            alt="product-thumb"
                            src="http://127.0.0.1:5500/assets/img/slider/thumb/1.1.jpg"
                            style={{
                              boxSizing: "border-box",
                              verticalAlign: "middle",
                              transition: "0.3s",
                              maxWidth: "100%",
                              display: "block",
                              width: "100%",
                              cursor:
                                'url("data:image/png;base64,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") 9 1, pointer',
                            }}
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      className="single-product slick-slide slick-active"
                      aria-hidden="false"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        cssFloat: "left",
                        height: "450px",
                        minHeight: "1px",
                        display: "block",
                        padding: "0px 5px",
                        width: "159px",
                      }}
                    >
                      <div
                        className="product-thumb"
                        style={{
                          boxSizing: "border-box",
                          border: "1px solid transparent",
                        }}
                      >
                        <a
                          href="/#"
                          tabIndex="0"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            color: "inherit",
                            transition: "0.3s",
                            cursor:
                              'url("data:image/png;base64,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") 9 1, pointer',
                          }}
                        >
                          <img
                            alt="product-thumb"
                            src="http://127.0.0.1:5500/assets/img/slider/thumb/2.1.jpg"
                            style={{
                              boxSizing: "border-box",
                              verticalAlign: "middle",
                              transition: "0.3s",
                              maxWidth: "100%",
                              display: "block",
                              width: "100%",
                              cursor:
                                'url("data:image/png;base64,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") 9 1, pointer',
                            }}
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      className="single-product slick-slide slick-active"
                      aria-hidden="false"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        cssFloat: "left",
                        height: "450px",
                        minHeight: "1px",
                        display: "block",
                        padding: "0px 5px",
                        width: "159px",
                      }}
                    >
                      <div
                        className="product-thumb"
                        style={{
                          boxSizing: "border-box",
                          border: "1px solid transparent",
                        }}
                      >
                        <a
                          href="/#"
                          tabIndex="0"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            color: "inherit",
                            transition: "0.3s",
                            cursor:
                              'url("data:image/png;base64,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") 9 1, pointer',
                          }}
                        >
                          <img
                            alt="product-thumb"
                            src="http://127.0.0.1:5500/assets/img/slider/thumb/3.1.jpg"
                            style={{
                              boxSizing: "border-box",
                              verticalAlign: "middle",
                              transition: "0.3s",
                              maxWidth: "100%",
                              display: "block",
                              width: "100%",
                              cursor:
                                'url("data:image/png;base64,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") 9 1, pointer',
                            }}
                          />
                        </a>
                      </div>
                    </div>
                    <div
                      className="single-product slick-slide slick-active"
                      aria-hidden="false"
                      tabIndex="0"
                      style={{
                        boxSizing: "border-box",
                        cssFloat: "left",
                        height: "450px",
                        minHeight: "1px",
                        display: "block",
                        padding: "0px 5px",
                        width: "159px",
                      }}
                    >
                      <div
                        className="product-thumb"
                        style={{
                          boxSizing: "border-box",
                          border: "1px solid transparent",
                        }}
                      >
                        <a
                          href="/#"
                          tabIndex="0"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            color: "inherit",
                            transition: "0.3s",
                            cursor:
                              'url("data:image/png;base64,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") 9 1, pointer',
                          }}
                        >
                          <img
                            alt="product-thumb"
                            src="http://127.0.0.1:5500/assets/img/slider/thumb/4.1.jpg"
                            style={{
                              boxSizing: "border-box",
                              verticalAlign: "middle",
                              transition: "0.3s",
                              maxWidth: "100%",
                              display: "block",
                              width: "100%",
                              cursor:
                                'url("data:image/png;base64,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") 9 1, pointer',
                            }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6"
              style={{
                boxSizing: "border-box",
                maxWidth: "100%",
                paddingRight: "calc(1.5rem * .5)",
                paddingLeft: "calc(1.5rem * .5)",
                marginTop: "0",
                flex: "0 0 auto",
                flexShrink: 0,
                width: "50%",
              }}
            >
              <div
                className="single-product-info"
                style={{ boxSizing: "border-box" }}
              >
                <div
                  className="single-product-head"
                  style={{ boxSizing: "border-box" }}
                >
                  <h2
                    className="title mb-20"
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      fontFamily: "Raleway",
                      marginTop: "0px",
                      lineHeight: 1.25,
                      color: "rgb(17, 17, 17)",
                      marginBottom: "20px",
                      fontWeight: 600,
                      fontSize: "30px",
                    }}
                  >
                    Originals Windbreaker Winter Face Cream
                  </h2>
                  <div
                    className="star-content mb-20"
                    style={{ boxSizing: "border-box", marginBottom: "20px" }}
                  >
                    <span
                      className="star-on"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        margin: "0px 1px 0px 0px",
                        color: "rgb(253, 216, 53)",
                        fontWeight: 400,
                        fontSize: "18px",
                      }}
                    >
                      <i
                        className="ion-ios-star"
                        style={{ boxSizing: "border-box" }}
                      />{" "}
                    </span>
                    <span
                      className="star-on"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        margin: "0px 1px 0px 0px",
                        color: "rgb(253, 216, 53)",
                        fontWeight: 400,
                        fontSize: "18px",
                      }}
                    >
                      <i
                        className="ion-ios-star"
                        style={{ boxSizing: "border-box" }}
                      />{" "}
                    </span>
                    <span
                      className="star-on"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        margin: "0px 1px 0px 0px",
                        color: "rgb(253, 216, 53)",
                        fontWeight: 400,
                        fontSize: "18px",
                      }}
                    >
                      <i
                        className="ion-ios-star"
                        style={{ boxSizing: "border-box" }}
                      />{" "}
                    </span>
                    <span
                      className="star-on"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        margin: "0px 1px 0px 0px",
                        color: "rgb(253, 216, 53)",
                        fontWeight: 400,
                        fontSize: "18px",
                      }}
                    >
                      <i
                        className="ion-ios-star"
                        style={{ boxSizing: "border-box" }}
                      />{" "}
                    </span>
                    <span
                      className="star-on"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        margin: "0px 1px 0px 0px",
                        color: "rgb(253, 216, 53)",
                        fontWeight: 400,
                        fontSize: "18px",
                      }}
                    >
                      <i
                        className="ion-ios-star"
                        style={{ boxSizing: "border-box" }}
                      />{" "}
                    </span>
                    <a
                      id="write-comment"
                      href="http://127.0.0.1:5500/single-product.html#"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "inherit",
                        transition: "0.3s",
                        fontSize: "15px",
                        fontWeight: 400,
                        cursor:
                          'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABqdJREFUWEe91nlsk+cdB/Cv39N34mDHSQi5Dychh+OoEEEYdKRqu0Gp2lDopTJ1m8QgHNsYXbWOTZUmigqUgFZVrVY6SMcsgUjbUNIWEpLVrARi5yB3QprLcbAT38d7eGqkoU6a8kdt8f77vr/n93l+v+d9nkeCZZ7ddcXKvGT681ytx9Q2nPDy8Uarebnvf8g7yXJBr++qPFr/BHEoFHDgdIvmD8cabW/+kCTLxSwLOHuobOLZR5wZI3YKH9zQvHLqn9azDw3wWl2eboNJ7dhUKqC1O4TPe5jck409Yw8NcPjF4rwnjMxwVaYDrXdZfNmjTj9htk0/NMBrdUZdTYXg+LGRgKU/gsud9OooGXFJJeyvomJ04Oh527l4YP7vGti/01itVYT2VeZIn9tkcKJ3QoBlVDOVk8pqS3T3pU1WVWB8UVIaj5Y8APx6Z4GWpqQHVSyfn6sNbStJ4ah5vxSGTA4zLgIuP4O1RSyudIaxuToRzZ30VFNve5bZDCGWSkgOPl/xZOlK4QwZ9a/KTxZIKS1ikcqGTK6EQCqQpmSg9pfg2ngPXAu3xOoShihOFWGxr8LFdkf6iY9iWxeSt/etsWzbmLXWHxKhFZ3gORZQ+dBO/gwMb0fpGIFU0150Xj/FXx0zn/rT88GDviCLm/fUQotlIavhYvdUTBW4+Galf63WK2dJAr5JA3Q5mejytcP6IwtMng8h/H0B2Rk/R9S0G5cu34HJkAhNQiLauuyBbhefceajAWdMgL/uL7rx0mNP14hRN5zXh5FeVYVR91lckB7Gs4pmEPN9CAULkKXvRZe3CoRnEnqVD90TEsEyqqo5ae6yxAQ4+svic88Zk17gyAgiYQcYVgVVxgqQDAMuEAY13wOZOhl9XgNmx/qRIg9AoaQxbifRMaooONZoHY4JcGRXacOB2uk9oiiBkFgFn38RsrJHoUn7Cdy3fg/eCyhlLP5tG0dWMsBSwFA0A92FT4W/vG1O/Wx3x0JMgL3bjfV/3r74DkIeRJRGeHwu5NTWQpRuxEz7ewAnQQJlR9cEhWRiEmoViT5FBZqVRbzY9Gnm6dNdM7EB6ozFL24M9eUlOBFKXA/RNwMn64YgoZDGlkAioSEXJxBhUjE6PA4iOIdFQcFf+1rc8JdLAzH1/zv40kb0Tn3pF7s2eDYHkx5DNOiGIEYgggZLScBxPJhgD1YoJbjpqYbccR1NVtWVN/7W92QsM/9v7BLg8CvVbx3a6vttRGDA03pQJI2oLBm0MhXMrBkKGQmbuwQL33bC7pV7bo3AGI9t+EEF3n1jS0dd+fg6jYyDKEYRCEUxTD4OKhqEViPB4NAsIvZOpGcbMDYbEdusYf3bH9++H7cK7HmmsGqNMfOGqWiFTEqJIAgKA/fuo6wkHzMjdyCjIyBIGoJEhpB7Eh+2qXacNt+5EDfAdwM1vl7kzc9OUxKcA5pEDUQhCF3OOjiGroNgZCAJEnafHHkrnDjzGf/BH9/vfjVugCMbQVXWloWKCtLIYCAIFm4EpAY455ygZUpo1DzCc/0oLCkFvziClh5iYscRW1bcAIe2Fqo2r5d5HsmLYCqwCoGoAvbRISSlrESU5+B0eVFcvgqCyIBydeI+nw7ztYXC4xdsQ7Eilv6CfTtX67dUMfZ0TQhhtQkSQo75ERt0OQYQBAHX5ChYbQb6rDbUVGdgPqDApSuDe46dt56JC+A3L5VlV1fmjpkKaDR/8i88tbUG9wZHIddnYXF2Gjq9FkqNDuL0p/CxmdBIvbhsoS/vOdm9LS6AAzvLS7ZWuHrVKjXyEmbBZNeh+7YNianZ8C3MgWZkUGmSkUr3g426l3J+YqPcx6/2aFtbwceCWGrBgR3Gqldrw7eKUkQE/W4weS/jdkcrUvLKMD8xCJJmoElOR0pCGJSnExRF4moPgZY7zLrj/7B+HTOgfnv5pl2b+WsV6QKCfg+Y4r2w3mgGq9ZhYWYEikQ95HI5CirWIjTQgLsONfgQh49vqutPXehqiBmw+5nKLT8t9zSt1JPITfJCVv479H/zFQSeg3t+Gik5q7Ew9y1S8yvQ/00LkpQcrLPKke7JoKnh/IgnZsDeOqPOkCV8tT7fXzozzSGtcA04v3PpYup1zkEgSHC0FuGAB+nqKVhG5GO9E9HaeJwHD67lR7aY5KKOf2tDmfALrTxE+0IsRI4EJVVAQoSgV3gw5ZGKbTb6nGsxcuCE+a4rlpn/z2n4/YH276jIIiR4wbBSrFGrkQ2IhN9PTAxOEx08F22Mx+bz/Xz/AY6mxT/6gtKUAAAAAElFTkSuQmCC") 9 1, pointer',
                      }}
                    >
                      <span
                        className="ms-2"
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          marginRight: "6px",
                          cursor:
                            'url("data:image/png;base64,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") 9 1, pointer',
                          marginLeft: "0.5rem",
                        }}
                      >
                        <i
                          className="far fa-comment-dots"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            WebkitFontSmoothing: "antialiased",
                            display: "inline-block",
                            fontStyle: "normal",
                            textRendering: "auto",
                            lineHeight: 1,
                            fontWeight: 400,
                            fontFamily: '"Font Awesome 5 Free"',
                          }}
                        />
                      </span>
                      {"Read reviews"}
                      <span
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          marginRight: "6px",
                          cursor:
                            'url("data:image/png;base64,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") 9 1, pointer',
                        }}
                      >
                        (1)
                      </span>
                    </a>
                    <a
                      href="http://127.0.0.1:5500/single-product.html#"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        color: "inherit",
                        transition: "0.3s",
                        fontSize: "15px",
                        fontWeight: 400,
                        cursor:
                          'url("data:image/png;base64,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") 9 1, pointer',
                      }}
                    >
                      <span
                        className="edite"
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          marginRight: "6px",
                          cursor:
                            'url("data:image/png;base64,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") 9 1, pointer',
                        }}
                      >
                        <i
                          className="far fa-edit"
                          style={{
                            boxSizing: "border-box",
                            fontVariant: "normal",
                            WebkitFontSmoothing: "antialiased",
                            display: "inline-block",
                            fontStyle: "normal",
                            textRendering: "auto",
                            lineHeight: 1,
                            fontWeight: 400,
                            fontFamily: '"Font Awesome 5 Free"',
                          }}
                        />
                      </span>
                      {`Write a
               review`}
                    </a>
                  </div>
                </div>
                <div
                  className="product-body mb-40"
                  style={{ boxSizing: "border-box", marginBottom: "40px" }}
                >
                  <div
                    className="d-flex align-items-center mb-30"
                    style={{
                      boxSizing: "border-box",
                      marginBottom: "30px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      className="product-price me-2"
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        fontWeight: 700,
                        fontSize: "16px",
                        color: "rgb(17, 17, 17)",
                        marginRight: "0.5rem",
                      }}
                    >
                      <del
                        className="del"
                        style={{ boxSizing: "border-box", marginRight: "2px" }}
                      >
                        $23.90
                      </del>
                      <span
                        className="onsale"
                        style={{
                          boxSizing: "border-box",
                          display: "inline-block",
                          color: "rgb(107, 63, 79)",
                        }}
                      >
                        $21.51
                      </span>
                    </span>
                    <span
                      className="badge position-static bg-dark rounded-0"
                      style={{
                        boxSizing: "border-box",
                        whiteSpace: "nowrap",
                        display: "inline-block",
                        color: "#fff",
                        verticalAlign: "baseline",
                        padding: "5px",
                        textAlign: "center",
                        lineHeight: 1,
                        fontSize: "12px",
                        zIndex: 2,
                        fontWeight: 500,
                        textTransform: "capitalize",
                        position: "static",
                        borderRadius: "0px",
                        backgroundColor: "rgb(17, 17, 17)",
                      }}
                    >
                      Save 10%
                    </span>
                  </div>
                  <p
                    style={{
                      boxSizing: "border-box",
                      margin: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                      lineHeight: 1.715,
                    }}
                  >{`Block out the haters with the fresh adidas® Originals Kaval
Windbreaker Face Cream.`}</p>
                  <ul
                    style={{
                      boxSizing: "border-box",
                      padding: "0px",
                      margin: "0px",
                      paddingLeft: "0px",
                      marginTop: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    <li style={{ boxSizing: "border-box", listStyle: "none" }}>
                      Part of the Kaval Collection.
                    </li>
                    <li
                      style={{ boxSizing: "border-box", listStyle: "none" }}
                    >{`Regular fit is eased, but not sloppy, and perfect for any
activity.`}</li>
                    <li
                      style={{ boxSizing: "border-box", listStyle: "none" }}
                    >{`Plain-woven Face Cream specifically constructed for freedom of
movement.`}</li>
                  </ul>
                </div>
                <div
                  className="product-footer"
                  style={{ boxSizing: "border-box" }}
                >
                  <div
                    className="product-count style d-flex flex-column flex-sm-row mt-30 mb-30"
                    style={{
                      boxSizing: "border-box",
                      marginTop: "30px",
                      marginBottom: "30px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div
                      className="count d-flex"
                      style={{ boxSizing: "border-box", display: "flex" }}
                    >
                      <input
                        type="number"
                        defaultValue="1"
                        max="10"
                        min="1"
                        step="1"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          fontFamily: "inherit",
                          fontSize: "inherit",
                          lineHeight: "inherit",
                          transition: "0.3s",
                          padding: "10px 30px 10px 10px",
                          border: "1px solid rgb(235, 235, 235)",
                          color: "rgb(17, 17, 17)",
                          backgroundColor: "rgb(255, 255, 255)",
                          height: "54px",
                          width: "80px",
                          display: "block",
                          textAlign: "center",
                          appearance: "textfield",
                        }}
                      />
                      <div
                        className="button-group"
                        style={{ boxSizing: "border-box" }}
                      >
                        <button
                          className="count-btn increment"
                          style={{
                            boxSizing: "border-box",
                            borderRadius: "0px",
                            margin: "0px",
                            fontFamily: "inherit",
                            lineHeight: "inherit",
                            textTransform: "none",
                            appearance: "button",
                            textDecoration: "none",
                            background: "transparent",
                            border: "0px",
                            transition: "0.3s",
                            borderWidth: "0px 0px 0px 1px",
                            borderImage: "initial",
                            padding: "0px",
                            backgroundColor: "transparent",
                            borderTopStyle: "initial",
                            borderRightStyle: "initial",
                            borderTopColor: "initial",
                            borderRightColor: "initial",
                            borderLeftStyle: "solid",
                            borderLeftColor: "rgb(235, 235, 235)",
                            display: "block",
                            width: "20px",
                            height: "27px",
                            textAlign: "center",
                            color: "rgb(17, 17, 17)",
                            fontSize: "10px",
                            transform: "translateX(-100%)",
                            userSelect: "none",
                            borderBottom: "1px solid rgb(235, 235, 235)",
                            borderBottomStyle: "solid",
                            borderBottomColor: "rgb(235, 235, 235)",
                            outline: "0px",
                            cursor:
                              'url("data:image/png;base64,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") 9 1, pointer',
                          }}
                        >
                          <i
                            className="fas fa-chevron-up"
                            style={{
                              boxSizing: "border-box",
                              fontVariant: "normal",
                              WebkitFontSmoothing: "antialiased",
                              display: "inline-block",
                              fontStyle: "normal",
                              textRendering: "auto",
                              lineHeight: 1,
                              fontFamily: '"Font Awesome 5 Free"',
                              fontWeight: 900,
                            }}
                          />
                        </button>
                        <button
                          className="count-btn decrement"
                          style={{
                            boxSizing: "border-box",
                            borderRadius: "0px",
                            margin: "0px",
                            fontFamily: "inherit",
                            lineHeight: "inherit",
                            textTransform: "none",
                            appearance: "button",
                            textDecoration: "none",
                            background: "transparent",
                            border: "0px",
                            transition: "0.3s",
                            borderWidth: "0px 0px 0px 1px",
                            borderImage: "initial",
                            padding: "0px",
                            backgroundColor: "transparent",
                            borderTopStyle: "initial",
                            borderRightStyle: "initial",
                            borderBottomStyle: "initial",
                            borderTopColor: "initial",
                            borderRightColor: "initial",
                            borderBottomColor: "initial",
                            borderLeftStyle: "solid",
                            borderLeftColor: "rgb(235, 235, 235)",
                            display: "block",
                            width: "20px",
                            height: "27px",
                            textAlign: "center",
                            color: "rgb(17, 17, 17)",
                            fontSize: "10px",
                            transform: "translateX(-100%)",
                            userSelect: "none",
                            outline: "0px",
                            cursor:
                              'url("data:image/png;base64,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") 9 1, pointer',
                          }}
                        >
                          <i
                            className="fas fa-chevron-down"
                            style={{
                              boxSizing: "border-box",
                              fontVariant: "normal",
                              WebkitFontSmoothing: "antialiased",
                              display: "inline-block",
                              fontStyle: "normal",
                              textRendering: "auto",
                              lineHeight: 1,
                              fontFamily: '"Font Awesome 5 Free"',
                              fontWeight: 900,
                            }}
                          />
                        </button>
                      </div>
                    </div>
                    <div style={{ boxSizing: "border-box" }}>
                      <button
                        className="btn btn-dark btn--xl mt-5 mt-sm-0"
                        style={{
                          boxSizing: "border-box",
                          margin: "0px",
                          appearance: "button",
                          textDecoration: "none",
                          border: "1px solid #212529",
                          transition:
                            "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
                          display: "inline-block",
                          textAlign: "center",
                          verticalAlign: "middle",
                          userSelect: "none",
                          borderRadius: "0px",
                          fontFamily: "Raleway",
                          fontSize: "14px",
                          fontWeight: 500,
                          lineHeight: 1,
                          textTransform: "uppercase",
                          background: "rgb(17, 17, 17)",
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(17, 17, 17)",
                          padding: "18px 35px",
                          outline: "0px",
                          cursor:
                            'url("data:image/png;base64,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") 9 1, pointer',
                          marginTop: "0px",
                        }}
                      >
                        <span
                          className="me-2"
                          style={{
                            boxSizing: "border-box",
                            display: "inline-block",
                            marginRight: "0.5rem",
                          }}
                        >
                          <i
                            className="ion-android-add"
                            style={{ boxSizing: "border-box" }}
                          />
                        </span>
                        {"Add to cart"}
                      </button>
                    </div>
                  </div>
                  <div
                    className="addto-whish-list"
                    style={{ boxSizing: "border-box" }}
                  >
                    <a
                      href="http://127.0.0.1:5500/single-product.html#"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        transition: "0.3s",
                        padding: "0px",
                        border: "none",
                        display: "inline-block",
                        lineHeight: "30px",
                        color: "rgb(102, 102, 102)",
                        fontSize: "14px",
                        marginRight: "15px",
                        cursor:
                          'url("data:image/png;base64,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") 9 1, pointer',
                      }}
                    >
                      <i
                        className="icon-heart"
                        style={{
                          boxSizing: "border-box",
                          fontVariant: "normal",
                          fontFamily: "simple-line-icons",
                          speak: "none",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          textTransform: "none",
                          lineHeight: 1,
                          WebkitFontSmoothing: "antialiased",
                          cursor:
                            'url("data:image/png;base64,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") 9 1, pointer',
                        }}
                      />{" "}
                      Add to wishlist
                    </a>
                    <a
                      href="http://127.0.0.1:5500/single-product.html#"
                      style={{
                        boxSizing: "border-box",
                        textDecoration: "none",
                        transition: "0.3s",
                        padding: "0px",
                        border: "none",
                        display: "inline-block",
                        lineHeight: "30px",
                        color: "rgb(102, 102, 102)",
                        fontSize: "14px",
                        marginRight: "15px",
                        cursor:
                          'url("data:image/png;base64,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") 9 1, pointer',
                      }}
                    >
                      <i
                        className="icon-shuffle"
                        style={{
                          boxSizing: "border-box",
                          fontVariant: "normal",
                          fontFamily: "simple-line-icons",
                          speak: "none",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          textTransform: "none",
                          lineHeight: 1,
                          WebkitFontSmoothing: "antialiased",
                          cursor:
                            'url("data:image/png;base64,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") 9 1, pointer',
                        }}
                      />{" "}
                      Add to compare
                    </a>
                  </div>
                  <div
                    className="pro-social-links mt-10"
                    style={{ boxSizing: "border-box", marginTop: "10px" }}
                  >
                    <ul
                      className="d-flex align-items-center"
                      style={{
                        boxSizing: "border-box",
                        padding: "0px",
                        margin: "0px",
                        paddingLeft: "0px",
                        marginTop: "0px",
                        marginBottom: "0px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <li
                        className="share"
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          marginRight: "15px",
                          lineHeight: "30px",
                          fontWeight: 500,
                          color: "rgb(17, 17, 17)",
                          fontSize: "14px",
                        }}
                      >
                        Share
                      </li>
                      <li
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          marginRight: "15px",
                        }}
                      >
                        <a
                          href="http://127.0.0.1:5500/single-product.html#"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            transition: "0.3s",
                            display: "block",
                            width: "20px",
                            textAlign: "center",
                            color: "rgb(157, 157, 157)",
                            fontSize: "18px",
                            lineHeight: "30px",
                            cursor:
                              'url("data:image/png;base64,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") 9 1, pointer',
                          }}
                        >
                          <i
                            className="ion-social-facebook"
                            style={{
                              boxSizing: "border-box",
                              cursor:
                                'url("data:image/png;base64,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") 9 1, pointer',
                            }}
                          />
                        </a>
                      </li>
                      <li
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          marginRight: "15px",
                        }}
                      >
                        <a
                          href="http://127.0.0.1:5500/single-product.html#"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            transition: "0.3s",
                            display: "block",
                            width: "20px",
                            textAlign: "center",
                            color: "rgb(157, 157, 157)",
                            fontSize: "18px",
                            lineHeight: "30px",
                            cursor:
                              'url("data:image/png;base64,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") 9 1, pointer',
                          }}
                        >
                          <i
                            className="ion-social-twitter"
                            style={{
                              boxSizing: "border-box",
                              cursor:
                                'url("data:image/png;base64,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") 9 1, pointer',
                            }}
                          />
                        </a>
                      </li>
                      <li
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          marginRight: "15px",
                        }}
                      >
                        <a
                          href="http://127.0.0.1:5500/single-product.html#"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            transition: "0.3s",
                            display: "block",
                            width: "20px",
                            textAlign: "center",
                            color: "rgb(157, 157, 157)",
                            fontSize: "18px",
                            lineHeight: "30px",
                            cursor:
                              'url("data:image/png;base64,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") 9 1, pointer',
                          }}
                        >
                          <i
                            className="ion-social-google"
                            style={{
                              boxSizing: "border-box",
                              cursor:
                                'url("data:image/png;base64,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") 9 1, pointer',
                            }}
                          />
                        </a>
                      </li>
                      <li
                        style={{
                          boxSizing: "border-box",
                          listStyle: "none",
                          marginRight: "15px",
                        }}
                      >
                        <a
                          href="http://127.0.0.1:5500/single-product.html#"
                          style={{
                            boxSizing: "border-box",
                            textDecoration: "none",
                            transition: "0.3s",
                            display: "block",
                            width: "20px",
                            textAlign: "center",
                            color: "rgb(157, 157, 157)",
                            fontSize: "18px",
                            lineHeight: "30px",
                            cursor:
                              'url("data:image/png;base64,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") 9 1, pointer',
                          }}
                        >
                          <i
                            className="ion-social-pinterest"
                            style={{
                              boxSizing: "border-box",
                              cursor:
                                'url("data:image/png;base64,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") 9 1, pointer',
                            }}
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  scroll-behavior: smooth;
  cursor: url("data:image/png;base64,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") 1 0, auto;
}

body {
  box-sizing: border-box;
  margin: 0px;
  text-align: var(--bs-body-text-align);
  text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  background: rgb(255, 255, 255);
  background-color: rgb(255, 255, 255);
  font-family: "Playfair Display";
  font-weight: 400;
  font-size: 14px;
  line-height: 1.75;
  color: rgb(86, 86, 86);
  overflow-x: hidden;
  cursor: url("data:image/png;base64,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") 1 0, auto;
}
`,
        }}
      />
    </>
  );
}
