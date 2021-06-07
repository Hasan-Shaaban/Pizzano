
import './scss/style.scss';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
import 'jquery/dist/jquery.slim.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap';
import 'jquery-ui-touch-punch/jquery.ui.touch-punch.min.js';
import './wow/wow.js';



$(function() {

  $('[data-toggle="tooltip"]').tooltip();

  $('.add-to-cart-btn').on( "click",function() {
      alert('Add product to buying cart');
  });
  

});




