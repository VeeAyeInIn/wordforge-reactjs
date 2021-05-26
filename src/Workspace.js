import "./index.css"

import EntrySelection from "./EntrySelection";
import EntrySearch from "./EntrySearch";
import EntryContainer from "./EntryContainer";
import EntryInput from "./EntryInput";

const Workspace = ({ entries, onCreate, onDelete }) => {
    return (
        <div className={'workspace horizontal-flex vertical-flex'}>
            <EntrySelection />
            <div className={'workspace'}>
                <EntrySearch />
                <div className={'workspace horizontal-flex'}>
                    <EntryContainer
                        entries={entries}
                        onCreate={onCreate}
                        onDelete={onDelete}
                    />
                    <EntryInput
                        onCreate={onCreate}
                    />
                </div>
            </div>
        </div>
    )
}

export default Workspace