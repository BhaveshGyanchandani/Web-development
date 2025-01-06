import { useEffect, useRef, useState } from 'react';
import { sortPlacesByDistance } from './loc.js';
import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Open the modal to confirm removal of a place
  function handleStartRemovePlace(id) {
    modal.current.open();
    selectedPlace.current = id;
  }

  // Close the modal without removing a place
  function handleStopRemovePlace() {
    modal.current.close();
  }

  // Select a place and save it in the state and localStorage
  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem('selectedPlace')) || [];
    if (!storedIds.includes(id)) {
      localStorage.setItem('selectedPlace', JSON.stringify([id, ...storedIds]));
    }
  }

  // Remove a place from the state and close the modal
  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );

    const storedIds = JSON.parse(localStorage.getItem('selectedPlace')) || [];
    const updatedIds = storedIds.filter((storedId) => storedId !== selectedPlace.current);
    localStorage.setItem('selectedPlace', JSON.stringify(updatedIds));

    modal.current.close();


  }

  // Sync picked places with localStorage on component mount
  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem('selectedPlace')) || [];
    const storedPlaces = storedIds
      .map((id) => AVAILABLE_PLACES.find((place) => place.id === id))
      .filter(Boolean);
    setPickedPlaces(storedPlaces);
  }, []);

  // Fetch geolocation and sort places by distance
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const sortedPlaces = sortPlacesByDistance(
          AVAILABLE_PLACES,
          position.coords.latitude,
          position.coords.longitude
        );
        setAvailablePlaces(sortedPlaces);
        setIsLoading(false);
      },
      (error) => {
        console.error("Error fetching location:", error);
        switch (error.code) {
          case 1:
            alert("Location access denied. Please enable location services.");
            break;
          case 2:
            alert("Location unavailable. Ensure you are in an area with good signal.");
            break;
          case 3:
            alert("Location request timed out. Please try again.");
            break;
          default:
            alert("An unknown error occurred while fetching location.");
        }
        setAvailablePlaces(AVAILABLE_PLACES); // Show places without sorting
        setIsLoading(false);
      }
    );
  }, []);

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
          places={availablePlaces}
          onSelectPlace={handleSelectPlace}
          fallbackText={isLoading ? "Fetching location..." : "Sorting places by distance...."}
        />
      </main>
    </>
  );
}

export default App;
