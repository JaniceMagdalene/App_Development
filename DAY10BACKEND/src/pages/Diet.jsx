import { useState } from 'react';
import '../assets/css/Diet.css';
import { useEffect } from 'react';
import Navigation from './Navbar';
import Footer from './Footer';
import Social from './Social';

const imagess=[
  {id:'1',imageName:'food1.jpg',tag:'food'},
  {id:'2',imageName:'fruit1.jpg',tag:'fruit'},
  {id:'3',imageName:'liquid1.jpg',tag:'liquid'},
  {id:'4',imageName:'food2.jpg',tag:'food'},
  {id:'5',imageName:'fruit2.jpg',tag:'fruit'},
  {id:'6',imageName:'food3.jpg',tag:'food'},
  {id:'7',imageName:'fruit3.jpg',tag:'fruit'},
  {id:'8',imageName:'fruit4.jpg',tag:'fruit'},
  {id:'9',imageName:'liquid2.jpg',tag:'liquid'},
{id:'10',imageName:'food4.jpg',tag:'food'},
{id:'11',imageName:'liquid3.jpg',tag:'liquid'},
{id:'12',imageName:'food5.jpg',tag:'food'},
{id:'13',imageName:'fruit5.jpg',tag:'fruit'},
{id:'14',imageName:'liquid5.jpg',tag:'liquid'},
{id:'15',imageName:'fruit6.jpg',tag:'fruit'},
{id:'16',imageName:'liquid4.jpg',tag:'liquid'},

]
function Filter() {
  const [tag,setTag]=useState('fruit');
  const[filteredImages,setFilteredImages]=useState([]);

  useEffect(()=>{
    tag === 'all'? setFilteredImages(imagess): setFilteredImages(imagess.filter(image => image.tag === tag))
  },
  [tag]
  );
  return (
    <>
    <Navigation/>
    <Social/>
    <div className="bgf"></div>
      <div className="bgf bgf2"></div>
      <div className="bgf bgf3"></div>
    <div className="App" handleSetTag={setTag}>
      <div className='ta'>
      <TagButton name="all" handleSetTag={setTag}/>
      <TagButton name="food" handleSetTag={setTag}/>
      <TagButton name="fruit" handleSetTag={setTag}/>
      <TagButton name="liquid" handleSetTag={setTag}/>
      </div>
      <div className='jm'>
        {filteredImages.map(image=>
        <div key = {image.id} className='mj'>
          <img className = ' dj'src={`/imagess/${image.imageName}`} alt="logo"/>
        </div>
        
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}

const TagButton=({name,handleSetTag})=>{
  return <button className='tag' onClick={()=> handleSetTag(name)}>{name.toUpperCase()}</button>;
};
export default Filter;
