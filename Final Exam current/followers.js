function followers(input) {

    let end = input.pop();
    let objFollowers = {};

    for (let element of input) {
        let [command, username, count] = element.split(': ');
        count = Number(count);

        //Добавете потребителското име към вашите записи (с 0 харесвания и 0 коментара)
        if (command === 'New follower') {
            if (!objFollowers.hasOwnProperty(username)) {
                objFollowers[username] = { like: 0, comment: 0 }
            } else {  //Ако човек с даденото потребителско име вече съществува, игнорирайте реда.
                continue;
            }
        }

        //Ако потребителското име не съществува, добавете го към вашите записи с дадения брой харесвания.
        if (command === 'Like') {
            if (!objFollowers.hasOwnProperty(username)) {
                objFollowers[username] = { like: count, comment: 0 }
            } else {  //Ако потребителското име съществува, увеличете броя на харесванията с дадения брой. 
                objFollowers[username].like += count;
            }
        }

        //Ако потребителското име не съществува, добавете го към вашите записи с 1 коментар 
        if (command === 'Comment') {
            if (!objFollowers.hasOwnProperty(username)) {
                objFollowers[username] = { like: 0, comment: 1 };
            } else {   //Ако потребителското име съществува, увеличете броя на коментарите с 1
                objFollowers[username].comment += 1;
            }
        }

        //Ако потребителското име съществува, изтрийте всички записи за него. 
        if (command === 'Blocked') {
            if (objFollowers.hasOwnProperty(username)) {
                delete objFollowers[username];
            } else {  // Ако не съществува, отпечатайте:
                console.log(`${username} doesn't exist.`);
            }
        }
    }

    let newObjFollowers = Object.entries(objFollowers);
    console.log(`${newObjFollowers.length} followers`);

    for (let element of newObjFollowers) {
        let username = element[0];
        let like = element[1].like;
        let comment = element[1].comment;

        let sumComentAndLike = comment + like;
        console.log(`${username}: ${sumComentAndLike}`);
    }
}

followers([
    "New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out"
]);
followers([
    "Like: Katy: 3",
    "Comment: Katy",
    "New follower: Bob",
    "Blocked: Bob",
    "New follower: Amy",
    "Like: Amy: 4",
    "Log out"
]);
followers([
    "Blocked: Amy",
    "Comment: Amy",
    "New follower: Amy",
    "Like: Tom: 5",
    "Like: Ellie: 5",
    "Log out"
]);

