import "./index.css"

import { FaTimes } from "react-icons/fa"

const Entry = ({ entry, onCreate, onDelete }) => {
    return (
        <div className={'entry'}>
            <h3 className={'entry-word'}>
                {entry.word}
                <FaTimes
                    className={'entry-delete'}
                    onClick={() => onDelete(entry.word)}
                />
            </h3>
            <p className={'entry-definition'} onClick={onCreate("aaa", "bbb", "cccccc")}>
                {entry.definition}
            </p>
            <h6 className={'entry-source'}>
                <a
                    href={entry.source}
                    target={'_blank'}
                    rel={'noreferrer'}
                >
                    {entry.source}
                </a>
            </h6>
        </div>
    )
}

export default Entry