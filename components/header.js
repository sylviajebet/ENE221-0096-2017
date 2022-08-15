class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
                    
            /*--------------------------------------------------------------
            # Header
            --------------------------------------------------------------*/
            #header {
            height: 70px;
            transition: all 0.5s;
            z-index: 997;
            background: #000;
            }

            #header .logo h1 {
            font-size: 30px;
            margin: 0;
            padding: 6px 0;
            line-height: 1;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            }

            #header .logo h1 a,
            #header .logo h1 a:hover {
            color: #fff;
            text-decoration: none;
            }

            #header .logo img {
            padding: 0;
            margin: 0;
            max-height: 40px;
            }

            @media (max-width: 992px) {
            #header {
                height: 60px;
            }
            }

            /*--------------------------------------------------------------
            # Navigation Menu
            --------------------------------------------------------------*/
            /**
            * Desktop Navigation 
            */
            .navbar {
            padding: 0;
            }

            .navbar ul {
            margin: 0;
            padding: 0;
            display: flex;
            list-style: none;
            align-items: center;
            }

            .navbar li {
            position: relative;
            }

            .navbar>ul>li+li {
            margin-left: 30px;
            }

            .navbar a,
            .navbar a:focus {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px 0;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.8);
            white-space: nowrap;
            transition: 0.3s;
            position: relative;
            }

            .navbar a i,
            .navbar a:focus i {
            font-size: 12px;
            line-height: 0;
            margin-left: 5px;
            }

            .navbar>ul>li>a:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 3px;
            left: 0;
            background-color: #1bac91;
            visibility: hidden;
            width: 0px;
            transition: all 0.3s ease-in-out 0s;
            }

            .navbar a:hover:before,
            .navbar li:hover>a:before,
            .navbar .active:before {
            visibility: visible;
            width: 100%;
            }

            .navbar a:hover,
            .navbar .active,
            .navbar .active:focus,
            .navbar li:hover>a {
            color: #fff;
            }

            .navbar .dropdown ul {
            display: block;
            position: absolute;
            left: 0;
            top: 100%;
            margin: 0;
            padding: 10px 0;
            z-index: 99;
            opacity: 0;
            visibility: hidden;
            background: #fff;
            box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
            transition: 0.3s;
            }

            .navbar .dropdown ul li {
            min-width: 200px;
            }

            .navbar .dropdown ul a {
            padding: 10px 20px;
            font-size: 14px;
            text-transform: none;
            font-weight: 500;
            color: #062822;
            }

            .navbar .dropdown ul a i {
            font-size: 12px;
            }

            .navbar .dropdown ul a:hover,
            .navbar .dropdown ul .active:hover,
            .navbar .dropdown ul li:hover>a {
            color: #1bac91;
            }

            .navbar .dropdown:hover>ul {
            opacity: 1;
            visibility: visible;
            }

            .navbar .dropdown .dropdown ul {
            top: 0;
            left: calc(100% - 30px);
            visibility: hidden;
            }

            .navbar .dropdown .dropdown:hover>ul {
            opacity: 1;
            top: 0;
            left: 100%;
            visibility: visible;
            }

            @media (max-width: 1366px) {
            .navbar .dropdown .dropdown ul {
                left: -90%;
            }

            .navbar .dropdown .dropdown:hover>ul {
                left: -100%;
            }
            }

            /**
            * Mobile Navigation 
            */
            .mobile-nav-toggle {
            color: #fff;
            font-size: 28px;
            cursor: pointer;
            display: none;
            line-height: 0;
            transition: 0.5s;
            }

            @media (max-width: 991px) {
            .mobile-nav-toggle {
                display: block;
            }

            .navbar ul {
                display: none;
            }
            }

            .navbar-mobile {
            position: fixed;
            overflow: hidden;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            background: rgba(16, 31, 29, 0.9);
            transition: 0.3s;
            z-index: 0;
            }

            .navbar-mobile .mobile-nav-toggle {
            position: absolute;
            top: 15px;
            right: 15px;
            }

            .navbar-mobile ul {
            display: block;
            position: absolute;
            top: 55px;
            right: 15px;
            bottom: 15px;
            left: 15px;
            padding: 10px 0;
            background-color: #fff;
            overflow-y: auto;
            transition: 0.3s;
            }

            .navbar-mobile>ul>li+li {
            margin: 0;
            }

            .navbar-mobile a:hover:before,
            .navbar-mobile li:hover>a:before,
            .navbar-mobile .active:before {
            visibility: hidden;
            }

            .navbar-mobile a,
            .navbar-mobile a:focus {
            padding: 10px 20px;
            font-size: 15px;
            color: #21413c;
            }

            .navbar-mobile a:hover,
            .navbar-mobile .active,
            .navbar-mobile li:hover>a {
            color: #1bac91;
            }

            .navbar-mobile .getstarted,
            .navbar-mobile .getstarted:focus {
            margin: 15px;
            }

            .navbar-mobile .dropdown ul {
            position: static;
            display: none;
            margin: 10px 20px;
            padding: 10px 0;
            z-index: 99;
            opacity: 1;
            visibility: visible;
            background: #fff;
            box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
            }

            .navbar-mobile .dropdown ul li {
            min-width: 200px;
            }

            .navbar-mobile .dropdown ul a {
            padding: 10px 20px;
            }

            .navbar-mobile .dropdown ul a i {
            font-size: 12px;
            }

            .navbar-mobile .dropdown ul a:hover,
            .navbar-mobile .dropdown ul .active:hover,
            .navbar-mobile .dropdown ul li:hover>a {
            color: #1bac91;
            }

            .navbar-mobile .dropdown>.dropdown-active {
            display: block;
            }
        </style>
        <header>
            <div class="container d-flex justify-content-between">

                <div class="logo">
                <h1><a href="index.html"><img src="assets/img/main-logo.png" alt="" class="img-fluid"></a>
                <a href="index.html">Out and About</a></h1>
                
                </div>
        
                <nav id="navbar" class="navbar">
                <ul>
                    <li><a class="nav-link scrollto" href="index.html">Home</a></li>
                    <li><a class="nav-link scrollto" href="about.html">About Us</a></li>
                    <li><a class="nav-link scrollto active" href="products.html">Products</a></li>
                    <li><a class="nav-link scrollto" href="gallery.html">Gallery</a></li>
                    <li><a class="nav-link scrollto " href="portfolio.html">Portfolio</a></li>
                    <li><a class="nav-link scrollto" href="contact.html">Contact Us</a></li>
                </ul>
                <i class="bi bi-list mobile-nav-toggle"></i>
                </nav><!-- .navbar -->
        
            </div>
        </header>
      `;
    }
  }
  
  customElements.define('header-component', Header);