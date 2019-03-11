---
path: "/docs/segment/what-is-a-segment"
updated: "2019-02-20"
title: "What is a segment ?"
description: "Let&#39;s get introduced to the term Segment"
author: "Kowsaliya"
---
## What are segments ?
* Segments are grouping a set of customers for your reference based on certain conditions.
* Segments are an optional setup. 
* Now, since we know that segments are nothing but setting up conditions. It's time to get familiar with the conditions. 

Campaignrabbit offers 15+ conditions with each condition having different attribute.
The available conditions are 

Name
E-mail
Company
City
Country
Region
Product Name
Sku
Price
Total spent
Total orders
Items in order
Last ordered on
Signed up
Order status
Customer Group
Last Clicked
Last Contacted
Last Opened

A prologue of each of the conditions:
***Name:***
Providing customer name.
If you want to find out the products purchased by a particular customer you can use this condition.

***E-mail:***
Customer's mail id.
Like generate mails to customers whose mail id contains "@gmail.com".

***Company:***
Name of the company/store.

***City:***
Place of residence.

***Country:***
Billing country as given by customer.
Example:
You want to send mails only to customers from USA. This condition comes to the rescue.

***Region:***
Customer's Province/State.

***Product Name:***
Name of the product purchased.
Example:
You want to reach customers who have previously purchased hard disks.

***Sku:***
Store Keeping Unit (SKU) is a unique number assigned to each product.This helps in sorting customers based on the unique id number.
Example:
The SKU id for 16GB pen drive is 006. Use this condition to find out all the customers who have purchased 16GB pendrive.
The difference between product name and Sku id is that sometimes you know only the product name and not the id number. You can use product name condition in that case.

***Price:***
Cumulative price range of the products purchased from Order 1 to Order n. The amount entered here will be considered in USD.

***Total Spent:***
The total amount spent on one order.

***Total orders:***
Number of orders billed so far.
Example:
A total of 4 orders have been billed so far.

***Items in order:***
The quantity of items purchased in one order.
Example:
5 items purchased in one order.

***Last ordered on:***
Either an exact date or purchased dates before/after.
The value entered here will be calculated in days.
Example: Less than 5 days ago.

***Signed up:***
The date in which the user first signed up and created an account.
The value entered here will be calculated in days.
Example: Before 2 days ago.

***Order Status:***
The order status of the purchased product. The Order status can be
Unpaid
Paid
Pending
Cancelled
Failed
Completed

***Customer Group:***
Grouping Customers based on their role.
Example:
Wholesale customer
Subscriber

***Last Opened:***
You have created a campaign and you can check how many customers have opened the campaign mail.
Example:
Exactly 8 days ago.

***Last Contacted:***
This condition filters the list of customers based on the precious campaign mail sent.
This condition will be helpful in sending followup and drip campaigns.
Example:
Last contacted in more than 4 days.
A campaign mail will again be sent for all user's who have received a mail before 4 days.

***Last Clicked:***
Let's say, you have set a campaign is set and you included links to the product pages.
Now, you can fetch the list of customers who have clicked the links or clicked the product images.
Example:
On 26/06/2018.

Each of these conditions have different set of attributes.
Some commonly used attributes are,
Name is John
Email contains @gmail.com
Company starts with fly
City ends with ing
Region Is not Dallas
Country is USA
Signed up on 06/06/2018.
Last ordered on Less than 10 days ago.

By default, there are three segments created when a user registers with campaign rabbit. Cool right !

Primarily, conditions work based on two type of operations.
![Image](https://raw.githubusercontent.com/shreegowtham27/site-1/dev_v2/src/images/docs/segmentation/original.png)
***Match All:***
The segment displays the list of customers only when all the given conditions are met.
Works like and operation.
Example:
The order status is set to complete and the country is given as USA. When match all is given, list of customers whose country is USA with the order status as completed will be displayed.

***Match Any:***
The display result is list of customers if any one of the given condition is satisfied.
Works like or operation.
Example:
The last ordered is lesser than 10 days and the price is greater than $1000. When Match any is given, it lists both, the price greater than $1000 and the last ordered is less than 10 days.

Segments are an optional setup
This might have been a little bit monotonous but trust me, this article will be of great use when you wish to work independently.  

Check an <link-text url="https://docs.campaignrabbit.com/segmentation/country-and-order-status" rel="noopener" target="_blank">example</link-text> on how to create a segment.

Start working !


**I have more questions**

Just leave your question and email by clicking the Live Chat button below or submit your support request to <hello@campaignrabbit.com>

We are always happy to assist you :)