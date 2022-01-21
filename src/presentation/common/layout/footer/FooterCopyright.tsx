import React from 'react';
import Image from 'next/image';

const FooterCopyright = () => (
    <div className="ps-footer__copyright">
        <p>&copy;  2021 CATS. Все права защищены</p>
        <p>
            <span>Наши системы оплаты:</span>
            <a href="https://cloudpayments.kz/">
                <Image width={70} quality={100} height={45} src="/static/img/payment-method/1.png" alt="CloudPayments" />
            </a>
            <a href="https://www.mastercard.kz/">
                <Image width={70} quality={100} height={45} src="/static/img/payment-method/2.png" alt="MasterCard" />
            </a>
            <a href="https://www.visa.com.kz/">
                <Image width={70} quality={100} height={22} src="/static/img/payment-method/3.png" alt="Visa" />
            </a>
        </p>
    </div>
);

export default FooterCopyright;
