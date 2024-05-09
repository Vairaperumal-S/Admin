
import React, { useState, useEffect } from 'react';
import './List.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const List = ({url}) => {
  const [list,setList] = useState([]);
 

  useEffect(() => {
    fetch('http://localhost:4000/list', {
      method: 'GET',
    
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then(data => {
      
        setList(data.data); 
      })
      .catch(error => {
        toast.error(error.message);
      });
  }, []); 


   console.log(list);
        
//    useEffect(() => {
//     let imageUrl;
//     const fetchImage = async () => {
//         try {
//             const response = await fetch(`http://localhost:4000/select/${list._id}`);
//             if (!response.ok) {
//                 throw new Error('Failed to fetch image');
//             }
//             const blob = await response.blob();
//             const imageUrl = URL.createObjectURL(blob);
           
//         } catch (error) {
//             console.error('Error fetching image:', error);
//         }
//     };

//     fetchImage();

   
//     return () => {
//         URL.revokeObjectURL(imageUrl);
//     };
//}, [list._id]);





// useEffect(() => {
//     const fetchImages = async () => {
//         const updatedList = [];
//         for (const item of list) {
//             try {
//                 const response = await fetch(`http://localhost:4000/select/${item._id}`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch image');
//                 }
//                 const blob = await response.blob();
//                 const imageUrl = URL.createObjectURL(blob);
//                 updatedList.push({ ...item, imageUrl });
//             } catch (error) {
//                 console.error('Error fetching image:', error);
//                 // If there's an error fetching an image, you can handle it here
//                 // For example, you can push the item without imageUrl or handle it in a different way
//                 updatedList.push(item);
//             }
//         }
//         setList(updatedList);
//     };

//     fetchImages();

//     // Cleanup function to revoke object URLs when the component unmounts
//     return () => {
//         for (const item of list) {
//             if (item.imageUrl) {
//                 URL.revokeObjectURL(item.imageUrl);
//             }
//         }
//     };
// }, [list]);


 const removefood=async(foodid)=>
 {
     fetch(`http://localhost:4000/remove/${foodid}`,
    {
        method: 'DELETE'
      
        
    })
     .then (response=>
    
     {
        if(response.ok)
        {
            toast.success('Food removed')
        }
        else{
            toast.error('Error');
        }

     })
     .catch(error => {
        toast.error(error.message);}
     )
          
     
    
    
 }

 console.log(`${url}/select/${list._id}`)
 //console.log(list._id);
  return (
    <div className='list-add flex-col'>
    <p>All foods</p>
    <div className='list-table'>
    <div className='list-table-format title'>
      
      <b>Image</b>
      <b>Name</b>
      <b>Category</b>
      <b>Price</b>
      <b>Action</b>
    </div>
    
  
    {list.map((item,index) => {
       return (
        <div className='list-table-format' key={index}>
    
        <img src={'${url}/select/${item._id}'} alt='image loading' />
        

          <p>{item.name}</p> 
         
          <p>{item.category}</p> 
          <p>${item.price}</p> 
          <p onClick={()=>removefood(item._id)} className='cursor'>X</p>
           
          </div>
          
       )
     
    })}
    </div>
    </div>
     )
  

  
}  



export default List;



