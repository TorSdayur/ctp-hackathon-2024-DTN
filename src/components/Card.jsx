export default function Card({title, desc, links, service_type, school}) {
    return (
        <div className={"card" + service_type + school}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <ul>
                {links.map((link,index) => (
                    <li><a href={link.url}>{link.title}</a></li>
                ))}
            </ul> 
        </div>
    );
}