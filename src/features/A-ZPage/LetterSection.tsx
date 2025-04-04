
type LetterProps = {
    letter: string;
    names: string[]
}

const LetterSection = ({letter, names}: LetterProps) => {
    return (
        <div> 
            <h1>{letter}</h1>
            <ul>
                {names.map((director) => (
                    <li key={director}>{director}</li>
            ))}
            </ul>

        </div>
    )
}

export default LetterSection