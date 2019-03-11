import React from 'react';
import {MdSend} from 'react-icons/md';

const HOME_CARDS = [
    {
        ICON: <MdSend/>,
        TITLE: 'Getting started',
        LINKS: [
            { URL: '/docs/getting-started/what-is-campaignrabbit', TEXTNODE: 'What is Campaignrabbit' },
        ],
        BUTTON_LINK: '/docs/getting-started',
    },
    {
        ICON: <MdSend/>,
        TITLE: 'Integrations',
        LINKS: [
            { URL: '/docs/integrations/woocommerce', TEXTNODE: 'WooCommerce' },
            { URL: '/docs/integrations/j2store', TEXTNODE: 'J2Store' },
            { URL: '/docs/integrations/synchronising-your-existing-orders-and-customers-from-woocommerce', TEXTNODE: 'Synchronising your existing orders and customers from WooCommerce' },
            { URL: '/docs/integrations/synchronising-existing-orders-and-customers-from-j2store', TEXTNODE: 'Synchronising your existing orders and customers from J2Store' },
        ],
        BUTTON_LINK: '/docs/integrations',
    },
    {
        ICON: <MdSend/>,
        TITLE: 'Campaigns',
        LINKS: [
            { URL: '/docs/campaigns/how-campaigns-work', TEXTNODE: 'How campaigns work?' },
            { URL: '/docs/campaigns/working-with-editor', TEXTNODE: 'Working with Editor' },
            { URL: '/docs/campaigns/create-your-first-on-site-messaging-campaign', TEXTNODE: 'Create your first on-site messaging campaign' },
        ],
        BUTTON_LINK: '/docs/campaigns',
    },
    {
        ICON: <MdSend/>,
        TITLE: 'Segmentation',
        LINKS: [
            { URL: '/docs/segmentation/what-is-a-segment', TEXTNODE: 'What is a segment?' },
            { URL: '/docs/segmentation/country-and-order-status', TEXTNODE: 'Country and Order status' },
            { URL: '/docs/segmentation/customer-group-and-last-opened', TEXTNODE: 'Customer Group and Last opened' },
            { URL: '/docs/segmentation/order-status-and-total-spent', TEXTNODE: 'Order Status and Total Spent' },
        ],
        BUTTON_LINK: '/docs/segmentation',
    },
];

export default HOME_CARDS;
