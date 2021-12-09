import React from 'react';
import FooterWidgets from 'presentation/common/layout/footer/FooterWidgets';
import FooterCopyright from 'presentation/common/layout/footer/FooterCopyright';

const Footer = () => (
    <footer className="ps-footer ps-footer--3">
        <div className="container">
            <div className="ps-block--site-features ps-block--site-features-2">
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className='icon-rocket'/>
                    </div>
                    <div className="ps-block__right">
                        <h4>Бесплатная доставка</h4>
                        <p>На все товары, которые стоят больше 20000 тг.</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className='icon-sync'/>
                    </div>
                    <div className="ps-block__right">
                        <h4>90 дней на возврат</h4>
                        <p>Если товар не был повреждён</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className='icon-credit-card'/>
                    </div>
                    <div className="ps-block__right">
                        <h4>Безопасные платежи</h4>
                        <p>100% безопасные транзакции</p>
                    </div>
                </div>
                <div className="ps-block__item">
                    <div className="ps-block__left">
                        <i className='icon-bubbles'/>
                    </div>
                    <div className="ps-block__right">
                        <h4>Поддержка 24/7</h4>
                        <p>Качественная техподдержка</p>
                    </div>
                </div>
            </div>
            <FooterWidgets />
            <FooterCopyright />
        </div>
    </footer>
);

export default Footer;
