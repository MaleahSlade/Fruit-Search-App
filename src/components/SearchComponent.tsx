import { useState, useEffect } from 'react';
import { FRUITS } from "../data/fruits";
import Fruits from "./Fruits";

export default function SearchComponent() {
    const [query, setQuery] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        console.log(input);
       let id = setTimeout(() => {
            setQuery(input);
        }, 2000);

        return() => {
              clearTimeout(id)
        }
    }, [input]);



    let fruitResults = FRUITS.filter((f) => {
        return f.includes(query);

    })


    return (
        <div>
            <h1>Fruit Search</h1>
            <input
                type="text"
                placeholder="Search for a fruit..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
          
            <Fruits fruits={query.length > 0 ? fruitResults : []} />
        </div>
    );
}


