---
path: "/docs/integrations/j2store"
updated: "2019-02-20"
title: "J2Store"
description: "Integrate your J2Store with Campaignrabbit."
author: "Kowsaliya"
category: "integrations"
---
J2Store is a popular eCommerce platform for the Joomla Content management system.

* **[Connection](#connection)**
* **[Synchronize Existing Customers and Orders](#synchronize)**

<a name="connection"></a>
### Connection
J2Store comes with a Campaignrabbit integration built-in.

1. Login to your Joomla Administration
2. Navigate to J2Store -> Apps -> Campaignrabbit
![j2store Installation](https://raw.githubusercontent.com/campaignrabbit/cr-media/master/images/docs/integrations/j2store/screenshot-demo.flycart.org-2019.02.08-17-58-43.png)
3. Enter the API Key and the API Secret in the respective fields(You can get these from the <link-text url="https://app.campaignrabbit.com/settings" target="_blank" rel="noopener">"Settings" section of Campaignrabbit app </link-text>)
![Connection](https://raw.githubusercontent.com/campaignrabbit/cr-media/master/images/docs/integrations/j2store/screenshot-demo.flycart.org-2019.02.08-18-01-04.png)
Once when the authentication message is "Success", you can see that your store is connected and the orders and customers start flowing in.

<a name="synchronize"></a>
### Synchronize existing orders and customers to Campaignrabbit

Once connected, your store can automatically send the new orders and customers to Campaignrabbit. That is seamless.

You can also synchronize your existing customers and orders to Campaignrabbit as well.

**NOTE: It is just a one time process. No need to repeat it.**

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

### What's next:
Create an <link-text url="https://www.campaignrabbit.com/docs/campaigns/how-campaigns-work" rel="noopener" target="_blank">Email Campaign</link-text>

### I have more questions
https://raw.githubusercontent.com/campaignrabbit/cr-media/master/images/docs/integrations/j2store/SyncCustomerJ2.png
Just leave your question and email by clicking the Live Chat button below or submit your support request to <support@campaignrabbit.com>

