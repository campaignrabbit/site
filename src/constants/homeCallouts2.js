import React from 'react';
import customerView from '../images/home-icons/360-degree-view-of-customers.png';
import abandCart from '../images/home-icons/abandoned-cart-recovery.png';
import dragDrop from '../images/home-icons/drag-and-drop-visual-email-builder.png';
import followEmail from '../images/home-icons/follow-up-emails.png';
import productRec from '../images/home-icons/product-recommendations.png';
import winBack from '../images/home-icons/win-back-inactive-customers.png';

const HOME2_CALLOUTS = [
    {
        IMAGE: abandCart,
        TITLE: 'Abandoned cart recovery',
        COPY: 'Remind customers who have abandoned thier cart with automatic emails at set intervals and recover them.'
    },
    {
        IMAGE: followEmail,
        TITLE: 'Follow-up Emails',
        COPY: 'Automatically send email follow-ups to your customers. You can ask them for a feedback, a review, or just say hello'
    },
    {
        IMAGE: winBack,
        TITLE: 'Win-back Inactive Customers',
        COPY: 'Bring back inactive customers with special offers through automated email campaigns'
    },
    {
        IMAGE: productRec,
        TITLE: 'Product recommendations',
        COPY: 'Recommend “Socks” to customers when they purchase “shoes”. Start automatically sending relevant product recommendations'
    },
];

export default HOME2_CALLOUTS;
