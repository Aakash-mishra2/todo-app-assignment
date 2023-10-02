import StoreItem from './storeItem';
import './styles/listStore.css';

const allBoards = () => {

    const boards = [
        {
            id: 'c1',
            date: '23 June',
            todo: ["milk", "curd", "eggs"]
        },
        {
            id: 'c2',
            date: '25 June',
            todo: ["tomato", "spinach"]
        }
    ]

    return (

        <div>
            <Header />
            {allBoards.map((item) => (
                <StoreItem
                    id={item.id}
                    date={item.date}
                    things={item.items}
                />
            )
            )}
            <Footer />
        </div>
    )
};

export default ListStore;