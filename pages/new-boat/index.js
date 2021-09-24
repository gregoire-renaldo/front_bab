import Layout from '../../components/layout/Layout';
import NewBoatForm from '../../components/boats/NewBoatForm';

function NewBoatPage () {
  function addBoatFHandler(enteredBoatData) {
    // console.log(enteredBoatData)
  }

  return<Layout><NewBoatForm onAddBoat={addBoatFHandler} /></Layout>
}

export default NewBoatPage;
