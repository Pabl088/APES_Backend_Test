/*
I made this script in NodeJs assuming that the data is in a Postrgres database, in tables called production_orders (PO) and product_orders_lines (POL)
and the pg module is used to interact with the database.
The updateOrder function returns true if it succeeds in carrying out all instructions or performs a ROLLBACK and throws an error if any problem occurs.
*/

const { Pool } = require('pg');

const pool = new Pool({
    user: 'user',
    host: 'database.server.com',
    database: 'database',
    password: 'password',
    port: 5432,
});

async function updateOrder(sku_code, order_number) {

    await pool.query('BEGIN');

    try {
        // Get the product order line
        const POLResult = await pool.query(
            'SELECT * FROM product_orders_lines WHERE sku_code = $1 AND order_id = (SELECT id FROM production_orders WHERE order_number = $2)',
            [sku_code, order_number]
        );
        const POL = POLResult.rows[0];

        // Update the product order line
        await pool.query(
            'UPDATE product_orders_lines SET amount_validated = amount_validated + 1, status = CASE WHEN amount_validated + 1 < amount THEN \'incomplete\' WHEN amount_validated + 1 = amount THEN \'complete\' END WHERE sku_code = $1',
            [POL.sku_code]
        );

        // Update the production order
        await pool.query(
            'UPDATE production_orders SET total_validated = total_validated + 1, status = CASE WHEN total_validated + 1 < total_amount THEN \'incomplete\' WHEN total_validated + 1 = total_amount THEN \'complete\' END WHERE id = $1',
            [POL.order_id]
        );

        await pool.query('COMMIT');
        return true;
    } catch (err) {
        await pool.query('ROLLBACK');
        throw err;
    }
}
