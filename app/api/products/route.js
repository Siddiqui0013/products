
import pool from "@/lib/db";

export async function GET(req) {
    const res = await pool.query('SELECT * FROM products');
    return new Response(JSON.stringify(res.rows), { status: 200 });
  }
  
  // Add 
  export async function POST(req) {
    const { name, price, image } = await req.json();
    const res = await pool.query(
      'INSERT INTO products (name, price, image) VALUES ($1, $2, $3) RETURNING *',
      [name, price, image]
    );
    return new Response(JSON.stringify(res.rows[0]), { status: 201 });
  }
  
  // Delete 
  export async function DELETE(req) {
    const { id } = await req.json();
    await pool.query('DELETE FROM products WHERE id = $1', [id]);
    return new Response(null, { status: 204 });
  }
  
  // Update
  export async function PUT(req) {
    const { id, name, price, image } = await req.json();
    const res = await pool.query(
      'UPDATE products SET name = $1, price = $2, image = $3 WHERE id = $4 RETURNING *',
      [name, price, image, id]
    );
    return new Response(JSON.stringify(res.rows[0]), { status: 200 });
  }