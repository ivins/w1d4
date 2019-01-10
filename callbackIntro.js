function findWaldo(arr, found, notfound) {
  arr.forEach(function(item, index) {
    if (item === "Waldo"){
      found(index);
    } else {
    notfound();
    }
  });
}


function actionWhenFound(ind) {

  console.log("Found him at index " + ind + "!");
}

function actionWhenNotFound() {
  console.log("I didn't find him :(");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound, actionWhenNotFound);





// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       // console.log(i);
//       found(i);   // execute callback
//     } else {

//        notfound();
//     }
//   }