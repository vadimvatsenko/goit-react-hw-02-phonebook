import style from './section.module.css'

export default function Section({ title, children }) {
    return (
        <section className={style.phonebook}>
            <h1>{title}</h1>
            {children}
        </section>
    );
}