function initializeApp() {
    var config = {
        apiKey: "AIzaSyDtWjIn8OmxCmdLi2Wuq2FLtmJOHObS1-E",
        authDomain: "casinoapptest.firebaseapp.com",
        databaseURL: "https://casinoapptest.firebaseio.com",
        projectId: "casinoapptest",
        storageBucket: "casinoapptest.appspot.com",
        messagingSenderId: "139922166688"
    };
    firebase.initializeApp(config);
}

function writeToDatabase() {
    var database = firebase.database();
    database.ref('users/' + 'test').set({
        username: 'testUser',
        password: 'password',
        likes: 0
    });
}

function incrementLikes() {
    firebase.database().ref('users/test/likes').transaction(function(likes) {
       return likes + 1;
    });
}
