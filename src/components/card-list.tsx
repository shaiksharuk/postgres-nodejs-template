type CardListProps = {
    items: Array<Item>

}
export type Item = {
    message : string;
    id : number;
}

export function Card({ item }: { item: Item }) {
    return (
        <div>
            id: {item.id}
            <br/>
            message: {item.message}
        </div>
    )
}

export default function CardList(props: CardListProps) {

    const items = props.items.map(p => <Card item={p} />)

    return (
        <div>
            <h1>Messages: </h1>
            {
                items
            }
        </div>
    )

}