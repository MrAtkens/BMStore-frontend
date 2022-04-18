import React from 'react';

const ContactInfo = () => (
	<div className="ps-contact-info">
		<div className="container">
			<div className="ps-section__header">
				<h3>Можете связаться с нами по любым вопросам</h3>
			</div>
			<div className="ps-section__content">
				<div className="row">
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 " />
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 ">
						<div className="ps-block--contact-info">
							<h4>Контакты</h4>
							<p>
								<a href="mailto:r.kaliaskar@mail.ru">
									r.kaliaskar@mail.ru
								</a>
								<span>{process.env['NEXT_PUBLIC_PHONE']}</span>
							</p>
						</div>
					</div>
					<div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 " />
				</div>
			</div>
		</div>
	</div>
);

export default ContactInfo;
