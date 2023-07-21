'use client';

import CardList, { Item } from "./card-list";
import {ChangeEventHandler, useState} from 'react';

export default function HomePage() {

    const [userText, setUserText] = useState('');
    const [idNumber, setId] = useState(0);

    const [items, setItems] = useState<Array<Item>>([]);

    const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        setUserText(event.target.value);
    }

    const onClickHandler = () => {
        const newId = idNumber+1;
        setId(newId);
        setItems([...items, {message: userText, id: idNumber}])

    }

    return (

        <div>
            <h1>Sharuk's project</h1>
            <div>
                <input type="text" value={userText} id ={idNumber.toString()} onChange = {inputChangeHandler}/><br/>
                <input type="submit" value = "upload" onClick={onClickHandler}/>
            </div>
            <br/>
            <CardList items={items}/>
        </div>
    )
}