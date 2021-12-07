import React,{useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Footer from './components/Footer';
import $ from 'jquery';
function App() {
  useEffect(() => {
    $(document).ready(function(){
      $('.navbar .dropdown').hover(function() {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(10).slideDown();
      }, function() {
      $(this).find('.dropdown-menu').first().stop(true, true).delay(10).slideUp()
      });
      $(".section1 h1, .section1 hr").addClass("animation-slide");
      $(".section2").bind("mouseover touchstart", function(){
        $(".section2 .container:nth-child(2) img:nth-child(1), .container:nth-child(2) img:nth-child(2),.container:nth-child(2) img:nth-child(5),.container:nth-child(2) img:nth-child(6)").addClass("companyname-animation1");
        $(".section2 .container:nth-child(2) img:nth-child(3),.container:nth-child(2) img:nth-child(4),.container:nth-child(2) img:nth-child(7),.container:nth-child(2) img:nth-child(8)").addClass("companyname-animation2");
       
      });
      // var position = $(window).scrollTop();
      // // should start at 0
      // $(window).scroll(function() {
      //   var scroll = $(window).scrollTop();
      //   if (scroll > position) {
      //     console.log('scrollDown');
      //     $('div').text('Scrolling Down Scripts');
      //   } else {
      //     console.log('scrollUp');
      //     $('div').text('Scrolling Up Scripts');
      //   }
      //   position = scroll;
      // });

  });
  });
  return (
    <>
    <Navbar/>
    <Section/>
    <Footer/>
    </>
  );
}

export default App;

