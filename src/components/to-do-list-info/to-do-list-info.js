import './to-do-list-info.css';

const Info = ({numberOfCases, numberOfRise}) => {
    return (
        <div id="info">
            <h1>Облік справ</h1>
            <h2>Загальна кількість справ: {numberOfCases}</h2>
            <h2>Кількість важливих справ: {numberOfRise}</h2>
        </div>
    )
}

export default Info;