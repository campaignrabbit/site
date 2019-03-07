import React from 'react';
import WooCommerce from '../images/integrations/logo-woocommerce.png';
import J2Store from '../images/integrations/j2store_logo.png';
import Magento from '../images/integrations/magento.png';
import Shopify from '../images/integrations/shopify.png';

const INTEGRATIONS = [
    {
        LOGO: WooCommerce,
        TITLE: 'WooCommerce',
        DESC: 'Download and install the plugin for WooCommerce and set it up in your WordPress site.',
        DLINK: 'https://github.com/campaignrabbit/campaignrabbit-integration-for-woocommerce/releases/download/stable/plugin-campaignrabbit-integration-for-woocommerce.zip'
    },
    {
        LOGO: J2Store,
        TITLE: 'J2Store',
        DESC: 'Download and install the plugin for J2Store and set it up in your Joomla site.',
        DLINK: 'https://github.com/campaignrabbit/j2store_campaignrabbit/releases/download/stable/pkg_app_campaignrabbit.zip'
    },
    {
        LOGO: Magento,
        TITLE: 'Magento',
        DESC: 'Coming soon..',
    },
    {
        LOGO: Shopify,
        TITLE: 'Shopify',
        DESC: 'Coming soon..',
    },
];

export default INTEGRATIONS;
