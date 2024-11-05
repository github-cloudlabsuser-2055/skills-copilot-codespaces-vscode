-- Create a table for 5 products with product names and prices.

CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

INSERT INTO products (product_name, price) VALUES
('Apple iPhone 7', 649.00),
('Samsung Galaxy S7', 599.00),
('Google Pixel', 649.00),
('Apple iPhone 6s', 549.00),
('OnePlus 3T', 439.00);
 
