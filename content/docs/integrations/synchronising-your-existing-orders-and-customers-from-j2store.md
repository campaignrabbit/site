---
path: "/docs/integrations/Synchronising existing orders and customers from J2Storesynchronising-existing-orders-and-customers-from-j2store"
updated: "2019-02-20"
title: "Synchronising existing orders and customers from J2Store"
description: "Learn how to send the existing order and customer data to Campaignrabbit"
author: "Kowsaliya"
category: "integrations"
---
Once connected, your store can automatically send the new orders and customers to Campaignrabbit. That is seamless.

This guide explains how you can synchronize your existing order and customer data to Campaignrabbit.

**NOTE: This is a one time process. No need to repeat it.**

### Step 1: Create a cron job
* Go to J2Store -> Apps and open the Campaignrabbit app.
![Dashboard](https://raw.githubusercontent.com/campaignrabbit/cr-media/master/images/docs/integrations/j2store/screenshot-demo.flycart.org-2019.02.08-17-58-43.png)
* Navigate to "Order and Cron job" settings.
* Copy the CRON URL.
![cronjob](https://raw.githubusercontent.com/campaignrabbit/cr-media/master/images/docs/integrations/j2store/cronjobj2.png)
Now open the Cron Job manager in your hosting cPanel and add a cron job.

There is a <link-text url="https://www.j2store.org/support/user-guide/creating-cron-job-on-your-server.html" rel="noopener" target="_blank"> documentation in J2Store that explains the cron job process</link-text> in detail.
### Step 2:  Synchronise the data
* Go to J2Store -> Apps and open the Campaignrabbit app.
* Navigate to the Synchronize tab.
* Click "Synchronize Customers" and "Synchronizse Orders" buttons.
![customer-sync](https://raw.githubusercontent.com/campaignrabbit/cr-media/master/images/docs/integrations/j2store/SyncCustomerJ2.png)
This will initiate a sync and you can see that the existing customers and order data are synced in Campaignrabbit.

## What's next:
Create <link-text url="https://docs.campaignrabbit.com/campaigns/how-campaigns-work" rel="noopener" target="_blank">campaigns.</link-text>

**I have more questions**
https://raw.githubusercontent.com/campaignrabbit/cr-media/master/images/docs/integrations/j2store/SyncCustomerJ2.png
Just leave your question and email by clicking the Live Chat button below or submit your support request to <hello@campaignrabbit.com>

We are always happy to assist you :)
