  import db from './db'

const getPublications = () => {
  const citiesRef = db.collection("articles").where("categories", "array-contains", "Володимир Зеленський");
  citiesRef.get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        debugger;
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });


};

// const categoriesRef = db.collection("articles").where("categories", "array-contains", "Володимир Зеленський");
// citiesRef.get()
//   .then(function (querySnapshot) {
//     querySnapshot.forEach(function (doc) {
//       debugger;
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//     });
//   })
//   .catch(function (error) {
//     console.log("Error getting documents: ", error);
//   });
