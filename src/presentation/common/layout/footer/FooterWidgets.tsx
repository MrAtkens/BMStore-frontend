import React from 'react';
import Link from 'next/link';
import { ABOUT_US, CHECKOUT, CONTACTS, ORDERS, SHOP_PAGE, USER } from 'constant/routes';

const FooterWidgets = () => (
    <div className="ps-footer__widgets">
        <aside className="widget widget_footer widget_contact-us">
            <h4 className="widget-title">Контакты</h4>
            <div className="widget_content">
                <p>Звоните нам 24/7</p>
                <h3>1800 97 97 69</h3>
                <p>
                    502 New Design Str, Melbourne, Australia <br />
                    <a href="mailto:contact@martfury.co">contact@martfury.co</a>
                </p>
                <ul className="ps-list--social">
                    <li>
                        <a aria-label="facebook" className="facebook" href="#">
                            <i className='fa fa-facebook'/>
                        </a>
                    </li>
                    <li>
                        <a aria-label="twitter" className="twitter" href="#">
                            <i className='fa fa-twitter'/>
                        </a>
                    </li>
                    <li>
                        <a aria-label="google-plus" className="google-plus" href="#">
                            <i className='fa fa-google-plus'/>
                        </a>
                    </li>
                    <li>
                        <a aria-label="instagram" className="instagram" href="#">
                            <i className='fa fa-instagram'/>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Ссылки</h4>
            <ul className="ps-list--link">
                <li>
                    <Link passHref href={SHOP_PAGE()}>
                        <a>Магазин</a>
                    </Link>
                </li>
                <li>
                    <Link passHref href={ORDERS}>
                        <a>Заказы</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Компания</h4>
            <ul className="ps-list--link">
                <li>
                    <Link passHref href={ABOUT_US}>
                        <a>О нас</a>
                    </Link>
                </li>
                <li>
                    <Link passHref href={CONTACTS}>
                        <a>Контакты</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Магазин</h4>
            <ul className="ps-list--link">
                <li>
                    <Link passHref href={CHECKOUT}>
                        <a>Оплата</a>
                    </Link>
                </li>
                <li>
                    <Link passHref href={USER}>
                        <a>Аккаунт</a>
                    </Link>
                </li>
            </ul>
        </aside>
    </div>
);

export default FooterWidgets;
