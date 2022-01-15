import React from 'react';
import Image from 'next/image';

const FooterCopyright = () => (
    <div className="ps-footer__copyright">
        <p>&copy;  2021 CATS. Все права защищены</p>
        <p>
            <span>Наши системы оплаты:</span>
            <a href="#">
                <Image width={50} height={20} src="/static/img/payment-method/1.jpg" alt="Martfury" />
            </a>
            <a href="#">
                <Image width={50} height={20} src="/static/img/payment-method/2.jpg" alt="Martfury" />
            </a>
            <a href="#">
                <Image width={50} height={20} src="/static/img/payment-method/3.jpg" alt="Martfury" />
            </a>
            <a href="#">
                <Image width={50} height={20} src="/static/img/payment-method/4.jpg" alt="Martfury" />
            </a>
            <a href="#">
                <Image width={50} height={20} src="/static/img/payment-method/5.jpg" alt="Martfury" />
            </a>
        </p>
    </div>
);

export default FooterCopyright;
