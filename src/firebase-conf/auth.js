import { auth } from './firebase.js';

// Sign Up
export const createUserWithEmailAndPassword = (email, password) =>
	auth.createUserWithEmailAndPassword(email, password);

// Sign In
export const signInWithEmailAndPassword = (email, password) =>
	auth.signInWithEmailAndPassword(email, password);

// Sign out
export const signOutFirebase = () => auth.signOut();

// Password Reset
export const doPasswordReset = (email) =>
	auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
	auth.currentUser.updatePassword(password);
