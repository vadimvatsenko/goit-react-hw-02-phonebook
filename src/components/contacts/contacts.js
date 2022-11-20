

export default function Contacts({ title, contacts }) {
    console.log(contacts)
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <li key={id}>
                        <p>{name}</p>
                        <p>{number}</p>
                        <button type='button'>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
        
    );
}