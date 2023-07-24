'use client';

import CardList, { Item } from "./card-list";
import {ChangeEventHandler, useState} from 'react';

const validate = (text: string): boolean => {
    return !!text.match(/^[0-9a-z]*$/)
}

export type HomePageProps = {
    initialItems: Item[]
}

export default function HomePage({initialItems}: HomePageProps) {

    const [userText, setUserText] = useState('');
    const [idNumber, setId] = useState(Math.max(...initialItems.map(i=>i.id))+1);

    const [items, setItems] = useState<Array<Item>>(initialItems);

    const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        const newInput = event.target.value;
        if (!validate(newInput)) {
            window.alert("Sepcial characters are not valid")
            return;
        }
        setUserText(newInput);
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
