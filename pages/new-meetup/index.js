import Layout from '../../components/layout/Layout';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage () {
  function addMeetupFHandler(enteredMeetUpData) {
    console.log(enteredMeetUpData)
  }

  return<Layout><NewMeetupForm onAddMeetup={addMeetupFHandler} /></Layout>
}

export default NewMeetupPage;
