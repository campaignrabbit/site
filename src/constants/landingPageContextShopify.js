import React from 'react';

const HOME_CALLOUTS = [
    {
        IMGPOSITION: 'left',
        IMAGE: `${process.env.CR_MEDIA_URL}/images/features/abandoned-cart-recovery-2.png`,
        TITLE: 'Recover <span>Abandoned</span> Carts',
        COPY: 'Remind customers who have abandoned thier cart with automatic emails at set intervals and recover them.',
        LIST: [
            { TEXTNODE: 'Synchronising your existing orders and customers from WooCommerce' },
            { TEXTNODE: 'Synchronising your existing orders and customers from J2Store' },
        ],
        BUTTON: {
          TEXT: 'Get started',
          LINK: '/docs',
        },
    },
    {
        IMGPOSITION: 'bottom',
        IMAGE: `${process.env.CR_MEDIA_URL}/images/features/follow-up-emails-2.png`,
        TITLE: 'Follow-up Emails',
        COPY: 'Send a series of <strong>follow-up emails</strong> on autopilot and nurture your customers to build a lasting relationship.',
        BUTTON: {
          TEXT: 'Get started for free',
          LINK: '/docs',
        },
    },
    {
        IMGPOSITION: 'left',
        IMAGE: `${process.env.CR_MEDIA_URL}/images/features/win-back-inactive-customers-2.png`,
        TITLE: 'Win-Back Inactive Customers',
        COPY: 'Bring back <span class="underline">inactive customers</span> with a series of messages designed to drive repeat purchases.',
        LIST: [
            { TEXTNODE: 'Synchronising your existing orders and customers from WooCommerce' },
            { TEXTNODE: 'Synchronising your existing orders and customers from J2Store' },
        ],
    },
    {
        IMGPOSITION: 'top',
        IMAGE: `${process.env.CR_MEDIA_URL}/images/features/product-recommendations-2.png`,
        TITLE: 'Product Recommendations',
        COPY: 'Automatically boost sales by suggesting <span class="highlight">related products based on the purchase history</span> of customers.',
        LINKS: [
            { URL: '/docs/integrations/woocommerce', TEXTNODE: 'WooCommerce' },
            { URL: '/docs/integrations/j2store', TEXTNODE: 'J2Store' },
            { URL: '/docs/integrations/synchronising-your-existing-orders-and-customers-from-woocommerce', TEXTNODE: 'Synchronising your existing orders and customers from WooCommerce' },
            { URL: '/docs/integrations/synchronising-existing-orders-and-customers-from-j2store', TEXTNODE: 'Synchronising your existing orders and customers from J2Store' },
        ],
        BUTTON: {
          TEXT: 'Get started for free',
          LINK: '/docs',
        },
    },
    {
        IMGPOSITION: 'right',
        IMAGE: `${process.env.CR_MEDIA_URL}/images/features/follow-up-emails-2.png`,
        TITLE: 'Welcome Emails',
        COPY: 'Create a great first impression and start building a brand loyalty right from their sign-up.',
        LIST: [
            { TEXTNODE: 'Synchronising your existing orders and customers from WooCommerce' },
            { TEXTNODE: 'Synchronising your existing orders and customers from J2Store' },
        ],
        BUTTON: {
          TEXT: 'Get started for free',
          LINK: '/docs',
        },
    },
    {
        IMGPOSITION: 'left',
        IMAGE: `${process.env.CR_MEDIA_URL}/images/features/360-degree-view-of-customers-2.png`,
        TITLE: 'On-site messages',
        COPY: 'Engage and convert your visitors into customers with on-site popups / slide-ins / action bars.',
        LIST: [
            { TEXTNODE: 'Synchronising your existing orders and customers from WooCommerce' },
            { TEXTNODE: 'Synchronising your existing orders and customers from J2Store' },
        ],
        BUTTON: {
          TEXT: 'Get started',
          LINK: '/docs/integrations',
        },
    },
    {
        IMGPOSITION: 'right',
        IMAGE: `${process.env.CR_MEDIA_URL}/images/features/Drag-and-drop-visual-email-builder.png`,
        TITLE: 'Visual email builder',
        COPY: 'Create beautiful emails that reflect your brand with our intuitive drag-and-drop visual email builder.'
    },
    {
        IMGPOSITION: 'left',
        IMAGE: `${process.env.CR_MEDIA_URL}/images/features/supports-your-favourite-ecommerce-platform–woocommerce.png`,
        TITLE: 'Segmentation',
        COPY: 'Segment your customers based on their purchase history, total spending, location and more.',
        BUTTON: {
          TEXT: 'Get started for free',
          LINK: '/docs',
        },
    },
];

export default HOME_CALLOUTS;
