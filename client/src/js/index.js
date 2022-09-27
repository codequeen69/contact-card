//import modules
import './form';
import './submit';

import { initDb, getDb, postDb } from './database';
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



//import images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import Otter from '../images/otter-logo.jpg'

//add images on load
window.addEventListener('load', function() {
  initDb();
  getDb();
  postDb("Lernantino", "learnantino@test.com", 8186601234, "Bear");
  getDb();
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
  document.getElementById('logo').src = Otter;
});
// Import CSS files
import "../css/index.css";
  
  