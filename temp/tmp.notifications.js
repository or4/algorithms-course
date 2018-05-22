// https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559

// actions.js
function showNotification(id, text) {
  return { type: 'SHOW_NOTIFICATION', id, text }
}
function hideNotification(id) {
  return { type: 'HIDE_NOTIFICATION', id }
}

let nextNotificationId = 0
export function showNotificationWithTimeout(dispatch, text) {
  const id = nextNotificationId++
  dispatch(showNotification(id, text))

  setTimeout(() => {
    dispatch(hideNotification(id))
  }, 5000)
}

// component.js
showNotificationWithTimeout(this.props.dispatch, 'You just logged in.')

// otherComponent.js
showNotificationWithTimeout(this.props.dispatch, 'You just logged out.')





////////////////////////

function* toastSaga() {

  // Some config constants
  const MaxToasts = 3;
  const ToastDisplayTime = 4000;


  // Local generator state: you can put this state in Redux store
  // if it's really important to you, in my case it's not really
  let pendingToasts = []; // A queue of toasts waiting to be displayed
  let activeToasts = []; // Toasts currently displayed


  // Trigger the display of a toast for 4 seconds
  function* displayToast(toast) {
    if (activeToasts.length >= MaxToasts) {
      throw new Error("can't display more than " + MaxToasts + " at the same time");
    }
    activeToasts = [...activeToasts, toast]; // Add to active toasts
    yield put(events.toastDisplayed(toast)); // Display the toast (put means dispatch)
    yield call(delay, ToastDisplayTime); // Wait 4 seconds
    yield put(events.toastHidden(toast)); // Hide the toast
    activeToasts = _.without(activeToasts, toast); // Remove from active toasts
  }

  // Everytime we receive a toast display request, we put that request in the queue
  function* toastRequestsWatcher() {
    while (true) {
      // Take means the saga will block until TOAST_DISPLAY_REQUESTED action is dispatched
      const event = yield take(Names.TOAST_DISPLAY_REQUESTED);
      const newToast = event.data.toastData;
      pendingToasts = [...pendingToasts, newToast];
    }
  }


  // We try to read the queued toasts periodically and display a toast if it's a good time to do so...
  function* toastScheduler() {
    while (true) {
      const canDisplayToast = activeToasts.length < MaxToasts && pendingToasts.length > 0;
      if (canDisplayToast) {
        // We display the first pending toast of the queue
        const [firstToast, ...remainingToasts] = pendingToasts;
        pendingToasts = remainingToasts;
        // Fork means we are creating a subprocess that will handle the display of a single toast
        yield fork(displayToast, firstToast);
        // Add little delay so that 2 concurrent toast requests aren't display at the same time
        yield call(delay, 300);
      }
      else {
        yield call(delay, 50);
      }
    }
  }

  // This toast saga is a composition of 2 smaller "sub-sagas" (we could also have used fork/spawn effects here, the difference is quite subtile: it depends if you want toastSaga to block)
  yield [
    call(toastRequestsWatcher),
    call(toastScheduler)
  ]
}

/////
const reducer = (state = [], event) => {
  switch (event.name) {
    case Names.TOAST_DISPLAYED:
      return [...state, event.data.toastData];
    case Names.TOAST_HIDDEN:
      return _.without(state, event.data.toastData);
    default:
      return state;
  }
};