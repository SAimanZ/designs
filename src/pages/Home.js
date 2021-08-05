import React from 'react'

export default function Home() {
    return (
        <div>
           
	<div class="svg-wrap">
      <svg width="64" height="64" viewBox="0 0 64 64">
        <path id="arrow-left" d="M26.667 10.667q1.104 0 1.885 0.781t0.781 1.885q0 1.125-0.792 1.896l-14.104 14.104h41.563q1.104 0 1.885 0.781t0.781 1.885-0.781 1.885-1.885 0.781h-41.563l14.104 14.104q0.792 0.771 0.792 1.896 0 1.104-0.781 1.885t-1.885 0.781q-1.125 0-1.896-0.771l-18.667-18.667q-0.771-0.813-0.771-1.896t0.771-1.896l18.667-18.667q0.792-0.771 1.896-0.771z"></path>
      </svg>

      <svg width="64" height="64" viewBox="0 0 64 64">
        <path id="arrow-right" d="M37.333 10.667q1.125 0 1.896 0.771l18.667 18.667q0.771 0.771 0.771 1.896t-0.771 1.896l-18.667 18.667q-0.771 0.771-1.896 0.771-1.146 0-1.906-0.76t-0.76-1.906q0-1.125 0.771-1.896l14.125-14.104h-41.563q-1.104 0-1.885-0.781t-0.781-1.885 0.781-1.885 1.885-0.781h41.563l-14.125-14.104q-0.771-0.771-0.771-1.896 0-1.146 0.76-1.906t1.906-0.76z"></path>
      </svg>
    </div>


    

   <div class="container-fluid">

    

    <section id="header">

     
      <nav class="navbar navbar-fixed-top navbar-default bottom">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#menu">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#header">Daraz</a>
          </div>

          <div class="collapse navbar-collapse" id="menu">
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#header">Home</a></li>
              <li><a href="#about">About</a></li>              
              <li><a href="#portfolio">Portfolio</a></li>
			  <li><a href="#team">Team</a></li>
			  <li><a href="#info">Info</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div> 
        </div> 
      </nav>

      
      <div class="header-slide">
        <section>
          <div id="loader" class="pageload-overlay" data-opening="M 0,0 0,60 80,60 80,0 z M 80,0 40,30 0,60 40,30 z">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 80 60" preserveAspectRatio="none">
              <path d="M 0,0 0,60 80,60 80,0 Z M 80,0 80,60 0,60 0,0 Z"/>
            </svg>
          </div> 
          
          <div class="image-slide bg-fixed">
            <div class="overlay">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">

                    <div class="slider-content">
                      <h1></h1>
                      <p>We are a creative agency from the earth of Bandung, Indonesia</p>
                    </div>

                  </div> 
                </div> 
              </div> 
            </div>
          </div> 

          <nav class="nav-slide">
            <a class="prev" href="#prev">
              <span class="icon-wrap">
                <svg class="icon" width="32" height="32" viewBox="0 0 64 64">
                  
                </svg>
              </span>
              <div>
                <span>Prev Photo</span>
                <h3>...</h3>
                <p>...</p>
                <img alt="Previous thumb"/>
              </div>
            </a>
            <a class="next" href="#next">
              <span class="icon-wrap">
                <svg class="icon" width="32" height="32" viewBox="0 0 64 64">
                  
                </svg>
              </span>
              <div>
                <span>Next Photo</span>
                <h3>...</h3>
                <p>...</p>
                <img alt="Next thumb"/>
              </div>
            </a>
          </nav>
        </section>


      </div>
    </section>

   

    <section id="about" class="light">
      <header class="title">
        <h2>About <span>Us</span></h2>
        <p>“You never change things by fighting the existing reality.
To change something, build a new model that makes the existing model obsolete.”.</p>
      </header>

      <div class="container">
        <div class="row table-row">
          <div class="col-sm-6 hidden-xs">
            <div class="section-content">
              <div class="big-image" style={{backgroundImage:"url("+"images/1.png"+")"}}></div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="section-content">
              <div class="about-content left animated" data-animate="fadeInLeft">
                <div class="about-icon"><i class="fa fa-code"></i></div>
                <div class="about-detail">
                  <h4>Clean Code</h4>
                  <p>“You never change things by fighting the existing reality.
To change something, build a new model that makes the existing model obsolete.”.</p>
                </div>
              </div>

              <div class="about-content left animated" data-animate="fadeInLeft">
                <div class="about-icon"><i class="fa fa-desktop"></i></div>
                <div class="about-detail">
                  <h4>Fully Responsive</h4>
                  <p>“You never change things by fighting the existing reality.
To change something, build a new model that makes the existing model obsolete.”.</p>
                </div>
              </div>

              <div class="about-content left animated" data-animate="fadeInLeft">
                <div class="about-icon"><i class="fa fa-cube"></i></div>
                <div class="about-detail">
                  <h4>Multipurpose Design</h4>
                  <p>“You never change things by fighting the existing reality.
To change something, build a new model that makes the existing model obsolete.”.</p>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div> 
    </section>
	
	
	    

    <section id="portfolio" class="light">
      <header class="title">
        <h2>Portfolio</h2>
        <p>“You never change things by fighting the existing reality.
To change something, build a new model that makes the existing model obsolete.”.</p>
      </header>

      <div class="container-fluid">
        <div class="row">
          <ul id="filters" class="list-inline">
            <li data-filter="all" class="filter">All</li>
            <li data-filter=".branding" class="filter">Branding</li> 
            <li data-filter=".graphic" class="filter">Graphic</li> 
            <li data-filter=".printing" class="filter">Printing</li> 
            <li data-filter=".video" class="filter">Video</li> 
          </ul>
        </div>

        <div class="row">
          <div class="container-portfolio">
           
         
          </div>
        </div>
      </div>
    </section>


   

    <section id="team" class="light">
      <header class="title">
        <h2>Creative <span>Team</span></h2>
        <p>“You never change things by fighting the existing reality.
To change something, build a new model that makes the existing model obsolete.”.</p>
      </header>
      
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 text-center">
            <div class="wrap animated" data-animate="fadeInDown">
              <div class="img-team">
                <img src="images/team-1.png" alt="" class="img-circle"/>
              </div>

              <h3>John Doe</h3>
              <h5>Creative Director</h5>

              <p>“You never change things by fighting the existing reality.
To change something, build a new model that makes the existing model obsolete.”.</p>

              <div class="team-social">
                <ul class="list-inline social-list">
                  <li><a href="#" class="fa fa-twitter"></a></li>
                  <li><a href="#" class="fa fa-linkedin"></a></li>
                  <li><a href="#" class="fa fa-facebook"></a></li>
                  <li><a href="#" class="fa fa-google-plus"></a></li>
                </ul> 
              </div>                
            </div>
          </div>

          <div class="col-md-3 col-sm-6 text-center">
            <div class="wrap animated" data-animate="fadeInDown"> 
              <div class="img-team">
                <img src="images/team-2.png" alt="" class="img-circle"/>
              </div>

              <h3>Ellie Morgan</h3>
              <h5>Designer</h5>

              <p>“You never change things by fighting the existing reality.
To change something, build a new model that makes the existing model obsolete.”.</p>

              <div class="team-social">
                <ul class="list-inline social-list">
                  <li><a href="#" class="fa fa-twitter"></a></li>
                  <li><a href="#" class="fa fa-linkedin"></a></li>
                  <li><a href="#" class="fa fa-facebook"></a></li>
                  <li><a href="#" class="fa fa-google-plus"></a></li>
                </ul> 
              </div>                
            </div>
          </div>

          <div class="col-md-3 col-sm-6 text-center">
            <div class="wrap animated" data-animate="fadeInDown"> 
              <div class="img-team">
                <img src="images/team-3.png" alt="" class="img-circle"/>
              </div>

              <h3>Elche</h3>
              <h5>Developer</h5>
              <p>“You never change things by fighting the existing reality.
To change something, build a new model that makes the existing model obsolete.”.</p>

              <div class="team-social">
                <ul class="list-inline social-list">
                  <li><a href="#" class="fa fa-twitter"></a></li>
                  <li><a href="#" class="fa fa-linkedin"></a></li>
                  <li><a href="#" class="fa fa-facebook"></a></li>
                  <li><a href="#" class="fa fa-google-plus"></a></li>
                </ul> 
              </div>                
            </div>
          </div>

          <div class="col-md-3 col-sm-6 text-center">
            <div class="wrap animated" data-animate="fadeInDown"> 
              <div class="img-team">
                <img src="images/team-4.png" alt="" class="img-circle"/>
              </div>

              <h3>JF Thiago</h3>
              <h5>Commerce</h5>

              <p>“You never change things by fighting the existing reality.
To change something, build a new model that makes the existing model obsolete.”.</p>

              <div class="team-social">
                <ul class="list-inline social-list">
                  <li><a href="#" class="fa fa-twitter"></a></li>
                  <li><a href="#" class="fa fa-linkedin"></a></li>
                  <li><a href="#" class="fa fa-facebook"></a></li>
                  <li><a href="#" class="fa fa-google-plus"></a></li>
                </ul> 
              </div>                
            </div>
          </div>
        </div>
      </div> 
    </section>
	
	    

    <section id="info" class="dark">
      <header class="title">
        <h2>Our <span>Experties</span></h2>
        <p>“You never change things by fighting the existing reality.
To change something, build a new model that makes the existing model obsolete.”.</p>
      </header>

      <div class="container experties">
        <div class="row">
          <div class="col-md-6">
            <div class="skill">
              <ul class="skill-bar list-unstyled">
                <li><span class="percentage" data-value="50%"></span><em>Branding</em></li>
                <li><span class="percentage" data-value="95%"></span><em>Development</em></li>
                <li><span class="percentage" data-value="22%"></span><em>Social</em></li>
              </ul>
            </div>
          </div>

          <div class="col-md-6">
            <div class="skill">
              <ul class="skill-bar list-unstyled">
                <li><span class="percentage" data-value="63%"></span><em>Graphic Design</em></li>
                <li><span class="percentage" data-value="90%"></span><em>Consulting</em></li>
                <li><span class="percentage" data-value="43%"></span><em>Logo</em></li>
              </ul>
            </div>
          </div>
        </div>
      </div> 
    </section>	
	

    <section class="separator blue">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6 col-xs-6">
            <div class="counter animated" data-animate="fadeInUp" data-delay="0">
              <div class="counter-icon">
                <i class="fa fa-group"></i>
              </div>
              <div class="counter-content">
                <span class="value" data-from="0" data-to="43"></span>
                <small>Clients</small>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-xs-6">
            <div class="counter animated" data-animate="fadeInUp" data-delay="500">
              <div class="counter-icon">
                <i class="fa fa-leaf"></i>
              </div>
              <div class="counter-content">
                <span class="value" data-from="0" data-to="20"></span>
                <small>Awards</small>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-xs-6">
            <div class="counter animated" data-animate="fadeInUp" data-delay="1000">
              <div class="counter-icon">
                <i class="fa fa-gears"></i>
              </div>
              <div class="counter-content">
                <span class="value" data-from="0" data-to="34"></span>
                <small>Projects</small>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-sm-6 col-xs-6">
            <div class="counter animated" data-animate="fadeInUp" data-delay="1500">
              <div class="counter-icon">
                <i class="fa fa-inbox"></i>
              </div>
              <div class="counter-content">
                <span class="value" data-from="0" data-to="1298"></span>
                <small>Mail</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  

     <section id="contact" class="dark">
      <header class="title">
        <h2>Contact <span>Us</span></h2>
        <p>“You never change things by fighting the existing reality.
To change something, build a new model that makes the existing model obsolete.”.</p>
      </header>

      <div class="container">
        <div class="row">
          <div class="col-md-8 animated" data-animate="fadeInLeft">
            <form action="#">
              <div class="row">
                <div class="col-md-6">
                  <input type="text" class="form-control" placeholder="Your Name"/>
                </div>
                <div class="col-md-6">
                  <input type="email" class="form-control" placeholder="Your Email"/>
                </div>
                <div class="col-md-12">
                  <textarea class="form-control" rows="3" placeholder="Tell Us Everything"></textarea>
                </div>
                <div class="col-md-12">
                  <button class="btn btn-default submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>

          <div class="col-md-4 animated" data-animate="fadeInRight">
            <address>
                <span><i class="fa fa-map-marker fa-lg"></i> 84 State Road 123 City, State 24813</span>
                <span><i class="fa fa-phone fa-lg"></i> (123) xxx - xxx</span>
                <span><i class="fa fa-envelope-o fa-lg"></i> <a href="mailto:contact@example.com">contact&#64;example.com</a></span>
                <span><i class="fa fa-globe fa-lg"></i> <a href="http://support.example.com">support.example.com</a></span>
            </address>
          </div>
		  
        </div>
      </div>
    </section>

    <section id="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <p>Made BY <i class="fa fa-heart"></i> <a href="http://templatestock.co">AIMAN</a></p>
            <p><small>  “You never change things by fighting the existing reality.
To change something, build a new model that makes the existing model obsolete.”.</small></p>
          </div>
        </div>
      </div>
    </section>
</div>
        </div>
    )
}
