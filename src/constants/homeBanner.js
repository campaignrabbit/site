import React from 'react';
import $ from 'jquery';

class homeTabs extends React.Component {
    componentDidMount() {
        $('.home-tabs ul.tabs li.tab-link').click(function (e) {
            e.preventDefault();
            var tab_id = $(this).attr('data-tab');

            $('.home-tabs ul.tabs li.tab-link').removeClass('current');
            $('.home-tabs .tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');

        })

        $.fn.cycle = function (timeout, cls) {
            var l = this.length,
                current = 0,
                prev = 0,
                elements = this;

            if (this.filter('.current').length > 0) {
                current = this.index(this.filter('.current')[0]) + 1;
                prev = current - 1;
            }

            function next() {
                elements.eq(prev).removeClass(cls);
                elements.eq(current).addClass(cls);
                prev = current;
                current = (current + 1) % l;
                setTimeout(next, timeout);
            }

            setTimeout(next, timeout);
            return this;
        };

        $('.home-tabs ul.tabs li.tab-link').cycle(8000, 'current');
        $('.home-tabs .tab-content').cycle(8000, 'current');

        // var tabChange = function () {
        //     var tabs = $('.home-tabs ul.tabs li.tab-link');
        //     var active = tabs.filter('.current');
        //     var next = active.next('li').length ? active.next('li') : tabs.filter(':first-child');
        //     next.tab('show');
        // };
        // var tabCycle = setInterval(tabChange, 5000);
        // $('.home-tabs ul.tabs li.tab-link').on('click', function (e) {
        //     e.preventDefault();
        //     clearInterval(tabCycle);
        //     setTimeout(function () {
        //     }, 3000);
        // });
    }

    render() {
        return (
            <div className="home-tabs">
                <ul className="tabs">
                    <li className="tab-link current" data-tab="hometab-1">
                        <img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/home-banner/icons/robot.png`}
                             className="img-responsive tab-image" alt="Email Automation"/>
                        <span>Email Automation</span>
                    </li>
                    <li className="tab-link" data-tab="hometab-2">
                        <img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/home-banner/icons/popup.png`}
                             className="img-responsive tab-image" alt="Triggered PopUps"/>
                        <span>Triggered PopUps</span>
                    </li>
                    <li className="tab-link" data-tab="hometab-3">
                        <img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/home-banner/icons/shopping.png`}
                             className="img-responsive tab-image" alt="Abandoned Cart Recovery"/>
                        <span>Abandoned Cart Recovery</span>
                    </li>
                    <li className="tab-link" data-tab="hometab-4">
                        <img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/feature-icons/mail-builder.png`}
                             className="img-responsive tab-image" alt="Visual Email Builder"/>
                        <span>Visual Email Builder</span>
                    </li>
                </ul>
                <div id="hometab-1" className="tab-content current">
                    <img src={`${process.env.GATSBY_CR_MEDIA_URL}/images/home-banner/Email-Automation.png`}
                         className="img-responsive" alt="Email Automation"/>
                </div>
                <div id="hometab-2" className="tab-content">
                    <img className="img-responsive"
                         src={`${process.env.GATSBY_CR_MEDIA_URL}/images/home-banner/Triggered-PopUps.png`}
                         alt="Triggered PopUps"/>
                </div>
                <div id="hometab-3" className="tab-content">
                    <img className="img-responsive"
                         src={`${process.env.GATSBY_CR_MEDIA_URL}/images/home-banner/Abandoned-Cart-Recovery.png`}
                         alt="Abandoned Cart Recovery"/>
                </div>
                <div id="hometab-4" className="tab-content">
                    <img className="img-fluid"
                         src={`${process.env.GATSBY_CR_MEDIA_URL}/images/home-banner/Visual-Email-Builder.png`}
                         alt="Visual Email Builder"/>
                </div>
            </div>
        )
    }
}

export default homeTabs;
