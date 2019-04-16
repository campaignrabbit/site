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
        ],
        BUTTON_LINK: '/docs/integrations',
    },
    {
        ICON: <MdSend/>,
        TITLE: 'Email Marketing',
        LINKS: [
            { URL: '/docs/campaigns/how-campaigns-work', TEXTNODE: 'How campaigns work?' },
            { URL: '/docs/campaigns/automated-campaigns/cart-abandonment-reminders-campaigns', TEXTNODE: 'Recover Abandoned Carts' },
            { URL: '/docs/campaigns/automated-campaigns/the-welcome-series-campaign', TEXTNODE: 'Welcome Emails' }
        ],
        BUTTON_LINK: '/docs/campaigns',
    },
    {
        ICON: <MdSend/>,
        TITLE: 'Popups',
        LINKS: [
            { URL: '/docs/campaigns/popups/create-your-first-on-site-messaging-campaign', TEXTNODE: 'Create your first on-site messaging campaign' },
            { URL: '/docs/campaigns/popups/create-a-slide-in-campaign', TEXTNODE: 'Create a slide in campaign' },
            { URL: '/docs/campaigns/popups/create-a-popup-campaign', TEXTNODE: 'Create a popup campaign' },
        ],
        BUTTON_LINK: '/docs/segmentation',
    },
];

export default HOME_CARDS;
