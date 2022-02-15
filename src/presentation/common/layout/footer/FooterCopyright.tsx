import React from 'react';
import Image from 'next/image';

const FooterCopyright = () => (
    <div className="ps-footer__copyright">
        <p>&copy;  2022 TACS. Все права защищены</p>
        <p>
            <span>Наши системы оплаты:</span>
            <a href="https://cloudpayments.kz/">
                <Image width={70} quality={100} height={45} src="/static/img/payment-method/1.webp" alt="CloudPayments" />
            </a>
            <a href="https://www.mastercard.kz/">
                <Image width={70} quality={100} height={45} src="/static/img/payment-method/2.webp" alt="MasterCard" />
            </a>
            <a href="https://www.visa.com.kz/">
                <Image width={70} quality={100} height={22} src="/static/img/payment-method/3.webp" alt="Visa" />
            </a>
        </p>
    </div>
);

export default FooterCopyright;
