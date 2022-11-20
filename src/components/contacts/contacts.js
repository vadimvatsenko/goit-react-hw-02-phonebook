import style from "./contacts.module.css";

export default function Contacts({ title, contacts, onDeliteContact }) {
    console.log(contacts)
    return (
        <section className={style.contacts}>
            <h2>{title}</h2>
            <ul className={style.contacts__list}>
                {contacts.map(({ id, name, number }) => (
                    <li key={id} className={style.contacts__item}>
                        <p>{name}</p>
                        <p>{number}</p>
                        <button className={style.contacts__button} type='button' onClick={() => onDeliteContact(id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </section>
        
    );
}