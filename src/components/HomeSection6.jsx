import React from 'react'
import './HomeSection6.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from './Button';

export const HomeSection6 = () => {
  return (
   <div className='home-section-6'>
    <h5 className="home-section-6-h5"> Latest News</h5>
     <p className="home-section-6-p">Breaking news, fresh perspectives, and in-depth coverage - stay ahead <br />with our latest news, insights, and analysis.</p>

 <div className="home-section-6-card-umumi row">
 <div class="card home-section-6-card" >
  <img src="https://res.cloudinary.com/dcum9qzc3/image/upload/v1688994230/pic-blog-1_ytagi5.jpg" class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title card-basliq  ">Enjoy Best Travel Experience</h5>
    <p class="card-text card-metn">Dolore officia sint incididunt non <br />excepteur ea mollit commodo ut <br />enim reprehenderit cupidatat <br />labore ad laborum consectetur.</p>
   <Button butonunIcindekiDeyer='Read More' className='homesection6-button'/>
  </div>
</div>
 <div class="card home-section-6-card " >
  <img src="https://res.cloudinary.com/dcum9qzc3/image/upload/v1688994235/pic-blog-2_nmetwn.jpg" class="card-img-top" alt="..." />
  <div class="card-body ">
    <h5 class="card-title card-basliq">Enjoy Best Travel Experience</h5>
    <p class="card-text card-metn">Dolore officia sint incididunt non <br />excepteur ea mollit commodo ut <br />enim reprehenderit cupidatat <br />labore ad laborum consectetur.</p>
   <Button butonunIcindekiDeyer='Read More' className='homesection6-button'/>
  </div>
</div>
 <div class="card home-section-6-card " >
  <img src="https://res.cloudinary.com/dcum9qzc3/image/upload/v1688994239/pic-blog-3_txzo9x.jpg" class="card-img-top" alt="..." />
  <div class="card-body ">
    <h5 class="card-title card-basliq">Enjoy Best Travel Experience</h5>
    <p class="card-text card-metn">Dolore officia sint incididunt non <br />excepteur ea mollit commodo ut <br />enim reprehenderit cupidatat <br />labore ad laborum consectetur.</p>
   <Button butonunIcindekiDeyer='Read More' className='homesection6-button'/>
  </div>
</div>

 </div>

   </div>
  )
}

export default HomeSection6