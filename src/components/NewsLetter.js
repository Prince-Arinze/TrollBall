const NewsLetter = () => {
      return(
          <section className="section newsletter" id="subscribe">
              <div className="newsletter__container bd-grid">
                  <div className="newsletter__subscribe">
                      <div className="newsletter__title">OUR NEWSLETTER</div>
                      <div className="newsletter__description">Get promotion news, product and sales directly.</div>
                      <form action="" className="newsletter__form">
                          <input type="text" className="newsletter__input" placeholder="Enter your email"/>
                          <a href="" className="button">SUBSCRIBE</a>
                      </form>
                  </div>
              </div>
          </section>
      )
}

export default NewsLetter;