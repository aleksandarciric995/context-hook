import {createContext, useState} from 'react';


// kreiramo React context koriscenjem funkcije koje smo uvezli iz React biblioteke
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {title: `ubiti pticu rugalicu`, id: 1},
        {title: `nepodnosljiva lakoca React-a`, id: 2},
        {title: `ko je maznuo moj sir`, id: 3},
    ]);


                                // kao value mozemo proslediti i setBooks i neogranicen broj varijabli. Dve zagrade - prva da biusmo naglasili da je to JS, a drugi zato sto on ocekuje objekat. A mogli smo napisati i books : books - isto je.
    return <BookContext.Provider value={{books}}>
        {/* props.children nam omogucava da bilo koja ugnjezdena komponenta u okviru BOokContextProvidera da moze da pristupi context-u koji je provajdovan od starane BookContext-a */}
        {props.children}
    </BookContext.Provider>
};

export default BookContextProvider;