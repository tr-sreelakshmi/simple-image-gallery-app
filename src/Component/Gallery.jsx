import React, { useEffect, useState } from 'react'
import './Gallery.css'


function Gallery() {
//  Fetch Of Data
const [images ,setImages]=useState([])

  useEffect(() => {
 const fetchImages=()=>{
  const data=[
    {id:1,
    url:'https://picsum.photos/id/1/300/200',
    title:'Image 1'
  },
  {id:2,
    url:'https://picsum.photos/id/2/300/200',
    title:'Image 2'
  },
  {id:3,
    url:'https://picsum.photos/id/3/300/200',
    title:'Image 3'
  },
  {id:4,
    url:'https://picsum.photos/id/4/300/200',
    title:'Image 4'
  },
  {id:5,
    url:'https://picsum.photos/id/5/300/200',
    title:'Image 5'
  },
  {id:6,
    url:'https://picsum.photos/id/6/300/200',
    title:'Image 6'
  },
  {id:7,
    url:'https://picsum.photos/id/7/300/200',
    title:'Image 7'
  },
  ]
  setImages(data)
 }
fetchImages()
  
  }, [])
  
// Deletion 
const handleDelete=(id)=>{
setImages(images.filter((image)=>image.id!=id))
}


  return (
  <div>
        <h1>Image Gallery App</h1>
 {
    images.length>0?
    <div className='image-grid'>
      {
              // {/*Data printing   */}

        images.map((image)=>(
        <div className='image-card' key={image.id}>
          <img src={image.url} alt="" />
        <div className='image-detail'>
         <h3>{image.title}</h3>
        <button  onClick={()=>handleDelete(image.id)} >Delete</button>
        </div>
       </div>
       ))
      }
    </div>:
    <p className='no-images'>No Images Found</p>
   }
    
  </div>
  )
}

export default Gallery