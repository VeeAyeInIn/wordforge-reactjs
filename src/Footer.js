import "./index.css"
import Copyright from "./Copyright";

/**
 * Generates a footer at the bottom of the document.
 *
 * @param {string|number} year - year(s) of registered copyright
 * @param {string} name - entity claiming copyright
 * @returns {JSX.Element} the generated footer element
 * @constructor
 *
 * @see Copyright pass 'year' and 'name' here
 */
const Footer = ({ year, name }) => {
    return (
        <footer className={'footer'}>
            <Copyright
                year={year}
                name={name}
            />
        </footer>
    )
}

export default Footer