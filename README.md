# APES_Backend_Test

1. **Describe something new that you have learned last month?**  
Over the past month, I’ve gained a lot of valuable knowledge about using AWS services, specifically EC2, Lambda, and S3. I had the opportunity to deploy and update a website and scripts using these services. This experience has significantly enhanced my understanding of how to implement these tools effectively.

2. **Name some characteristics of Python and NodeJS?**

**Python:**
- Object-oriented
- Easy to learn
- Support for GUI
- High-level programming language
- Python code can run on a wide variety of Operating systems and platforms

**NodeJS:**
- Asynchronous Programming
- Single-thread
- Built in JavaScript

3. **What language do you prefer: NodeJS or Python. What is the reason for your decision?**  
I prefer Python because I believe it is a language that will have greater relevance in the future in areas of technology that are currently booming, such as artificial intelligence and data science.

4. **What are local variables and global variables in an execution context?**  
Local variables are declared inside a function or a block. They are created when the function starts execution and are lost when the function terminates.
Global variables are declared outside any function. They are created as execution starts and are lost when the program ends.

5. **What are microservices?**  
Microservices are like a bunch of small, separate teams working on different parts of a big project. Each team is responsible for one part and they work independently. They communicate with each other as needed. This makes it easier to manage the project and fix or improve parts of it without disrupting the whole thing.

6. **What is REST Web Services?**  
A way for software applications to comunicate to each other over the internet. They use a style of architecture called REST, this means they use standard web protocols like HTTP and methods like GET, POST, DELETE, and PUT to communicate.

7. **What are the core components of a HTTP Request?**  
- Method (GET, POST, DELETE, PUT): It tells the website or api what you want to do.
- Headers: They give information about who’s sending the request and how to send back the response.
- Body: It contains any extra data you want to send.
- HTTP Version: It tells the website which version of HTTP you’re using.

8. **What are the advantages of REST web services?**  
REST web services can handle lots of users and data, and they work well with different types of data and browsers. Each request is handled separately, making things more efficient. And they use standard HTTP methods (GET, POST, PUT, DELETE), they’re a good choice for building web applications.

9. **What is the difference between REST and GRAPHQL?**  
With REST, you have to ask different “endpoints” for different pieces of data. Sometimes this means you get too much data, or not enough.
GraphQL lets you ask for exactly what you need all at once. This can make your app faster and use less data. It’s easier to add new features without breaking old ones.

10. **SQL Case: A retail company maintains the data of its customers in the CUSTOMER table. Write a query to print the IDs and the NAMEs of the customers, sorted by CUSTOMER.NAME in descending order.**

Input Sample:

| ID | NAME | COUNTRY | CREDITS |
| --- | --- | --- | --- |
| 1 | Frances White | USA | 200350 |
| 2 | Carolyn Bradley | UK | 15354 |
| 3 | Annie Fernandez | France | 359200 |
| 4 | Ruth Hanson | Albania | 1060 |
| 5 | Paula Fuller | USA | 14789 |
| 6 | Bonnie Johnston | China | 100243 |
| 7 | Ruth Gutierrez | USA | 998999 |
| 8 | Ernest Thomas | Canada | 500500 |
| 9 | Joe Garza | UK | 18782 |
| 10 | Anne Harris | USA | 158367 |

Sample Output:

| ID | NAME |
|----|------|
| 4  | Ruth Hanson |
| 7  | Ruth Gutierrez |
| 5  | Paula Fuller |
| 9  | Joe Garza |
| 1  | Frances White |
| 8  | Ernest Thomas |
| 2  | Carolyn Bradley |
| 6  | Bonnie Johnston |
| 3  | Annie Fernandez |
| 10 | Anne Harris |

Query: `SELECT ID, NAME FROM CUSTOMER ORDER BY NAME DESC`

11. **Solve the following case:**

Case:

Techno Apes needs you to create a Python/NodeJS Script to resolve the following problem: The APES Platform has a module to manage the Production Orders (PO), these orders are composed of Product Order Lines.

A Production Order have the following data:

| id | order_number | location_name | status   | total_amount | total_validated |
|----|--------------|---------------|----------|--------------|-----------------|
| 10 | PO-3491      | Warehouse Demo| created  |     20       |        0        |

A Line have the following data:

| sku_code | name                | amount | amount_validated | order_id | status   |
|----------|---------------------|--------|------------------|----------|----------|
| SH8979   | Bolso Negro Jaguar  |   2    |        0         |    10    | created  |
| WH78978  | Zapato Sport Blanco |   3    |        0         |    10    | created  |

You have to create a Script where the input is a Sku Code and Order Number, the output would be the Order and the Order Lines updated with the amount validated data and the new status, for example: Input: sku_code: SH8979, order_number: PO-3491 Output:

| id | order_number | location_name | status      | total_amount | total_validated |
|----|--------------|---------------|-------------|--------------|-----------------|
| 10 | PO-3491      | Warehouse Demo| incomplete  |     20       |        1        |

| sku_code | name                | amount | amount_validated | order_id | status      |
|----------|---------------------|--------|------------------|----------|-------------|
| SH8979   | Bolso Negro Jaguar  |   2    |        1         |    10    | incomplete  |
| WH78978  | Zapato Sport Blanco |   3    |        0         |    10    | created     |

Conditions: If amount_validated is equal to cero, status is created.
If amount_validated is >0 and < amount, status is incomplete.
If amount_validated is == amount, status is complete.

## THIS ITEM IS RESOLVED IN THE FILE  [item11.js](./item11.js)

