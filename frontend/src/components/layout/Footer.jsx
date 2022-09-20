import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<>
			<div className='h_line'></div>
			<div className='flex flex-col justify-between bg-tertiary text-white h-footer py-3'>
				<div className='flex flex-row justify-evenly items-center h-full'>
					<div>
						<img
							src='logos/logo-4-md.svg'
							alt=''
						/>
					</div>
					<div className='flex flex-row gap-5 items-center'>
						<a href='mailto:info.beloop@gmail.com'>
							<img
								src='logos/email.svg'
								alt=''
							/>
						</a>
						<a href='https://wa.me/56996917263'>
							<img
								src='logos/whatsapp.svg'
								alt=''
							/>
						</a>
						<a href='https://instagram.com/beloop.chile?igshid=YmMyMTA2M2Y='>
							<img
								src='logos/insta.svg'
								alt=''
							/>
						</a>
						<a href='https://www.facebook.com/profile.php?id=100063857302587'>
							<img
								src='logos/face.svg'
								alt=''
							/>
						</a>
					</div>
					<div>
						<img
							src='logos/logo-5-md.svg'
							alt=''
						/>
					</div>
					<div className='flex flex-row gap-5 items-center'>
						<a href='mailto:info.beloop@gmail.com'>
							<img
								src='logos/email.svg'
								alt=''
							/>
						</a>
						<a href='https://wa.me/56996917263'>
							<img
								src='logos/whatsapp.svg'
								alt=''
							/>
						</a>
						<a href='https://instagram.com/beloop.chile?igshid=YmMyMTA2M2Y='>
							<img
								src='logos/insta.svg'
								alt=''
							/>
						</a>
						<a href='https://www.facebook.com/profile.php?id=100063857302587'>
							<img
								src='logos/face.svg'
								alt=''
							/>
						</a>
						<a href=' https://www.linkedin.com/company/beloop/'>
							<img
								src='logos/linkedin.svg'
								alt=''
							/>
						</a>
						<a href='https://youtube.com/channel/UCpEIhOqFqSSJagBEx07hE2g'>
							<img
								src='logos/youtube.svg'
								alt=''
							/>
						</a>
					</div>
					<div>
						<p className='font-black text-copy'>HORARIO</p>
						<p className='font-black text-copy'>ATENCIÓN</p>
					</div>
					<div>
						<p>Lunes a Viernes de 10 Hrs a 18 Hrs</p>
					</div>
				</div>
				<div className='flex flex-row justify-between px-20 text-18 leading-18'>
					<p>Copyright | 2022 looptest.cl</p>
					<p>Términos y condiciones | Política de reembolso | Política de privacidad</p>
				</div>
			</div>
			<div className='h_line'></div>
		</>
	);
};

export default Footer;
