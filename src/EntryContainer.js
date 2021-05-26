import "./index.css"
import Entry from "./Entry";

const EntryContainer = ({ entries, onCreate, onDelete }) => {
    return (
        <div className={'entry-container'}>
            {
                entries.map((entry) => (
                    <Entry
                        key={entry.word}
                        entry={entry}
                        onCreate={onCreate}
                        onDelete={onDelete}
                    />
                ))
            }
        </div>
    )
}

export default EntryContainer