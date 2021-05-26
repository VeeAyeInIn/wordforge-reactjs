import "./index.css"

const EntrySearch = () => {
    return (
        <div className={'entry-search'}>
            <input
                placeholder={'Word'}
            />
            <input
                placeholder={'Definition'}
            />
            <input
                placeholder={'Source'}
            />
            <button>
                Search...
            </button>
        </div>
    )
}

export default EntrySearch