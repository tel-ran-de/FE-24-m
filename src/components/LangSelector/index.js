

function LangSelector ({lang,setLang}) {

    return (
        <select onChange={(event) => setLang(event.target.value)}
                value={lang}>
            <option value="RU">RU</option>
            <option value="ENG">ENG</option>
        </select>
    )
}

export default LangSelector;