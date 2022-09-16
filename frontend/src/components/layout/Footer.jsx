import React from 'react';

const Footer = () => {
	return (
		<>
			<div className='flex flex-col justify-between bg-tertiary text-white h-footer py-3'>
				<div className='flex flex-row justify-evenly items-center h-full'>
					<div>
						<img
							src='logos/logo-4-md.svg'
							alt=''
						/>
					</div>
					<div className='flex flex-row gap-5'>
						<img
							src='logos/email.svg'
							alt=''
						/>
						<img
							src='logos/whatsapp.svg'
							alt=''
						/>
						<img
							src='logos/insta.svg'
							alt=''
						/>
						<img
							src='logos/face.svg'
							alt=''
						/>
					</div>
					<div>
						<img
							src='logos/logo-5-md.svg'
							alt=''
						/>
					</div>
					<div className='flex flex-row gap-5'>
						<img
							src='logos/email.svg'
							alt=''
						/>
						<img
							src='logos/whatsapp.svg'
							alt=''
						/>
						<img
							src='logos/insta.svg'
							alt=''
						/>
						<img
							src='logos/face.svg'
							alt=''
						/>
						<img
							src='logos/linkedin.svg'
							alt=''
						/>
						<img
							src='logos/youtube.svg'
							alt=''
						/>
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
