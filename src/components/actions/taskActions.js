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
  
  // ----------------------------------------------------------EDU------------------------
  
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
            summary: task.summary,
            startDate: task.startDate,
            endDate: task.endDate
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
  // -----------------------------------------------EXP------------------------------------


  export const addExp = (task) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      const authorID = getState().firebase.auth.uid;
      console.log(authorID, task);
      firestore
        .collection("exp")
        .add({
          ...task,
          authorID,
          date: new Date(),
        })
        .then(() => {
          dispatch({
            type: "ADD_EXP",
            payload: task,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_EXP_ERR",
            payload: err,
          });
        });
    };
  };


  export const updateExp = (id, task) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      console.log(task);

      firestore
        .collection("exp")
        .doc(id)
        .set(
          {
            ...task,
            company: task.company,
            location: task.location,
            designation: task.designation,
            summary: task.summary,
            startDate: task.startDate,
            endDate: task.endDate
          },
          { merge: true }
        )
        .then(() => {
          dispatch({
            type: "UPDATE_EXP",
            payload: task,
          });
        })
        .catch((err) => {
          dispatch({
            type: "UPDATE_EXP_ERR",
            payload: err,
          });
        });
    };
  };

   export const removeExp = (id) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
        .collection("exp")
        .doc(id)
        .delete()
        .then(() => {
          dispatch({
            type: "REMOVE_EXP",
            payload: id,
          });
        })
        .catch((err) => {
          dispatch({
            type: "REMOVE_EXP_ERR",
            payload: err,
          });
        });
    };
  };

  // ------------------------------------------------PROJ----------------------------

  export const addProj = (task) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      const authorID = getState().firebase.auth.uid;
      console.log(authorID, task);
      firestore
        .collection("proj")
        .add({
          ...task,
          authorID,
          date: new Date(),
        })
        .then(() => {
          dispatch({
            type: "ADD_PROJ",
            payload: task,
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD_PROJ_ERR",
            payload: err,
          });
        });
    };
  };


  export const updateProj = (id, task) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      console.log(task);

      firestore
        .collection("proj")
        .doc(id)
        .set(
          {
            ...task,
            name: task.name,
            tech: task.tech,
            link: task.link,
            summary: task.summary,
            startDate: task.startDate,            
          },
          { merge: true }
        )
        .then(() => {
          dispatch({
            type: "UPDATE_PROJ",
            payload: task,
          });
        })
        .catch((err) => {
          dispatch({
            type: "UPDATE_PROJ_ERR",
            payload: err,
          });
        });
    };
  };

   export const removeProj = (id) => {
    return (dispatch, getState, { getFirebase }) => {
      const firestore = getFirebase().firestore();
      firestore
        .collection("proj")
        .doc(id)
        .delete()
        .then(() => {
          dispatch({
            type: "REMOVE_PROJ",
            payload: id,
          });
        })
        .catch((err) => {
          dispatch({
            type: "REMOVE_PROJ_ERR",
            payload: err,
          });
        });
    };
  };

  