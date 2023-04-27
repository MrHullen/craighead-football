// import firebase from 'firebase/app'
// // import 'firebase/auth'
// import 'firebase/firestore'

import { user } from './stores'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { doc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCieRhpuqyXT-ICRsZqV8OBcTxVvP5lWNI',
  authDomain: 'craighead-football.firebaseapp.com',
  projectId: 'craighead-football',
  storageBucket: 'craighead-football.appspot.com',
  messagingSenderId: '206545207761',
  appId: '1:206545207761:web:b9e80a208b9cae9ca220f0',
}

const app = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()
const auth = getAuth()
const db = getFirestore(app)

/* Signup
 * Logs the user into the provider with a pop-up, then
 * Updates the local user store with the details from the login, then
 * Writes the user's email to the database to create a new user.
 *
 * Sources:
 * Signin: https://firebase.google.com/docs/auth/web/google-signin#handle_the_sign-in_flow_with_the_firebase_sdk
 * Writing to database: https://firebase.google.com/docs/firestore/manage-data/add-data#add_a_document
 */
export async function signup() {
  console.log(`Signing up...`)

  console.log(`Getting login information...`)
  let loginData = await signInWithPopup(auth, provider)

  // testing
  console.log(`User ID: ${loginData.user.uid}`)
  console.log(`Email: ${loginData.user.email}`)

  console.log(`Updating local user store...`)
  user.set({
    uid: loginData.user.uid,
    email: loginData.user.email,
  })

  console.log(`Writing new user to the database...`)
  // db.collection('users').doc(loginData.user.uid).set({
  //   email: loginData.user.email,
  // })
  await setDoc(doc(db, 'players', loginData.user.uid), {
    email: loginData.user.email,
  })

  console.log(`Signup complete.`)
}

/* Login
 * Logs the user into the provider with a pop-up, then
 * Gets the user's data from the database based on the UID, then
 * Updates the local user store.
 *
 * Sources:
 * Signin: https://firebase.google.com/docs/auth/web/google-signin#handle_the_sign-in_flow_with_the_firebase_sdk
 * Reading from database: https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document
 */
export async function login(nextPage = undefined) {
  console.log(`Logging in...`)

  console.log(`Getting login information...`)
  let loginData = await auth.signInWithPopup(provider)

  console.log(`Getting user info from database...`)
  let userRef = await db.collection('users').doc(loginData.user.uid).get()

  if (userRef.exists) {
    let userData = userRef.data()

    console.log(`User found, updating local user store...`)
    user.set({
      uid: loginData.user.uid,
      ...userData,
    })
  } else {
    console.error(`LOGIN ERROR: user not found...`)
  }

  console.log(`Login complete.`)
}

/* Logout
 * Signs the user our of their provider login, then
 * unloads the user information from the local user store.
 *
 * Sources:
 * Signout: https://firebase.google.com/docs/auth/web/google-signin#next_steps
 */
export function logout() {
  console.log(`Logging out...`)

  console.log(`Logging out with provider...`)
  auth.signOut()

  console.log(`Resetting local user store...`)
  user.set({
    uid: undefined,
    email: undefined,
  })

  console.log(`Logout complete.`)
}
