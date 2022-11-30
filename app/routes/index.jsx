import { useLoaderData } from '@remix-run/react';
import { getGuitarras } from '~/models/guitarras.server';
import { getPosts } from '~/models/posts.server';
import { getCurso } from '~/models/curso.server';
import ListadoGuitarras from '~/components/listado-guitarras';
import Curso from '~/components/curso';
import ListadoPosts from '~/components/listado-posts';
import stylesGuitarras from '~/styles/guitarras.css';
import stylesPosts from '~/styles/blog.css';
import stylesCurso from '~/styles/curso.css';

export function meta() {
	return {
		title: 'GuitarLA - Index',
	};
}

export function links() {
	return [
		{
			rel: 'stylesheet',
			href: stylesGuitarras,
		},
		{
			rel: 'stylesheet',
			href: stylesPosts,
		},
		{
			rel: 'stylesheet',
			href: stylesCurso,
		},
	];
}

export async function loader() {
	const [guitarras, curso, posts] = await Promise.all([
		getGuitarras(),
		getCurso(),
		getPosts(),
	]);

	return { guitarras: guitarras.data, curso: curso.data, posts: posts.data };
}

function Index() {
	const { guitarras, curso, posts } = useLoaderData();

	return (
		<>
			<main className='contendor'>
				<ListadoGuitarras guitarras={guitarras} />
			</main>

			<Curso curso={curso.attributes} />

			<section className='contenedor'>
				<ListadoPosts posts={posts} />
			</section>
		</>
	);
}

export default Index;
