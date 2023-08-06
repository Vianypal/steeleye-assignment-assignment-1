This project is a dashboard app that displays a list of orders and provides various features to interact with the data.

Features Added
Display Total Number of Orders:

The header title now displays the total number of orders in the format Orders: {mockdata.result.length}.
Display Order Submitted Date:

The List component has been updated to combine the order data with timestamps from the timestamps object. The order submitted date is now displayed in the table.
Display Currency Value for Order Volume:

The Dashboard component now passes the selected currency to the List component, which then displays the order volume in the selected currency.
Search Feature on Order IDs:

The Dashboard component now includes a search bar that allows users to search for specific order IDs. The list is filtered based on the search text.
Clear Console Errors and Warnings:

The code has been updated to fix any undefined variables, incorrect imports, or missing dependencies, clearing all console errors and warnings.
Populating Card on Row Click:

The List component now accepts an onRowClick prop, and when a row is clicked, it triggers the handleRowClick function in the Dashboard component. The selectedOrderDetails state is updated with the clicked row's data.
Getting Started
Clone the repository to your local machine.
bash
Copy code
git clone https://github.com/your-username/dashboard-app.git
Install the required dependencies.
bash
Copy code
cd dashboard-app
npm install
Start the development server.
bash
Copy code
npm start
Open the app in your web browser.
bash
Copy code
http://localhost:3000
