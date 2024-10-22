import { Link } from '../Link.jsx'

const i18n = {
    es: {
        title: 'Sobre nosotros',
        button: 'Ir a la home',
        description: '¡Hola! Me llamo Edwin Enrique y estoy creando un clon de React Router.'
    },
    en: {
        title: 'About us',
        button: 'Go to home page',
        description: 'Hi! My name is Edwin Enrique and I am creating a clone of React Router.'
    }
}

const useI18n = (lang) => {
    return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
    const il8n = useI18n(routeParams.lang ?? 'es')
    return (
        <>
            <h1>{il8n.title}</h1>
            <div>
                <img src='https://avatars.githubusercontent.com/u/130510440?v=4' alt='Foto de Edwin' />
            </div>
            <p>{il8n.description}</p>
            <Link to='/'>{il8n.button}</Link>
        </>
    )
}