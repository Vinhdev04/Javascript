const users = [
  { id: 1, name: "Vinh", age: 30 },
  { id: 2, name: "An", age: 25 },
  { id: 3, name: "Halen", age: 35 },
  // ...... add more users as needed
];

const comments = [
  { id: 1, userId: 1, content: "Hello" },
  { id: 2, userId: 2, content: "Completed" },
  { id: 3, userId: 3, content: "Good job" },
  // ...... add more comments as needed
];

// Step 1: Fake API to get comments
function getComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(comments);
    }, 1000);
  });
}

// Step 2: Fake API to get users by IDs
function getUsersByIds(userIDs) {
  return new Promise((resolve, reject) => {
    const result = users.filter((user) => userIDs.includes(user.id));
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
}

// Step 3: Using the functions in sequence
getComments()
  .then((comments) => {
    // Extract user IDs from comments
    const userIDs = comments.map((comment) => comment.userId);
    console.log("User IDs:", userIDs); // For debugging

    // Fetch users by IDs
    return getUsersByIds(userIDs);
  })
  .then((users) => {
    console.log("Users:", users);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
