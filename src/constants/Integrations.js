import React from 'react';

const INTEGRATIONS = [
    {
        LOGO: `${process.env.CR_MEDIA_URL}/images/integrations/logo-woocommerce.png`,
        TITLE: 'WooCommerce',
        DESC: 'Download and install the plugin for WooCommerce and set it up in your WordPress site.',
        DLINK: 'https://github.com/campaignrabbit/campaignrabbit-integration-for-woocommerce/releases/download/stable/plugin-campaignrabbit-integration-for-woocommerce.zip'
    },
    {
        LOGO: `${process.env.CR_MEDIA_URL}/images/integrations/j2store_logo.png`,
        TITLE: 'J2Store',
        DESC: 'Download and install the plugin for J2Store and set it up in your Joomla site.',
        DLINK: 'https://github.com/campaignrabbit/j2store_campaignrabbit/releases/download/stable/pkg_app_campaignrabbit.zip'
    },
    {
        LOGO: `${process.env.CR_MEDIA_URL}/images/integrations/magento.png`,
        TITLE: 'Magento',
        DESC: 'Coming soon..',
    },
    {
        LOGO: `${process.env.CR_MEDIA_URL}/images/integrations/shopify.png`,
        TITLE: 'Shopify',
        DESC: 'Coming soon..',
    },
];

export default INTEGRATIONS;
