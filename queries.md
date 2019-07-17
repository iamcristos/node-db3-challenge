# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT p.ProductName, c.CategoryName 
FROM [Products] p
join Categories c 
on p.CategoryID = c.CategoryID


### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT o.OrderID, s.ShipperName FROM [Orders] o
join Shippers s on o.ShipperID = s.ShipperID
WHERE o.OrderDate <= "1997-09-01"

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT o.Quantity, p.ProductName
FROM [OrderDetails] o
JOIN Products p on o.ProductID = p.ProductID
WHERE OrderID = "10251"
ORDER BY p.ProductName

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT Orders.OrderID, Customers.CustomerName , Employees.LastName,Employees.FirstName
FROM [Orders]
JOIN Customers on Orders.CustomerID = Customers.CustomerID
JOIN Employees on Orders.EmployeeID = Employees.EmployeeID

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT c.CategoryName, COUNT (p.ProductName) Total 
FROM [Categories] c
JOIN Products p on c.CategoryID = p.CategoryID
GROUP BY c.CategoryID

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

SELECT o.OrderID, p.ProductName, COUNT (p.ProductID) ItemCount 
FROM [OrderDetails] o
JOIN Products p on o.ProductID = p.ProductID
GROUP BY p.ProductName