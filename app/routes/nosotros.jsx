import imagen from '../../public/img/nosotros.jpg';
import styles from '~/styles/nosotros.css';

export function meta() {
	return {
		title: 'GuitarLA - Sobre Nosotros',
		description: 'Venta de guitarras, blog de musica, cursos',
	};
}

export function links() {
	return [
		{
			rel: 'stylesheet',
			href: styles,
		},
		{
			rel: 'preload',
			href: imagen,
			as: 'image',
		},
	];
}

function Nosotros() {
	return (
		<main className='contenedor nosotros'>
			<h2 className='heading'>Nosotros</h2>

			<div className='contenido'>
				<img src={imagen} alt='imagen sobre nosotros' />

				<div>
					<h3>Quienes Somos</h3>
					<p className='indent'>
						Pellentesque pharetra, nisi ac hendrerit posuere, felis ligula
						efficitur quam, non accumsan odio eros nec felis. Mauris molestie
						metus et est ullamcorper, sit amet tristique justo congue. Integer
						mattis, ante et bibendum tincidunt.
					</p>

					<p className='indent'>
						Sed efficitur, enim nec dapibus venenatis, ligula metus consequat
						ante, at aliquet urna massa nec arcu. Morbi id porttitor massa.
						Aliquam erat volutpat. Vestibulum molestie felis et diam tempor
						porttitor. Donec elit sapien, faucibus sit amet urna quis, malesuada
						eleifend dolor. Maecenas egestas nisi eget porttitor fermentum.
					</p>
				</div>
			</div>
		</main>
	);
}

export default Nosotros;
