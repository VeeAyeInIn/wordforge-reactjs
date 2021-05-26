import "./index.css";

import Header from "./Header";
import Footer from "./Footer";
import Workspace from "./Workspace";
import { useState } from "react";

/**
 * @author Connor Vann
 * @returns {JSX.Element} the generated App
 * @constructor
 */
function App() {

    const [entries, setEntries] = useState([
        {
            word: "Run",
            definition: "To go faster than a walk.",
            source: "https://www.merriam-webster.com/dictionary/run"
        },
        {
            word: "Run 2",
            definition: "To go faster than a walk.",
            source: "https://www.merriam-webster.com/dictionary/run"
        },
        {
            word: "Run 3",
            definition: "To go faster than a walk.",
            source: "https://www.merriam-webster.com/dictionary/run"
        },
        {
            word: "Run 4",
            definition: "To go faster than a walk.",
            source: "https://www.merriam-webster.com/dictionary/run"
        },
        {
            word: "Run 5",
            definition: "To go faster than a walk. To go faster than a walk. To go faster than a walk. To go faster than " +
                "a walk. To go faster than a walk. To go faster than a walk. To go faster than a walk. To go faster than " +
                "a walk. To go faster than a walk. To go faster than a walk. To go faster than a walk. To go faster than " +
                "a walk. To go faster than a walk. To go faster than a walk. To go faster than a walk. To go faster than " +
                "a walk. To go faster than a walk. To go faster than a walk. To go faster than a walk. To go faster than " +
                "a walk. To go faster than a walk. To go faster than a walk. To go faster than a walk. ",
            source: "https://www.merriam-webster.com/dictionary/run"
        }
    ])

    // const [selections, setSelections] = useState([
    //     {
    //         name: "Unique Name",
    //         entries: entries,
    //         setEntries: setEntries
    //     }
    // ])

    const createEntry = (word, definition, source) => {
        entries.push({ word: word, definition: definition, source: source })
        setEntries(entries)
    }

    const deleteEntry = (word) => {
        setEntries(entries.filter((entry) => entry.word !== word))
    }

    return (
        <div className="App vertical-flex">
            <Header />
            <Workspace
                entries={entries}
                onCreate={createEntry}
                onDelete={deleteEntry}
            />
            <Footer
                year={1999}
                name={"John Doe"}
            />
        </div>
    );
}

export default App;