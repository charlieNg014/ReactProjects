import React, { Component } from "react";

class PageWrapper extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="/">
              Dan's Bakery
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/services">
                    SERVICE
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/portfolio">
                    Portfolio
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/timeline">
                    ABOUT
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    className="nav-link js-scroll-trigger"
                    href="/shoppingcart"
                  >
                    SHOPPING
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/team">
                    TEAM
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/contact">
                    CONTACT
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="/mycart">
                    My Cart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default PageWrapper;
