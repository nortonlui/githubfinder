// Search input
const searchUser = document.getElementById('searchUser');
// Init UI
const ui = new UI();

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;
  if (userText !== '') {
    // Init GitHub
    const github = new GitHub(userText);
    // Make http call
    github.getUser().then((data) => {
      if (data.profile.message === 'Not Found') {
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
