import style from "./contacts.module.scss";

export default function Contacts({ title, contacts, onDeliteContact, children }) {
    console.log(contacts)
    return (
       
        <div className={style.contacts}>
            
            <h2>{title}</h2>
            {children}
            <div className={style.contacts__wrap}>
           
            <ul className={style.contacts__list}>
                {contacts.map(({ id, name, number }) => (
                    <li key={id} className={style.contacts__item}>
                        <p>{name}</p>
                        <p>{number}</p>
                        <button
                            className={style.contacts__button}
                            type='button'
                            onClick={() => onDeliteContact(id)}>
                            Remove
                        </button>
                    </li>
                ))}
                </ul>
                 </div>
                </div>
             
        
        
    );
}