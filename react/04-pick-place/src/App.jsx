import { useRef, useState , useEffect} from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import sortPlacesByDistance from './loc.js'
// side effects are the tasks that need to be executed in yiu rapp but dont impact the currenrt component render cycle



function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const [availablePlaces , setAvailablePlaces] = useState([]);

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition ( (position) => {
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES,position.coords.latitude ,position.coords.longitude);
  
      setAvailablePlaces(sortedPlaces);
    });

    // Because the idea behind useEffect is that this function which you pass as a first argument to useEffect will be executed by React after very important. After every component execution.
    // So, if the p starts and the app component function executes, this code here will not be executed right away. Instead, it's only after the app component function execution finished.
   }, [] );
  // useEffect takes 2 arguments , 1st one is the funciton that shou;ld wrap the side-effect code
  // 2nd argument is an array of dependencies of that array funciton


  // used to fetch users current location
  // navigator.geolocation.getCurrentPosition ( (position) => {
  //   const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES,position.coords.latitude ,position.coords.longitude);

  //   setAvailablePlaces(sortedPlaces);
  //   but it will cause to set the users cuttent locn to fetch and select the locatin againa dn aagain ....which will cause us to be in infintie loop
  //   as this component is based in usedState which will re-render this component again and again cauing an infinit e loop if locn fetch and sorting and selecting locn
  //   thats where we will use useEffect hook to solve it...
  // } )

  

  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    modal.current.close();
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    modal.current.close();
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={AVAILABLE_PLACES}
          fallbackText="sprting places by distance"
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
