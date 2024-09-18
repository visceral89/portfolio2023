"use client";
import { useState } from "react";

export const IconNextJS = () => {
	const [isHover, setHover] = useState(false);

	return (
		<div
			className='gridItem'
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			{isHover ? (
				<svg
					width='100'
					height='100'
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g id='nextjs2'>
						<g id='nextjs2_2'>
							<path
								id='Vector'
								d='M50 99.9996C77.6142 99.9996 100 77.6139 100 49.9996C100 22.3854 77.6142 -0.000366211 50 -0.000366211C22.3858 -0.000366211 0 22.3854 0 49.9996C0 77.6139 22.3858 99.9996 50 99.9996Z'
								fill='white'
							/>
							<path
								id='Vector_2'
								d='M83.06 87.511L38.4122 29.9996H30V69.983H36.7298V38.546L77.7773 91.5803C79.6294 90.3405 81.394 88.9804 83.06 87.511Z'
								fill='url(#paint0_linear_790_6564)'
							/>
							<path
								id='Vector_3'
								d='M70.5558 29.9996H63.8892V69.9996H70.5558V29.9996Z'
								fill='url(#paint1_linear_790_6564)'
							/>
						</g>
					</g>
					<defs>
						<linearGradient
							id='paint0_linear_790_6564'
							x1='60.5555'
							y1='64.7219'
							x2='80.2778'
							y2='89.1663'
							gradientUnits='userSpaceOnUse'>
							<stop />
							<stop offset='1' stop-color='white' stop-opacity='0' />
						</linearGradient>
						<linearGradient
							id='paint1_linear_790_6564'
							x1='67.2225'
							y1='29.9996'
							x2='67.1109'
							y2='59.3748'
							gradientUnits='userSpaceOnUse'>
							<stop />
							<stop offset='1' stop-color='white' stop-opacity='0' />
						</linearGradient>
					</defs>
				</svg>
			) : (
				<svg
					width='100'
					height='100'
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g id='nextjs2' clip-path='url(#clip0_790_10145)'>
						<path
							id='Vector'
							d='M50 100C77.6 100 100 77.6 100 50C100 22.4 77.6 0 50 0C22.4 0 0 22.4 0 50C0 77.6 22.4 100 50 100Z'
							fill='black'
						/>
						<path
							id='Vector_2'
							d='M83.1 87.5L38.4 30H30V70H36.7V38.5L77.7 91.5C79.6 90.3 81.4 89 83.1 87.5Z'
							fill='url(#paint0_linear_790_10145)'
						/>
						<path
							id='Vector_3'
							d='M70.5999 30H63.8999V70H70.5999V30Z'
							fill='url(#paint1_linear_790_10145)'
						/>
					</g>
					<defs>
						<linearGradient
							id='paint0_linear_790_10145'
							x1='51.7943'
							y1='71.7906'
							x2='71.5166'
							y2='96.235'
							gradientUnits='userSpaceOnUse'>
							<stop stop-color='white' />
							<stop offset='1' stop-color='white' stop-opacity='0' />
						</linearGradient>
						<linearGradient
							id='paint1_linear_790_10145'
							x1='67.2984'
							y1='29.9872'
							x2='67.1868'
							y2='59.3624'
							gradientUnits='userSpaceOnUse'>
							<stop stop-color='white' />
							<stop offset='1' stop-color='white' stop-opacity='0' />
						</linearGradient>
						<clipPath id='clip0_790_10145'>
							<rect width='100' height='100' fill='white' />
						</clipPath>
					</defs>
				</svg>
			)}
			<p>NextJS</p>
		</div>
	);
};

export const IconThreeJS = () => {
	const [isHover, setHover] = useState(false);

	return (
		<div
			className='gridItem'
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			{isHover ? (
				<svg
					width='103'
					height='104'
					viewBox='0 0 103 104'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g id='threejs' clip-path='url(#clip0_790_10629)'>
						<path
							id='Vector'
							d='M26.7 102L2 2L101 30.5L26.7 102Z'
							stroke='black'
							stroke-width='2.2865'
							stroke-miterlimit='10'
							stroke-linejoin='round'
						/>
						<path
							id='Vector_2'
							d='M51.5 16.3L63.8 66.3001L14.4 52L51.5 16.3Z'
							stroke='black'
							stroke-width='2.2865'
							stroke-miterlimit='10'
							stroke-linejoin='round'
						/>
						<path
							id='Vector_3'
							d='M39.2 58.8L33.1 34L57.7 41L39.2 58.8Z'
							stroke='black'
							stroke-width='2.2865'
							stroke-miterlimit='10'
							stroke-linejoin='round'
						/>
						<path
							id='Vector_4'
							d='M27 9.1001L33.1 34.0001L8.5 26.9001L27 9.1001Z'
							stroke='black'
							stroke-width='2.2865'
							stroke-miterlimit='10'
							stroke-linejoin='round'
						/>
						<path
							id='Vector_5'
							d='M76.1 23.3L82.2 48.1L57.6 41L76.1 23.3Z'
							stroke='black'
							stroke-width='2.2865'
							stroke-miterlimit='10'
							stroke-linejoin='round'
						/>
						<path
							id='Vector_6'
							d='M39.2 58.8L45.3 83.6L20.7 76.5L39.2 58.8Z'
							stroke='black'
							stroke-width='2.2865'
							stroke-miterlimit='10'
							stroke-linejoin='round'
						/>
					</g>
					<defs>
						<clipPath id='clip0_790_10629'>
							<rect width='103' height='104' fill='white' />
						</clipPath>
					</defs>
				</svg>
			) : (
				<svg
					width='103'
					height='104'
					viewBox='0 0 103 104'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g id='threejs'>
						<g id='threejs_2'>
							<path
								id='Vector'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M26.7016 102L2 2.00049L101.023 30.5097L26.7016 102Z'
								stroke='white'
								stroke-width='2.2865'
								stroke-miterlimit='10'
								stroke-linejoin='round'
							/>
							<path
								id='Vector_2'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M51.4929 16.2579L63.8349 66.2728L14.3511 52.0136L51.4929 16.2579Z'
								stroke='white'
								stroke-width='2.2865'
								stroke-miterlimit='10'
								stroke-linejoin='round'
							/>
							<path
								id='Vector_3'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M39.2146 58.7971L33.0845 33.9514L57.6689 41.0087L39.2146 58.7971Z'
								stroke='white'
								stroke-width='2.2865'
								stroke-miterlimit='10'
								stroke-linejoin='round'
							/>
							<path
								id='Vector_4'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M26.9519 9.13611L33.082 33.9818L8.49756 26.9245L26.9519 9.13611Z'
								stroke='white'
								stroke-width='2.2865'
								stroke-miterlimit='10'
								stroke-linejoin='round'
							/>
							<path
								id='Vector_5'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M76.1186 23.2992L82.2487 48.1449L57.6643 41.0876L76.1186 23.2992Z'
								stroke='white'
								stroke-width='2.2865'
								stroke-miterlimit='10'
								stroke-linejoin='round'
							/>
							<path
								id='Vector_6'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M39.2173 58.8142L45.3474 83.6599L20.7629 76.6026L39.2173 58.8142Z'
								stroke='white'
								stroke-width='2.2865'
								stroke-miterlimit='10'
								stroke-linejoin='round'
							/>
						</g>
					</g>
				</svg>
			)}
			<p>ThreeJS</p>
		</div>
	);
};
export const IconJS = () => {
	const [isHover, setHover] = useState(false);

	return (
		<div
			className='gridItem'
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			{isHover ? (
				<svg
					width='100'
					height='100'
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g id='js'>
						<g id='js_2'>
							<path id='Vector' d='M100 0.000488281H0V100H100V0.000488281Z' fill='#F7DF1E' />
							<path
								id='Vector_2'
								d='M67.1745 78.1259C69.1888 81.4148 71.8094 83.8323 76.4444 83.8323C80.338 83.8323 82.8253 81.8862 82.8253 79.1973C82.8253 75.9751 80.2698 74.8339 75.9841 72.9592L73.6348 71.9513C66.8539 69.0624 62.3491 65.4434 62.3491 57.7926C62.3491 50.745 67.719 45.3799 76.111 45.3799C82.0856 45.3799 86.3809 47.4592 89.4761 52.9037L82.1586 57.6021C80.5475 54.7132 78.8094 53.5751 76.111 53.5751C73.3587 53.5751 71.6142 55.3212 71.6142 57.6021C71.6142 60.4212 73.3602 61.5624 77.392 63.3085L79.7412 64.3148C87.7253 67.7386 92.2333 71.2291 92.2333 79.0767C92.2333 87.537 85.5872 92.1719 76.6618 92.1719C67.9348 92.1719 62.2967 88.0132 59.538 82.5624L67.1745 78.1259ZM33.9793 78.9402C35.4555 81.5592 36.7983 83.7735 40.0269 83.7735C43.1142 83.7735 45.0618 82.5656 45.0618 77.8688V45.9164H54.4586V77.9958C54.4586 87.7259 48.7539 92.1545 40.4269 92.1545C32.9031 92.1545 28.546 88.2608 26.3301 83.5712L33.9793 78.9402Z'
								fill='black'
							/>
						</g>
					</g>
				</svg>
			) : (
				<svg
					width='100'
					height='100'
					viewBox='0 0 100 100'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g id='js' clip-path='url(#clip0_790_8266)'>
						<path id='Vector' d='M100 0H0V100H100V0Z' fill='#D1D1D1' />
						<path
							id='Vector_2'
							d='M67.2 78.0999C69.2 81.3999 71.8 83.7999 76.5 83.7999C80.4 83.7999 82.9 81.8999 82.9 79.1999C82.9 75.9999 80.3 74.7999 76.1 72.9999L73.8 71.9999C67 69.0999 62.5 65.4999 62.5 57.7999C62.5 50.7999 67.9 45.3999 76.3 45.3999C82.3 45.3999 86.6 47.4999 89.7 52.8999L82.4 57.5999C80.8 54.6999 79.1 53.5999 76.4 53.5999C73.6 53.5999 71.9 55.2999 71.9 57.5999C71.9 60.3999 73.6 61.5999 77.7 63.2999L80 64.2999C88 67.6999 92.5 71.1999 92.5 79.0999C92.5 87.5999 85.9 92.1999 76.9 92.1999C68.2 92.1999 62.5 87.9999 59.8 82.5999L67.2 78.0999ZM34 78.8999C35.5 81.4999 36.8 83.6999 40 83.6999C43.1 83.6999 45 82.4999 45 77.7999V45.7999H54.4V77.9999C54.4 87.6999 48.7 92.1999 40.4 92.1999C32.9 92.1999 28.5 88.2999 26.3 83.5999L34 78.8999Z'
							fill='black'
						/>
					</g>
					<defs>
						<clipPath id='clip0_790_8266'>
							<rect width='100' height='100' fill='white' />
						</clipPath>
					</defs>
				</svg>
			)}
			<p>ThreeJS</p>
		</div>
	);
};
