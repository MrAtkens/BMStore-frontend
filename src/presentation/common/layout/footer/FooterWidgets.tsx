import React from 'react';
import Link from 'next/link';
import { ABOUT_US, CONTACTS, SHOP_PAGE } from '../../../../constant/routes';

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
                        <a className="facebook" href="#">
                            <i className='fa fa-facebook'/>
                        </a>
                    </li>
                    <li>
                        <a className="twitter" href="#">
                            <i className='fa fa-twitter'/>
                        </a>
                    </li>
                    <li>
                        <a className="google-plus" href="#">
                            <i className='fa fa-google-plus'/>
                        </a>
                    </li>
                    <li>
                        <a className="instagram" href="#">
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
                    <Link href="/page/blank">
                        <a>Политика</a>
                    </Link>
                </li>
                <li>
                    <Link href={SHOP_PAGE()}>
                        <a>Магазин</a>
                    </Link>
                </li>
                <li>
                    <Link href="/page/blank">
                        <a>Возвраты</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Компания</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href={ABOUT_US}>
                        <a>О нас</a>
                    </Link>
                </li>
                <li>
                    <Link href={CONTACTS}>
                        <a>Контакты</a>
                    </Link>
                </li>
            </ul>
        </aside>
        <aside className="widget widget_footer">
            <h4 className="widget-title">Магазин</h4>
            <ul className="ps-list--link">
                <li>
                    <Link href="/account/checkout">
                        <a>Оплаты</a>
                    </Link>
                </li>
                <li>
                    <Link href="/account/user-information">
                        <a>Аккаунт</a>
                    </Link>
                </li>
            </ul>
        </aside>
    </div>
);

export default FooterWidgets;
