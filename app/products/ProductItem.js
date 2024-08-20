'use client';
import { useState } from 'react';
import EditProduct from './EditProduct';

const ProductItem = ({ product, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    onDelete(product.id);
  };

  const handleEdit = (updatedProduct) => {
    setIsEditing(false);
    onEdit(updatedProduct);
  };

  return (
    <li className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg mb-4">
      {isEditing ? (
        <EditProduct product={product} onEdit={handleEdit} />
      ) : (
        <>
          <div className="flex items-center">
            {product.image && (
              <img
                // src={product.image}
                src="https://placehold.co/600x400"
                alt={product.name}
                className="w-16 h-16 rounded-lg object-cover mr-4"
              />
            )}
            <span className="text-lg font-semibold">{product.name} - ${product.price}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-black text-white rounded-lg transition"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-black text-white rounded-lg transition"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default ProductItem;
