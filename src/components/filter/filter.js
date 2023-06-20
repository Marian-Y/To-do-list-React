import './filter.css'

const Filter = () => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button">
                    Всі справи
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    Важливі справи
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                    Дата виконання
            </button>
        </div>
    );
}

export default Filter;