import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Portfolio = () => {
    const percentage = 66;

    return (
        <div>
             <h1>this is my about</h1>
             <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col ">
    <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  <h1 className='text-6xl pt-36 px-4 text-blue-600 font-bold'>Abdur Rahim</h1>
  <p className='px-4 text-2xl'>webdeveloper</p>
<div className='mt-20 mx-4'>
    <h2 className='text-2xl font-bold uppercase mt-4'>work exprience</h2>
    <h4 className='text-xl text-blue-600'>Ceo of apna  college</h4>
    <h4 style={{fontSize:'18px',fontWeight:'bold'}}>Emplyer</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quas accusantium quam suscipit aperiam porro similique ab perferendis aspernatur magnam pariatur tenetur ipsam dolore consequuntur itaque Autem, quas accusantium quam suscipit aperiam porro similique ab perferendis aspernatur magnam pariatur tenetur ipsam dolore consequuntur itaque magni voluptatibus quos corrupti, nam explicabo, amet sit deleniti</p>
</div>
<div className='mt-10 mx-4'>
    <h2 className="text-2xl font-bold uppercase mt-4">Education </h2>
    <h4 className='text-xl text-blue-600'>Cse Enginear</h4>
    <h4 style={{fontSize:'18px',}}>Gangkul panchagram adarsha high school</h4>
</div>
<div className='pt-6 mx-4'>
<h2 className="text-2xl font-bold uppercase mt-4">Profession killer </h2>
<div className='flex justify-around items-center ' style={{ width: 100, height: 50 }}>
  <CircularProgressbar value={percentage} text={`${percentage}%`} />
    <span className='text-xl px-2'>HTML</span></div>
<div className='flex justify-around items-center ' style={{ width: 100, height: 50 }}>
  <CircularProgressbar value={percentage} text={`${percentage}%`} />
    <span className='text-xl px-2'>CSS</span></div>

</div>
  </div> 
  <div class="drawer-side ">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-red-100 border-solid text-base-content">
    <div class="avatar">
  <div class="w-3/2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://api.lorem.space/image/face?hash=3174" />
  </div>
</div>
      <li className='text-2xl font-bold uppercase mt-4'>Summery</li>
      <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quas accusantium quam suscipit aperiam porro similique ab perferendis aspernatur magnam pariatur tenetur ipsam dolore consequuntur itaque magni voluptatibus quos corrupti, nam explicabo, amet sit deleniti fugiat aliquam? Est, eos dignissimos?</p>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Portfolio;