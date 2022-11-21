import style from './section.module.scss'

export default function Section({ title, children }) {
    return (
        <section className={style.phonebook}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}