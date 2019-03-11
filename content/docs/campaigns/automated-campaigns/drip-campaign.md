---
path: "/docs/campaigns/drip-campaign"
updated: "2019-02-20"
title: "Drip Campaign"
description: "Let&#39;s create a Drip Campaign for Abandoned Cart"
author: "Kowsaliya"
---
**What is drip campaign?**
* Drip campaigns are composed of multiple emails sent out in specific time intervals.

**Why drip campaign?**
* The workflows are pre-defined and the emails are pre-written.
* Focuses on abandoned cart customers and this gesture will enlighten the customers which in turn increases revenue.

**Let's see on how to create a drip campaign for cart abandoned reminder:**
* Navigate to Campaigns tab from dashboard.
* Click on "Create New Campaign" from the "Automated Messages" section. 

![AutomatedMessages](https://raw.githubusercontent.com/shreegowtham27/site-1/dev_v2/src/images/docs/campaigns/automated-campaigns/AutomatedMessages.png)

The **target audience** for all the three campaigns will have the following condition:

*Campaign 1:*
Match all customers whose **order status** is unpaid and **last ordered** on "more than 2" 

*Campaign 2:*
Match all customers whose **order status** is unpaid and **last contacted** is "more than 3" days

*Campaign 3:*
Match all customers whose **order status** is unpaid and **last contacted** is "more than 7" days. 

For handy purpose, let's create a category named "Drip Campaign" and group the campaigns in that category. 

**Let's create the first campaign:**

![Filter](https://raw.githubusercontent.com/shreegowtham27/site-1/dev_v2/src/images/docs/campaigns/automated-campaigns/ea9d5002c15b5e28082a095f3e9069ee08900b342352811d79a1d1f8ce5bb982aband.png)

Map this campaign to the category "Drip Campaign" and make sure that the abandoned cart checkbox is enabled.

**Why an abandoned cart checkbox ?**

By default, campaign mails will be sent only once. 

Let's take a scenario where you have orders with order status as "unpaid" and last ordered is less than 1 day.  An abandoned cart email will be sent out in such cases.
Now, again there is another order(the same mail id) with the same conditions. Since the campaign mails are set to send only once, the mail will not be sent again in this case. To get it working (to send an abandoned mail for the second time), this checkbox should be enabled. 

![Abandoned](https://raw.githubusercontent.com/shreegowtham27/site-1/dev_v2/src/images/docs/campaigns/automated-campaigns/abandoned.png)

Draft a message body detailing the special discount available.

Example: Let's say, provide a 5% discount :) 

![Drip1](https://raw.githubusercontent.com/shreegowtham27/site-1/dev_v2/src/images/docs/campaigns/automated-campaigns/drip1_abandoned.png)

Correspondingly, create the second campaign and map it to "Drip Campaign" Category. 

![Drip2](https://raw.githubusercontent.com/shreegowtham27/site-1/dev_v2/src/images/docs/campaigns/automated-campaigns/drip2.png)

In the mail content, make sure to specific the discount available.
This time, enter a higher value percentage value.
Example: 10% discount.

Likewise, create the third campaign:

![Drip3](https://raw.githubusercontent.com/shreegowtham27/site-1/dev_v2/src/images/docs/campaigns/automated-campaigns/drip3.png)

Now, all the campaign mails are created and set to live and what happens is that, the campaign mails will be sent when the conditions are met.
Like example, when there is a customer who order status is "unpaid" and the last ordered is lesser than 1 day, first campaign mail will be sent out. 

The whole idea of this abandoned cart drip campaign is to keep in touch with the customer and trigger their interest by extending discount percentages. 

**Note:** 
* Make sure that the abandoned cart check box is enabled. Only when the checkbox is enabled, multiple campaign mails will be sent. 
* The abandoned cart checkbox should be enabled for all the three campaign mails.
* For cart abandoned drip campaigns, setting a start date is not mandatory. 
* Once the condition matches, campaign mail will automatically be sent to the target audience. 
* This is a one step activity that is done to run the campaign. All other customer's who are synced henceforth, will be mapped and mails will be sent when the condition is met. 

Don't optimize for conversions, optimize for revenue!! Get started optimizing today :) 


To know more about working with the editor types, click <link-text url="https://docs.campaignrabbit.com/campaigns/working-with-editor" rel="noopener" target="_blank">here</link-text>.

**I have more questions**

Just leave your question and email by clicking the Live Chat button below or submit your support request to <hello@campaignrabbit.com>

We are always happy to assist you :)