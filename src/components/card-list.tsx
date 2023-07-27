import { ChangeEventHandler, useState } from "react";

const validate = (text: string): boolean => {
    return !!text.match(/^[0-9 a-z]*$/)
}

type CardListProps = {
    items: Array<Item>

}
export type Item = {
    message : string;
    id : number;
}

export function Card({ item }: { item: Item }) {

    const [userText, setUserText] = useState(item.message);

    const [isEditing, setIsEditing] = useState(false);

    const onCancelHandler = () => {
        setUserText(item.message);
        toggleOnEdit();

    }
    const toggleOnEdit = () => {
        setIsEditing(!isEditing);
    }

    const inputChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
        const newInput = event.target.value;
        if (!validate(newInput)) {
            window.alert("Sepcial characters are not valid")
            return;
        }
        setUserText(newInput);
    }

    const viewBlock = (
        <div>
            id: {item.id}
            <br/>
            message: {item.message}
            <button onClick={toggleOnEdit}>edit</button>
        </div>
    )
    const editBlock = (
        <div>
            <input type="text" value={userText} onChange={inputChangeHandler} />
            <button>update</button>
            <button onClick={onCancelHandler}>cancel</button>
        </div>
    )
    
    return isEditing ? editBlock : viewBlock;
}

export default function CardList(props: CardListProps) {

    const items = props.items.map(p => <Card item={p} />)

    return (
        <div>
            <h1>Messages: </h1>
            
            {items}
            
        </div>
    )

}
