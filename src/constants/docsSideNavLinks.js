import React from 'react';

const SIDENAV_LINKS = [
    {
        TITLE: 'Home',
        BUTTON_LINK: '/docs',
    },
    {
        TITLE: 'Getting started',
        LINKS: [
            { URL: '/docs/getting-started/what-is-campaignrabbit', TEXTNODE: 'What is Campaignrabbit' },
        ],
        BUTTON_LINK: '/docs/getting-started/what-is-campaignrabbit',
    },
    {
        TITLE: 'Integrations',
        LINKS: [
            { URL: '/docs/integrations/woocommerce', TEXTNODE: 'WooCommerce' },
            { URL: '/docs/integrations/j2store', TEXTNODE: 'J2Store' },
        ],
        BUTTON_LINK: '/docs/integrations/woocommerce',
    },
    {
        TITLE: 'Email Marketing',
        LINKS: [
            { URL: '/docs/campaigns/how-campaigns-work', TEXTNODE: 'How campaigns work?' },
            { URL: '/docs/campaigns/automated-campaigns/cart-abandonment-reminders-campaigns', TEXTNODE: 'Recover Abandoned Carts' },
            { URL: '/docs/campaigns/automated-campaigns/the-welcome-series-campaign', TEXTNODE: 'Welcome Emails' }
        ],
        BUTTON_LINK: '/docs/campaigns/how-campaigns-work',
    },
    {
        TITLE: 'Popups',
        LINKS: [
            { URL: '/docs/popups/create-your-first-on-site-messaging-campaign', TEXTNODE: 'Create your first on-site messaging campaign' },
            { URL: '/docs/popups/create-a-slide-in-campaign', TEXTNODE: 'Create a slide in campaign' },
            { URL: '/docs/popups/create-a-popup-campaign', TEXTNODE: 'Create a popup campaign' },
        ],
        BUTTON_LINK: '/docs/popups/create-your-first-on-site-messaging-campaign',
    },
    {
        TITLE: 'Segmentation',
        BUTTON_LINK: '/docs/segmentation/what-is-a-segment',
    },
];

export default SIDENAV_LINKS;
