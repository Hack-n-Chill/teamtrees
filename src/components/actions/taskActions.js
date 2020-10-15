export const addAbout = (task) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      const authorID = getState().firebase.auth.uid;
      console.log(authorID, task);
      firestore
        .collection("about")
        .add({
          ...task,
          authorID,
          date: new Date(),
        })
        .then(() => {
          dispatch({
            type: "ADD_ABOUT",
            payload: task,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_ABOUT_ERR",
            payload: err,
          });
        });
    };
  };
  
  // export const removeTask = (task) => {
  //   return (dispatch, getState, { getFirebase }) => {
  //     const firestore = getFirebase().firestore();
  //     firestore
  //       .collection("tasks")
  //       .doc(task.id)
  //       .delete()
  //       .then(() => {
  //         dispatch({
  //           type: "REMOVE_TASK",
  //           payload: task,
  //         });
  //       })
  //       .catch((err) => {
  //         dispatch({
  //           type: "REMOVE_TASK_ERR",
  //           payload: err,
  //         });
  //       });
  //   };
  // };
  
  export const updateAbout = (task) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      console.log("hi", task);
      const newdata = {
        fullname: task.fullname,
        summary: task.summary,
      };
      firestore
        .collection("about")
        .doc(task.data[0].id)
        .set(
          {
            ...newdata,
            fullname: newdata.fullname,
            summary: newdata.summary,
          },
          { merge: true }
        )
        .then(() => {
          dispatch({
            type: "UPDATE_ABOUT",
            payload: task,
          });
        })
        .catch((err) => {
          dispatch({
            type: "UPDATE_ABOUT_ERR",
            payload: err,
          });
        });
    };
  };

  export const removeAbout = (id) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
        .collection("about")
        .doc(id)
        .delete()
        .then(() => {
          dispatch({
            type: "REMOVE_ABOUT",
            payload: id,
          });
        })
        .catch((err) => {
          dispatch({
            type: "REMOVE_ABOUT_ERR",
            payload: err,
          });
        });
    };
  };
  
  
  export const addEdu = (task) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      const authorID = getState().firebase.auth.uid;
      console.log(authorID, task);
      firestore
        .collection("edu")
        .add({
          ...task,
          authorID,
          date: new Date(),
        })
        .then(() => {
          dispatch({
            type: "ADD_EDU",
            payload: task,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_EDU_ERR",
            payload: err,
          });
        });
    };
  };
  
  export const updateEdu = (id, task) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      console.log(task);

      firestore
        .collection("edu")
        .doc(id)
        .set(
          {
            ...task,
            instiname: task.instiname,
            location: task.location,
            major: task.major,
            summary: task.summary
          },
          { merge: true }
        )
        .then(() => {
          dispatch({
            type: "UPDATE_EDU",
            payload: task,
          });
        })
        .catch((err) => {
          dispatch({
            type: "UPDATE_EDU_ERR",
            payload: err,
          });
        });
    };
  };

   export const removeEdu = (id) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
        .collection("edu")
        .doc(id)
        .delete()
        .then(() => {
          dispatch({
            type: "REMOVE_EDU",
            payload: id,
          });
        })
        .catch((err) => {
          dispatch({
            type: "REMOVE_EDU_ERR",
            payload: err,
          });
        });
    };
  };
  