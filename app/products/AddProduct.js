'use client';
import { useState } from 'react';

const AddProduct = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, price, image }),
    });
    const newProduct = await res.json();
    onAdd(newProduct);
    setName('');
    setPrice('');
    setImage('');
  };

  return (
    
    <form onSubmit={handleSubmit} className="flex">
    <div className="flex-col p-2 border-2 border-black ml-5 flex">
    <h1 className="p-2 text-xl">Add products</h1>
      <input
      className="bg-slate-200 p-2 m-1"
    type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        className="bg-slate-200 p-2 m-1"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        className="bg-slate-200 p-2 m-1"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
       <button className="bg-black text-white rounded-lg mx-20 my-4 p-2" type="submit">Add Product</button>
</div>
    </form>
  );
};

export default AddProduct;


// 'use client';
// import { useState } from 'react';

// const AddProduct = ({ onAdd }) => {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('price', price);

//     const res = await fetch('/api/products', {
//       method: 'POST',
//       body: formData,
//     });

//     const newProduct = await res.json();
//     onAdd(newProduct);
//     setName('');
//     setPrice('');
//   };

//   return (
    
    // <form onSubmit={handleSubmit} className="flex">
    // <div className="flex-col p-2 border-2 border-black ml-5 flex">
    // <h1 className="p-2 text-xl">Add products</h1>
    //   <input
    //   className="bg-slate-200 p-2 m-1"
//         type="text"
//         placeholder="Product Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <input
//       className="bg-slate-200 p-2 m-1"
//         type="number"
//         placeholder="Price"
//         value={price}
//         onChange={(e) => setPrice(e.target.value)}
//         required
//       />
//       <input type="file" onChange={handleImageChange} />
//       <button className="bg-black text-white rounded-lg mx-20 my-4 p-2" type="submit">Add Product</button>
//     </div>
//     </form>
//   );
// };

// export default AddProduct;
