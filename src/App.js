import './App.css';
import BookList from './components/BookList';
import BookContextProvider from './context/BookContext';
import ThemeContextProvider from './context/ThemeContext';
import Navbar from './components/Navbar';
import AuthContextProvider from './context/AuthContext';

const Component1 = (props) => {
  return <div>component 1{props.children}</div> // ovo sa props mora ako hocemo da ispisemo jedcnu component u drugu
}
const Component2 = () => {
  return <div>component 2</div>
}

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
         <Navbar />

      <BookContextProvider>
        {/* SVE CHILD OVDE POSTAVLJENE UNUTAR BOK CONETEX PROVIDERA MOGU DA PRISTUPE NJEGOVOM STATEu */}
        <BookList />
      </BookContextProvider>
      {/* <Component1><Component2 /></Component1> */}
        </AuthContextProvider>
      </ThemeContextProvider>
          
      
    </div>
  );
}

export default App;
